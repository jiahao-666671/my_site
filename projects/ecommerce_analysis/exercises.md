# 电商用户行为数据清洗与可视化 - 练习题

## 项目简介
本项目使用Pandas进行电商用户行为数据分析，包括数据清洗、转化率统计和可视化。

---

## 基础练习题

### 基础级练习 1: 数据加载与基础统计

**题目：**
1. 使用Pandas加载数据集中加载生成的模拟数据
2. 查看数据的基本信息（行数、列数、数据类型）
3. 统计每个用户的行为次数

**参考代码：**
```python
import pandas as pd

df = pd.read_csv('cleaned_data.csv')
print("数据形状:", df.shape)
print("\n数据类型:\n", df.dtypes)
print("\n用户行为统计:\n", df['user_id'].value_counts())
```

---

### 练习 2: 数据清洗实战

**题目：**
1. 检查数据集中是否有缺失值
2. 查找并删除重复记录
3. 时间戳格式转换

**提示代码：**
```python
# 检查缺失值
print(df.isnull().sum())

# 删除重复
df_clean = df.drop_duplicates()

# 时间转换
df_clean['datetime'] = pd.to_datetime(df_clean['timestamp'])
```

---

### 练习 3: 用户行为分析

**题目：**
1. 统计各类型行为次数
2. 计算用户转化率（购买用户
3. 找出Top 10个商品

**参考思路：**
- 使用 `groupby` 和 `value_counts`

---

## 中级练习

### 练习 4: 时间序列分析

**题目：**
1. 按天统计用户活跃情况
2. 画出趋势图
3. 找出用户活跃的时间段

**示图：**
```python
# 按天统计
df['date'] = df['datetime'].dt.date
daily_active = df.groupby('date')['user_id'].nunique()

# 画图
import matplotlib.pyplot as plt
daily_active.plot(figsize=(12, 6))
```

---

### 练习 5: 用户分

**题目：**
1. 分析不同商品类别的用户行为
2. 对比各类别转化率
3. 建议应该主推类别

---

### 练习 6: 漏斗分析

**题目：**
1. 构建用户行为漏斗
2. 计算每步转化率
3. 找出流失最严重的环节

---

## 高级练习

### 练习 7: RFM模型

**题目：**
1. 实现RFM用户分层
2. 将用户分群
3. 针对不同人群的建议

---

### 练习 8: 用户画像

**题目：**
1. 构建用户画像特征
2. 可视化用户分群
3. 描述各群特征

---

### 练习 9: A/B测试模拟

**题目：**
1. 模拟A/B测试数据
2. 分析两组差异显著性
3. 结论报告

---

## 练习解答提示

### 练习 4 解答思路

```python
import pandas as pd
import matplotlib.pyplot as plt

# 按天统计
df['date'] = df['datetime'].dt.date
daily_stats = df.groupby('date').agg({
    'user_id': 'nunique',
    'behavior_type': 'count'
})

# 画图
fig, ax1 = plt.subplots(figsize=(12, 6))
ax2 = ax1.twinx()

ax1.plot(daily_stats['user_id'], 'g-')
ax2.plot(daily_stats['behavior_type'], 'b-')
```

---

## 项目扩展建议

1. **数据加载真实电商数据
2. 添加推荐系统
3. 构建完整分析报告
4. 开发简易推荐算法

---

## 学习资源

- Pandas官方文档
- Matplotlib教程
- 数据分析实战案例
