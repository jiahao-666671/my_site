# 销售数据仪表板项目练习

## 练习一：数据库基础操作

### 任务
1. 学习SQLite的基本CRUD操作
2. 添加数据验证功能
3. 实现数据批量导入功能
4. 创建数据备份和恢复功能

### 提示代码
```python
import sqlite3
import pandas as pd
from datetime import datetime

# 1. 数据库连接
def get_connection():
    return sqlite3.connect('sales.db')

# 2. 新增销售记录
def add_sale(date, product, category, region, quantity, unit_price, customer_name, payment_method):
    conn = get_connection()
    cursor = conn.cursor()
    total_amount = quantity * unit_price
    cursor.execute('''
        INSERT INTO sales (date, product, category, region, quantity, unit_price, total_amount, customer_name, payment_method)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (date, product, category, region, quantity, unit_price, total_amount, customer_name, payment_method))
    conn.commit()
    conn.close()

# 3. 批量导入CSV
def import_from_csv(csv_file):
    df = pd.read_csv(csv_file)
    conn = get_connection()
    df.to_sql('sales', conn, if_exists='append', index=False)
    conn.close()

# 4. 备份数据库
def backup_database():
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    import shutil
    shutil.copy('sales.db', f'sales_backup_{timestamp}.db')
```

---

## 练习二：数据分析与统计

### 任务
1. 计算同比环比增长率
2. 进行客户细分分析（RFM模型）
3. 实现产品关联分析（Apriori算法）
4. 计算价格弹性系数

### 提示代码
```python
# 1. 同比环比计算
def calculate_growth_rates(df):
    df['year_month'] = df['date'].dt.to_period('M')
    monthly_sales = df.groupby('year_month')['total_amount'].sum()
    
    # 环比
    mom_growth = monthly_sales.pct_change() * 100
    # 同比
    yoy_growth = monthly_sales.pct_change(12) * 100
    
    return monthly_sales, mom_growth, yoy_growth

# 2. RFM分析
def rfm_analysis(df):
    now = df['date'].max()
    rfm = df.groupby('customer_name').agg({
        'date': lambda x: (now - x.max()).days,  # Recency
        'id': 'count',                          # Frequency
        'total_amount': 'sum'                   # Monetary
    }).rename(columns={
        'date': 'Recency',
        'id': 'Frequency',
        'total_amount': 'Monetary'
    })
    return rfm

# 3. 简单关联分析
def product_correlation(df):
    basket = df.groupby('id')['product'].apply(list)
    # 使用mlxtend的Apriori算法
    from mlxtend.preprocessing import TransactionEncoder
    from mlxtend.frequent_patterns import apriori, association_rules
    
    te = TransactionEncoder()
    te_ary = te.fit(basket).transform(basket)
    df_basket = pd.DataFrame(te_ary, columns=te.columns_)
    
    frequent_itemsets = apriori(df_basket, min_support=0.01, use_colnames=True)
    rules = association_rules(frequent_itemsets, metric='lift', min_threshold=1)
    return rules
```

---

## 练习三：高级可视化

### 任务
1. 实现热力图（时间 vs 区域销售）
2. 创建漏斗图（销售转化）
3. 添加地图可视化
4. 实现交互式动态图表

