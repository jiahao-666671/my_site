# Python数据分析项目设计

这是一个完整的Python数据分析项目设计集合，包含6个从基础到高级的实战项目。

## 项目列表

### 1. 电商用户行为数据清洗与可视化
- **目录**: ecommerce_analysis/
- **主要功能**: 使用Pandas进行数据清洗，Matplotlib和Seaborn可视化
- **学习重点**:
  - 缺失值、重复值、异常值处理
  - 时间戳拆分与转化率统计
  - 用户行为分析与可视化

### 2. 影评情感分析NLP项目
- **目录**: sentiment_analysis/
- **主要功能**: 文本预处理、TF-IDF向量化、情感分类
- **学习重点**:
  - 中文分词与停用词处理
  - TF-IDF特征提取
  - 逻辑回归模型训练与评估

### 3. 共享单车订单时间序列预测
- **目录**: time_series_prediction/
- **主要功能**: ARIMA模型时间序列预测
- **学习重点**:
  - 趋势分析与季节性分解
  - ARIMA模型参数优化
  - 预测评估指标计算

### 4. Streamlit+SQLite销售数据仪表板
- **目录**: sales_dashboard/
- **主要功能**: 数据库设计、交互式仪表板开发
- **学习重点**:
  - SQLite数据库创建与查询
  - Streamlit组件使用
  - Plotly交互式图表

### 5. LangChain本地知识库问答机器人
- **目录**: qa_bot/
- **主要功能**: RAG应用开发、向量数据库使用
- **学习重点**:
  - 文档加载与文本分块
  - Chroma向量存储
  - LangChain问答链构建

### 6. 图像分类模型部署
- **目录**: image_classification/
- **主要功能**: CNN模型训练、API开发、容器化部署
- **学习重点**:
  - TensorFlow/Keras模型构建
  - FastAPI预测接口开发
  - Docker容器化部署

## 运行项目

每个项目目录下都有对应的Python源代码文件。运行方式：

```bash
# 数据分析项目
cd ecommerce_analysis
python main.py

# NLP项目
cd sentiment_analysis
python main.py

# 时间序列项目
cd time_series_prediction
python main.py

# 仪表板项目
cd sales_dashboard
streamlit run app.py

# 问答机器人
cd qa_bot
streamlit run app.py

# 图像分类
cd image_classification
python train_model.py
```

## 技术栈

- **数据处理**: Pandas, NumPy
- **可视化**: Matplotlib, Seaborn, Plotly
- **机器学习**: Scikit-learn, TensorFlow
- **NLP**: NLTK, Transformers
- **时间序列**: Statsmodels, Prophet
- **应用框架**: Streamlit, FastAPI
- **数据库**: SQLite
- **向量库**: Chroma
- **部署**: Docker

## 作者

吕仲豪

## 许可证

MIT License
