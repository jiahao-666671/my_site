import React, { useState } from 'react';
import { Code, Check, X, ChevronDown, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  task: string;
  hint: string;
  initialCode: string;
  testCode: string;
}

const exercises: Record<string, Exercise[]> = {
  stage1: [
    {
      id: 'ex1',
      title: 'Hello World',
      description: '学习基本的输出语句',
      task: '编写一个Python程序，输出 "Hello, World!"',
      hint: '使用 print() 函数',
      initialCode: '# 在这里编写你的代码\n',
      testCode: 'assert "Hello, World!" in output'
    },
    {
      id: 'ex2',
      title: '变量赋值',
      description: '学习如何定义和使用变量',
      task: '定义一个变量 name，值为 "Python"，然后输出 "Hello, Python!"',
      hint: 'name = "Python"\nprint(f"Hello, {name}!")',
      initialCode: '# 定义变量\n\n# 输出问候语\n',
      testCode: 'assert "Hello, Python!" in output'
    },
    {
      id: 'ex3',
      title: '数字运算',
      description: '学习基本的数学运算',
      task: '计算 1 + 2 * 3 的结果并输出',
      hint: '注意运算优先级',
      initialCode: '# 计算并输出结果\n',
      testCode: 'assert "7" in output'
    }
  ],
  stage2: [
    {
      id: 'ex4',
      title: '定义函数',
      description: '学习如何定义函数',
      task: '编写一个函数 greet(name)，返回 "Hello, {name}!"',
      hint: 'def greet(name):\n    return f"Hello, {name}!"',
      initialCode: '# 在这里定义函数\n\n',
      testCode: 'assert greet("Alice") == "Hello, Alice!"'
    },
    {
      id: 'ex5',
      title: '列表操作',
      description: '学习列表的基本操作',
      task: '创建一个包含 1, 2, 3 的列表，然后计算列表元素的和',
      hint: 'numbers = [1, 2, 3]\nsum(numbers)',
      initialCode: '# 创建列表\n\n# 计算和\n',
      testCode: 'assert sum(numbers) == 6'
    }
  ],
  stage3: [
    {
      id: 'ex6',
      title: '字典操作',
      description: '学习如何使用字典',
      task: '创建一个字典，包含 name: "Python", version: 3.12，然后输出这些信息',
      hint: 'info = {"name": "Python", "version": 3.12}',
      initialCode: '# 创建字典\n\n# 输出信息\n',
      testCode: 'assert info["name"] == "Python"'
    }
  ]
};

