#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Streamlit+SQLite销售数据仪表板
支持多维度筛选、可视化图表和Excel导出
"""

import streamlit as st
import pandas as pd
import numpy as np
import sqlite3
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import io

# 设置页面配置
st.set_page_config(
    page_title="销售数据仪表板",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# 中文标题设置
st.title("📊 销售数据管理与分析系统")


def init_database():
    """
    初始化数据库，创建表并插入模拟数据
    """
    conn = sqlite3.connect('sales.db')
    cursor = conn.cursor()
    
    # 创建销售数据表
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            product TEXT NOT NULL,
            category TEXT NOT NULL,
            region TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            unit_price REAL NOT NULL,
            total_amount REAL NOT NULL,
            customer_name TEXT,
            payment_method TEXT
        )
    ''')
    
    # 检查是否已有数据
    cursor.execute("SELECT COUNT(*) FROM sales")
    count = cursor.fetchone()[0]
    
    if count == 0:
        print("正在生成模拟销售数据...")
        generate_mock_data(conn, cursor)
    
    conn.commit()
    conn.close()


def generate_mock_data(conn, cursor):
    """
    生成模拟销售数据
    """
    products = ['智能手机', '笔记本电脑', '平板电脑', '智能手表', '无线耳机', 
                '蓝牙音箱', '移动电源', '充电器', '数据线', '保护壳']
    categories = ['手机', '电脑', '配件', '穿戴设备']
    regions = ['华东', '华南', '华北', '华中', '西南', '西北', '东北']
    payment_methods = ['支付宝', '微信支付', '银行卡', '现金']
    customer_names = ['张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十',
                     '钱十一', '陈十二', '刘十三', '杨十四', '黄十五', '朱十六']
    
    # 生成过去180天的数据
    start_date = datetime.now() - timedelta(days=180)
    np.random.seed(42)
    
    data = []
    for _ in range(2000):  # 生成2000条记录
        date = start_date + timedelta(days=np.random.randint(0, 180))
        product = np.random.choice(products)
        category = np.random.choice(categories)
        region = np.random.choice(regions)
        quantity = np.random.randint(1, 10)
        unit_price = np.random.randint(50, 5000)
        total_amount = quantity * unit_price
        customer_name = np.random.choice(customer_names)
        payment_method = np.random.choice(payment_methods)
        
        data.append((
            date.strftime('%Y-%m-%d'),
            product,
            category,
            region,
            quantity,
            unit_price,
            total_amount,
            customer_name,
            payment_method
        ))
    
    # 批量插入数据
    cursor.executemany('''
        INSERT INTO sales (date, product, category, region, quantity, unit_price, total_amount, customer_name, payment_method)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', data)
    
    print(f"已生成 {len(data)} 条销售数据")


def load_data():
    """
    从SQLite数据库加载数据
    """
    conn = sqlite3.connect('sales.db')
    query = "SELECT * FROM sales"
    df = pd.read_sql(query, conn)
    conn.close()
    
    # 将date列转换为datetime类型
    df['date'] = pd.to_datetime(df['date'])
    return df


def filter_data(df, start_date, end_date, regions, categories, products):
    """
    根据条件筛选数据
    """
    filtered_df = df.copy()
    
    # 日期筛选
    if start_date and end_date:
        filtered_df = filtered_df[
            (filtered_df['date'] >= pd.to_datetime(start_date)) &
            (filtered_df['date'] <= pd.to_datetime(end_date))
        ]
    
    # 区域筛选
    if regions:
        filtered_df = filtered_df[filtered_df['region'].isin(regions)]
    
    # 类别筛选
    if categories:
        filtered_df = filtered_df[filtered_df['category'].isin(categories)]
    
    # 产品筛选
    if products:
        filtered_df = filtered_df[filtered_df['product'].isin(products)]
    
    return filtered_df


def display_metrics(df):
    """
    显示关键指标卡片
    """
    col1, col2, col3, col4 = st.columns(4)
    
    total_sales = df['total_amount'].sum()
    total_quantity = df['quantity'].sum()
    avg_order_value = df['total_amount'].mean()
    unique_customers = df['customer_name'].nunique()
    
    with col1:
        st.metric("总销售额", f"¥{total_sales:,.2f}")
    
    with col2:
        st.metric("总销量", f"{total_quantity:,} 件")
    
    with col3:
        st.metric("平均订单金额", f"¥{avg_order_value:,.2f}")
    
    with col4:
        st.metric("客户数", f"{unique_customers} 人")


def display_charts(df):
    """
    显示各类可视化图表
    """
    col1, col2 = st.columns(2)
    
    # 1. 销售趋势图
    with col1:
        st.subheader("销售趋势")
        df_sorted = df.sort_values('date')
        df_sorted['month'] = df_sorted['date'].dt.to_period('M')
        monthly_sales = df_sorted.groupby('month')['total_amount'].sum().reset_index()
        monthly_sales['month'] = monthly_sales['month'].astype(str)
        
        fig = px.line(monthly_sales, x='month', y='total_amount', 
                     title='月度销售额趋势', markers=True)
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)
    
    # 2. 区域销售额占比
    with col2:
        st.subheader("区域销售占比")
        region_sales = df.groupby('region')['total_amount'].sum().sort_values(ascending=False).reset_index()
        
        fig = px.pie(region_sales, values='total_amount', names='region',
                    title='各区域销售额占比')
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)
    
    col3, col4 = st.columns(2)
    
    # 3. 产品类别销售
    with col3:
        st.subheader("类别销售分析")
        category_sales = df.groupby('category')['total_amount'].sum().sort_values(ascending=False).reset_index()
        
        fig = px.bar(category_sales, x='category', y='total_amount',
                    title='各类别销售额', color='category')
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)
    
    # 4. 支付方式分布
    with col4:
        st.subheader("支付方式分布")
        payment_dist = df.groupby('payment_method')['total_amount'].sum().reset_index()
        
        fig = px.bar(payment_dist, x='payment_method', y='total_amount',
                    title='各支付方式销售额', color='payment_method')
        fig.update_layout(height=350)
        st.plotly_chart(fig, use_container_width=True)
    
    # 5. 热销产品TOP10
    st.subheader("热销产品TOP10")
    top_products = df.groupby('product')['total_amount'].sum().sort_values(ascending=False).head(10).reset_index()
    
    fig = px.bar(top_products, x='product', y='total_amount',
                title='销售额TOP10产品', color='product', orientation='v')
    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def export_to_excel(df):
    """
    导出数据到Excel
    """
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='销售数据')
    return output.getvalue()


def main():
    """
    主函数
    """
    # 初始化数据库
    init_database()
    
    # 加载数据
    df = load_data()
    
    # 侧边栏筛选
    st.sidebar.header("🔍 数据筛选")
    
    # 日期范围
    min_date = df['date'].min().date()
    max_date = df['date'].max().date()
    start_date = st.sidebar.date_input("开始日期", min_date, min_value=min_date, max_value=max_date)
    end_date = st.sidebar.date_input("结束日期", max_date, min_value=min_date, max_value=max_date)
    
    # 区域筛选
    regions = st.sidebar.multiselect(
        "选择区域",
        options=sorted(df['region'].unique()),
        default=[]
    )
    
    # 类别筛选
    categories = st.sidebar.multiselect(
        "选择产品类别",
        options=sorted(df['category'].unique()),
        default=[]
    )
    
    # 产品筛选
    products = st.sidebar.multiselect(
        "选择产品",
        options=sorted(df['product'].unique()),
        default=[]
    )
    
    # 筛选数据
    filtered_df = filter_data(df, start_date, end_date, regions, categories, products)
    
    # 显示指标
    st.header("📈 核心指标")
    display_metrics(filtered_df)
    
    st.divider()
    
    # 显示图表
    st.header("📊 数据可视化")
    display_charts(filtered_df)
    
    st.divider()
    
    # 数据表格
    st.header("📋 详细数据")
    
    # 导出按钮
    excel_data = export_to_excel(filtered_df)
    st.download_button(
        label="📥 导出Excel",
        data=excel_data,
        file_name=f"销售数据_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx",
        mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    
    # 显示数据表格
    st.dataframe(filtered_df, use_container_width=True)


if __name__ == "__main__":
    main()
