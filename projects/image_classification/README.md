# MNIST图像分类模型部署

完整的MNIST手写数字识别系统，包含模型训练、FastAPI后端和Streamlit前端。

## 功能特性

- CNN模型训练与评估
- FastAPI RESTful API
- Streamlit交互式前端
- Docker容器化支持

## 安装依赖

```bash
pip install -r requirements.txt
```

## 快速开始

### 1. 训练模型

```bash
python train_model.py
```

### 2. 启动FastAPI后端

```bash
python api.py
```

或使用uvicorn直接运行：
```bash
uvicorn api:app --reload --host 0.0.0.0 --port 8000
```

后端API文档: http://localhost:8000/docs

### 3. 启动Streamlit前端

在新的终端窗口中：
```bash
streamlit run app.py
```

访问前端: http://localhost:8501

## Docker部署

### 构建镜像

```bash
docker build -t mnist-classifier .
```

### 运行容器

```bash
docker run -p 8000:8000 mnist-classifier
```

## 项目结构

- `train_model.py` - 模型训练脚本
- `api.py` - FastAPI后端
- `app.py` - Streamlit前端
- `Dockerfile` - Docker配置文件
- `requirements.txt` - Python依赖
