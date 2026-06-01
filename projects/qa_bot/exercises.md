# 本地知识库问答机器人项目练习

## 练习一：文档处理与加载

### 任务
1. 支持多种文档格式（PDF、Word、TXT、HTML）
2. 实现文档批量上传功能
3. 添加OCR识别功能处理图片文档
4. 实现文档版本管理

### 提示代码
```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    Docx2txtLoader,
    TextLoader,
    UnstructuredHTMLLoader,
    DirectoryLoader
)
from PIL import Image
import pytesseract

# 1. 多格式文档加载
def load_document(filepath):
    ext = filepath.suffix.lower()
    if ext == '.pdf':
        return PyPDFLoader(str(filepath))
    elif ext == '.docx':
        return Docx2txtLoader(str(filepath))
    elif ext == '.txt':
        return TextLoader(str(filepath), encoding='utf-8')
    elif ext == '.html':
        return UnstructuredHTMLLoader(str(filepath))
    else:
        raise ValueError(f"不支持的文件格式: {ext}")

# 2. 批量加载目录
def load_directory(directory):
    loader = DirectoryLoader(
        directory,
        glob="**/*",
        loader_cls=None,
        use_multithreading=True,
        show_progress=True
    )
    return loader.load()

# 3. OCR处理图片
def ocr_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image, lang='chi_sim+eng')
    return text

# 4. 文档版本管理
class DocumentVersionManager:
    def __init__(self, storage_dir='document_versions'):
        self.storage_dir = Path(storage_dir)
        self.storage_dir.mkdir(exist_ok=True)
        self.versions = {}
    
    def save_version(self, doc_id, content, version, author):
        version_file = self.storage_dir / f"{doc_id}_v{version}.md"
        with open(version_file, 'w', encoding='utf-8') as f:
            f.write(content)
        self.versions[doc_id] = {
            'latest_version': version,
            'author': author,
            'updated_at': datetime.now()
        }
```

---

## 练习二：文本分块优化

### 任务
1. 尝试不同的分块策略和参数
2. 实现语义分块而非固定大小
3. 保留文档结构信息（标题、章节）
4. 评估不同分块策略的效果

### 提示代码
```python
from langchain.text_splitter import (
    CharacterTextSplitter,
    TokenTextSplitter,
    MarkdownHeaderTextSplitter,
    RecursiveCharacterTextSplitter
)
import tiktoken

# 1. 基于token的分块
def token_based_split(text, chunk_size=512, chunk_overlap=50):
    tokenizer = tiktoken.get_encoding("cl100k_base")
    text_splitter = TokenTextSplitter.from_tiktoken_encoder(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        encoding_name="cl100k_base"
    )
    return text_splitter.split_text(text)

# 2. Markdown结构感知分块
def markdown_structure_split(text):
    markdown_splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=[
            ("#", "Header 1"),
            ("##", "Header 2"),
            ("###", "Header 3"),
        ]
    )
    return markdown_splitter.split_text(text)

# 3. 递归字符分块（优化版）
def optimized_recursive_split(text):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        separators=["\n\n", "\n", "。", "！", "？", ".", "!", "?", " ", ""],
        length_function=len,
    )
    return text_splitter.split_text(text)

# 4. 分块效果评估
def evaluate_chunks(chunks, questions, vector_store):
    results = []
    for question in questions:
        retrieved = vector_store.similarity_search(question, k=3)
        relevance_score = calculate_relevance(question, retrieved)
        results.append({
            'question': question,
            'relevance': relevance_score
        })
    return results
```

---

## 练习三：向量检索优化

### 任务
1. 尝试不同的Embedding模型
2. 实现混合检索（关键词+语义）
3. 添加重排序（Rerank）功能
4. 实现检索结果过滤与聚合

