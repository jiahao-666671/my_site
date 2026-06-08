import React, { useState } from 'react';
import { useUserStore, useProgressStore } from '../utils/store';
import { Book, Video, FileText, Code, Check, ChevronDown, ChevronRight, Play } from 'lucide-react';

const AdvancedDataAnalysis: React.FC = () => {
  const { user } = useUserStore();
  const { progress, exerciseCompletions, markLectureComplete, submitExercise } = useProgressStore();
  const [expandedSections, setExpandedSections] = useState<Record<string, string>>({});
  const [activeContent, setActiveContent] = useState<{ type: 'lecture' | 'exercise' | 'assessment'; id: string } | null>(null);
  const [code, setCode] = useState('');
  const [testResult, setTestResult] = useState<{ success: boolean; output: string } | null>(null);

  // 模拟课程数据
  const course = {
    id: 'advanced-data-analysis',
    title: '高级数据分析与可视化',
    description: '本课程深入讲解高级数据分析技术和数据可视化方法，包括机器学习基础、数据挖掘技术、高级数据可视化工具等内容。',
    level: 'advanced',
    category: 'advanced',
  };

  // 模拟章节数据
  const sections = [
    {
      id: 'section-1',
      title: '高级数据处理技术',
      order_number: 1,
    },
    {
      id: 'section-2',
      title: '数据可视化高级技巧',
      order_number: 2,
    },
    {
      id: 'section-3',
      title: '机器学习基础',
      order_number: 3,
    },
    {
      id: 'section-4',
      title: '数据挖掘技术',
      order_number: 4,
    },
  ];

  // 模拟课时数据
  const lectures = [
    {
      id: 'lecture-1',
      section_id: 'section-1',
      title: 'pandas高级操作',
      content_type: 'video',
      content_url: '#',
      duration: 45,
      order_number: 1,
    },
    {
      id: 'lecture-2',
      section_id: 'section-1',
      title: '数据清洗与预处理',
      content_type: 'video',
      content_url: '#',
      duration: 35,
      order_number: 2,
    },
    {
      id: 'lecture-3',
      section_id: 'section-2',
      title: 'Matplotlib高级图表',
      content_type: 'video',
      content_url: '#',
      duration: 40,
      order_number: 1,
    },
    {
      id: 'lecture-4',
      section_id: 'section-2',
      title: 'Seaborn数据可视化',
      content_type: 'video',
      content_url: '#',
      duration: 30,
      order_number: 2,
    },
    {
      id: 'lecture-5',
      section_id: 'section-3',
      title: '机器学习基础概念',
      content_type: 'video',
      content_url: '#',
      duration: 50,
      order_number: 1,
    },
    {
      id: 'lecture-6',
      section_id: 'section-3',
      title: '监督学习算法',
      content_type: 'video',
      content_url: '#',
      duration: 45,
      order_number: 2,
    },
    {
      id: 'lecture-7',
      section_id: 'section-4',
      title: '数据挖掘技术概述',
      content_type: 'video',
      content_url: '#',
      duration: 40,
      order_number: 1,
    },
    {
      id: 'lecture-8',
      section_id: 'section-4',
      title: '关联规则挖掘',
      content_type: 'video',
      content_url: '#',
      duration: 35,
      order_number: 2,
    },
  ];

  // 模拟练习数据
  const exercises = [
    {
      id: 'exercise-1',
      section_id: 'section-1',
      title: '高级数据处理练习',
      description: '使用pandas进行复杂的数据处理操作，包括合并、分组、透视表等高级功能。',
      difficulty: 'medium',
      order_number: 1,
    },
    {
      id: 'exercise-2',
      section_id: 'section-2',
      title: '数据可视化练习',
      description: '使用Matplotlib和Seaborn创建各种类型的可视化图表，包括折线图、柱状图、热力图等。',
      difficulty: 'medium',
      order_number: 1,
    },
    {
      id: 'exercise-3',
      section_id: 'section-3',
      title: '机器学习模型练习',
      description: '使用scikit-learn库构建和训练机器学习模型，包括数据分割、模型训练、评估等步骤。',
      difficulty: 'hard',
      order_number: 1,
    },
    {
      id: 'exercise-4',
      section_id: 'section-4',
      title: '数据挖掘练习',
      description: '使用Apriori算法进行关联规则挖掘，分析商品购买数据中的关联关系。',
      difficulty: 'hard',
      order_number: 1,
    },
  ];

  // 模拟测评数据
  const assessments = [
    {
      id: 'assessment-1',
      title: '高级数据分析综合测评',
      description: '测试你对高级数据分析和可视化技术的掌握程度，包括数据处理、可视化、机器学习和数据挖掘等方面的知识。',
      total_points: 100,
      time_limit: 120,
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] ? '' : sectionId
    }));
  };

  const handleLectureClick = (lectureId: string) => {
    setActiveContent({ type: 'lecture', id: lectureId });
    if (user) {
      markLectureComplete(user.id, lectureId);
    }
  };

  const handleExerciseClick = (exerciseId: string) => {
    setActiveContent({ type: 'exercise', id: exerciseId });
    setCode('');
    setTestResult(null);
  };

  const handleAssessmentClick = (assessmentId: string) => {
    setActiveContent({ type: 'assessment', id: assessmentId });
  };

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleRunCode = () => {
    // 模拟代码执行
    const success = Math.random() > 0.3;
    setTestResult({
      success: success,
      output: success ? '代码执行成功！' : '代码执行失败，请检查语法。'
    });
  };

  const handleSubmitExercise = () => {
    if (user && activeContent?.type === 'exercise' && testResult?.success) {
      submitExercise(user.id, activeContent.id, code, true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-200 h-64 flex items-center justify-center">
              <Book className="h-24 w-24 text-blue-600" />
            </div>
            <div className="lg:col-span-2 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.level === 'beginner' ? 'bg-green-100 text-green-800' : course.level === 'intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {course.level === 'beginner' ? '初级' : course.level === 'intermediate' ? '中级' : '高级'}
                  </span>
                  <h1 className="text-3xl font-bold mt-2 mb-2">{course.title}</h1>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors">
                  开始学习
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">8 课时</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">4 个练习</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">1 次测评</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Course Outline */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">课程大纲</h2>
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex justify-between items-center w-full text-left font-medium"
                    >
                      <span>第 {section.order_number} 章：{section.title}</span>
                      {expandedSections[section.id] ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedSections[section.id] && (
                      <div className="mt-3 space-y-2 pl-4">
                        {lectures
                          .filter(lecture => lecture.section_id === section.id)
                          .map((lecture) => (
                            <button
                              key={lecture.id}
                              onClick={() => handleLectureClick(lecture.id)}
                              className={`flex items-center space-x-2 w-full text-left p-2 rounded-md transition-colors ${activeContent?.type === 'lecture' && activeContent.id === lecture.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                            >
                              {progress[lecture.id] ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Play className="h-4 w-4 text-gray-500" />
                              )}
                              <span className="text-sm">{lecture.title}</span>
                            </button>
                          ))}
                        {exercises
                          .filter(exercise => exercise.section_id === section.id)
                          .map((exercise) => (
                            <button
                              key={exercise.id}
                              onClick={() => handleExerciseClick(exercise.id)}
                              className={`flex items-center space-x-2 w-full text-left p-2 rounded-md transition-colors ${activeContent?.type === 'exercise' && activeContent.id === exercise.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                            >
                              {exerciseCompletions[exercise.id] ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Code className="h-4 w-4 text-gray-500" />
                              )}
                              <span className="text-sm">练习：{exercise.title}</span>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
                {assessments.map((assessment) => (
                  <div key={assessment.id} className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => handleAssessmentClick(assessment.id)}
                      className={`flex items-center space-x-2 w-full text-left p-2 rounded-md transition-colors ${activeContent?.type === 'assessment' && activeContent.id === assessment.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    >
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">课程测评：{assessment.title}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">
              {activeContent ? (
                <> 
                  {activeContent.type === 'lecture' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {lectures.find(l => l.id === activeContent.id)?.title}
                      </h2>
                      <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                            <Video className="h-12 w-12 text-gray-400" />
                          </div>
                        </div>
                        <div className="prose max-w-none">
                          <p>这里是课程内容的详细说明，包括视频讲解的文字稿、代码示例和相关资源链接。</p>
                          <p>学习目标：</p>
                          <ul>
                            <li>掌握高级数据处理技术</li>
                            <li>学习数据可视化高级技巧</li>
                            <li>了解机器学习基础概念</li>
                            <li>掌握数据挖掘技术</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="text-gray-600 hover:text-gray-800">
                          上一课
                        </button>
                        <button className="text-blue-600 hover:text-blue-800">
                          下一课
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeContent.type === 'exercise' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        练习：{exercises.find(e => e.id === activeContent.id)?.title}
                      </h2>
                      <div className="mb-6">
                        <p className="text-gray-600 mb-4">
                          {exercises.find(e => e.id === activeContent.id)?.description}
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                          <h3 className="font-semibold mb-2">任务要求：</h3>
                          <p>根据题目要求编写Python代码，实现相应的功能。</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">代码编辑器：</h3>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <textarea
                            value={code}
                            onChange={(e) => handleCodeChange(e.target.value)}
                            className="w-full h-64 bg-transparent text-green-400 font-mono resize-none focus:outline-none"
                            placeholder="在此编写你的代码..."
                          />
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <button
                            onClick={handleRunCode}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                          >
                            运行代码
                          </button>
                          <button
                            onClick={handleSubmitExercise}
                            disabled={!testResult?.success}
                            className={`px-4 py-2 rounded-md transition-colors ${testResult?.success ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                          >
                            提交练习
                          </button>
                        </div>
                      </div>
                      {testResult && (
                        <div className={`mt-4 p-4 rounded-md ${testResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          <h3 className="font-semibold mb-2">测试结果：</h3>
                          <p>{testResult.output}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeContent.type === 'assessment' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        课程测评：{assessments.find(a => a.id === activeContent.id)?.title}
                      </h2>
                      <div className="mb-6">
                        <p className="text-gray-600 mb-4">
                          {assessments.find(a => a.id === activeContent.id)?.description}
                        </p>
                        <div className="bg-yellow-100 rounded-lg p-4 mb-4">
                          <h3 className="font-semibold mb-2">测评说明：</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>总共有 10 道题目</li>
                            <li>总分为 100 分</li>
                            <li>考试时间为 120 分钟</li>
                            <li>提交后将立即显示成绩</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-4">开始测评</h3>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors">
                          开始考试
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <Book className="h-16 w-16 text-gray-300 mb-4" />
                  <h2 className="text-xl font-semibold mb-2">选择学习内容</h2>
                  <p className="text-gray-600">从左侧课程大纲中选择要学习的章节或练习</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDataAnalysis;