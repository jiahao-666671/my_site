#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Streamlit前端 - MNIST图像分类应用
"""

import streamlit as st
import requests
from PIL import Image, ImageDraw
import numpy as np
import io

# 设置页面配置
st.set_page_config(
    page_title="MNIST手写数字识别",
    page_icon="🔢",
    layout="wide"
)

# API地址
API_URL = "http://localhost:8000"

# 标题
st.title("🔢 MNIST手写数字识别系统")


def create_drawing_canvas():
    """
    创建绘图区域（简单实现）
    """
    st.subheader("✏️ 绘制数字")
    st.write("在下方上传手写数字图片，或使用上传功能")
    
    # 上传图片
    uploaded_file = st.file_uploader(
        "上传一张手写数字图片 (0-9)",
        type=['png', 'jpg', 'jpeg']
    )
    
    return uploaded_file


def predict_image(image_data):
    """
    调用API进行预测
    """
    try:
        files = {"file": ("image.png", image_data, "image/png")}
        response = requests.post(f"{API_URL}/predict/", files=files)
        
        if response.status_code == 200:
            return response.json()
        else:
            st.error(f"API错误: {response.text}")
            return None
    except Exception as e:
        st.error(f"连接错误: {str(e)}")
        st.info("请确保FastAPI后端正在运行 (python api.py)")
        return None


def display_prediction(result):
    """
    显示预测结果
    """
    if result and result.get("success"):
        predicted_digit = result["predicted_digit"]
        confidence = result["confidence"]
        
        # 显示主要预测
        col1, col2 = st.columns([1, 1])
        
        with col1:
            st.metric(
                label="预测数字",
                value=str(predicted_digit),
                delta=f"置信度: {confidence:.2%}"
            )
        
        with col2:
            st.subheader("所有类别的概率")
            probabilities = result["all_probabilities"]
            
            # 绘制概率条形图
            prob_data = {
                "数字": list(probabilities.keys()),
                "概率": list(probabilities.values())
            }
            
            # 使用st.bar_chart
            chart_data = {k: [v] for k, v in probabilities.items()}
            st.bar_chart(chart_data)


def display_sample_images():
    """
    显示示例数字图片
    """
    st.divider()
    st.subheader("💡 示例图片")
    st.write("以下是一些示例数字，您可以参考：")
    
    # 创建示例数字的简单图像
    digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    cols = st.columns(5)
    
    for i, digit in enumerate(digits):
        with cols[i % 5]:
            # 创建一个简单的数字图像
            img = Image.new('L', (50, 50), color=255)
            draw = ImageDraw.Draw(img)
            draw.text((15, 10), str(digit), fill=0)
            
            # 调整大小
            img = img.resize((28, 28), Image.Resampling.LANCZOS)
            
            st.image(img, caption=f"数字 {digit}", width=50)


def check_api_status():
    """
    检查API状态
    """
    try:
        response = requests.get(f"{API_URL}/health/")
        if response.status_code == 200:
            data = response.json()
            if data.get("model_loaded"):
                st.success("✅ 后端API运行正常，模型已加载")
                return True
            else:
                st.warning("⚠️ 后端API运行，但模型未加载")
                return False
        else:
            st.error("❌ 后端API响应异常")
            return False
    except Exception as e:
        st.error("❌ 无法连接到后端API")
        st.info(f"请运行: python api.py")
        return False


def main():
    """
    主函数
    """
    # 侧边栏
    st.sidebar.header("⚙️ 系统设置")
    st.sidebar.write(f"API地址: {API_URL}")
    
    # 检查API状态
    api_ok = check_api_status()
    
    # 主内容区
    if api_ok:
        # 创建绘图区域
        uploaded_file = create_drawing_canvas()
        
        if uploaded_file is not None:
            # 显示上传的图片
            image = Image.open(uploaded_file)
            st.image(image, caption="上传的图片", width=200)
            
            # 预测按钮
            if st.button("🔍 开始识别", type="primary"):
                with st.spinner("正在识别..."):
                    # 准备图像数据
                    img_byte_arr = io.BytesIO()
                    image.save(img_byte_arr, format='PNG')
                    img_byte_arr = img_byte_arr.getvalue()
                    
                    # 调用API
                    result = predict_image(img_byte_arr)
                    
                    if result:
                        st.divider()
                        st.subheader("🎯 识别结果")
                        display_prediction(result)
        
        # 显示示例
        display_sample_images()
    
    else:
        st.divider()
        st.subheader("📋 启动步骤")
        st.write("""
        1. 首先训练模型（如果没有模型文件）:
           ```bash
           python train_model.py
           ```
        
        2. 启动FastAPI后端:
           ```bash
           python api.py
           ```
        
        3. 在新终端中启动Streamlit前端:
           ```bash
           streamlit run app.py
           ```
        """)


if __name__ == "__main__":
    main()
