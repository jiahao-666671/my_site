# 共享单车订单时间序列预测

使用ARIMA模型对共享单车订单进行时间序列预测。

## 功能特性

- 生成模拟的共享单车订单数据
- 数据可视化与趋势分析
- ARIMA模型训练与预测
- 模型性能评估（MAE、RMSE）

## 安装依赖

```bash
pip install -r requirements.txt
```

## 运行项目

```bash
python main.py
```

## 输出文件

- `bike_orders.csv` - 生成的订单数据
- `time_series_plot.png` - 时间序列趋势图
- `predictions_plot.png` - 预测结果对比图
