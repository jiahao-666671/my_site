# 影评情感分析项目练习

## 练习一：数据探索与可视化

### 任务
1. 加载并查看数据集的基本信息
2. 分析评论长度分布
3. 统计正面/负面评论的高频词汇
4. 绘制词云图

### 提示代码
```python
import pandas as pd
import matplotlib.pyplot as plt
from collections import Counter
import jieba

# 1. 查看数据基本信息
df = pd.read_csv('data.csv')
print(df.head())
print(df['sentiment'].value_counts())

# 2. 评论长度分布
df['review_length'] = df['review'].apply(len)
plt.hist(df['review_length'], bins=50)
plt.title('评论长度分布')
plt.show()

# 3. 高频词统计
def get_top_words(texts, top_n=20):
    words = []
    for text in texts:
        words.extend(jieba.lcut(text))
    return Counter(words).most_common(top_n)

positive_words = get_top_words(df[df['sentiment'] == 1]['review'])
negative_words = get_top_words(df[df['sentiment'] == 0]['review'])
```

---

## 练习二：文本预处理增强

### 任务
1. 添加中文停用词过滤
2. 尝试不同的分词策略（jieba精确模式/全模式/搜索引擎模式）
3. 实现词形还原（英文）或同义词替换（中文）
4. 对比不同预处理方法对模型效果的影响

### 提示代码
```python
import jieba
import re

# 停用词表
stopwords = set(['的', '了', '在', '是', '我', '有', '和', '就', '不', '人', '都', '一', '一个', '上', '也', '很', '到', '说', '要', '去', '你', '会', '着', '没有', '看', '好', '自己', '这'])

def preprocess_enhanced(text):
    # 1. 去除特殊字符
    text = re.sub(r'[^\w\s]', '', text)
    # 2. 分词
    words = jieba.lcut(text, cut_all=False)
    # 3. 过滤停用词
    words = [word for word in words if word not in stopwords and len(word) > 1]
    return ' '.join(words)

df['cleaned_review'] = df['review'].apply(preprocess_enhanced)
```

---

## 练习三：特征工程进阶

### 任务
1. 尝试不同的N-gram范围（1-gram, 2-gram, 3-gram）
2. 使用Word2Vec或GloVe词向量
3. 添加手工特征（感叹号数量、表情符号数量、大写字母比例等）
4. 对比不同特征组合的效果

### 提示代码
```python
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

# 手工特征
def add_handcrafted_features(texts):
    features = []
    for text in texts:
        exclamation_count = text.count('!')
        question_count = text.count('?')
        uppercase_ratio = sum(1 for c in text if c.isupper()) / len(text) if len(text) > 0 else 0
        features.append([exclamation_count, question_count, uppercase_ratio])
    return np.array(features)

# 组合特征
tfidf = TfidfVectorizer(ngram_range=(1, 2), max_features=5000)
X_tfidf = tfidf.fit_transform(df['cleaned_review'])
X_handcrafted = add_handcrafted_features(df['review'])
X_combined = np.hstack([X_tfidf.toarray(), X_handcrafted])
```

---

## 练习四：模型优化与对比

### 任务
1. 尝试不同的分类算法（SVM、朴素贝叶斯、随机森林、XGBoost）
2. 使用网格搜索进行超参数调优
3. 实现交叉验证
4. 对比不同模型的性能指标

### 提示代码
```python
from sklearn.svm import SVC
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, cross_val_score

# 模型对比
models = {
    'Logistic Regression': LogisticRegression(max_iter=1000),
    'SVM': SVC(probability=True),
    'Naive Bayes': MultinomialNB(),
    'Random Forest': RandomForestClassifier(n_estimators=100)
}

for name, model in models.items():
    scores = cross_val_score(model, X_train_tfidf, y_train, cv=5)
    print(f"{name}: {scores.mean():.4f} (+/- {scores.std() * 2:.4f})")

# 网格搜索
param_grid = {
    'C': [0.1, 1, 10, 100],
    'penalty': ['l1', 'l2']
}
grid_search = GridSearchCV(LogisticRegression(max_iter=1000), param_grid, cv=5)
grid_search.fit(X_train_tfidf, y_train)
print(f"最佳参数: {grid_search.best_params_}")
```

---

## 练习五：深度学习方法

### 任务
1. 使用Keras/TensorFlow构建简单的文本分类模型
2. 尝试LSTM、GRU或Transformer架构
3. 使用预训练词向量（GloVe、Word2Vec）
4. 对比传统机器学习与深度学习方法

### 提示代码
```python
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout

# 文本序列化
tokenizer = Tokenizer(num_words=10000)
tokenizer.fit_on_texts(df['cleaned_review'])
sequences = tokenizer.texts_to_sequences(df['cleaned_review'])
X = pad_sequences(sequences, maxlen=200)

# 构建模型
model = Sequential([
    Embedding(10000, 128, input_length=200),
    LSTM(64, return_sequences=True),
    LSTM(32),
    Dense(16, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X, y, epochs=10, batch_size=32, validation_split=0.2)
```

---

## 练习六：模型部署与应用

### 任务
1. 创建Flask/FastAPI REST API
2. 构建简单的Web界面
3. 添加批处理预测功能
4. 实现模型版本管理

### 提示代码
```python
from fastapi import FastAPI
import pickle

app = FastAPI()

# 加载模型
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('tfidf.pkl', 'rb') as f:
    tfidf = pickle.load(f)

@app.post("/predict")
def predict(review: str):
    cleaned = preprocess_text(review)
    features = tfidf.transform([cleaned])
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0]
    return {
        'sentiment': 'positive' if prediction == 1 else 'negative',
        'confidence': float(max(probability))
    }
```

---

## 练习七：进阶主题

### 任务
1. 实现多分类情感分析（正面/中性/负面）
2. 进行 aspect-based 情感分析（针对电影不同方面）
3. 使用预训练语言模型（BERT、RoBERTa）
4. 实现主动学习策略

### 提示代码
```python
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# 使用BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-chinese')
model = BertForSequenceClassification.from_pretrained('bert-base-chinese', num_labels=2)

def predict_bert(text):
    inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
    outputs = model(**inputs)
    prediction = torch.argmax(outputs.logits, dim=1).item()
    return prediction
```

---

## 参考答案思路

### 练习一
- 使用pandas的describe()查看统计信息
- 绘制箱线图观察异常值
- 使用wordcloud库绘制词云

### 练习二
- 对比不同预处理方法的词汇表大小
- 观察停用词过滤对特征维度的影响
- 可以尝试使用哈工大停用词表

### 练习三
- 可以使用scipy的hstack组合稀疏矩阵
- 尝试使用FeatureUnion进行特征组合
- 使用SelectKBest进行特征选择

### 练习四
- 使用ROC曲线和AUC值对比模型
- 绘制学习曲线观察过拟合/欠拟合
- 尝试集成学习方法（VotingClassifier）

### 练习五
- 使用EarlyStopping防止过拟合
- 尝试不同的优化器和学习率
- 使用TensorBoard监控训练过程

### 练习六
- 添加请求限流和缓存机制
- 实现日志记录功能
- 添加单元测试

### 练习七
- 使用HuggingFace的transformers库
- 尝试Few-shot Learning
- 实现模型蒸馏压缩模型