### 提示代码
```python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever
from sentence_transformers import CrossEncoder

# 1. 多种Embedding模型
def get_embedding_model(model_name):
    models = {
        'minilm': 'sentence-transformers/all-MiniLM-L6-v2',
        'mpnet': 'sentence-transformers/all-mpnet-base-v2',
        'multilingual': 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
        'bge': 'BAAI/bge-small-zh-v1.5',
    }
    return HuggingFaceEmbeddings(model_name=models[model_name])

# 2. 混合检索（BM25 + 语义）
def hybrid_retrieval(docs, query):
    # BM25检索
    bm25_retriever = BM25Retriever.from_documents(docs)
    bm25_retriever.k = 5
    
    # 语义检索
    semantic_retriever = vector_store.as_retriever(search_kwargs={"k": 5})
    
    # 集成
    ensemble_retriever = EnsembleRetriever(
        retrievers=[bm25_retriever, semantic_retriever],
        weights=[0.5, 0.5]
    )
    
    return ensemble_retriever.get_relevant_documents(query)

# 3. 重排序
def rerank_documents(query, docs, top_k=3):
    reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
    pairs = [[query, doc.page_content] for doc in docs]
    scores = reranker.predict(pairs)
    
    # 排序
    scored_docs = list(zip(docs, scores))
    scored_docs.sort(key=lambda x: x[1], reverse=True)
    
    return [doc for doc, score in scored_docs[:top_k]]

# 4. 检索结果过滤
def filter_retrieved_docs(docs, min_score=0.5, exclude_sources=[]):
    filtered = []
    for doc in docs:
        if doc.metadata.get('source') in exclude_sources:
            continue
        if doc.metadata.get('score', 1.0) < min_score:
            continue
        filtered.append(doc)
    return filtered
```

---

## 练习四：LLM集成与优化

### 任务
1. 集成不同的LLM（OpenAI、Claude、开源模型）
2. 实现Prompt工程优化
3. 添加对话历史管理
4. 实现流式输出效果

### 提示代码
```python
from langchain_openai import ChatOpenAI
from langchain_community.chat_models import ChatAnthropic
from langchain_community.llms import Ollama
from langchain.schema import HumanMessage, SystemMessage, AIMessage
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder

# 1. 多种LLM支持
def get_llm(provider='openai', **kwargs):
    if provider == 'openai':
        return ChatOpenAI(
            model_name=kwargs.get('model', 'gpt-3.5-turbo'),
            temperature=kwargs.get('temperature', 0.7),
            api_key=kwargs.get('api_key')
        )
    elif provider == 'anthropic':
        return ChatAnthropic(
            model=kwargs.get('model', 'claude-3-sonnet-20240229'),
            temperature=kwargs.get('temperature', 0.7),
            api_key=kwargs.get('api_key')
        )
    elif provider == 'ollama':
        return Ollama(
            model=kwargs.get('model', 'llama2'),
            temperature=kwargs.get('temperature', 0.7)
        )

# 2. 优化的Prompt模板
def create_qa_prompt():
    system_prompt = """你是一个专业的知识问答助手。请根据提供的上下文信息回答用户的问题。

要求：
1. 仅使用上下文中的信息回答，不要编造
2. 如果上下文中没有相关信息，请明确告知用户
3. 回答要准确、简洁、有条理
4. 用中文回答
5. 请在回答中标注参考来源

上下文信息：
{context}

"""
    
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{question}")
    ])
    return prompt

# 3. 对话历史管理
class ChatHistoryManager:
    def __init__(self, max_turns=10):
        self.history = []
        self.max_turns = max_turns
    
    def add_message(self, role, content):
        if role == 'human':
            self.history.append(HumanMessage(content=content))
        else:
            self.history.append(AIMessage(content=content))
        
        # 限制历史长度
        if len(self.history) > self.max_turns * 2:
            self.history = self.history[-self.max_turns * 2:]
    
    def get_history(self):
        return self.history

# 4. 流式输出
async def stream_chat(llm, prompt):
    async for chunk in llm.astream(prompt):
        yield chunk.content
```

---

## 练习五：问答链路优化

### 任务
1. 实现查询改写（Query Rewriting）
2. 添加多步查询（Step-back Prompting）
3. 实现检索增强生成（RAG）优化
4. 添加答案验证与引用

