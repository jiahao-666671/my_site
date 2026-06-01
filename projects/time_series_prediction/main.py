#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
共享单车订单时间序列预测项目
使用ARIMA模型进行预测
包含数据模拟、预处理、模型训练、预测和评估
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_error, mean_squared_error
import warnings
warnings.filterwarnings('ignore')

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False


def generate_bike_data():
    """
    生成模拟的共享单车订单数据
    返回包含时间序列的DataFrame
    """
    print("正在生成模拟共享单车订单数据...")
    
    # 创建日期范围（2024年1月1日至2024年6月30日）
    dates = pd.date_range(start='2024-01-01', end='2024-06-30', freq='D')
    n_days = len(dates)
    
    # 生成趋势、季节性和随机噪声
    np.random.seed(42)
    
    # 长期增长趋势
    trend = np.linspace(100, 500, n_days)
    
    # 周季节性（周末订单更多）
    weekly_seasonality = np.array([150, 130, 120, 110, 140, 180, 200])
    seasonality = np.tile(weekly_seasonality, n_days // 7 + 1)[:n_days]
    
    # 随机噪声
    noise = np.random.normal(0, 30, n_days)
    
    # 组合成订单数量
    orders = trend + seasonality + noise
    orders = np.maximum(orders, 50)  # 确保不低于50
    
    # 创建DataFrame
    df = pd.DataFrame({
        'date': dates,
        'orders': orders.astype(int)
    })
    df.set_index('date', inplace=True)
    
    print(f"数据生成完成，共 {n_days} 天数据")
    return df


def plot_time_series(df, title="共享单车订单时间序列"):
    """
    绘制时间序列图
    """
    plt.figure(figsize=(14, 6))
    plt.plot(df.index, df['orders'], label='实际订单', color='steelblue', linewidth=2)
    
    # 添加移动平均线
    df['MA7'] = df['orders'].rolling(window=7).mean()
    df['MA30'] = df['orders'].rolling(window=30).mean()
    plt.plot(df.index, df['MA7'], label='7天移动平均', color='orange', linestyle='--')
    plt.plot(df.index, df['MA30'], label='30天移动平均', color='green', linestyle='--')
    
    plt.title(title, fontsize=16, fontweight='bold')
    plt.xlabel('日期', fontsize=12)
    plt.ylabel('订单数量', fontsize=12)
    plt.legend(fontsize=12)
    plt.grid(alpha=0.3)
    plt.tight_layout()
    plt.savefig('/workspace/projects/time_series_prediction/time_series_plot.png', dpi=300)
    print("时间序列图已保存为 time_series_plot.png")
    plt.show()


def train_arima_model(train_data, order=(1, 1, 1)):
    """
    训练ARIMA模型
    """
    print(f"正在训练ARIMA模型 (p={order[0]}, d={order[1]}, q={order[2]})...")
    model = ARIMA(train_data['orders'], order=order)
    model_fit = model.fit()
    print("模型训练完成")
    print(model_fit.summary())
    return model_fit


def evaluate_model(y_true, y_pred):
    """
    评估模型性能
    """
    mae = mean_absolute_error(y_true, y_pred)
    rmse = np.sqrt(mean_squared_error(y_true, y_pred))
    
    print("\n" + "="*50)
    print("模型评估结果")
    print("="*50)
    print(f"MAE (平均绝对误差): {mae:.2f}")
    print(f"RMSE (均方根误差): {rmse:.2f}")
    print("="*50)
    
    return mae, rmse


def plot_predictions(train_data, test_data, predictions, title="ARIMA模型预测结果"):
    """
    绘制预测结果图
    """
    plt.figure(figsize=(14, 6))
    
    # 绘制训练数据
    plt.plot(train_data.index, train_data['orders'], label='训练数据', color='steelblue', alpha=0.7)
    
    # 绘制测试数据
    plt.plot(test_data.index, test_data['orders'], label='测试数据', color='green', linewidth=2)
    
    # 绘制预测数据
    plt.plot(test_data.index, predictions, label='预测数据', color='red', linestyle='--', linewidth=2)
    
    plt.title(title, fontsize=16, fontweight='bold')
    plt.xlabel('日期', fontsize=12)
    plt.ylabel('订单数量', fontsize=12)
    plt.legend(fontsize=12)
    plt.grid(alpha=0.3)
    plt.tight_layout()
    plt.savefig('/workspace/projects/time_series_prediction/predictions_plot.png', dpi=300)
    print("预测结果图已保存为 predictions_plot.png")
    plt.show()


def main():
    """
    主函数
    """
    print("="*60)
    print("共享单车订单时间序列预测")
    print("="*60)
    
    # 1. 生成数据
    df = generate_bike_data()
    
    # 2. 数据可视化
    plot_time_series(df)
    
    # 3. 划分训练集和测试集
    train_size = int(len(df) * 0.8)
    train_data = df[:train_size].copy()
    test_data = df[train_size:].copy()
    
    print(f"\n训练集大小: {len(train_data)} 天")
    print(f"测试集大小: {len(test_data)} 天")
    
    # 4. 训练ARIMA模型
    model_fit = train_arima_model(train_data, order=(2, 1, 2))
    
    # 5. 预测
    print(f"\n正在预测未来 {len(test_data)} 天的订单...")
    forecast = model_fit.forecast(steps=len(test_data))
    predictions = pd.Series(forecast, index=test_data.index)
    
    # 6. 评估模型
    evaluate_model(test_data['orders'], predictions)
    
    # 7. 绘制预测结果
    plot_predictions(train_data, test_data, predictions)
    
    # 8. 保存数据
    df.to_csv('/workspace/projects/time_series_prediction/bike_orders.csv')
    print("\n原始数据已保存为 bike_orders.csv")
    
    print("\n" + "="*60)
    print("项目运行完成！")
    print("="*60)


if __name__ == "__main__":
    main()
