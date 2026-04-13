import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore, useCourseStore, useProgressStore } from '../utils/store';
import { Book, BarChart3, Code, Award, ChevronRight, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const { user, loadUser } = useUserStore();
  const { courses, loadCourses } = useCourseStore();
  const { loadProgress } = useProgressStore();

  useEffect(() => {
    loadUser();
    loadCourses();
    if (user) {
      loadProgress(user.id);
    }
  }, [user]);

  // 课程分类
  const categories = [
    { id: 'basic', name: '基础课程', icon: <Book className="h-6 w-6" />, color: 'bg-blue-500' },
    { id: 'business', name: '商务分析', icon: <BarChart3 className="h-6 w-6" />, color: 'bg-green-500' },
    { id: 'advanced', name: '高级分析', icon: <Code className="h-6 w-6" />, color: 'bg-purple-500' },
    { id: 'tools', name: '工具应用', icon: <Award className="h-6 w-6" />, color: 'bg-orange-500' },
  ];

  // 模拟学习进度数据
  const progressData = {
    totalCourses: 10,
    completedCourses: 3,
    totalExercises: 50,
    completedExercises: 15,
    streak: 5,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                掌握数据分析技能，开启职业新篇章
              </h1>
              <p className="text-xl mb-8">
                专为商务数据分析与应用专业学生设计的在线学习平台，
                提供完整的课程体系和互动式学习体验。
              </p>
              <Link
                to="/courses"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors flex items-center space-x-2 inline-flex"
              >
                <span>浏览课程</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">平台特色</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <Book className="h-5 w-5" />
                    </div>
                    <span>完整的课程体系，覆盖数据分析核心技能</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <Code className="h-5 w-5" />
                    </div>
                    <span>互动式学习模块，在线编写和测试代码</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <span>学、练习、测评一体化，巩固学习成果</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>成就激励系统，激发学习动力</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">课程分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className={`${category.color} rounded-full p-3 mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">
                  {category.name === '基础课程' && 'Python基础、数据分析入门'}
                  {category.name === '商务分析' && '市场分析、客户行为分析'}
                  {category.name === '高级分析' && '机器学习、数据挖掘'}
                  {category.name === '工具应用' && 'Excel、Tableau、Power BI'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">推荐课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-blue-200 flex items-center justify-center">
                  <Book className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.level === 'beginner' ? 'bg-green-100 text-green-800' : course.level === 'intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                      {course.level === 'beginner' ? '初级' : course.level === 'intermediate' ? '中级' : '高级'}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      10小时
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-medium">开始学习</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              查看全部课程
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Progress */}
      {user && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">学习进度</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {progressData.completedCourses}/{progressData.totalCourses}
                  </div>
                  <div className="text-gray-600">已完成课程</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {progressData.completedExercises}/{progressData.totalExercises}
                  </div>
                  <div className="text-gray-600">已完成练习</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {progressData.streak}
                  </div>
                  <div className="text-gray-600">连续学习天数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5
                  </div>
                  <div className="text-gray-600">获得成就</div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">最近学习</h3>
                <div className="space-y-4">
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center">
                        <Book className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        继续学习
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始你的数据分析之旅了吗？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            加入我们的学习平台，掌握实用的数据分析技能，为你的职业发展增添竞争力。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/courses"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors"
            >
              浏览课程
            </Link>
            {!user && (
              <Link
                to="/register"
                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                注册账号
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;