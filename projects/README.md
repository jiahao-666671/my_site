# Python数据分析项目设计

这是一个完整的Python数据分析项目设计集合，包含6个从基础到高级的实战项目。

## 项目列表

### 1. 电商用户行为数据清洗与可视化
- **目录**: `ecommerce_analysis/`
- **主要功能**:
  - 使用Pandas进行数据清洗（处理缺失值、重复值、异常值）
  - 拆分时间戳，统计转化率
  - 使用Matplotlib和Seaborn绘制可视化图表
- **技术栈**: Pandas, Matplotlib, Seaborn
- **运行方式**:
  ```bash
  cd ecommerce_analysis
  python main.py
  ```

### 2. 影评情感分析NLP项目
- **目录**: `sentiment_analysis/`
- **主要功能**:
  - 文本预处理（分词、去停用词）
  - TF-IDF向量化
  - 逻辑回归建模
  - 自定义文本预测
- **技术栈**: Scikit-learn, Pandas, Matplotlib
- **运行方式**:
  ```bash
  cd sentiment_analysis
  python main.py
  ```

### 3. 共享单车订单时间序列预测
- **目录**: `time_series_prediction/`
- **主要功能**:
  - 使用ARIMA模型进行时间序列预测
  - 数据预处理
  - 绘制趋势图和预测图
  - 输出MAE、RMSE评估指标
- **技术栈**: Statsmodels, Pandas, Matplotlib

### 4. Streamlit+SQLite销售数据仪表板
- **目录**: `sales_dashboard/`
- **主要功能**:
  - 创建SQLite数据库与数据表
  - 多维度筛选
  - 实时展示可视化图表
  - 支持导出Excel
- **技术栈**: Streamlit, SQLite, Plotly, Pandas
- **运行方式**:
  ```bash
  cd sales_dashboard
  streamlit run app.py
  ```

### 5. LangChain本地知识库问答机器人
- **目录**: `qa_bot/`
- **主要功能**:
  - 读取本地Markdown文档
  - 文本分块向量化
  - Chroma向量库存储
  - 构建问答链
  - Streamlit交互界面
- **技术栈**: LangChain, Chroma, Streamlit

### 6. 图像分类模型部署
- **目录**: `image_classification/`
- **主要功能**:
  - 训练MNIST图像分类模型
  - FastAPI搭建预测接口
  - Docker容器化部署
  - Streamlit前端调用接口
- **技术栈**: TensorFlow, FastAPI, Docker, Streamlit

## 网页展示

本项目包含两个网页：
- **portfolio.html**: 个人主页，展示项目概览
- **projects.html**: 项目详情页，展示每个项目的详细信息

## 作者

吕仲豪

## 许可证

MIT License