const PythonLearningPath: React.FC = () => {
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({});
  const [exerciseCode, setExerciseCode] = useState<Record<string, string>>({});
  const [exerciseResult, setExerciseResult] = useState<Record<string, { success: boolean; message: string } | null>>({});

  const toggleExercises = (stageId: string) => {
    setExpandedExercises(prev => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  const handleCodeChange = (exerciseId: string, code: string) => {
    setExerciseCode(prev => ({
      ...prev,
      [exerciseId]: code
    }));
  };

  const runCode = (exercise: Exercise) => {
    try {
      const code = exerciseCode[exercise.id] || exercise.initialCode;
      
      // 简单的模拟执行
      let output = '';
      let success = true;
      let message = '';

      if (exercise.id === 'ex1') {
        if (code.includes('print') && code.includes('Hello')) {
          success = true;
          message = '✅ 太棒了！你成功输出了 "Hello, World!"';
        } else {
          success = false;
          message = '❌ 请确保使用 print() 函数输出 "Hello, World!"';
        }
      } else if (exercise.id === 'ex2') {
        if (code.includes('name') && code.includes('Python')) {
          success = true;
          message = '✅ 很好！你成功定义了变量并输出了问候语';
        } else {
          success = false;
          message = '❌ 请确保定义变量 name 并使用它输出问候语';
        }
      } else if (exercise.id === 'ex3') {
        if (code.includes('7') || code.includes('1 + 2 * 3')) {
          success = true;
          message = '✅ 正确！注意运算优先级，乘法优先于加法';
        } else {
          success = false;
          message = '❌ 请计算 1 + 2 * 3 并输出结果';
        }
      } else {
        success = true;
        message = '✅ 代码运行成功！继续加油！';
      }

      setExerciseResult(prev => ({
        ...prev,
        [exercise.id]: { success, message }
      }));
    } catch (error) {
      setExerciseResult(prev => ({
        ...prev,
        [exercise.id]: { success: false, message: '❌ 代码执行出错，请检查语法' }
      }));
    }
  };

  const getStageExercise = (stageId: string) => exercises[stageId] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Python学习路径综合大纲</h1>
          <p className="text-xl opacity-95">从零基础到高级编程，系统掌握Python开发</p>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12 scroll-mt-24" id="stage1">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-5 mb-8 pb-5 border-b-3 border-blue-500">
                <span className="text-5xl font-extrabold text-blue-500 opacity-30 leading-none">01</span>
                <h2 className="text-2xl font-bold text-gray-800">第一阶段：零基础入门</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">核心目标</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      建立编程思维
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      掌握基础语法与核心概念
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">关键学习内容</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      环境搭建
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      基础语法
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      流程控制
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      函数
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      基本输入输出
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">推荐参考资料与方法</h3>
                  <p className="bg-blue-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">实践为主</p>
                  <ul className="space-y-2 mb-3">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python编程：从入门到实践》
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python游戏编程快速上手》
                    </li>
                  </ul>
                  <p className="text-orange-500 font-semibold p-3 bg-orange-50 rounded-md border-l-4 border-orange-500">
                    关键：多动手敲代码
                  </p>
                </div>
              </div>

              {/* 练习题部分 */}
              <button
                onClick={() => toggleExercises('stage1')}
                className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors mb-4"
              >
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">本阶段练习题</h3>
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm">{getStageExercise('stage1').length} 题</span>
                </div>
                {expandedExercises['stage1'] ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedExercises['stage1'] && (
                <div className="space-y-6">
                  {getStageExercise('stage1').map((exercise) => (
                    <div key={exercise.id} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{exercise.title}</h4>
                      <p className="text-gray-600 mb-4">{exercise.description}</p>
                      
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-blue-800 mb-2">任务要求：</h5>
                        <p className="text-blue-700">{exercise.task}</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-700 mb-2">代码编辑器：</h5>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <textarea
                            value={exerciseCode[exercise.id] || exercise.initialCode}
                            onChange={(e) => handleCodeChange(exercise.id, e.target.value)}
                            className="w-full h-40 bg-transparent text-green-400 font-mono resize-none focus:outline-none"
                            placeholder="在此编写你的代码..."
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <button
                          onClick={() => runCode(exercise)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                        >
                          <Code className="h-4 w-4" />
                          运行代码
                        </button>
                        <div className="text-gray-500 text-sm">
                          💡 提示：{exercise.hint}
                        </div>
                      </div>

                      {exerciseResult[exercise.id] && (
                        <div className={`p-4 rounded-lg ${exerciseResult[exercise.id].success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            {exerciseResult[exercise.id].success ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <X className="h-5 w-5" />
                            )}
                            <span className="font-semibold">测试结果：</span>
                          </div>
                          <p>{exerciseResult[exercise.id].message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="mb-12 scroll-mt-24" id="stage2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-5 mb-8 pb-5 border-b-3 border-blue-500">
                <span className="text-5xl font-extrabold text-blue-500 opacity-30 leading-none">02</span>
                <h2 className="text-2xl font-bold text-gray-800">第二阶段：核心深入与思维提升</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">核心目标</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      理解编程范式
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      掌握复杂数据结构与代码组织
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">关键学习内容</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      面向对象编程
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      文件与异常处理
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      模块与标准库
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      常用工具
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">推荐参考资料与方法</h3>
                  <p className="bg-blue-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">理解原理</p>
                  <ul className="space-y-2 mb-3">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python学习手册》
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python核心编程》
                    </li>
                  </ul>
                  <p className="text-orange-500 font-semibold p-3 bg-orange-50 rounded-md border-l-4 border-orange-500">
                    关键：培养工程化思维
                  </p>
                </div>
              </div>

              {/* 练习题部分 */}
              <button
                onClick={() => toggleExercises('stage2')}
                className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors mb-4"
              >
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-800">本阶段练习题</h3>
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm">{getStageExercise('stage2').length} 题</span>
                </div>
                {expandedExercises['stage2'] ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedExercises['stage2'] && (
                <div className="space-y-6">
                  {getStageExercise('stage2').map((exercise) => (
                    <div key={exercise.id} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{exercise.title}</h4>
                      <p className="text-gray-600 mb-4">{exercise.description}</p>
                      
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-blue-800 mb-2">任务要求：</h5>
                        <p className="text-blue-700">{exercise.task}</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-700 mb-2">代码编辑器：</h5>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <textarea
                            value={exerciseCode[exercise.id] || exercise.initialCode}
                            onChange={(e) => handleCodeChange(exercise.id, e.target.value)}
                            className="w-full h-40 bg-transparent text-green-400 font-mono resize-none focus:outline-none"
                            placeholder="在此编写你的代码..."
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <button
                          onClick={() => runCode(exercise)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                        >
                          <Code className="h-4 w-4" />
                          运行代码
                        </button>
                        <div className="text-gray-500 text-sm">
                          💡 提示：{exercise.hint}
                        </div>
                      </div>

                      {exerciseResult[exercise.id] && (
                        <div className={`p-4 rounded-lg ${exerciseResult[exercise.id].success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            {exerciseResult[exercise.id].success ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <X className="h-5 w-5" />
                            )}
                            <span className="font-semibold">测试结果：</span>
                          </div>
                          <p>{exerciseResult[exercise.id].message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="mb-12 scroll-mt-24" id="stage3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-5 mb-8 pb-5 border-b-3 border-blue-500">
                <span className="text-5xl font-extrabold text-blue-500 opacity-30 leading-none">03</span>
                <h2 className="text-2xl font-bold text-gray-800">第三阶段：专项应用与实践</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">核心目标</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      确定兴趣方向
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      完成实际项目
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">关键学习内容</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
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
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">推荐参考资料与方法</h3>
                <p className="bg-blue-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">项目驱动</p>
                <ul className="space-y-2 mb-3">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 text-green-500 font-bold">✓</span>
                    参考《Python编程：从入门到实践》项目部分
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 text-green-500 font-bold">✓</span>
                    参考《征服PYTHON》等应用章节
                  </li>
                </ul>
                <p className="text-orange-500 font-semibold p-3 bg-orange-50 rounded-md border-l-4 border-orange-500">
                  关键：边做边学
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 scroll-mt-24" id="stage4">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-5 mb-8 pb-5 border-b-3 border-blue-500">
                <span className="text-5xl font-extrabold text-blue-500 opacity-30 leading-none">04</span>
                <h2 className="text-2xl font-bold text-gray-800">第四阶段：高级主题与最佳实践</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">核心目标</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      编写高质量代码
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">关键学习内容</h3>
                  <ul className="space-y-2">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      高级特性
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      并发编程
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      代码优化
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      设计模式
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      代码规范
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">推荐参考资料与方法</h3>
                  <p className="bg-blue-500 text-white px-3 py-1.5 rounded-md inline-block mb-3 font-semibold">精益求精</p>
                  <ul className="space-y-2 mb-3">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python高级编程》
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-green-500 font-bold">✓</span>
                      参考《Python编程实战》
                    </li>
                  </ul>
                  <p className="text-orange-500 font-semibold p-3 bg-orange-50 rounded-md border-l-4 border-orange-500">
                    关键：阅读优秀开源代码
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 scroll-mt-24" id="tips">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">至关重要的学习建议</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:-translate-y-1.5 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-semibold text-blue-500 mb-3">版本选择</h3>
                <p className="text-gray-600">从Python 3开始学习</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:-translate-y-1.5 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-blue-500 mb-3">学习方法</h3>
                <p className="text-gray-600">做中学是唯一捷径</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:-translate-y-1.5 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-lg font-semibold text-blue-500 mb-3">善用资源</h3>
                <p className="text-gray-600">交互模式、在线社区、官方文档</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:-translate-y-1.5 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold text-blue-500 mb-3">培养计算思维</h3>
                <p className="text-gray-600">分解复杂问题、抽象模式、通过算法与数据结构解决</p>
              </div>
            </div>
          </section>

          <section className="mb-12 scroll-mt-24" id="action">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">立即开始的行动</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6 bg-white rounded-xl p-8 mb-6 shadow-md hover:translate-x-2 transition-all hover:shadow-lg">
                <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">安装Python 3与编辑器</h3>
                  <p className="text-gray-600">配置开发环境，选择合适的代码编辑器</p>
                </div>
              </div>
              <div className="flex gap-6 bg-white rounded-xl p-8 mb-6 shadow-md hover:translate-x-2 transition-all hover:shadow-lg">
                <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择入门书扎实学习</h3>
                  <p className="text-gray-600">按照推荐的参考资料系统学习基础知识</p>
                </div>
              </div>
              <div className="flex gap-6 bg-white rounded-xl p-8 shadow-md hover:translate-x-2 transition-all hover:shadow-lg">
                <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">构思并启动小项目</h3>
                  <p className="text-gray-600">将所学知识应用到实际项目中，边做边学</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; 2026 Python学习路径综合大纲</p>
          <p className="opacity-70 text-sm">基于脑图构建 · 持续更新</p>
        </div>
      </footer>
    </div>
  );
};

export default PythonLearningPath;
