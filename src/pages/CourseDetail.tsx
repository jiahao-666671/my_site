import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourseStore, useUserStore, useProgressStore } from '../utils/store';
import { 
  Book, 
  Video, 
  FileText, 
  Code, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Play,
  Trophy,
  Target,
  Lightbulb,
  ArrowLeft
} from 'lucide-react';
import PythonExecutor from '../components/PythonExecutor';

interface ExerciseData {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  task: string;
  hint: string;
  initialCode: string;
  solution?: string;
}

// 根据课程ID提供默认练习题
const getDefaultExercises = (courseId: string): ExerciseData[] => {
  const exercisesMap: Record<string, ExerciseData[]> = {
    'python-basic-syntax': [
      {
        id: 'ex1',
        title: '变量与数据类型',
        description: '学习Python中的变量定义和基本数据类型',
        difficulty: 'easy',
        task: '创建一个变量 name 存储你的名字，创建一个变量 age 存储你的年龄，然后输出 "我叫{name}，今年{age}岁"',
        hint: '使用f-string格式化字符串：f"我叫{name}，今年{age}岁"',
        initialCode: '# 创建变量\nname = \nage = \n\n# 使用print输出',
        solution: `name = "张三"
age = 25
print(f"我叫{name}，今年{age}岁")`
      },
      {
        id: 'ex2',
        title: '数学运算',
        description: '练习Python中的各种数学运算符',
        difficulty: 'easy',
        task: '计算并输出：(15 + 25) * 2 的结果，以及 17 除以 3 的商和余数',
        hint: '使用 // 获取整数商，使用 % 获取余数',
        initialCode: '# 计算表达式\nresult1 = \nresult2 = \nremainder = \n\nprint(f"(15 + 25) * 2 = {result1}")\nprint(f"17 / 3 = {result2}")\nprint(f"17 % 3 = {remainder}")',
        solution: `result1 = (15 + 25) * 2
result2 = 17 / 3
remainder = 17 % 3

print(f"(15 + 25) * 2 = {result1}")
print(f"17 / 3 = {result2}")
print(f"17 % 3 = {remainder}")`
      },
      {
        id: 'ex3',
        title: '字符串操作',
        description: '掌握字符串的基本操作方法',
        difficulty: 'medium',
        task: '给定字符串 "  Python  Programming  "，去除首尾空格，将所有空格替换为下划线，并转换为大写',
        hint: '使用strip()、replace()和upper()方法',
        initialCode: 'text = "  Python  Programming  "\n\n# 去除首尾空格\n# 替换空格为下划线\n# 转换为大写\nprint(result)',
        solution: `text = "  Python  Programming  "

# 去除首尾空格
text = text.strip()
# 替换空格为下划线
text = text.replace(" ", "_")
# 转换为大写
result = text.upper()

print(result)  # 输出: PYTHON__PROGRAMMING`
      },
    ],
    'python-flow-control': [
      {
        id: 'ex1',
        title: '条件判断',
        description: '学习if-elif-else语句的使用',
        difficulty: 'easy',
        task: '编写程序判断一个分数是否及格（60分及以上为及格），输出"及格"或"不及格"',
        hint: '使用if-else语句',
        initialCode: 'score = 75\n\n# 判断是否及格\n',
        solution: `score = 75

if score >= 60:
    print("及格")
else:
    print("不及格")`
      },
      {
        id: 'ex2',
        title: '成绩评级',
        description: '多重条件判断的应用',
        difficulty: 'medium',
        task: '根据分数输出等级：90分以上为A，80-89分为B，60-79分为C，60分以下为D',
        hint: '使用if-elif-else结构',
        initialCode: 'score = 85\n\n# 评级判断\n',
        solution: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "D"

print(f"成绩等级: {grade}")`
      },
      {
        id: 'ex3',
        title: '循环遍历',
        description: 'for循环和while循环的使用',
        difficulty: 'medium',
        task: '使用for循环输出1-10的平方数，使用while循环计算1+2+3+...+10的和',
        hint: '使用range()生成序列，使用累加器计算和',
        initialCode: '# for循环输出平方\nprint("平方数:")\n\n# while循环计算和\nsum = 0\ni = 1\n\nprint(f"和: {sum}")',
        solution: `# for循环输出平方
print("平方数:")
for i in range(1, 11):
    print(f"{i}的平方是 {i**2}")

# while循环计算和
sum = 0
i = 1
while i <= 10:
    sum += i
    i += 1

print(f"和: {sum}")`
      },
    ],
    'python-functions': [
      {
        id: 'ex1',
        title: '定义简单函数',
        description: '学习函数的定义和调用',
        difficulty: 'easy',
        task: '定义一个函数 greet()，返回 "Hello, World!"，然后调用并输出结果',
        hint: '使用def关键字定义函数',
        initialCode: '# 定义函数\n\n# 调用函数\nresult = greet()\nprint(result)',
        solution: `def greet():
    return "Hello, World!"

result = greet()
print(result)`
      },
      {
        id: 'ex2',
        title: '带参数的函数',
        description: '函数的参数传递',
        difficulty: 'medium',
        task: '定义一个函数 calculate_area(radius)，计算并返回圆的面积（使用公式：π * radius²）',
        hint: '导入math模块使用pi常量',
        initialCode: 'import math\n\n# 定义计算面积的函数\n\n# 测试\narea = calculate_area(5)\nprint(f"半径为5的圆面积是: {area}")',
        solution: `import math

def calculate_area(radius):
    return math.pi * radius ** 2

# 测试
area = calculate_area(5)
print(f"半径为5的圆面积是: {area}")`
      },
      {
        id: 'ex3',
        title: '递归函数',
        description: '理解递归调用的概念',
        difficulty: 'hard',
        task: '使用递归函数计算斐波那契数列的第n项（F(n) = F(n-1) + F(n-2)，F(1)=1, F(2)=1）',
        hint: '递归终止条件是n<=2',
        initialCode: '# 定义递归函数\ndef fibonacci(n):\n    pass  # 请实现\n\n# 测试\nfor i in range(1, 11):\n    print(f"F({i}) = {fibonacci(i)}")',
        solution: `def fibonacci(n):
    if n <= 2:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

# 测试
for i in range(1, 11):
    print(f"F({i}) = {fibonacci(i)}")`
      },
    ],
    'python-data-analysis': [
      {
        id: 'ex1',
        title: '创建DataFrame',
        description: '学习使用Pandas创建数据框',
        difficulty: 'easy',
        task: '创建一个包含3个学生信息的DataFrame，包含姓名、年龄、数学成绩三列，然后输出DataFrame',
        hint: '使用字典创建DataFrame',
        initialCode: 'import pandas as pd\n\n# 创建学生数据\ndata = {\n    "姓名": [],\n    "年龄": [],\n    "数学成绩": []\n}\n\n# 创建DataFrame\ndf = \n\n# 输出DataFrame\nprint(df)',
        solution: `import pandas as pd

# 创建学生数据
data = {
    "姓名": ["张三", "李四", "王五"],
    "年龄": [18, 19, 17],
    "数学成绩": [95, 88, 76]
}

# 创建DataFrame
df = pd.DataFrame(data)

# 输出DataFrame
print(df)`
      },
      {
        id: 'ex2',
        title: '数据统计分析',
        description: '使用NumPy和Pandas进行数据分析',
        difficulty: 'medium',
        task: '计算数学成绩的平均分、最高分、最低分和标准差',
        hint: '使用pandas的mean(), max(), min()方法和numpy的std()函数',
        initialCode: 'import pandas as pd\nimport numpy as np\n\nscores = pd.Series([95, 88, 76, 92, 85, 78, 90, 88, 82, 79])\n\n# 计算统计指标\navg_score = \nmax_score = \nmin_score = \nstd_score = \n\nprint(f"平均分: {avg_score:.2f}")\nprint(f"最高分: {max_score}")\nprint(f"最低分: {min_score}")\nprint(f"标准差: {std_score:.2f}")',
        solution: `import pandas as pd
import numpy as np

scores = pd.Series([95, 88, 76, 92, 85, 78, 90, 88, 82, 79])

# 计算统计指标
avg_score = scores.mean()
max_score = scores.max()
min_score = scores.min()
std_score = np.std(scores)

print(f"平均分: {avg_score:.2f}")
print(f"最高分: {max_score}")
print(f"最低分: {min_score}")
print(f"标准差: {std_score:.2f}")`
      },
      {
        id: 'ex3',
        title: '数据筛选与排序',
        description: 'DataFrame的高级操作',
        difficulty: 'hard',
        task: '筛选出成绩大于85分的学生，并按成绩降序排列',
        hint: '使用布尔索引筛选，使用sort_values()排序',
        initialCode: 'import pandas as pd\n\ndata = {\n    "姓名": ["张三", "李四", "王五", "赵六", "钱七"],\n    "成绩": [92, 85, 78, 88, 95]\n}\ndf = pd.DataFrame(data)\n\n# 筛选成绩大于85分的学生\nhigh_scores = \n\n# 按成绩降序排列\nhigh_scores_sorted = \n\nprint("成绩大于85分的学生（降序）:")\nprint(high_scores_sorted)',
        solution: `import pandas as pd

data = {
    "姓名": ["张三", "李四", "王五", "赵六", "钱七"],
    "成绩": [92, 85, 78, 88, 95]
}
df = pd.DataFrame(data)

# 筛选成绩大于85分的学生
high_scores = df[df["成绩"] > 85]

# 按成绩降序排列
high_scores_sorted = high_scores.sort_values("成绩", ascending=False)

print("成绩大于85分的学生（降序）:")
print(high_scores_sorted)`
      },
    ],
  };

  return exercisesMap[courseId] || [
    {
      id: 'ex-default',
      title: 'Hello Python',
      description: '编写你的第一个Python程序',
      difficulty: 'easy',
      task: '使用print()函数输出 "Hello, Python!"',
      hint: '使用print()函数输出字符串',
      initialCode: '# 在这里编写你的第一个Python程序\n',
      solution: `print("Hello, Python!")`
    },
  ];
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUserStore();
  const { currentCourse, sections, lectures, loadCourse, loadSections, loadLectures, loading } = useCourseStore();
  const { progress, exerciseCompletions, markLectureComplete } = useProgressStore();
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedLecture, setSelectedLecture] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<ExerciseData | null>(null);
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (id) {
      loadCourse(id);
      loadSections(id);
    }
  }, [id]);

  useEffect(() => {
    if (sections.length > 0) {
      sections.forEach(section => {
        loadLectures(section.id);
      });
    }
  }, [sections]);

  useEffect(() => {
    if (id) {
      const defaultExercises = getDefaultExercises(id);
      setExercises(defaultExercises);
    }
  }, [id]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleLectureClick = (lectureId: string) => {
    setSelectedLecture(lectureId);
    setSelectedExercise(null);
    if (user) {
      markLectureComplete(user.id, lectureId);
    }
  };

  const handleExerciseClick = (exercise: ExerciseData) => {
    setSelectedExercise(exercise);
    setSelectedLecture(null);
  };

  const toggleSolution = (exerciseId: string) => {
    setShowSolutions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '简单';
      case 'medium':
        return '中等';
      case 'hard':
        return '困难';
      default:
        return difficulty;
    }
  };

  const getCourseIcon = () => {
    if (!currentCourse?.cover_image_url) {
      return <Book className="h-24 w-24 text-blue-600" />;
    }
    return null;
  };

  if (loading || !currentCourse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">加载课程内容...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回课程列表</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* 课程头部 */}
        <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
            {currentCourse.cover_image_url && (
              <img 
                src={currentCourse.cover_image_url} 
                alt={currentCourse.title}
                className="w-full h-full object-cover opacity-30"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  currentCourse.level === 'beginner' ? 'bg-green-500 text-white' :
                  currentCourse.level === 'intermediate' ? 'bg-blue-500 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {currentCourse.level === 'beginner' ? '初级' : 
                   currentCourse.level === 'intermediate' ? '中级' : '高级'}
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white">
                  {sections.length} 个章节
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white">
                  {exercises.length} 道练习
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">{currentCourse.title}</h1>
              <p className="text-white/90 text-lg max-w-3xl">{currentCourse.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧边栏 - 课程大纲 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Book className="w-6 h-6 text-blue-600" />
                课程大纲
              </h2>
              
              <div className="space-y-3">
                {sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                          {section.order_number}
                        </div>
                        <span className="font-semibold text-gray-800">{section.title}</span>
                      </div>
                      {expandedSections[section.id] ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedSections[section.id] && (
                      <div className="border-t border-gray-200 p-3 space-y-2">
                        {lectures
                          .filter(lecture => lecture.section_id === section.id)
                          .map((lecture) => (
                            <button
                              key={lecture.id}
                              onClick={() => handleLectureClick(lecture.id)}
                              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                                selectedLecture === lecture.id 
                                  ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600' 
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {progress[lecture.id] ? (
                                <Check className="w-5 h-5 text-green-500" />
                              ) : (
                                <Play className="w-5 h-5 text-blue-500" />
                              )}
                              <span className="text-sm font-medium flex-1 text-left">{lecture.title}</span>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* 练习题区域 */}
                <div className="border-2 border-blue-200 rounded-xl overflow-hidden mt-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      实践练习
                    </h3>
                    <p className="text-blue-100 text-sm mt-1">{exercises.length} 道练习题等你挑战</p>
                  </div>
                  <div className="p-3 space-y-2 max-h-96 overflow-y-auto">
                    {exercises.map((exercise) => (
                      <button
                        key={exercise.id}
                        onClick={() => handleExerciseClick(exercise)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedExercise?.id === exercise.id 
                            ? 'bg-blue-100 border-l-4 border-blue-600' 
                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="font-semibold text-gray-800 text-sm">{exercise.title}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getDifficultyStyle(exercise.difficulty)}`}>
                            {getDifficultyText(exercise.difficulty)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2">{exercise.description}</p>
                        {exerciseCompletions[exercise.id] && (
                          <div className="flex items-center gap-1 mt-2 text-green-600 text-xs">
                            <Check className="w-4 h-4" />
                            <span>已完成</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg">
              {selectedLecture ? (
                // 课程内容视图
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {lectures.find(l => l.id === selectedLecture)?.title}
                      </h2>
                      <p className="text-gray-600">课程内容</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
                    <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center">
                        <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">视频课程</p>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">学习目标</h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">理解课程的核心概念</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">掌握相关的编程技能</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">能够独立完成相关练习</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">课程详情</h3>
                      <div className="bg-white rounded-lg p-6 text-gray-700 leading-relaxed">
                        <p className="mb-4">
                          本课程将详细介绍相关的知识点和技能。通过本课程的学习，你将能够：
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>掌握基础概念和原理</li>
                          <li>学会实际应用技巧</li>
                          <li>培养解决问题的思维方式</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedExercise ? (
                // 练习题视图
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedExercise.title}</h2>
                        <p className="text-gray-600">{selectedExercise.description}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${getDifficultyStyle(selectedExercise.difficulty)}`}>
                      {getDifficultyText(selectedExercise.difficulty)}
                    </span>
                  </div>

                  {/* 任务要求 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-amber-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-2">任务要求</h3>
                        <p className="text-gray-700 whitespace-pre-line">{selectedExercise.task}</p>
                      </div>
                    </div>
                  </div>

                  {/* 提示 */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-bold text-blue-800 mb-2">提示</h3>
                        <p className="text-blue-700 font-mono">{selectedExercise.hint}</p>
                      </div>
                    </div>
                  </div>

                  {/* 代码编辑器 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-gray-600" />
                      代码编辑器
                    </h3>
                    <PythonExecutor 
                      initialCode={selectedExercise.initialCode}
                      height="450px"
                    />
                  </div>

                  {/* 参考答案 */}
                  {selectedExercise.solution && (
                    <div className="border-t border-gray-200 pt-6">
                      <button
                        onClick={() => toggleSolution(selectedExercise.id)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-4"
                      >
                        {showSolutions[selectedExercise.id] ? (
                          <>
                            <ChevronDown className="w-5 h-5" />
                            收起参考答案
                          </>
                        ) : (
                          <>
                            <ChevronRight className="w-5 h-5" />
                            查看参考答案
                          </>
                        )}
                      </button>
                      
                      {showSolutions[selectedExercise.id] && (
                        <div className="bg-gray-900 rounded-lg p-6">
                          <h4 className="text-white font-semibold mb-3">参考答案：</h4>
                          <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            {selectedExercise.solution}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // 默认视图 - 欢迎和统计
                <div className="p-8 text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Book className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">欢迎学习本课程</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                      {currentCourse.description}
                    </p>
                  </div>

                  {/* 统计卡片 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Book className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-3xl font-bold text-blue-600">{sections.length}</p>
                          <p className="text-gray-600 text-sm">课程章节</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Code className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-3xl font-bold text-green-600">{exercises.length}</p>
                          <p className="text-gray-600 text-sm">实践练习</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-3xl font-bold text-purple-600">0</p>
                          <p className="text-gray-600 text-sm">已完成</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 开始提示 */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-3">开始你的学习之旅</h3>
                    <p className="text-blue-100 mb-6">
                      从左侧课程大纲选择章节开始学习，或直接挑战实践练习题
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <button
                        onClick={() => exercises.length > 0 && handleExerciseClick(exercises[0])}
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                      >
                        立即开始练习
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
