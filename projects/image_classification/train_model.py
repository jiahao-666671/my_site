#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
训练MNIST手写数字识别模型
"""

import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPooling2D
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import save_model
import os


def load_and_preprocess_data():
    """
    加载并预处理MNIST数据
    """
    print("正在加载MNIST数据集...")
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    
    # 重塑数据 (28, 28, 1)
    x_train = x_train.reshape(x_train.shape[0], 28, 28, 1)
    x_test = x_test.reshape(x_test.shape[0], 28, 28, 1)
    
    # 归一化
    x_train = x_train.astype('float32') / 255
    x_test = x_test.astype('float32') / 255
    
    # one-hot编码
    y_train = to_categorical(y_train, 10)
    y_test = to_categorical(y_test, 10)
    
    print(f"训练集: {x_train.shape[0]} 张图片")
    print(f"测试集: {x_test.shape[0]} 张图片")
    
    return (x_train, y_train), (x_test, y_test)


def build_model():
    """
    构建CNN模型
    """
    model = Sequential([
        # 第一个卷积层
        Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(28, 28, 1)),
        MaxPooling2D(pool_size=(2, 2)),
        
        # 第二个卷积层
        Conv2D(64, kernel_size=(3, 3), activation='relu'),
        MaxPooling2D(pool_size=(2, 2)),
        
        # Dropout防止过拟合
        Dropout(0.25),
        
        # 展平层
        Flatten(),
        
        # 全连接层
        Dense(128, activation='relu'),
        Dropout(0.5),
        
        # 输出层
        Dense(10, activation='softmax')
    ])
    
    model.compile(
        loss='categorical_crossentropy',
        optimizer='adam',
        metrics=['accuracy']
    )
    
    model.summary()
    return model


def train_model(model, x_train, y_train, x_test, y_test):
    """
    训练模型
    """
    print("\n开始训练模型...")
    history = model.fit(
        x_train, y_train,
        batch_size=128,
        epochs=10,
        verbose=1,
        validation_data=(x_test, y_test)
    )
    
    return history


def evaluate_model(model, x_test, y_test):
    """
    评估模型性能
    """
    score = model.evaluate(x_test, y_test, verbose=0)
    print(f"\n测试损失: {score[0]:.4f}")
    print(f"测试准确率: {score[1]:.4f}")
    return score


def plot_training_history(history):
    """
    绘制训练历史
    """
    plt.figure(figsize=(12, 4))
    
    # 准确率
    plt.subplot(1, 2, 1)
    plt.plot(history.history['accuracy'], label='训练准确率')
    plt.plot(history.history['val_accuracy'], label='验证准确率')
    plt.title('模型准确率')
    plt.xlabel('Epoch')
    plt.ylabel('准确率')
    plt.legend()
    
    # 损失
    plt.subplot(1, 2, 2)
    plt.plot(history.history['loss'], label='训练损失')
    plt.plot(history.history['val_loss'], label='验证损失')
    plt.title('模型损失')
    plt.xlabel('Epoch')
    plt.ylabel('损失')
    plt.legend()
    
    plt.tight_layout()
    plt.savefig('training_history.png', dpi=300)
    print("\n训练历史图已保存为 training_history.png")
    plt.show()


def save_trained_model(model):
    """
    保存训练好的模型
    """
    model.save('mnist_model.h5')
    print("\n模型已保存为 mnist_model.h5")


def main():
    """
    主函数
    """
    print("="*60)
    print("MNIST手写数字识别 - 模型训练")
    print("="*60)
    
    # 1. 加载数据
    (x_train, y_train), (x_test, y_test) = load_and_preprocess_data()
    
    # 2. 构建模型
    model = build_model()
    
    # 3. 训练模型
    history = train_model(model, x_train, y_train, x_test, y_test)
    
    # 4. 评估模型
    evaluate_model(model, x_test, y_test)
    
    # 5. 绘制训练历史
    plot_training_history(history)
    
    # 6. 保存模型
    save_trained_model(model)
    
    print("\n" + "="*60)
    print("模型训练完成！")
    print("="*60)


if __name__ == "__main__":
    main()
