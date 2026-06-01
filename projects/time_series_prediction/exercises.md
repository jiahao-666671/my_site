# 共享单车订单时间序列预测项目练习

## 练习一：时间序列数据探索

### 任务
1. 加载并查看时间序列数据的基本统计信息
2. 绘制时间序列图、季节性分解图
3. 分析自相关函数(ACF)和偏自相关函数(PACF)
4. 检测时间序列的平稳性（ADF检验）

### 提示代码
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.stattools import adfuller

# 1. 加载数据
df = pd.read_csv('bike_orders.csv', parse_dates=['date'], index_col='date')

# 2. 季节性分解
result = seasonal_decompose(df['orders'], model='additive', period=7)
result.plot()
plt.tight_layout()
plt.show()

# 3. ACF和PACF图
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8))
plot_acf(df['orders'], lags=30, ax=ax1)
plot_pacf(df['orders'], lags=30, ax=ax2)
plt.tight_layout()
plt.show()

# 4. ADF检验
def adf_test(series):
    result = adfuller(series)
    print(f'ADF Statistic: {result[0]}')
    print(f'p-value: {result[1]}')
    print('Critical Values:')
    for key, value in result[4].items():
        print(f'   {key}: {value}')
    return result[1] <= 0.05

is_stationary = adf_test(df['orders'])
print(f'序列是否平稳: {is_stationary}')
```

---

## 练习二：数据预处理与特征工程

### 任务
1. 处理缺失值和异常值
2. 创建时间特征（年、月、日、星期、季度等）
3. 创建滞后特征（Lag features）
4. 创建滚动窗口统计特征

### 提示代码
```python
# 1. 创建时间特征
df['year'] = df.index.year
df['month'] = df.index.month
df['day'] = df.index.day
df['dayofweek'] = df.index.dayofweek
df['quarter'] = df.index.quarter
df['is_weekend'] = (df.index.dayofweek >= 5).astype(int)

# 2. 创建滞后特征
for i in range(1, 8):
    df[f'lag_{i}'] = df['orders'].shift(i)

# 3. 滚动窗口特征
df['rolling_mean_7'] = df['orders'].rolling(window=7).mean()
df['rolling_std_7'] = df['orders'].rolling(window=7).std()
df['rolling_mean_30'] = df['orders'].rolling(window=30).mean()

# 4. 指数加权移动平均
df['ewm_7'] = df['orders'].ewm(span=7).mean()

# 5. 处理缺失值
df = df.dropna()
```

---

## 练习三：ARIMA模型参数优化

### 任务
1. 使用网格搜索寻找最优的(p, d, q)参数
2. 尝试不同的季节差分阶数
3. 使用AIC/BIC准则选择模型
4. 对比不同参数组合的预测效果

### 提示代码
```python
from statsmodels.tsa.arima.model import ARIMA
import itertools

# 网格搜索
p = d = q = range(0, 3)
pdq = list(itertools.product(p, d, q))

best_aic = float('inf')
best_order = None

for order in pdq:
    try:
        model = ARIMA(train_data['orders'], order=order)
        results = model.fit()
        if results.aic < best_aic:
            best_aic = results.aic
            best_order = order
        print(f'ARIMA{order} - AIC:{results.aic:.2f}')
    except:
        continue

print(f'最佳参数: ARIMA{best_order}, AIC: {best_aic:.2f}')
```

---

## 练习四：其他时间序列模型

### 任务
1. 尝试SARIMA模型（考虑季节性）
2. 使用 Prophet 模型
3. 尝试指数平滑方法（ETS）
4. 使用机器学习方法（XGBoost、LightGBM）

### 提示代码
```python
from statsmodels.tsa.statespace.sarimax import SARIMAX
from prophet import Prophet
from statsmodels.tsa.holtwinters import ExponentialSmoothing
import xgboost as xgb

# 1. SARIMA模型
sarima_model = SARIMAX(train_data['orders'], 
                       order=(1,1,1), 
                       seasonal_order=(1,1,1,7))
sarima_results = sarima_model.fit()

# 2. Prophet模型
prophet_df = train_data.reset_index().rename(columns={'date': 'ds', 'orders': 'y'})
prophet_model = Prophet(yearly_seasonality=True, weekly_seasonality=True)
prophet_model.fit(prophet_df)