### 提示代码
```python
from langchain.chains import LLMChain
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

# 1. 查询改写
class RewrittenQuery(BaseModel):
    original_query: str = Field(description="原始查询")
    rewritten_queries: list[str] = Field(description="改写后的查询列表")

def rewrite_query(llm, original_query):
    parser = PydanticOutputParser(pydantic_object=RewrittenQuery)
    prompt = ChatPromptTemplate.from_messages([
        ("system", "请将用户的查询改写成3个不同的表达方式，提高检索效果。\n{format_instructions}"),
        ("human", "{query}")
    ]).partial(format_instructions=parser.get_format_instructions())
    
    chain = prompt | llm | parser
    result = chain.invoke({"query": original_query})
    return result.rewritten_queries

# 2. 多步查询
def step_back_prompting(llm, question):
    # 第一步：提取核心概念
    step1_prompt = f"问题：{question}\n请提取这个问题的核心概念和前提假设。"
    core_concepts = llm.invoke(step1_prompt).content
    
    # 第二步：检索相关信息
    # ... 检索逻辑
    
    # 第三步：综合回答
    step3_prompt = f"核心概念：{core_concepts}\n检索信息：{retrieved_info}\n请回答问题：{question}"
    answer = llm.invoke(step3_prompt).content
    return answer

# 3. RAG优化 - Self-RAG
def self_rag(llm, retriever, question):
    # 判断是否需要检索
    need_retrieve = llm.invoke(f"回答问题'{question}'是否需要外部知识？请回答是或否").content
    
    if '是' in need_retrieve:
        docs = retriever.get_relevant_documents(question)
        context = "\n".join([d.page_content for d in docs])
        prompt = f"上下文：{context}\n\n问题：{question}"
    else:
        prompt = f"问题：{question}"
    
    # 生成答案并验证
    answer = llm.invoke(prompt).content
    
    # 验证答案
    verification = llm.invoke(f"请验证以下答案是否准确：{answer}\n参考：{context if '是' in need_retrieve else '通用知识'}")
    
    return answer, verification

# 4. 答案引用标注
def add_citations(answer, docs):
    cited_answer = answer
    for i, doc in enumerate(docs, 1):
        source = doc.metadata.get('source', f'来源{i}')
        cited_answer = cited_answer.replace(doc.page_content[:50], f"{doc.page_content[:50]}[{source}]")
    return cited_answer
```

---

## 练习六：高级功能开发

### 任务
1. 实现多语言问答
2. 添加问题分类与路由
3. 实现知识库更新与增量索引
4. 添加用户反馈收集与学习

### 提示代码
```python
from langdetect import detect
from deep_translator import GoogleTranslator
import hashlib

# 1. 多语言支持
def multilingual_qa(llm, retriever, question):
    # 检测语言
    lang = detect(question)
    
    # 翻译问题为英文（如果需要）
    if lang != 'zh':
        translated_q = GoogleTranslator(source=lang, target='zh').translate(question)
    else:
        translated_q = question
    
    # 检索与回答
    docs = retriever.get_relevant_documents(translated_q)
    answer = llm.invoke(f"上下文：{docs}\n问题：{translated_q}").content
    
    # 翻译回原语言
    if lang != 'zh':
        answer = GoogleTranslator(source='zh', target=lang).translate(answer)
    
    return answer, lang

# 2. 问题分类与路由
class QuestionRouter:
    def __init__(self):
        self.categories = {
            '技术问题': ['如何', '怎么', '错误', 'bug', '安装'],
            '概念解释': ['什么是', '介绍', '解释', '定义'],
            '操作指南': ['步骤', '流程', '方法', '教程'],
            '其他': []
        }
    
    def classify(self, question):
        for category, keywords in self.categories.items():
            if any(keyword in question for keyword in keywords):
                return category
        return '其他'
    
    def route(self, question):
        category = self.classify(question)
        if category == '技术问题':
            return 'technical_rag_chain'
        elif category == '概念解释':
            return 'explanation_chain'
        else:
            return 'general_chain'

# 3. 增量索引
class IncrementalIndexer:
    def __init__(self, vector_store):
        self.vector_store = vector_store
        self.doc_hashes = {}
    
    def compute_hash(self, content):
        return hashlib.md5(content.encode()).hexdigest()
    
    def update_document(self, doc_id, content, metadata):
        doc_hash = self.compute_hash(content)
        
        if doc_id in self.doc_hashes:
            if self.doc_hashes[doc_id] == doc_hash:
                return  # 未变化，跳过
            
            # 删除旧版本
            self.vector_store.delete(ids=[doc_id])
        
        # 添加新版本
        self.vector_store.add_texts(
            texts=[content],
            metadatas=[metadata],
            ids=[doc_id]
        )
        self.doc_hashes[doc_id] = doc_hash

# 4. 用户反馈学习
class FeedbackLearner:
    def __init__(self):
        self.feedback_data = []
    
    def collect_feedback(self, question, answer, rating, comments=''):
        self.feedback_data.append({
            'question': question,
            'answer': answer,
            'rating': rating,
            'comments': comments,
            'timestamp': datetime.now()
        })
    
    def analyze_feedback(self):
        # 分析低评分的回答
        low_rated = [f for f in self.feedback_data if f['rating'] < 3]
        return {
            'total': len(self.feedback_data),
            'low_rated': len(low_rated),
            'improvement_areas': self._extract_improvements(low_rated)
        }
```