### 提示代码
```python
import plotly.express as px
import plotly.graph_objects as go

# 1. 热力图
def heatmap_visualization(df):
    df['day_of_week'] = df['date'].dt.day_name()
    df['hour'] = df['date'].dt.hour  # 假设有小时数据
    pivot = df.groupby(['day_of_week', 'hour'])['total_amount'].sum().unstack()
    
    fig = px.imshow(pivot, 
                    title='销售热力图',
                    labels=dict(x="小时", y="星期", color="销售额"),
                    aspect="auto")
    return fig

# 2. 漏斗图
def funnel_chart(df):
    stages = ['访问', '加购', '下单', '支付', '完成']
    values = [1000, 800, 600, 500, 450]  # 示例数据
    
    fig = go.Figure(go.Funnel(
        y=stages,
        x=values,
        textinfo="value+percent initial"))
    fig.update_layout(title='销售转化漏斗')
    return fig

# 3. 地图可视化
def map_visualization(df):
    region_coords = {
        '华东': [31.23, 121.47],
        '华南': [23.13, 113.26],
        '华北': [39.90, 116.40],
        '华中': [30.58, 114.27],
        '西南': [30.66, 104.07],
        '西北': [34.34, 108.94],
        '东北': [41.80, 123.43]
    }
    
    region_sales = df.groupby('region')['total_amount'].sum().reset_index()
    region_sales['lat'] = region_sales['region'].map(lambda x: region_coords[x][0])
    region_sales['lon'] = region_sales['region'].map(lambda x: region_coords[x][1])
    
    fig = px.scatter_mapbox(region_sales,
                           lat='lat', lon='lon',
                           size='total_amount',
                           color='total_amount',
                           hover_name='region',
                           zoom=3,
                           mapbox_style='carto-positron')
    return fig
```

---

## 练习四：预测与预警

### 任务
1. 实现销售预测功能
2. 添加库存预警系统
3. 创建异常检测机制
4. 实现智能推荐系统

### 提示代码
```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder

# 1. 销售预测
def sales_forecast(df, months=3):
    df['month'] = df['date'].dt.month
    df['year'] = df['date'].dt.year
    df['day_of_week'] = df['date'].dt.dayofweek
    
    # 特征工程
    X = df[['month', 'year', 'day_of_week', 'region', 'category']]
    y = df['total_amount']
    
    # 编码
    le = LabelEncoder()
    X['region'] = le.fit_transform(X['region'])
    X['category'] = le.fit_transform(X['category'])
    
    # 训练模型
    model = RandomForestRegressor(n_estimators=100)
    model.fit(X, y)
    
    return model

# 2. 库存预警
def inventory_alert(product_sales, threshold=10):
    recent_sales = product_sales.tail(30).mean()
    if recent_sales < threshold:
        return f"⚠️ 产品库存预警: {recent_sales:.1f} < {threshold}"
    return "库存正常"

# 3. 异常检测
def anomaly_detection(df):
    from sklearn.ensemble import IsolationForest
    
    features = df[['quantity', 'unit_price', 'total_amount']]
    model = IsolationForest(contamination=0.01)
    df['anomaly'] = model.fit_predict(features)
    
    anomalies = df[df['anomaly'] == -1]
    return anomalies
```

---

## 练习五：用户管理与权限

### 任务
1. 实现用户登录认证
2. 添加角色权限管理
3. 记录操作日志
4. 实现数据脱敏功能

### 提示代码
```python
import hashlib

# 1. 用户认证
class UserManager:
    def __init__(self):
        self.users = {
            'admin': {'password': self.hash_password('admin123'), 'role': 'admin'},
            'user': {'password': self.hash_password('user123'), 'role': 'user'}
        }
    
    def hash_password(self, password):
        return hashlib.sha256(password.encode()).hexdigest()
    
    def authenticate(self, username, password):
        if username in self.users:
            if self.users[username]['password'] == self.hash_password(password):
                return True, self.users[username]['role']
        return False, None

# 2. 操作日志
def log_operation(username, action, details):
    with open('audit.log', 'a', encoding='utf-8') as f:
        f.write(f"{datetime.now()}|{username}|{action}|{details}\n")

# 3. 数据脱敏
def mask_data(df):
    df_masked = df.copy()
    # 手机号脱敏
    if 'customer_name' in df_masked.columns:
        df_masked['customer_name'] = df_masked['customer_name'].apply(
            lambda x: x[0] + '*' * (len(x)-1) if len(x) > 1 else x
        )
    return df_masked
```

---

