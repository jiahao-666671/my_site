import React, { useEffect } from 'react';
import { useUserStore, useProgressStore, useAchievementStore } from '../utils/store';
import { User, Book, Award, BarChart3, Calendar, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useUserStore();
  const { loadProgress } = useProgressStore();
  const { achievements, loadAchievements, loading } = useAchievementStore();

  useEffect(() => {
    if (user) {
      loadProgress(user.id);
      loadAchievements(user.id);
    }
  }, [user]);

  // 模拟学习统计数据
  const learningStats = {
    totalCourses: 10,
    completedCourses: 3,
    totalExercises: 50,
    completedExercises: 15,
    totalAssessments: 5,
    passedAssessments: 3,
    streak: 5,
  };

  // 模拟最近学习记录
  const recentActivities = [
    {
      id: 1,
      type: 'course',
      title: 'Python基础与数据分析入门',
      action: '完成了第3章',
      date: '2026-04-08',
    },
    {
      id: 2,
      type: 'exercise',
      title: '练习：计算平均值',
      action: '提交了答案',
      date: '2026-04-07',
    },
    {
      id: 3,
      type: 'assessment',
      title: 'Python基础测评',
      action: '获得了85分',
      date: '2026-04-06',
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
    },
    {
      id: 2,
      name: '数据分析新手',
      description: '完成5个练习',
      icon: '📊',
      earnedAt: '2026-04-03',
    },
    {
      id: 3,
      name: '测评达人',
      description: '获得一次满分测评',
      icon: '💯',
      earnedAt: '2026-04-05',
    },
    {
      id: 4,
      name: '学习标兵',
      description: '连续7天学习',
      icon: '🔥',
      earnedAt: '2026-04-07',
    },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">请先登录</h2>
            <p className="text-gray-600 mb-6">登录后即可查看个人学习记录和成就</p>
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block"
            >
              去登录
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-4">{user.email}</p>
                    <div className="flex space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.role === 'student' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {user.role === 'student' ? '学生' : '教师'}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        注册于 {new Date(user.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>编辑资料</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Book className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">课程完成</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {learningStats.completedCourses}/{learningStats.totalCourses}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(learningStats.completedCourses / learningStats.totalCourses) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">练习完成</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {learningStats.completedExercises}/{learningStats.totalExercises}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${(learningStats.completedExercises / learningStats.totalExercises) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">测评通过</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {learningStats.passedAssessments}/{learningStats.totalAssessments}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full" 
                style={{ width: `${(learningStats.passedAssessments / learningStats.totalAssessments) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold">连续学习</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {learningStats.streak} 天
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full" 
                style={{ width: `${(learningStats.streak / 30) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">最近学习记录</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.type === 'course' ? 'bg-blue-100 text-blue-600' : activity.type === 'exercise' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                    {activity.type === 'course' && <Book className="h-5 w-5" />}
                    {activity.type === 'exercise' && <BarChart3 className="h-5 w-5" />}
                    {activity.type === 'assessment' && <Award className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.action}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                查看全部记录
              </button>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">我的成就</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {loading ? (
                Array(4).fill(0).map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 animate-pulse">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))
              ) : achievements.length === 0 ? (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600">暂无成就，继续努力学习吧！</p>
                </div>
              ) : (
                mockAchievements.map((achievement) => (
                  <div key={achievement.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                    <p className="text-gray-400 text-xs">获得于 {achievement.earnedAt}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">我的证书</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Python基础与数据分析入门</h3>
                  <span className="text-green-600 font-medium">已完成</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">颁发于 2026-04-01</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors w-full">
                  查看证书
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">商务数据分析实战</h3>
                  <span className="text-yellow-600 font-medium">进行中</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">完成度 60%</p>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors w-full">
                  继续学习
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;