---

## 练习七：系统优化与部署

### 任务
1. 实现缓存机制提高响应速度
2. 添加日志与监控
3. 优化系统性能（量化、蒸馏）
4. 部署为API服务

### 提示代码
```python
from functools import lru_cache
import time
import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

# 1. 缓存机制
class QueryCache:
    def __init__(self, max_size=1000, ttl=3600):
        self.cache = {}
        self.max_size = max_size
        self.ttl = ttl
    
    def get(self, key):
        if key in self.cache:
            entry = self.cache[key]
            if time.time() - entry['timestamp'] < self.ttl:
                return entry['value']
            else:
                del self.cache[key]
        return None
    
    def set(self, key, value):
        if len(self.cache) >= self.max_size:
            # 删除最旧的条目
            oldest_key = min(self.cache.keys(), key=lambda k: self.cache[k]['timestamp'])
            del self.cache[oldest_key]
        self.cache[key] = {
            'value': value,
            'timestamp': time.time()
        }

# 2. 日志与监控
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('qa_system.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger('qa_system')

def log_query(question, answer, latency, retrieved_docs):
    logger.info(
        f"Query: {question} | "
        f"Latency: {latency:.2f}s | "
        f"Docs: {len(retrieved_docs)} | "
        f"Answer length: {len(answer)}"
    )

# 3. 性能优化 - 模型量化
def quantize_model(model):
    # 使用bitsandbytes进行量化
    from transformers import BitsAndBytesConfig
    
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16
    )
    return AutoModelForCausalLM.from_pretrained(
        model,
        quantization_config=bnb_config,
        device_map="auto"
    )

# 4. API部署
app = FastAPI(title="知识库问答API")

class QuestionRequest(BaseModel):
    question: str
    conversation_id: str = None

class AnswerResponse(BaseModel):
    answer: str
    sources: list
    latency: float

@app.post("/qa", response_model=AnswerResponse)
async def qa_endpoint(request: QuestionRequest):
    start_time = time.time()
    
    try:
        answer, docs = get_answer(request.question)
        latency = time.time() - start_time
        
        log_query(request.question, answer, latency, docs)
        
        return AnswerResponse(
            answer=answer,
            sources=[d.metadata for d in docs],
            latency=latency
        )
    except Exception as e:
        logger.error(f"Error processing query: {e}")
        raise HTTPException(status_code=500, detail="内部错误")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

---

## 参考答案思路

### 练习一
- 使用LangChain的DocumentLoaders处理不同格式
- pytesseract需要安装Tesseract OCR引擎
- 文档版本可以用Git管理或简单的文件存储

### 练习二
- 语义分块可以用句子嵌入相似度来找到自然边界
- 保留标题信息能提高检索相关性
- 使用真实问答对评估分块效果

### 练习三
- 中文字段推荐使用BGE-zh系列
- BM25擅长关键词匹配，语义检索擅长概念匹配
- CrossEncoder的重排序能显著提升效果

### 练习四
- Prompt工程可参考RAG最佳实践
- 对话历史要适当截断，避免上下文过长
- 流式输出用异步生成器实现

### 练习五
- 查询改写可解决用户表述不准确的问题
- Self-RAG让模型自己判断何时需要检索
- 引用标注增加可信度，便于溯源

### 练习六
- 多语言可以用独立的向量库或统一的多语言embedding
- 问题分类可用小模型或规则实现
- 增量索引避免每次都重建整个向量库

### 练习七
- 缓存相同查询显著提升QPS
- 4-bit量化能大幅减少显存占用
- FastAPI + Uvicorn适合生产部署