# 3. 指数平滑
ets_model = ExponentialSmoothing(train_data['orders'], 
                                 seasonal='add', 
                                 seasonal_periods=7)
ets_results = ets_model.fit()

# 4. XGBoost
X_train = train_data[['lag_1', 'lag_2', 'lag_3', 'dayofweek', 'is_weekend']]
y_train = train_data['orders']
xgb_model = xgb.XGBRegressor(n_estimators=100)
xgb_model.fit(X_train, y_train)
```

---

## 练习五：模型评估与诊断

### 任务
1. 计算多种评估指标（MAE、RMSE、MAPE、MASE）
2. 绘制残差分析图
3. 进行预测区间估计
4. 对比不同模型的性能

### 提示代码
```python
import numpy as np
from sklearn.metrics import mean_absolute_percentage_error

# 1. 计算评估指标
def calculate_metrics(y_true, y_pred):
    mae = np.mean(np.abs(y_true - y_pred))
    rmse = np.sqrt(np.mean((y_true - y_pred)**2))
    mape = mean_absolute_percentage_error(y_true, y_pred) * 100
    return {'MAE': mae, 'RMSE': rmse, 'MAPE': mape}

# 2. 残差分析
residuals = test_data['orders'] - predictions
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4))
ax1.plot(residuals)
ax1.set_title('残差图')
ax2.hist(residuals, bins=20)
ax2.set_title('残差分布')
plt.tight_layout()
plt.show()

# 3. 预测区间
forecast = model_fit.get_forecast(steps=len(test_data))
conf_int = forecast.conf_int()
```

---

## 练习六：多步预测与滚动预测

### 任务
1. 实现滚动预测策略
2. 对比直接预测与滚动预测的效果
3. 进行长期预测（如未来30天）
4. 可视化预测结果与不确定性

### 提示代码
```python
# 滚动预测
def rolling_forecast(train, test, order):
    history = list(train['orders'])
    predictions = []
    
    for t in range(len(test)):
        model = ARIMA(history, order=order)
        model_fit = model.fit()
        yhat = model_fit.forecast()[0]
        predictions.append(yhat)
        history.append(test['orders'].iloc[t])
    
    return predictions

# 执行滚动预测
rolling_preds = rolling_forecast(train_data, test_data, (1,1,1))
```

---

## 练习七：模型部署与应用

### 任务
1. 创建实时预测API
2. 构建可视化仪表板
3. 实现自动模型重训练
4. 添加异常检测功能

### 提示代码
```python
from fastapi import FastAPI
import joblib
from datetime import datetime, timedelta

app = FastAPI()

# 加载模型
model = joblib.load('arima_model.pkl')

@app.get("/predict")
def predict_future(days: int = 7):
    forecast = model.get_forecast(steps=days)
    pred_values = forecast.predicted_mean.tolist()
    conf_int = forecast.conf_int().values.tolist()
    
    dates = [datetime.now() + timedelta(days=i+1) for i in range(days)]
    
    return {
        'dates': [d.strftime('%Y-%m-%d') for d in dates],
        'predictions': pred_values,
        'confidence_intervals': conf_int
    }
```

---

## 参考答案思路

### 练习一
- 使用rolling窗口查看趋势
- 分解为趋势、季节性、残差三个成分
- ADF检验p值小于0.05认为序列平稳

### 练习二
- 滞后特征通常取7天、14天、30天
- 滚动窗口可以尝试7天、14天、30天
- 可以添加节假日特征

### 练习三
- 可以使用pmdarima的auto_arima自动寻找参数
- 考虑季节性参数(P, D, Q, s)
- AIC越小越好，但要防止过拟合

### 练习四
- Prophet适合有明显节假日效应的数据
- XGBoost可以很好地处理非线性关系
- 可以使用集成方法组合多个模型

### 练习五
- MAPE在数据接近0时会有问题，可以用MASE替代
- 残差应该是白噪声（无自相关、均值为0）
- 预测区间可以显示模型的不确定性

### 练习六
- 滚动预测通常比直接预测更准确
- 但计算成本更高
- 可以用部分数据更新模型而不是完全重训

### 练习七
- 使用Streamlit或Dash构建仪表板
- 设置定时任务自动重训练模型
- 可以用3σ原则或孤立森林检测异常
