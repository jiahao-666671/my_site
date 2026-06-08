import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Target, BookMarked, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const PythonLearningPath: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('stage1');
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({
    stage1: true,
    stage2: true,
    stage3: true,
    stage4: true
  });

  const toggleStage = (stageId: string) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页头 */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Python学习路径综合大纲</h1>
          <p className="text-xl opacity-95">从零基础到高级编程，系统掌握Python开发</p>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-800">学习导航</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => scrollToSection('stage1')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'stage1' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                阶段一
              </button>
              <button
                onClick={() => scrollToSection('stage2')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'stage2' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                阶段二
              </button>
              <button
                onClick={() => scrollToSection('stage3')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'stage3' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                阶段三
              </button>
              <button
                onClick={() => scrollToSection('stage4')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'stage4' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                阶段四
              </button>
              <button
                onClick={() => scrollToSection('tips')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'tips' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                学习建议
              </button>
              <button
                onClick={() => scrollToSection('action')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'action' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                行动指南
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主体内容 */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 第一阶段：零基础入门 */}
          <section 
            id="stage1" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('stage1')}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all"
                onClick={() => toggleStage('stage1')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold opacity-30">01</span>
                    <div>
                      <h2 className="text-2xl font-bold">第一阶段：零基础入门</h2>
                      <p className="opacity-90">建立编程思维，掌握基础语法与核心概念</p>
                    </div>
                  </div>
                  {expandedStages['stage1'] ? (
                    <ChevronDown className="h-8 w-8" />
                  ) : (
                    <ChevronRight className="h-8 w-8" />
                  )}
                </div>
              </div>

              {expandedStages['stage1'] && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 核心目标 */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-800">核心目标</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">建立编程思维</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">掌握基础语法与核心概念</span>
                        </li>
                      </ul>
                    </div>

                    {/* 关键学习内容 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-500">
                      <div className="flex items-center gap-2 mb-4">
                        <BookMarked className="h-6 w-6 text-gray-600" />
                        <h3 className="text-xl font-bold text-gray-800">关键学习内容</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                          <span className="text-gray-700">环境搭建</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                          <span className="text-gray-700">基础语法</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                          <span className="text-gray-700">流程控制</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                          <span className="text-gray-700">函数</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                          <span className="text-gray-700">基本输入输出</span>
                        </li>
                      </ul>
                    </div>

                    {/* 推荐参考资料与方法 */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-6 w-6 text-orange-600" />
                        <h3 className="text-xl font-bold text-gray-800">推荐参考资料与方法</h3>
                      </div>
                      <div className="bg-orange-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">实践为主</div>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python编程：从入门到实践》</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python游戏编程快速上手》</span>
                        </li>
                      </ul>
                      <p className="text-orange-600 font-semibold p-3 bg-white rounded-md border-l-4 border-orange-500">
                        关键：多动手敲代码
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 第二阶段：核心深入与思维提升 */}
          <section 
            id="stage2" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('stage2')}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 cursor-pointer hover:from-indigo-700 hover:to-purple-700 transition-all"
                onClick={() => toggleStage('stage2')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold opacity-30">02</span>
                    <div>
                      <h2 className="text-2xl font-bold">第二阶段：核心深入与思维提升</h2>
                      <p className="opacity-90">理解编程范式，掌握复杂数据结构与代码组织</p>
                    </div>
                  </div>
                  {expandedStages['stage2'] ? (
                    <ChevronDown className="h-8 w-8" />
                  ) : (
                    <ChevronRight className="h-8 w-8" />
                  )}
                </div>
              </div>

              {expandedStages['stage2'] && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 核心目标 */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-6 w-6 text-indigo-600" />
                        <h3 className="text-xl font-bold text-gray-800">核心目标</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">理解编程范式</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">掌握复杂数据结构与代码组织</span>
                        </li>
                      </ul>
                    </div>

                    {/* 关键学习内容 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-500">
                      <div className="flex items-center gap-2 mb-4">
                        <BookMarked className="h-6 w-6 text-gray-600" />
                        <h3 className="text-xl font-bold text-gray-800">关键学习内容</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                          <span className="text-gray-700">面向对象编程</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                          <span className="text-gray-700">文件与异常处理</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                          <span className="text-gray-700">模块与标准库</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                          <span className="text-gray-700">常用工具</span>
                        </li>
                      </ul>
                    </div>

                    {/* 推荐参考资料与方法 */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-6 w-6 text-orange-600" />
                        <h3 className="text-xl font-bold text-gray-800">推荐参考资料与方法</h3>
                      </div>
                      <div className="bg-indigo-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">理解原理</div>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python学习手册》</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python核心编程》</span>
                        </li>
                      </ul>
                      <p className="text-orange-600 font-semibold p-3 bg-white rounded-md border-l-4 border-orange-500">
                        关键：培养工程化思维
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 第三阶段：专项应用与实践 */}
          <section 
            id="stage3" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('stage3')}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-all"
                onClick={() => toggleStage('stage3')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold opacity-30">03</span>
                    <div>
                      <h2 className="text-2xl font-bold">第三阶段：专项应用与实践</h2>
                      <p className="opacity-90">确定兴趣方向，完成实际项目</p>
                    </div>
                  </div>
                  {expandedStages['stage3'] ? (
                    <ChevronDown className="h-8 w-8" />
                  ) : (
                    <ChevronRight className="h-8 w-8" />
                  )}
                </div>
              </div>

              {expandedStages['stage3'] && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* 核心目标 */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-6 w-6 text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-800">核心目标</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">确定兴趣方向</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">完成实际项目</span>
                        </li>
                      </ul>
                    </div>

                    {/* 占位 */}
                    <div></div>

                    {/* 推荐参考资料与方法 */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-6 w-6 text-orange-600" />
                        <h3 className="text-xl font-bold text-gray-800">推荐参考资料与方法</h3>
                      </div>
                      <div className="bg-purple-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">项目驱动</div>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python编程：从入门到实践》项目部分</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《征服PYTHON》等应用章节</span>
                        </li>
                      </ul>
                      <p className="text-orange-600 font-semibold p-3 bg-white rounded-md border-l-4 border-orange-500">
                        关键：边做边学
                      </p>
                    </div>
                  </div>

                  {/* 关键学习内容 - 卡片式网格布局 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">关键学习内容</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center shadow-md hover:-translate-y-2 transition-all hover:shadow-xl border-t-4 border-blue-500">
                        <div className="text-5xl mb-4">📊</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">数据分析与科学计算</h4>
                        <p className="text-gray-600 text-sm">使用NumPy、Pandas等库进行数据处理与分析</p>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center shadow-md hover:-translate-y-2 transition-all hover:shadow-xl border-t-4 border-green-500">
                        <div className="text-5xl mb-4">🌐</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Web开发</h4>
                        <p className="text-gray-600 text-sm">使用Django、Flask等框架构建Web应用</p>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center shadow-md hover:-translate-y-2 transition-all hover:shadow-xl border-t-4 border-purple-500">
                        <div className="text-5xl mb-4">🖥️</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">GUI桌面应用</h4>
                        <p className="text-gray-600 text-sm">使用Tkinter、PyQt等开发桌面程序</p>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center shadow-md hover:-translate-y-2 transition-all hover:shadow-xl border-t-4 border-red-500">
                        <div className="text-5xl mb-4">🤖</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">机器学习与人工智能</h4>
                        <p className="text-gray-600 text-sm">使用TensorFlow、PyTorch等库实现AI应用</p>
                      </div>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center shadow-md hover:-translate-y-2 transition-all hover:shadow-xl border-t-4 border-orange-500">
                        <div className="text-5xl mb-4">⚡</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">自动化与脚本</h4>
                        <p className="text-gray-600 text-sm">编写自动化脚本提升工作效率</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 第四阶段：高级主题与最佳实践 */}
          <section 
            id="stage4" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('stage4')}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 cursor-pointer hover:from-teal-700 hover:to-cyan-700 transition-all"
                onClick={() => toggleStage('stage4')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold opacity-30">04</span>
                    <div>
                      <h2 className="text-2xl font-bold">第四阶段：高级主题与最佳实践</h2>
                      <p className="opacity-90">编写高质量代码</p>
                    </div>
                  </div>
                  {expandedStages['stage4'] ? (
                    <ChevronDown className="h-8 w-8" />
                  ) : (
                    <ChevronRight className="h-8 w-8" />
                  )}
                </div>
              </div>

              {expandedStages['stage4'] && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 核心目标 */}
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-6 w-6 text-teal-600" />
                        <h3 className="text-xl font-bold text-gray-800">核心目标</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">编写高质量代码</span>
                        </li>
                      </ul>
                    </div>

                    {/* 关键学习内容 */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-500">
                      <div className="flex items-center gap-2 mb-4">
                        <BookMarked className="h-6 w-6 text-gray-600" />
                        <h3 className="text-xl font-bold text-gray-800">关键学习内容</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                          <span className="text-gray-700">高级特性</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                          <span className="text-gray-700">并发编程</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                          <span className="text-gray-700">代码优化</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                          <span className="text-gray-700">设计模式</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                          <span className="text-gray-700">代码规范</span>
                        </li>
                      </ul>
                    </div>

                    {/* 推荐参考资料与方法 */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-6 w-6 text-orange-600" />
                        <h3 className="text-xl font-bold text-gray-800">推荐参考资料与方法</h3>
                      </div>
                      <div className="bg-teal-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">精益求精</div>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python高级编程》</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">参考《Python编程实战》</span>
                        </li>
                      </ul>
                      <p className="text-orange-600 font-semibold p-3 bg-white rounded-md border-l-4 border-orange-500">
                        关键：阅读优秀开源代码
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 学习建议 */}
          <section 
            id="tips" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('tips')}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">至关重要的学习建议</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">📦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">版本选择</h3>
                <p className="text-gray-600 text-center">从Python 3开始学习</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">学习方法</h3>
                <p className="text-gray-600 text-center">做中学是唯一捷径</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">🔗</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">善用资源</h3>
                <div className="text-gray-600 text-center space-y-1">
                  <p>交互模式</p>
                  <p>在线社区</p>
                  <p>官方文档</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">🧠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">培养计算思维</h3>
                <div className="text-gray-600 text-center space-y-1">
                  <p>分解复杂问题</p>
                  <p>抽象模式</p>
                  <p>通过算法与数据结构解决</p>
                </div>
              </div>
            </div>
          </section>

          {/* 行动指南 */}
          <section 
            id="action" 
            className="mb-12 scroll-mt-24"
            onMouseEnter={() => setActiveSection('action')}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">立即开始的行动</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex gap-6 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:translate-x-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">安装Python 3与编辑器</h3>
                  <p className="text-gray-600">配置开发环境，选择合适的代码编辑器（推荐VS Code或PyCharm）</p>
                </div>
                <ArrowRight className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex gap-6 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:translate-x-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择入门书扎实学习</h3>
                  <p className="text-gray-600">按照推荐的参考资料系统学习基础知识，打好编程基础</p>
                </div>
                <ArrowRight className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex gap-6 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:translate-x-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">构思并启动小项目</h3>
                  <p className="text-gray-600">将所学知识应用到实际项目中，边做边学，积累实战经验</p>
                </div>
                <ArrowRight className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-2">Python学习路径综合大纲</p>
          <p className="opacity-70 mb-4">系统化的Python编程学习之旅</p>
          <div className="flex justify-center gap-4 text-sm opacity-70">
            <span>四个学习阶段</span>
            <span>|</span>
            <span>科学学习方法</span>
            <span>|</span>
            <span>实战项目驱动</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm opacity-60">
            &copy; 2026 Python学习路径综合大纲 - 基于脑图构建 · 持续更新
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PythonLearningPath;
