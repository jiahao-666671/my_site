"""
电商用户行为数据清洗与可视化项目
功能：数据清洗、转化率统计、多维度可视化分析
作者：吕仲豪
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import seaborn as sns
from datetime import datetime
import random

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False
matplotlib.use('Agg')  # 非交互式后端

def generate_mock_data(n_samples=5000):
    """
    生成模拟电商用户行为数据
    
    参数:
        n_samples: 样本数量
        
    返回:
        包含用户行为数据的DataFrame
    """
    print("正在生成模拟电商用户行为数据...")
    
    # 用户ID
    user_ids = [f'user_{i}' for i in range(1, 1001)]
    
    # 行为类型
    behavior_types = ['pv', 'fav', 'cart', 'buy']
    behavior_probs = [0.6, 0.15, 0.18, 0.07]
    
    # 商品类别
    categories = ['电子产品', '服装', '家居', '食品', '美妆', '运动', '图书', '母婴']
    
    # 商品ID
    item_ids = [f'item_{i}' for i in range(1, 501)]
    
    # 时间范围（30天）
    start_date = datetime(2024, 1, 1)
    end_date = datetime(2024, 1, 31)
    
    # 生成数据
    data = []
    for i in range(n_samples):
        # 随机时间戳
        delta_days = random.randint(0, (end_date - start_date).days)
        delta_hours = random.randint(0, 23)
        delta_minutes = random.randint(0, 59)
        timestamp = start_date + pd.Timedelta(days=delta_days, hours=delta_hours, minutes=delta_minutes)
        
        data.append({
            'user_id': random.choice(user_ids),
            'item_id': random.choice(item_ids),
            'category': random.choice(categories),
            'behavior_type': random.choices(behavior_types, weights=behavior_probs)[0],
            'timestamp': timestamp
        })
    
    df = pd.DataFrame(data)
    print(f"数据生成完成，共 {len(df)} 条记录")
    return df

def load_and_clean_data(df):
    """
    数据清洗：处理缺失值、重复值、异常值
    
    参数:
        df: 原始DataFrame
        
    返回:
        清洗后的DataFrame
    """
    print("\n===== 数据清洗开始 =====")
    
    # 1. 查看数据基本信息
    print("原始数据形状:", df.shape)
    print("\n前5行数据:")
    print(df.head())
    print("\n数据类型:")
    print(df.dtypes)
    
    # 2. 处理缺失值
    print("\n缺失值统计:")
    print(df.isnull().sum())
    
    # 3. 处理重复值
    duplicates_before = len(df)
    df = df.drop_duplicates()
    duplicates_removed = duplicates_before - len(df)
    print(f"\n移除 {duplicates_removed} 条重复记录")
    
    # 4. 处理异常值
    # 检查时间戳是否合理
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    min_timestamp = df['timestamp'].min()
    max_timestamp = df['timestamp'].max()
    print(f"\n时间范围: {min_timestamp} 到 {max_timestamp}")
    
    # 5. 拆分时间戳
    df['date'] = df['timestamp'].dt.date
    df['hour'] = df['timestamp'].dt.hour
    df['day_of_week'] = df['timestamp'].dt.dayofweek
    df['weekday'] = df['timestamp'].dt.day_name()
    
    print("\n清洗后数据形状:", df.shape)
    print("===== 数据清洗完成 =====")
    
    return df

def calculate_conversion_rate(df):
    """
    计算转化率统计
    
    参数:
        df: 清洗后的DataFrame
        
    返回:
        包含转化率信息的字典
    """
    print("\n===== 转化率统计 =====")
    
    # 统计各行为类型的数量
    behavior_stats = df['behavior_type'].value_counts()
    print("\n各行为类型数量:")
    print(behavior_stats)
    
    # 计算转化率
    total_users = df['user_id'].nunique()
    pv_users = df[df['behavior_type'] == 'pv']['user_id'].nunique()
    cart_users = df[df['behavior_type'] == 'cart']['user_id'].nunique()
    buy_users = df[df['behavior_type'] == 'buy']['user_id'].nunique()
    
    conversion_rates = {
        'PV到加购': (cart_users / pv_users * 100) if pv_users > 0 else 0,
        '加购到购买': (buy_users / cart_users * 100) if cart_users > 0 else 0,
        'PV到购买': (buy_users / pv_users * 100) if pv_users > 0 else 0
    }
    
    print(f"\n总独立用户数: {total_users}")
    print("\n各阶段转化率:")
    for stage, rate in conversion_rates.items():
        print(f"  {stage}: {rate:.2f}%")
    
    return conversion_rates

def plot_behavior_distribution(df):
    """
    绘制行为类型占比图
    
    参数:
        df: 清洗后的DataFrame
    """
    print("\n绘制行为类型占比图...")
    
    behavior_counts = df['behavior_type'].value_counts()
    behavior_labels = ['浏览', '收藏', '加购', '购买']
    
    plt.figure(figsize=(12, 5))
    
    # 饼图
    plt.subplot(1, 2, 1)
    colors = ['#66b3ff', '#99ff99', '#ffcc99', '#ff9999']
    plt.pie(behavior_counts, labels=behavior_labels, autopct='%1.1f%%', 
            colors=colors, startangle=90)
    plt.title('用户行为类型占比', fontsize=14, fontweight='bold')
    
    # 柱状图
    plt.subplot(1, 2, 2)
    bars = plt.bar(behavior_labels, behavior_counts, color=colors)
    plt.title('用户行为数量统计', fontsize=14, fontweight='bold')
    plt.xlabel('行为类型')
    plt.ylabel('数量')
    
    # 添加数值标签
    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2., height,
                f'{int(height)}', ha='center', va='bottom')
    
    plt.tight_layout()
    plt.savefig('/workspace/projects/ecommerce_analysis/behavior_distribution.png', dpi=300, bbox_inches='tight')
    print("行为占比图已保存: behavior_distribution.png")
    plt.close()

def plot_daily_activity(df):
    """
    绘制日活趋势图
    
    参数:
        df: 清洗后的DataFrame
    """
    print("绘制日活趋势图...")
    
    daily_data = df.groupby('date').agg({
        'user_id': 'nunique',
        'behavior_type': 'count'
    }).reset_index()
    daily_data.columns = ['日期', '日活用户数', '总行为数']
    
    plt.figure(figsize=(14, 6))
    
    # 绘制双Y轴图
    ax1 = plt.gca()
    ax2 = ax1.twinx()
    
    line1 = ax1.plot(daily_data['日期'], daily_data['日活用户数'], 
                    color='#3498db', marker='o', linewidth=2, label='日活用户数')
    line2 = ax2.plot(daily_data['日期'], daily_data['总行为数'], 
                    color='#e74c3c', marker='s', linewidth=2, label='总行为数')
    
    ax1.set_xlabel('日期', fontsize=12)
    ax1.set_ylabel('日活用户数', color='#3498db', fontsize=12)
    ax2.set_ylabel('总行为数', color='#e74c3c', fontsize=12)
    
    plt.title('日活用户数与总行为数趋势', fontsize=14, fontweight='bold')
    
    # 合并图例
    lines = line1 + line2
    labels = [l.get_label() for l in lines]
    ax1.legend(lines, labels, loc='best')
    
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('/workspace/projects/ecommerce_analysis/daily_activity.png', dpi=300, bbox_inches='tight')
    print("日活趋势图已保存: daily_activity.png")
    plt.close()

def plot_hourly_heatmap(df):
    """
    绘制时段热力图
    
    参数:
        df: 清洗后的DataFrame
    """
    print("绘制时段热力图...")
    
    # 按星期和小时聚合数据
    hour_day_data = df.groupby(['day_of_week', 'hour']).size().unstack()
    hour_day_data.columns = [f'{h:02d}:00' for h in hour_day_data.columns]
    hour_day_data.index = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    
    plt.figure(figsize=(14, 7))
    sns.heatmap(hour_day_data, cmap='YlOrRd', annot=True, fmt='.0f', 
                cbar_kws={'label': '行为数量'})
    
    plt.title('用户行为时段热力图', fontsize=14, fontweight='bold')
    plt.xlabel('小时', fontsize=12)
    plt.ylabel('星期', fontsize=12)
    
    plt.tight_layout()
    plt.savefig('/workspace/projects/ecommerce_analysis/hourly_heatmap.png', dpi=300, bbox_inches='tight')
    print("时段热力图已保存: hourly_heatmap.png")
    plt.close()

def plot_category_analysis(df):
    """
    绘制商品类别分析图
    
    参数:
        df: 清洗后的DataFrame
    """
    print("绘制商品类别分析图...")
    
    # 类别行为统计
    category_behavior = df.groupby(['category', 'behavior_type']).size().unstack().fillna(0)
    
    plt.figure(figsize=(14, 6))
    category_behavior.plot(kind='bar', stacked=True, colormap='Set3')
    
    plt.title('各商品类别用户行为分布', fontsize=14, fontweight='bold')
    plt.xlabel('商品类别', fontsize=12)
    plt.ylabel('行为数量', fontsize=12)
    plt.legend(title='行为类型', labels=['浏览', '收藏', '加购', '购买'])
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('/workspace/projects/ecommerce_analysis/category_analysis.png', dpi=300, bbox_inches='tight')
    print("商品类别分析图已保存: category_analysis.png")
    plt.close()

def main():
    """
    主函数：完整的数据清洗与可视化流程
    """
    print("="*60)
    print("电商用户行为数据清洗与可视化项目")
    print("="*60)
    
    # 1. 生成数据
    df = generate_mock_data()
    
    # 2. 数据清洗
    df_clean = load_and_clean_data(df)
    
    # 3. 转化率统计
    conversion_rates = calculate_conversion_rate(df_clean)
    
    # 4. 可视化分析
    plot_behavior_distribution(df_clean)
    plot_daily_activity(df_clean)
    plot_hourly_heatmap(df_clean)
    plot_category_analysis(df_clean)
    
    # 5. 保存清洗后的数据
    df_clean.to_csv('/workspace/projects/ecommerce_analysis/cleaned_data.csv', index=False)
    print("\n清洗后数据已保存: cleaned_data.csv")
    
    print("\n" + "="*60)
    print("项目执行完成！")
    print("="*60)
    print("\n生成的文件:")
    print("  - behavior_distribution.png: 行为占比图")
    print("  - daily_activity.png: 日活趋势图")
    print("  - hourly_heatmap.png: 时段热力图")
    print("  - category_analysis.png: 商品类别分析图")
    print("  - cleaned_data.csv: 清洗后的数据")

if __name__ == "__main__":
    main()
