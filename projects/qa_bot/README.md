# 本地知识库问答机器人

基于LangChain和Chroma向量数据库的本地知识库问答系统。

## 功能特性

- 自动创建示例Markdown文档
- 文档分块与向量化
- Chroma向量数据库存储
- 语义检索与问答
- Streamlit交互界面

## 安装依赖

```bash
pip install -r requirements.txt
```

## 运行项目

```bash
streamlit run app.py
```

## 访问地址

启动后在浏览器中访问: http://localhost:8501

## 说明

当前使用简单的规则应答器作为演示。在实际使用中，您可以替换为真实的大语言模型（如OpenAI GPT、Claude等）或本地模型。