## 练习六：报表与自动化

### 任务
1. 自动生成日报/周报/月报
2. 实现邮件发送功能
3. 创建定时任务
4. 生成PDF格式报表

### 提示代码
```python
import schedule
import time
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

# 1. 生成日报
def generate_daily_report():
    today = datetime.now().date()
    df_today = df[df['date'].dt.date == today]
    
    report = {
        'date': today,
        'total_sales': df_today['total_amount'].sum(),
        'total_orders': len(df_today),
        'top_product': df_today.groupby('product')['total_amount'].sum().idxmax()
    }
    return report

# 2. 发送邮件
def send_email(report):
    import smtplib
    from email.mime.text import MIMEText
    
    msg = MIMEText(str(report))
    msg['Subject'] = f"销售日报 {report['date']}"
    msg['From'] = 'sender@example.com'
    msg['To'] = 'recipient@example.com'
    
    with smtplib.SMTP('smtp.example.com') as server:
        server.login('user', 'password')
        server.send_message(msg)

# 3. 定时任务
def scheduled_job():
    report = generate_daily_report()
    send_email(report)

# 每天早上9点执行
schedule.every().day.at("09:00").do(scheduled_job)

# 4. PDF报表
def generate_pdf_report(report):
    c = canvas.Canvas("sales_report.pdf", pagesize=letter)
    c.drawString(100, 750, f"销售报表 - {report['date']}")
    c.drawString(100, 730, f"总销售额: ¥{report['total_sales']:,.2f}")
    c.save()
```

---

## 练习七：性能优化

### 任务
1. 优化数据库查询性能
2. 实现数据缓存机制
3. 优化大数据量渲染
4. 添加数据分页功能

### 提示代码
```python
import functools
import time

# 1. 数据库索引优化
def create_indexes():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_date ON sales(date)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_region ON sales(region)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_product ON sales(product)')
    conn.commit()
    conn.close()

# 2. 缓存装饰器
cache = {}

def cache_result(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        key = str(args) + str(kwargs)
        if key not in cache or time.time() - cache[key]['time'] > 300:  # 5分钟过期
            cache[key] = {'result': func(*args, **kwargs), 'time': time.time()}
        return cache[key]['result']
    return wrapper

# 3. 数据分页
def paginate_data(df, page=1, page_size=100):
    start = (page - 1) * page_size
    end = start + page_size
    return df.iloc[start:end]

# 4. 懒加载
@st.cache_data(ttl=3600)
def load_large_data():
    # 只在需要时加载
    return pd.read_sql('SELECT * FROM sales', get_connection())
```

---

## 参考答案思路

### 练习一
- 使用参数化查询防止SQL注入
- 添加数据验证（日期格式、数值范围等）
- 定期自动备份数据库
- 支持多种格式导入（CSV、Excel、JSON）

### 练习二
- RFM可以用来做客户分层（重要价值、重要发展等）
- Apriori算法可以发现"购买A的人通常也购买B"
- 价格弹性帮助理解价格变化对销量的影响

### 练习三
- Plotly支持丰富的交互功能
- 可以集成ECharts或D3.js
- 地图可视化可以用Plotly Express或pyecharts

### 练习四
- 可以尝试Prophet、LSTM等时序预测方法
- 异常检测可以用Isolation Forest或OneClassSVM
- 推荐系统可以用协同过滤或基于内容的方法

### 练习五
- 可以使用JWT或OAuth2进行认证
- 权限控制可以用RBAC模型
- 敏感数据（手机号、身份证号等）需要脱敏

### 练习六
- 使用APScheduler或Celery做任务调度
- 可以用Jinja2模板生成HTML邮件
- PDF可以用ReportLab或WeasyPrint

### 练习七
- 为常用查询字段创建索引
- 使用Redis做缓存层
- Streamlit的@st.cache_data可以缓存数据加载
- 虚拟滚动或分页处理大量数据
