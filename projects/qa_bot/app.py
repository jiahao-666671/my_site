#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LangChain本地知识库问答机器人
读取本地Markdown文档，构建向量库，实现智能问答
"""

import streamlit as st
import os
from pathlib import Path
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import torch

# 设置页面配置
st.set_page_config(
    page_title="本地知识库问答机器人",
    page_icon="🤖",
    layout="wide"
)

# 标题
st.title("🤖 本地知识库智能问答系统")


def create_sample_documents():
    """
    创建示例Markdown文档作为知识库
    """
    docs_dir = Path("documents")
    docs_dir.mkdir(exist_ok=True)
    
    sample_docs = {
        "人工智能简介.md": """# 人工智能简介

## 什么是人工智能
人工智能（Artificial Intelligence，简称AI）是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器。

## AI的发展历史
1. 1956年，达特茅斯会议正式提出人工智能概念
2. 1960-1970年代，专家系统兴起
3. 1980年代，机器学习成为主流
4. 2010年代至今，深度学习时代

## 主要应用领域
- 计算机视觉
- 自然语言处理
- 语音识别
- 智能推荐系统
- 自动驾驶
""",
        
        "机器学习基础.md": """# 机器学习基础

## 什么是机器学习
机器学习是人工智能的一个子领域，它使计算机系统能够通过经验自动改进，而无需明确编程。

## 主要类型
1. 监督学习：使用标注数据训练
2. 无监督学习：使用未标注数据
3. 强化学习：通过奖励机制学习

## 常用算法
- 线性回归
- 逻辑回归
- 决策树
- 随机森林
- 支持向量机
- 神经网络
""",
        
        "Python编程指南.md": """# Python编程指南

## Python简介
Python是一种高级、解释型、通用型编程语言，由Guido van Rossum于1991年创建。

## 特点
- 语法简洁清晰
- 丰富的标准库
- 强大的第三方生态
- 跨平台支持
- 面向对象

## 数据类型
- 整数 (int)
- 浮点数 (float)
- 字符串 (str)
- 列表 (list)
- 字典 (dict)
- 元组 (tuple)
- 集合 (set)
""",
        
        "数据科学入门.md": """# 数据科学入门

## 什么是数据科学
数据科学是一门综合了统计学、数据分析、机器学习和领域知识的学科，旨在从数据中提取有价值的信息。

## 核心步骤
1. 数据收集
2. 数据清洗
3. 数据探索
4. 特征工程
5. 模型训练
6. 模型评估
7. 部署应用

