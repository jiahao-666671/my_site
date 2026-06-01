"""
影评情感分析NLP项目
功能：文本预处理、TF-IDF向量化、逻辑回归建模、自定义文本预测
作者：吕仲豪
"""

import re
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import matplotlib.pyplot as plt
import seaborn as sns
import random
import pickle
import os

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

def generate_movie_reviews(n_positive=1000, n_negative=1000):
    """
    生成模拟电影影评数据
    
    参数:
        n_positive: 正面评论数量
        n_negative: 负面评论数量
        
    返回:
        包含评论和标签的DataFrame
    """
    print("正在生成模拟电影影评数据...")
    
    # 正面评论模板
    positive_templates = [
        "这部电影太棒了！{actor}的表演非常精彩，{scene}场景让人印象深刻。",
        "强烈推荐！{movie}是我今年看过的最好的电影，{aspect}处理得非常完美。",
        "太棒了！{director}的导演功力令人佩服，整个观影过程非常{emotion}。",
        "非常喜欢这部电影！{aspect}做得很好，{actor}的演技{praise}。",
        "五星好评！{movie}的{aspect}和{aspect2}都很出色，值得一看再看。",
        "感人至深！{scene}让我{emotion}流泪，{actor}的表演真的{praise}。",
        "精彩绝伦！{director}又一次带来了{praise}的作品，{aspect}无可挑剔。",
        "这部电影{praise}！{scene}和{aspect}的结合非常完美，强烈推荐！",
        "年度最佳！{movie}的{aspect}处理得{praise}，{actor}的表现让人{emotion}。",
        "超出预期！{director}的这部作品{praise}，{aspect}和{aspect2}都很出色。"
    ]
    
    # 负面评论模板
    negative_templates = [
        "这部电影太让人失望了，{actor}的表演{bad}，{scene}场景{boring}。",
        "不推荐！{movie}的{aspect}处理得{bad}，看了一半就想离开。",
        "浪费时间！{director}这次的作品{boring}，{aspect}让人{disappointed}。",
        "非常失望！{aspect}做得{bad}，{actor}的演技也{disappointed}。",
        "一星差评！{movie}的{aspect}和{aspect2}都{bad}，完全不值得看。",
        "让人{disappointed}！{scene}让我{feel}，{actor}的表演真的{bad}。",
        "糟糕透顶！{director}又一次带来了{bad}的作品，{aspect}完全{disappointed}。",
        "这部电影{boring}！{scene}和{aspect}的结合{bad}，不推荐！",
        "年度最差！{movie}的{aspect}处理得{boring}，{actor}的表现让人{disappointed}。",
        "低于预期！{director}的这部作品{bad}，{aspect}和{aspect2}都{disappointed}。"
    ]
    
    # 填充词库
    actors = ['梁朝伟', '章子怡', '周迅', '刘德华', '刘若英', '金城武', '舒淇', '张震']
    directors = ['李安', '张艺谋', '陈凯歌', '王家卫', '贾樟柯', '侯孝贤', '吴宇森', '许鞍华']
    movies = ['星际穿越', '盗梦空间', '阿凡达', '泰坦尼克号', '霸王别姬', '肖申克的救赎', '阿甘正传', '千与千寻']
    scenes = ['结局', '高潮', '开场', '中间', '最后一幕', '雨中戏', '回忆片段', '爱情戏']
    aspects = ['剧情', '特效', '配乐', '摄影', '剪辑', '节奏', '服装', '道具']
    emotions = ['感动', '震撼', '开心', '兴奋', '激动', '温暖', '震撼', '惊喜']
    praises = ['完美无瑕', '一流水准', '无可挑剔', '非常出色', '令人赞叹', '炉火纯青', '登峰造极', '精彩绝伦']
    bads = ['糟糕透顶', '令人失望', '惨不忍睹', '不忍直视', '很差劲', '非常差劲', '一塌糊涂', '难以接受']
    borings = ['无聊透顶', '枯燥乏味', '平淡无奇', '让人昏昏欲睡', '毫无新意', '拖沓冗长', '沉闷无聊', '索然无味']
    disappointeds = ['失望', '难过', '无奈', '遗憾', '郁闷', '沮丧', '不满', '失望透顶']
    feels = ['尴尬', '难过', '无聊', '无语', '烦躁', '生气', '无奈', '想退场']
    
    # 生成正面评论
    positive_reviews = []
    for _ in range(n_positive):
        template = random.choice(positive_templates)
        review = template.format(
            actor=random.choice(actors),
            director=random.choice(directors),
            movie=random.choice(movies),
            scene=random.choice(scenes),
            aspect=random.choice(aspects),
            aspect2=random.choice([a for a in aspects if a != random.choice(aspects)]),
            emotion=random.choice(emotions),
            praise=random.choice(praises)
        )
        positive_reviews.append({'review': review, 'sentiment': 1})
    
    # 生成负面评论
    negative_reviews = []
    for _ in range(n_negative):
        template = random.choice(negative_templates)
        review = template.format(
            actor=random.choice(actors),
            director=random.choice(directors),
            movie=random.choice(movies),
            scene=random.choice(scenes),
            aspect=random.choice(aspects),
            aspect2=random.choice([a for a in aspects if a != random.choice(aspects)]),
            bad=random.choice(bads),
            boring=random.choice(borings),
            disappointed=random.choice(disappointeds),
            feel=random.choice(feels)
        )
        negative_reviews.append({'review': review, 'sentiment': 0})
    
    # 合并并打乱数据
    all_reviews = positive_reviews + negative_reviews
    random.shuffle(all_reviews)
    
    df = pd.DataFrame(all_reviews)
    print(f"数据生成完成，共 {len(df)} 条评论")
    print(f"正面评论: {len(positive_reviews)} 条")
    print(f"负面评论: {len(negative_reviews)} 条")
    
    return df

def preprocess_text(text):
    """
    文本预处理函数
    
    参数:
        text: 原始文本
        
    返回:
        预处理后的文本
    """
    # 转换为小写
    text = text.lower()
    
    # 移除特殊字符和数字
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\d+', '', text)
    
    # 移除多余空格
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

def simple_tokenize(text):
    """
    简单分词函数（中文按字符分词）
    
    参数:
        text: 文本
        
    返回:
        分词列表
    """
    # 简单按字符分词（中文场景）
    return list(text)

def main():
    """
    主函数：完整的情感分析流程
    """
    print("="*60)
    print("影评情感分析NLP项目")
    print("="*60)
    
    # 1. 生成数据
    df = generate_movie_reviews()
    
    # 2. 数据预处理
    print("\n===== 文本预处理 =====")
    df['cleaned_review'] = df['review'].apply(preprocess_text)
    print("文本预处理完成")
    
    # 显示样本
    print("\n样本数据:")
    print(df[['review', 'cleaned_review', 'sentiment']].head())
    
    # 3. 划分训练集和测试集
    X_train, X_test, y_train, y_test = train_test_split(
        df['cleaned_review'], 
        df['sentiment'], 
        test_size=0.2, 
        random_state=42,
        stratify=df['sentiment']
    )
    
    print(f"\n训练集大小: {len(X_train)}")
    print(f"测试集大小: {len(X_test)}")
    
    # 4. TF-IDF向量化
    print("\n===== TF-IDF向量化 =====")
    tfidf = TfidfVectorizer(
        tokenizer=simple_tokenize,
        ngram_range=(1, 2),
        max_features=5000,
        min_df=2,
        max_df=0.95
    )
    
    X_train_tfidf = tfidf.fit_transform(X_train)
    X_test_tfidf = tfidf.transform(X_test)
    
    print(f"训练集特征维度: {X_train_tfidf.shape}")
    print(f"测试集特征维度: {X_test_tfidf.shape}")
    
    # 5. 训练逻辑回归模型
    print("\n===== 训练逻辑回归模型 =====")
    model = LogisticRegression(
        C=1.0,
        max_iter=1000,
        random_state=42
    )
    
    model.fit(X_train_tfidf, y_train)
    print("模型训练完成")
    
    # 6. 模型评估
    print("\n===== 模型评估 =====")
    y_pred = model.predict(X_test_tfidf)
    y_pred_proba = model.predict_proba(X_test_tfidf)
    
    accuracy = accuracy_score(y_test, y_pred)
    print(f"\n准确率: {accuracy:.4f}")
    
    print("\n分类报告:")
    print(classification_report(y_test, y_pred, target_names=['负面', '正面']))
    
    # 7. 绘制混淆矩阵
    plt.figure(figsize=(8, 6))
    cm = confusion_matrix(y_test, y_pred)
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
                xticklabels=['负面', '正面'], 
                yticklabels=['负面', '正面'])
    plt.title('混淆矩阵', fontsize=14, fontweight='bold')
    plt.ylabel('真实标签')
    plt.xlabel('预测标签')
    plt.tight_layout()
    plt.savefig('/workspace/projects/sentiment_analysis/confusion_matrix.png', dpi=300, bbox_inches='tight')
    print("\n混淆矩阵已保存: confusion_matrix.png")
    plt.close()
    
    # 8. 保存模型和向量化器
    print("\n===== 保存模型 =====")
    os.makedirs('/workspace/projects/sentiment_analysis', exist_ok=True)
    
    with open('/workspace/projects/sentiment_analysis/model.pkl', 'wb') as f:
        pickle.dump(model, f)
    
    with open('/workspace/projects/sentiment_analysis/tfidf.pkl', 'wb') as f:
        pickle.dump(tfidf, f)
    
    print("模型和向量化器已保存")
    
    # 9. 自定义文本预测
    print("\n===== 自定义文本预测 =====")
    
    def predict_sentiment(text):
        """
        自定义文本预测函数
        """
        cleaned_text = preprocess_text(text)
        text_tfidf = tfidf.transform([cleaned_text])
        prediction = model.predict(text_tfidf)[0]
        probability = model.predict_proba(text_tfidf)[0]
        
        sentiment = "正面" if prediction == 1 else "负面"
        confidence = probability[prediction]
        
        return sentiment, confidence
    
    # 测试示例
    test_samples = [
        "这部电影太精彩了，演员的表演完美无瑕！",
        "这部电影无聊透顶，浪费时间！",
        "剧情虽然有点拖沓，但特效做得很棒。",
        "导演的功力深厚，每个场景都很有感觉。",
        "配乐很糟糕，听着让人不舒服。"
    ]
    
    print("\n测试自定义文本预测:")
    for i, text in enumerate(test_samples, 1):
        sentiment, confidence = predict_sentiment(text)
        print(f"\n{i}. {text}")
        print(f"   预测情感: {sentiment}")
        print(f"   置信度: {confidence:.4f}")
    
    # 10. 交互式预测
    print("\n" + "="*60)
    print("自定义输入预测模式")
    print("="*60)
    print("输入 'quit' 退出\n")
    
    while True:
        user_input = input("请输入一段影评文本: ")
        
        if user_input.lower() == 'quit':
            break
        
        if user_input.strip() == '':
            continue
        
        sentiment, confidence = predict_sentiment(user_input)
        print(f"\n预测结果: {sentiment}")
        print(f"置信度: {confidence:.4f}\n")
    
    print("\n项目执行完成！")
    print("\n生成的文件:")
    print("  - confusion_matrix.png: 混淆矩阵图")
    print("  - model.pkl: 训练好的模型")
    print("  - tfidf.pkl: TF-IDF向量化器")

if __name__ == "__main__":
    main()
