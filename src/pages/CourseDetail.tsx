import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCourseStore, useUserStore, useProgressStore } from '../utils/store';
import { Book, Video, FileText, Code, Check, ChevronDown, ChevronRight, Play } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useUserStore();
  const { currentCourse, sections, lectures, exercises, assessments, loadCourse, loadSections, loadLectures, loadExercises, loadAssessments, loading } = useCourseStore();
  const { progress, exerciseCompletions, markLectureComplete, submitExercise } = useProgressStore();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [activeContent, setActiveContent] = useState<{ type: 'lecture' | 'exercise' | 'assessment'; id: string } | null>(null);
  const [code, setCode] = useState('');
  const [testResult, setTestResult] = useState<{ success: boolean; output: string } | null>(null);

  useEffect(() => {
    if (id) {
      loadCourse(id);
      loadSections(id);
    }
  }, [id]);

  useEffect(() => {
    sections.forEach(section => {
      loadLectures(section.id);
      loadExercises(section.id);
    });
    if (id) {
      loadAssessments(id);
    }
  }, [sections, id]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
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

  if (loading || !currentCourse) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-6"></div>
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="lg:col-span-2">
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${currentCourse.level === 'beginner' ? 'bg-green-100 text-green-800' : currentCourse.level === 'intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {currentCourse.level === 'beginner' ? '初级' : currentCourse.level === 'intermediate' ? '中级' : '高级'}
                  </span>
                  <h1 className="text-3xl font-bold mt-2 mb-2">{currentCourse.title}</h1>
                  <p className="text-gray-600 mb-4">{currentCourse.description}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors">
                  开始学习
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">10 课时</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">5 个练习</span>
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
                            <li>掌握Python基础语法</li>
                            <li>了解数据分析的基本概念</li>
                            <li>学会使用pandas库进行数据处理</li>
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
                          <p>编写一个Python函数，计算给定列表中所有元素的平均值。</p>
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
                            <li>考试时间为 60 分钟</li>
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

export default CourseDetail;