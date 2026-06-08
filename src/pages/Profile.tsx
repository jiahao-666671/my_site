import React, { useEffect } from 'react';
import { useUserStore, useProgressStore, useAchievementStore } from '../utils/store';
import { User, Book, Award, BarChart3, Calendar, Edit, TrendingUp, Clock, Target, Star, ChevronRight, ArrowRight, CheckCircle, PlayCircle, Award as AwardIcon, Bookmark, Clock as ClockIcon } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useUserStore();
  const { loadProgress } = useProgressStore();
  const { achievements, loadAchievements, loading } = useAchievementStore();

  // 模拟用户数据，方便查看页面效果
  const mockUser = {
    id: '1',
    name: '吕仲豪',
    email: 'lvzhonghao@example.com',
    role: 'student',
    created_at: '2026-01-01T00:00:00Z',
    bio: '商务数据分析与应用专业学生，热爱数据分析和可视化，致力于成为数据分析师',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20student%20profile%20photo%20portrait%20asian%20male&image_size=square',
    social: {
      github: 'https://github.com/lvzhonghao',
      linkedin: 'https://linkedin.com/in/lvzhonghao',
      portfolio: 'https://lvzhonghao.com'
    }
  };
  
  const displayUser = user || mockUser;

  useEffect(() => {
    if (displayUser) {
      loadProgress(displayUser.id);
      loadAchievements(displayUser.id);
    }
  }, [displayUser]);

  // 模拟学习统计数据
  const learningStats = {
    totalCourses: 10,
    completedCourses: 3,
    totalExercises: 50,
    completedExercises: 15,
    totalAssessments: 5,
    passedAssessments: 3,
    streak: 5,
    totalHours: 45,
    averageScore: 85
  };

  // 模拟最近学习记录
  const recentActivities = [
    {
      id: 1,
      type: 'course',
      title: 'Python基础与数据分析入门',
      action: '完成了第3章',
      date: '2026-04-08',
      time: '2小时',
      status: 'completed'
    },
    {
      id: 2,
      type: 'exercise',
      title: '练习：计算平均值',
      action: '提交了答案',
      date: '2026-04-07',
      time: '30分钟',
      status: 'submitted'
    },
    {
      id: 3,
      type: 'assessment',
      title: 'Python基础测评',
      action: '获得了85分',
      date: '2026-04-06',
      time: '1小时',
      status: 'passed'
    },
    {
      id: 4,
      type: 'course',
      title: '商务数据分析实战',
      action: '开始学习第2章',
      date: '2026-04-05',
      time: '1.5小时',
      status: 'in-progress'
    },
  ];

  // 模拟成就数据
  const mockAchievements = [
    {
      id: 1,
      name: '初出茅庐',
      description: '完成第一门课程',
      icon: '🏆',
      earnedAt: '2026-04-01',
      rarity: 'common'
    },
    {
      id: 2,
      name: '数据分析新手',
      description: '完成5个练习',
      icon: '📊',
      earnedAt: '2026-04-03',
      rarity: 'common'
    },
    {
      id: 3,
      name: '测评达人',
      description: '获得一次满分测评',
      icon: '💯',
      earnedAt: '2026-04-05',
      rarity: 'rare'
    },
    {
      id: 4,
      name: '学习标兵',
      description: '连续7天学习',
      icon: '🔥',
      earnedAt: '2026-04-07',
      rarity: 'epic'
    },
  ];

  // 模拟课程数据
  const courses = [
    {
      id: 1,
      title: 'Python基础与数据分析入门',
      status: 'completed',
      completion: 100,
      date: '2026-04-01',
      color: 'bg-emerald-500',
      instructor: '张教授',
      duration: '12小时'
    },
    {
      id: 2,
      title: '商务数据分析实战',
      status: 'in-progress',
      completion: 60,
      date: '2026-04-03',
      color: 'bg-blue-500',
      instructor: '李老师',
      duration: '15小时'
    },
    {
      id: 3,
      title: '高级数据分析与可视化',
      status: 'new',
      completion: 0,
      date: '2026-04-10',
      color: 'bg-purple-500',
      instructor: '王博士',
      duration: '18小时'
    },
  ];

  // 模拟学习目标
  const learningGoals = [
    {
      id: 1,
      title: '完成Python基础课程',
      progress: 100,
      deadline: '2026-04-15',
      status: 'completed'
    },
    {
      id: 2,
      title: '完成商务数据分析实战',
      progress: 60,
      deadline: '2026-04-30',
      status: 'in-progress'
    },
    {
      id: 3,
      title: '开始学习高级数据分析',
      progress: 0,
      deadline: '2026-05-15',
      status: 'pending'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">数据分析学习平台</h1>
            <p className="text-sm text-gray-600">个人学习中心</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</a></li>
              <li><a href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">课程</a></li>
              <li><a href="/profile" className="text-blue-600 font-medium">个人中心</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">欢迎回来，{displayUser.name}！</h1>
                <p className="text-blue-100 text-lg mb-6">继续你的学习之旅，提升数据分析技能</p>
                <div className="flex flex-wrap gap-4">
                  <a href="/courses" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg">
                    <Book className="h-5 w-5" />
                    <span>浏览课程</span>
                  </a>
                  <a href="#goals" className="bg-blue-500/30 text-white hover:bg-blue-500/50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 backdrop-blur-sm">
                    <Target className="h-5 w-5" />
                    <span>查看学习目标</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-white rounded-full border-4 border-blue-200 shadow-xl flex items-center justify-center">
                  {displayUser?.avatar ? (
                    <img 
                      src={displayUser.avatar} 
                      alt={displayUser.name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-20 w-20 text-blue-600" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Profile Card */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">个人资料</h2>
                <p className="text-gray-600">查看和编辑你的个人信息</p>
              </div>
              <button className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Edit className="h-4 w-4" />
                <span>编辑资料</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">基本信息</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">姓名</p>
                        <p className="font-medium">{displayUser.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">邮箱</p>
                        <p className="font-medium">{displayUser.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">角色</p>
                        <p className={`font-medium ${displayUser.role === 'student' ? 'text-blue-600' : 'text-green-600'}`}>
                          {displayUser.role === 'student' ? '学生' : '教师'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">注册日期</p>
                        <p className="font-medium">{new Date(displayUser.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">个人简介</h3>
                    <p className="text-gray-600">{displayUser?.bio || ''}</p>
                  </div>
                  {displayUser?.social && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">社交链接</h3>
                      <div className="flex space-x-4">
                        {displayUser?.social?.github && (
                          <a href={displayUser.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                              </svg>
                              <span>GitHub</span>
                            </span>
                          </a>
                        )}
                        {displayUser?.social?.linkedin && (
                          <a href={displayUser.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                              </svg>
                              <span>LinkedIn</span>
                            </span>
                          </a>
                        )}
                        {displayUser?.social?.portfolio && (
                          <a href={displayUser.social.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="flex items-center space-x-1">
                              <Bookmark className="h-4 w-4" />
                              <span>作品集</span>
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">学习统计</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">总学习时长</span>
                        <span className="text-sm font-semibold text-blue-600">{learningStats.totalHours} 小时</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">平均测评分数</span>
                        <span className="text-sm font-semibold text-green-600">{learningStats.averageScore} 分</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${learningStats.averageScore}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">连续学习</span>
                        <span className="text-sm font-semibold text-orange-600">{learningStats.streak} 天</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${(learningStats.streak / 30) * 100}%` }}></div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">课程完成率</span>
                        <span className="text-sm font-semibold text-purple-600">
                          {Math.round((learningStats.completedCourses / learningStats.totalCourses) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Goals */}
        <section id="goals" className="mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">学习目标</h2>
                <p className="text-gray-600">追踪你的学习目标和进度</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg">
                <Target className="h-4 w-4" />
                <span>添加目标</span>
              </button>
            </div>
            <div className="space-y-4">
              {learningGoals.map((goal) => (
                <div key={goal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{goal.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">截止日期：{goal.deadline}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${goal.status === 'completed' ? 'bg-green-100 text-green-800' : goal.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {goal.status === 'completed' ? '已完成' : goal.status === 'in-progress' ? '进行中' : '未开始'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className={`h-2.5 rounded-full ${goal.status === 'completed' ? 'bg-green-500' : goal.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'}`} 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">{goal.progress}% 完成</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">最近学习记录</h2>
                <p className="text-gray-600">查看你的学习活动</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 transition-colors">
                <span>查看全部</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activity.type === 'course' ? 'bg-blue-100 text-blue-600' : activity.type === 'exercise' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                    {activity.type === 'course' && <Book className="h-6 w-6" />}
                    {activity.type === 'exercise' && <BarChart3 className="h-6 w-6" />}
                    {activity.type === 'assessment' && <Award className="h-6 w-6" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{activity.action}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>{activity.time}</span>
                      {activity.status === 'completed' && (
                        <span className="ml-3 flex items-center text-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          已完成
                        </span>
                      )}
                      {activity.status === 'in-progress' && (
                        <span className="ml-3 flex items-center text-blue-600">
                          <PlayCircle className="h-3 w-3 mr-1" />
                          进行中
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses and Achievements */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Book className="h-5 w-5 mr-2" />
                我的课程
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all group">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.status === 'completed' ? 'bg-green-100 text-green-800' : course.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                          {course.status === 'completed' ? '已完成' : course.status === 'in-progress' ? '进行中' : '新课程'}
                        </span>
                      </div>
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{course.instructor}</span>
                        <span className="mx-2">•</span>
                        <ClockIcon className="h-3 w-3 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div 
                          className={`h-2 rounded-full ${course.color}`} 
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">完成度: {course.completion}%</span>
                        <button className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${course.status === 'completed' ? 'bg-blue-600 hover:bg-blue-700 text-white' : course.status === 'in-progress' ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
                          {course.status === 'completed' ? '查看证书' : course.status === 'in-progress' ? '继续学习' : '开始学习'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="/courses" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center space-x-1 transition-colors">
                  <span>浏览全部课程</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* My Achievements */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <AwardIcon className="h-5 w-5 mr-2" />
                我的成就
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading ? (
                  Array(4).fill(0).map((_, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 animate-pulse">
                      <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))
                ) : achievements.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <div className="text-5xl mb-4">🏆</div>
                    <p className="text-gray-600">暂无成就，继续努力学习吧！</p>
                  </div>
                ) : (
                  mockAchievements.map((achievement) => (
                    <div key={achievement.id} className={`bg-gray-50 rounded-lg p-4 border ${achievement.rarity === 'epic' ? 'border-purple-200' : achievement.rarity === 'rare' ? 'border-blue-200' : 'border-gray-200'} hover:shadow-md transition-all transform hover:-translate-y-1`}>
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="font-semibold text-gray-800 mb-1">{achievement.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-400 text-xs">获得于 {achievement.earnedAt}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-800' : achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                          {achievement.rarity === 'epic' ? '史诗' : achievement.rarity === 'rare' ? '稀有' : '普通'}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6 text-center">
                <button className="text-orange-600 hover:text-orange-800 font-medium flex items-center justify-center space-x-1 transition-colors">
                  <span>查看全部成就</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-600 mb-2">数据分析学习平台</h3>
              <p className="text-gray-600">© 2026 版权所有</p>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
              <a href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">课程</a>
              <a href="/profile" className="text-blue-600 font-medium">个人中心</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">关于我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;