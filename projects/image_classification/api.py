#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FastAPI后端 - 图像分类预测接口
"""

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import os

app = FastAPI(title="MNIST图像分类API", description="手写数字识别接口")

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 全局变量存储模型
model = None


def load_trained_model():
    """
    加载训练好的模型
    """
    global model
    model_path = "mnist_model.h5"
    
    if os.path.exists(model_path):
        model = load_model(model_path)
        print(f"模型已加载: {model_path}")
    else:
        print(f"警告: 模型文件 {model_path} 不存在，请先运行 train_model.py")
        # 创建一个简单的测试模型
        create_dummy_model()


def create_dummy_model():
    """
    创建一个简单的测试模型（用于演示）
    """
    global model
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPooling2D, Dropout
    
    model = Sequential([
        Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(28, 28, 1)),
        MaxPooling2D(pool_size=(2, 2)),
        Conv2D(64, kernel_size=(3, 3), activation='relu'),
        MaxPooling2D(pool_size=(2, 2)),
        Dropout(0.25),
        Flatten(),
        Dense(128, activation='relu'),
        Dropout(0.5),
        Dense(10, activation='softmax')
    ])
    
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    print("已创建临时模型用于演示")


def preprocess_image(img_data):
    """
    预处理图像
    """
    # 打开图像
    img = Image.open(io.BytesIO(img_data)).convert('L')  # 转为灰度图
    
    # 调整大小为28x28
    img = img.resize((28, 28), Image.Resampling.LANCZOS)
    
    # 转换为数组
    img_array = image.img_to_array(img)
    
    # 归一化
    img_array = img_array / 255.0
    
    # 重塑为 (1, 28, 28, 1)
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array


@app.on_event("startup")
async def startup_event():
    """
    应用启动时加载模型
    """
    load_trained_model()


@app.get("/")
async def root():
    """
    根路径
    """
    return {
        "message": "MNIST图像分类API",
        "version": "1.0.0",
        "endpoints": {
            "predict": "/predict/",
            "health": "/health/"
        }
    }


@app.get("/health/")
async def health_check():
    """
    健康检查
    """
    return {"status": "healthy", "model_loaded": model is not None}


@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    """
    图像预测接口
    """
    if model is None:
        raise HTTPException(status_code=500, detail="模型未加载")
    
    # 检查文件类型
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="请上传图片文件")
    
    try:
        # 读取图像数据
        img_data = await file.read()
        
        # 预处理图像
        img_array = preprocess_image(img_data)
        
        # 预测
        predictions = model.predict(img_array)
        predicted_class = int(np.argmax(predictions[0]))
        confidence = float(predictions[0][predicted_class])
        
        # 准备所有类别的概率
        class_probabilities = {
            str(i): float(predictions[0][i])
            for i in range(10)
        }
        
        return {
            "success": True,
            "predicted_digit": predicted_class,
            "confidence": confidence,
            "all_probabilities": class_probabilities
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"预测错误: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