## 常用工具
- Pandas：数据处理
- NumPy：数值计算
- Matplotlib/Seaborn：可视化
- Scikit-learn：机器学习
- TensorFlow/PyTorch：深度学习
"""
    }
    
    for filename, content in sample_docs.items():
        filepath = docs_dir / filename
        if not filepath.exists():
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"创建示例文档: {filename}")
    
    return docs_dir


def load_documents(docs_dir):
    """
    加载Markdown文档
    """
    documents = []
    for filepath in docs_dir.glob("*.md"):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            documents.append({
                "content": content,
                "source": filepath.name
            })
    return documents


def split_documents(documents):
    """
    将文档切分成小块
    """
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50,
        length_function=len,
    )
    
    chunks = []
    for doc in documents:
        split_texts = text_splitter.split_text(doc["content"])
        for i, text in enumerate(split_texts):
            chunks.append({
                "content": text,
                "source": doc["source"],
                "chunk_id": i
            })
    
    return chunks


def create_vector_store(chunks):
    """
    创建Chroma向量存储
    """
    # 使用HuggingFace的embeddings模型
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={'device': 'cpu'}
    )
    
    # 准备文本和元数据
    texts = [chunk["content"] for chunk in chunks]
    metadatas = [{"source": chunk["source"], "chunk_id": chunk["chunk_id"]} for chunk in chunks]
    
    # 创建向量存储
    vector_store = Chroma.from_texts(
        texts=texts,
        embedding=embeddings,
        metadatas=metadatas,
        persist_directory="./chroma_db"
    )
    
    return vector_store


def create_simple_llm():
    """
    创建一个简单的LLM（这里使用基于规则的响应作为示例）
    实际项目中可以替换为真实的LLM模型
    """
    class SimpleLLM:
        def __call__(self, prompt):
            # 基于prompt生成简单回复
            if "什么是" in prompt or "介绍" in prompt:
                return "根据知识库内容，以下是相关信息：\n\n这是一个示例回答。在实际应用中，这里会调用真实的大语言模型来生成准确的回答。\n\n相关参考来源已在下方列出。"
            elif "如何" in prompt or "怎么" in prompt:
                return "根据知识库内容，以下是相关信息：\n\n这是一个关于操作步骤的示例回答。您可以在实际项目中集成GPT、Claude或其他开源大模型来获得更好的回答质量。\n\n相关参考来源已在下方列出。"
            else:
                return "根据知识库内容，以下是相关信息：\n\n这是一个通用回答示例。在生产环境中，建议使用强大的大语言模型来处理用户的问题。\n\n相关参考来源已在下方列出。"
    
    return SimpleLLM()


def initialize_system():
    """
    初始化问答系统
    """
    if "initialized" not in st.session_state:
        with st.spinner("正在初始化知识库系统..."):
            # 创建示例文档
            docs_dir = create_sample_documents()
            
            # 加载文档
            documents = load_documents(docs_dir)
            st.session_state.documents = documents
            
            # 切分文档
            chunks = split_documents(documents)
            st.session_state.chunks = chunks
            
            # 创建向量存储
            vector_store = create_vector_store(chunks)
            st.session_state.vector_store = vector_store
            
            # 创建检索器
            retriever = vector_store.as_retriever(search_kwargs={"k": 3})
            st.session_state.retriever = retriever
            
            # 创建简单LLM
            llm = create_simple_llm()
            st.session_state.llm = llm
            
            st.session_state.initialized = True
            st.success("知识库系统初始化完成！")


def get_answer(question):
    """
    获取问题的答案
    """
    # 检索相关文档
    docs = st.session_state.retriever.get_relevant_documents(question)
    
    # 生成回答
    answer = st.session_state.llm(question)
    
    return answer, docs


def main():
    """
    主函数
    """
    # 初始化系统
    initialize_system()
    
    # 侧边栏显示知识库信息
    st.sidebar.header("📚 知识库信息")
    if "documents" in st.session_state:
        st.sidebar.write(f"文档数量: {len(st.session_state.documents)}")
        st.sidebar.write(f"文档分块数: {len(st.session_state.chunks)}")
        
        st.sidebar.subheader("文档列表")
        for doc in st.session_state.documents:
            st.sidebar.write(f"- {doc['source']}")
    
    # 主界面
    st.header("💬 提问")
    
    # 问题输入
    question = st.text_input("请输入您的问题：", placeholder="例如：什么是机器学习？")
    
    # 提问按钮
    if st.button("🔍 搜索答案", type="primary") and question:
        with st.spinner("正在搜索答案..."):
            answer, docs = get_answer(question)
            
            # 显示回答
            st.header("📝 回答")
            st.write(answer)
            
            # 显示参考来源
            st.header("📖 参考来源")
            for i, doc in enumerate(docs, 1):
                with st.expander(f"来源 {i}: {doc.metadata.get('source', '未知')}"):
                    st.write(doc.page_content)
    
    # 示例问题
    st.divider()
    st.header("💡 示例问题")
    example_questions = [
        "什么是人工智能？",
        "机器学习有哪些类型？",
        "Python有什么特点？",
        "数据科学的核心步骤是什么？"
    ]
    
    cols = st.columns(2)
    for i, q in enumerate(example_questions):
        if cols[i % 2].button(q):
            st.session_state.example_question = q
            st.rerun()


if __name__ == "__main__":
    main()
