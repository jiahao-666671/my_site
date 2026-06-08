import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCourseStore } from '../utils/store';
import { 
  Book, 
  Clock, 
  Filter, 
  X, 
  ChevronRight, 
  GraduationCap,
  Code,
  Database,
  Sparkles
} from 'lucide-react';

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const { courses, loadCourses, loading } = useCourseStore();

  useEffect(() => {
    loadCourses();
  }, []);

  // 课程分类 - 基于Python学习路径四个阶段
  const categories = [
    { 
      id: 'all', 
      name: '全部课程', 
      icon: GraduationCap,
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    { 
      id: 'stage1', 
      name: '零基础入门', 
      icon: Code,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      description: '环境搭建、基础语法、流程控制'
    },
    { 
      id: 'stage2', 
      name: '核心深入', 
      icon: Database,
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      description: '面向对象、文件处理、数据结构'
    },
    { 
      id: 'stage3', 
      name: '专项应用', 
      icon: Sparkles,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      description: '数据分析、Web开发、机器学习'
    },
    { 
      id: 'stage4', 
      name: '高级主题', 
      icon: GraduationCap,
      color: 'bg-gradient-to-r from-teal-500 to-cyan-600',
      description: '高级特性、并发编程、最佳实践'
    },
  ];

  // 过滤课程
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // 获取分类信息
  const getCategoryInfo = (categoryId: string) => {
    return categories.find(c => c.id === categoryId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  // 获取难度标签样式
  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-300';
      case 'intermediate':
        return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-300';
      case 'advanced':
        return 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner':
        return '初级';
      case 'intermediate':
        return '中级';
      case 'advanced':
        return '高级';
      default:
        return level;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* 页面标题区域 */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Python学习课程体系</h1>
          <p className="text-xl opacity-95 mb-6">基于系统化学习路径，从零基础到高级编程，掌握Python开发的完整知识体系</p>
          <div className="flex justify-center gap-4 text-sm opacity-90">
            <span>📚 {courses.length} 门精选课程</span>
            <span>•</span>
            <span>🎯 四个学习阶段</span>
            <span>•</span>
            <span>💪 循序渐进</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs - 阶段选择 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Filter className="h-6 w-6 text-blue-600" />
            选择学习阶段
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group relative p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive 
                      ? `${category.color} text-white shadow-xl scale-105` 
                      : 'bg-white shadow-md hover:shadow-xl border-2 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    isActive ? 'bg-white/20' : 'bg-blue-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                      {category.description}
                    </p>
                  )}
                  {isActive && (
                    <div className="absolute inset-0 border-4 border-white/30 rounded-xl"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 课程数量统计 */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-800">{filteredCourses.length}</span> 门课程
            {selectedCategory !== 'all' && (
              <span className="ml-2">
                · 属于 
                <span className="font-semibold text-blue-600 mx-1">
                  {getCategoryInfo(selectedCategory)?.name}
                </span>
                阶段
              </span>
            )}
          </div>
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-16 text-center">
            <X className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">该阶段暂无课程</h3>
            <p className="text-gray-600 mb-8">我们正在准备更多精彩的课程内容，敬请期待！</p>
            <button
              onClick={() => handleCategoryChange('all')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              查看全部课程
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 课程封面 */}
                <div className="relative h-48 overflow-hidden">
                  {course.cover_image_url ? (
                    <img 
                      src={course.cover_image_url} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Book className="h-16 w-16 text-white opacity-80" />
                    </div>
                  )}
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* 难度标签 */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getLevelStyle(course.level)}`}>
                      {getLevelText(course.level)}
                    </span>
                  </div>

                  {/* 阶段标签 */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                      {getCategoryInfo(course.category)?.name || course.category}
                    </span>
                  </div>
                </div>

                {/* 课程信息 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* 学习按钮 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>灵活安排</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>开始学习</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* 悬停时的边框效果 */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-colors pointer-events-none"></div>
              </Link>
            ))}
          </div>
        )}

        {/* 学习路径提示 */}
        {selectedCategory === 'all' && (
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📖 推荐学习路径</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              从第一阶段开始，循序渐进地学习Python编程。每个阶段都有明确的学习目标和核心内容，
              完成当前阶段后再进入下一阶段，确保知识体系的完整性和系统性。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleCategoryChange('stage1')}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                🚀 开始第一阶段
              </button>
              <Link
                to="/python-learning-path"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                📚 查看完整大纲
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
