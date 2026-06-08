import React, { useState } from 'react';
import { Code, Check, X, ChevronDown, ChevronRight, Play, BookOpen, Award } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  task: string;
  hint: string;
  initialCode: string;
  solution?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  content: {
    objectives: string[];
    topics: string[];
    details: string[];
  };
  exercises: Exercise[];
}

const courses: Course[] = [
  {
    id: 'course1',
    title: 'Python环境搭建',
    description: '学习如何配置Python开发环境，为后续学习打下基础',
    content: {
      objectives: [
        '了解Python的安装方式',
        '掌握IDE的使用',
        '学会运行第一个Python程序'
      ],
      topics: [
        'Python下载与安装',
        'IDE选择（VS Code / PyCharm）',
        'Hello World程序',
        '包管理工具pip'
      ],
      details: [
        '从官方网站python.org下载Python 3.x版本进行安装',
        '推荐使用VS Code配合Python扩展，或直接使用PyCharm社区版',
        '环境变量配置，确保在命令行中可以直接调用python命令',
        '学会使用pip安装第三方库：pip install 包名'
      ]
    },
    exercises: [
      {
        id: 'ex1-1',
        title: 'Hello World',
        description: '编写你的第一个Python程序',
        task: '使用print()函数输出 "Hello, World!"',
        hint: 'print("Hello, World!")',
        initialCode: '# 在这里编写你的第一个Python程序\n',
        solution: 'print("Hello, World!")'
      },
      {
        id: 'ex1-2',
        title: '多行输出',
        description: '学习如何输出多行文本',
        task: '输出以下三行文字：\n第一行：Hello\n第二行：Python\n第三行：World',
        hint: '使用多个print()语句或\\n转义字符',
        initialCode: '# 输出多行文本\n',
        solution: 'print("Hello\\nPython\\nWorld")'
      }
    ]
  },
  {
    id: 'course2',
    title: 'Python基础语法',
    description: '掌握Python的基本语法规则，包括变量、数据类型、运算符等',
    content: {
      objectives: [
        '理解变量和赋值',
        '掌握基本数据类型',
        '学会使用运算符'
      ],
      topics: [
        '变量与赋值',
        '数据类型（整数、浮点数、字符串、布尔值）',
        '算术运算符',
        '比较运算符和逻辑运算符',
        '字符串操作'
      ],
      details: [
        '变量是存储数据的容器，使用等号进行赋值',
        'Python中常见的类型：int（整数）、float（浮点数）、str（字符串）、bool（布尔值）',
        '算术运算符：+ - * / // % **',
        '比较运算符：== != > < >= <=',
        '逻辑运算符：and、or、not',
        '字符串可以用单引号或双引号包围，支持拼接和重复'
      ]
    },
    exercises: [
      {
        id: 'ex2-1',
        title: '变量赋值',
        description: '学习如何定义和使用变量',
        task: '创建一个变量 name，赋值为 "Python"，然后输出 "Hello, Python!"',
        hint: '使用变量和字符串格式化',
        initialCode: '# 定义变量 name\n\n# 输出问候语\n',
        solution: 'name = "Python"\nprint("Hello, " + name + "!")'
      },
      {
        id: 'ex2-2',
        title: '数据类型转换',
        description: '学习数据类型之间的转换',
        task: '将字符串 "123" 转换为整数，然后加上 100，输出结果',
        hint: '使用 int() 函数进行转换',
        initialCode: '# 字符串转整数并计算\n',
        solution: 'num_str = "123"\nnum_int = int(num_str)\nprint(num_int + 100)'
      },
      {
        id: 'ex2-3',
        title: '数学运算',
        description: '练习各种数学运算符',
        task: '计算：(15 + 25) * 2 的结果，并输出',
        hint: '注意括号优先级',
        initialCode: '# 计算并输出结果\n',
        solution: 'result = (15 + 25) * 2\nprint(result)'
      },
      {
        id: 'ex2-4',
        title: '字符串操作',
        description: '学习字符串的基本操作',
        task: '创建一个字符串 "Python"，输出它的长度和首字母',
        hint: '使用 len() 函数和索引 [0]',
        initialCode: '# 字符串操作\n',
        solution: 'text = "Python"\nprint(len(text))\nprint(text[0])'
      }
    ]
  },
  {
    id: 'course3',
    title: '流程控制',
    description: '学习条件语句和循环结构，控制程序的执行流程',
    content: {
      objectives: [
        '掌握if-elif-else条件语句',
        '学会使用for循环和while循环',
        '理解break和continue的作用'
      ],
      topics: [
        'if语句',
        'if-elif-else多条件判断',
        'for循环',
        'while循环',
        'break和continue',
        'range()函数'
      ],
      details: [
        'if语句用于条件判断，格式：if 条件: 语句块',
        'elif用于多个条件的判断，else处理不满足条件的情况',
        'for循环用于遍历序列：for 变量 in 序列:',
        'while循环在条件为真时重复执行：while 条件:',
        'break用于跳出循环，continue用于跳过本次循环',
        'range()生成数字序列：range(start, stop, step)'
      ]
    },
    exercises: [
      {
        id: 'ex3-1',
        title: '条件判断',
        description: '学习if语句的使用',
        task: '判断数字 10 是否大于 5，如果是，输出 "大于5"，否则输出 "小于等于5"',
        hint: '使用 if-else 语句',
        initialCode: '# 条件判断\n',
        solution: 'num = 10\nif num > 5:\n    print("大于5")\nelse:\n    print("小于等于5")'
      },
      {
        id: 'ex3-2',
        title: '成绩评级',
        description: '使用多重条件判断',
        task: '根据分数输出等级：90分以上输出"优秀"，80-90分输出"良好"，60-80分输出"及格"，60分以下输出"不及格"',
        hint: '使用 if-elif-else 结构',
        initialCode: '# 成绩评级\nscore = 85\n',
        solution: 'score = 85\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")'
      },
      {
        id: 'ex3-3',
        title: 'for循环',
        description: '学习使用for循环',
        task: '使用for循环输出1到10的所有数字',
        hint: '使用 range(1, 11)',
        initialCode: '# for循环输出数字\n',
        solution: 'for i in range(1, 11):\n    print(i)'
      },
      {
        id: 'ex3-4',
        title: 'while循环',
        description: '学习while循环',
        task: '使用while循环计算1+2+3+...+10的和',
        hint: '使用累加变量',
        initialCode: '# while循环累加\nsum = 0\ni = 1\n',
        solution: 'sum = 0\ni = 1\nwhile i <= 10:\n    sum += i\n    i += 1\nprint(sum)'
      },
      {
        id: 'ex3-5',
        title: '循环中的break和continue',
        description: '学习控制循环流程',
        task: '使用循环找出第一个能被3整除的数（在1-20范围内），遇到这个数时停止循环',
        hint: '使用break语句',
        initialCode: '# 找出第一个能被3整除的数\n',
        solution: 'for i in range(1, 21):\n    if i % 3 == 0:\n        print(i)\n        break'
      }
    ]
  },
  {
    id: 'course4',
    title: '函数',
    description: '学习如何定义和调用函数，理解函数参数和返回值',
    content: {
      objectives: [
        '掌握函数的定义和调用',
        '理解函数参数和返回值',
        '学会使用默认参数和关键字参数'
      ],
      topics: [
        '函数定义',
        '函数调用',
        '参数传递',
        '返回值',
        '默认参数',
        '关键字参数',
        '变量作用域'
      ],
      details: [
        '函数使用def关键字定义：def 函数名(参数):',
        '函数可以接受参数，也可以返回值',
        '默认参数在定义时给默认值：def func(x=10)',
        '关键字参数使用参数名传递：func(x=5)',
        '局部变量只在函数内部有效，全局变量在整个程序中有效',
        'return语句用于返回函数结果'
      ]
    },
    exercises: [
      {
        id: 'ex4-1',
        title: '简单函数',
        description: '学习定义和调用函数',
        task: '定义一个函数 greet()，返回 "Hello, World!"',
        hint: '使用def关键字定义函数',
        initialCode: '# 定义greet函数\n\n# 调用函数并输出\n',
        solution: 'def greet():\n    return "Hello, World!"\n\nprint(greet())'
      },
      {
        id: 'ex4-2',
        title: '带参数的函数',
        description: '学习函数参数',
        task: '定义一个函数 greet_person(name)，接受姓名参数，返回 "Hello, {name}!"',
        hint: '在括号中定义参数',
        initialCode: '# 定义带参数的函数\n\n# 测试函数\n',
        solution: 'def greet_person(name):\n    return f"Hello, {name}!"\n\nprint(greet_person("Alice"))'
      },
      {
        id: 'ex4-3',
        title: '默认参数',
        description: '学习使用默认参数',
        task: '定义一个函数 power(base, exponent=2)，计算base的exponent次方，默认求平方',
        hint: '在参数列表中设置默认值',
        initialCode: '# 定义带默认参数的函数\n\n# 测试\n',
        solution: 'def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))\nprint(power(2, 3))'
      },
      {
        id: 'ex4-4',
        title: '返回多个值',
        description: '学习函数返回多个值',
        task: '定义一个函数 calculate(a, b)，返回和与差',
        hint: '使用return a+b, a-b',
        initialCode: '# 定义返回多个值的函数\n\n# 测试\n',
        solution: 'def calculate(a, b):\n    return a + b, a - b\n\nsum_val, diff_val = calculate(10, 5)\nprint(f"和: {sum_val}, 差: {diff_val}")'
      },
      {
        id: 'ex4-5',
        title: '递归函数',
        description: '学习递归调用',
        task: '使用递归函数计算第n个斐波那契数列（1, 1, 2, 3, 5, 8...）',
        hint: '斐波那契数列：F(n) = F(n-1) + F(n-2)',
        initialCode: '# 使用递归计算斐波那契数列\ndef fibonacci(n):\n    pass  # 请实现这个函数\n',
        solution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(10):\n    print(fibonacci(i), end=" ")'
      }
    ]
  },
  {
    id: 'course5',
    title: '基本输入输出',
    description: '学习与用户交互，包括键盘输入和屏幕输出',
    content: {
      objectives: [
        '掌握print()函数的各种用法',
        '学会使用input()函数获取用户输入',
        '理解格式化输出的方法'
      ],
      topics: [
        'print()函数',
        'input()函数',
        '格式化输出',
        '文件输入输出'
      ],
      details: [
        'print()函数用于输出信息，可以输出多个值，用逗号分隔',
        'input()函数用于获取用户输入，返回的是字符串',
        '格式化方法：f-string、format()、%格式化',
        'f-string是最现代的格式化方式：f"变量：{variable}"',
        '文件操作：open()函数打开文件，read()、write()进行读写'
      ]
    },
    exercises: [
      {
        id: 'ex5-1',
        title: '用户输入',
        description: '学习使用input()函数',
        task: '提示用户输入姓名，然后输出 "Welcome, {姓名}!"',
        hint: 'input("请输入姓名：")',
        initialCode: '# 获取用户输入\n\n# 输出欢迎信息\n',
        solution: 'name = input("请输入姓名：")\nprint(f"Welcome, {name}!")'
      },
      {
        id: 'ex5-2',
        title: '类型转换与输入',
        description: '处理用户输入的数字',
        task: '提示用户输入两个数字，计算并输出它们的和',
        hint: '使用int()转换input()的返回值',
        initialCode: '# 获取两个数字并计算和\n',
        solution: 'num1 = int(input("请输入第一个数字："))\nnum2 = int(input("请输入第二个数字："))\nprint(f"和是：{num1 + num2}")'
      },
      {
        id: 'ex5-3',
        title: '格式化输出',
        description: '学习不同的格式化方法',
        task: '使用f-string格式化输出：姓名、年龄、成绩（使用变量）',
        hint: 'f"姓名：{name}，年龄：{age}，成绩：{score}"',
        initialCode: '# 格式化输出\nname = "小明"\nage = 18\nscore = 95.5\n',
        solution: 'name = "小明"\nage = 18\nscore = 95.5\nprint(f"姓名：{name}，年龄：{age}，成绩：{score}")'
      },
      {
        id: 'ex5-4',
        title: '计算器程序',
        description: '综合练习：创建一个简单计算器',
        task: '提示用户输入两个数字和运算符（+、-、*、/），输出计算结果',
        hint: '根据运算符使用条件判断或eval()',
        initialCode: '# 简单计算器\n# 获取输入\nnum1 = float(input("第一个数："))\noperator = input("运算符（+、-、*、/）：")\nnum2 = float(input("第二个数："))\n',
        solution: 'num1 = float(input("第一个数："))\noperator = input("运算符（+、-、*、/）：")\nnum2 = float(input("第二个数："))\n\nif operator == "+":\n    print(f"结果：{num1 + num2}")\nelif operator == "-":\n    print(f"结果：{num1 - num2}")\nelif operator == "*":\n    print(f"结果：{num1 * num2}")\nelif operator == "/":\n    print(f"结果：{num1 / num2}")'
      }
    ]
  }
];

const PythonLearningPath: React.FC = () => {
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});
  const [expandedExercises, setExpandedExercises] = useState<Record<string, boolean>>({});
  const [exerciseCode, setExerciseCode] = useState<Record<string, string>>({});
  const [exerciseResult, setExerciseResult] = useState<Record<string, { success: boolean; message: string }>>({});
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const toggleCourse = (courseId: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const toggleExercises = (courseId: string) => {
    setExpandedExercises(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const handleCodeChange = (exerciseId: string, code: string) => {
    setExerciseCode(prev => ({
      ...prev,
      [exerciseId]: code
    }));
  };

  const runCode = (exercise: Exercise, courseId: string) => {
    try {
      const code = exerciseCode[`${courseId}-${exercise.id}`] || exercise.initialCode;
      
      // 简化的代码检查逻辑
      let success = true;
      let message = '';

      // 针对每个练习题的具体检查
      if (exercise.id === 'ex1-1') {
        if (code.includes('print') && code.includes('Hello') && code.includes('World')) {
          success = true;
          message = '✅ 太棒了！你成功完成了第一个Python程序！';
        } else {
          success = false;
          message = '❌ 请确保使用print()函数输出 "Hello, World!"';
        }
      } else if (exercise.id === 'ex1-2') {
        if (code.includes('print') && (code.includes('Hello') && code.includes('Python') && code.includes('World'))) {
          success = true;
          message = '✅ 很好！你成功输出了多行文本！';
        } else {
          success = false;
          message = '❌ 请输出三行指定的内容';
        }
      } else if (exercise.id === 'ex2-1') {
        if (code.includes('name') && code.includes('Python')) {
          success = true;
          message = '✅ 完美！你正确使用了变量！';
        } else {
          success = false;
          message = '❌ 请定义name变量并输出问候语';
        }
      } else if (exercise.id === 'ex2-2') {
        if (code.includes('int(') && code.includes('123')) {
          success = true;
          message = '✅ 很好！你掌握了数据类型转换！';
        } else {
          success = false;
          message = '❌ 请将字符串"123"转换为整数并计算';
        }
      } else if (exercise.id === 'ex2-3') {
        if (code.includes('(') && (code.includes('15') && code.includes('25') && code.includes('2'))) {
          success = true;
          message = '✅ 正确！注意运算顺序！';
        } else {
          success = false;
          message = '❌ 请计算(15+25)*2的结果';
        }
      } else if (exercise.id === 'ex2-4') {
        if (code.includes('len(') && code.includes('[') && code.includes('0]')) {
          success = true;
          message = '✅ 正确！你掌握了字符串的长度和索引！';
        } else {
          success = false;
          message = '❌ 请使用len()和索引[0]';
        }
      } else if (exercise.id === 'ex3-1') {
        if (code.includes('if') && code.includes('else') && code.includes('5')) {
          success = true;
          message = '✅ 很好！你掌握了条件判断！';
        } else {
          success = false;
          message = '❌ 请使用if-else判断10是否大于5';
        }
      } else if (exercise.id === 'ex3-2') {
        if (code.includes('if') && code.includes('elif') && code.includes('else') && code.includes('85')) {
          success = true;
          message = '✅ 完美！你掌握了多重条件判断！';
        } else {
          success = false;
          message = '❌ 请使用if-elif-else进行成绩评级';
        }
      } else if (exercise.id === 'ex3-3') {
        if (code.includes('for') && code.includes('range') && code.includes('1') && code.includes('11')) {
          success = true;
          message = '✅ 很好！你学会了使用for循环！';
        } else {
          success = false;
          message = '❌ 请使用for循环输出1-10';
        }
      } else if (exercise.id === 'ex3-4') {
        if (code.includes('while') && code.includes('sum') && code.includes('10')) {
          success = true;
          message = '✅ 正确！你掌握了while循环和累加！';
        } else {
          success = false;
          message = '❌ 请使用while循环计算1到10的和';
        }
      } else if (exercise.id === 'ex3-5') {
        if (code.includes('for') && code.includes('break') && code.includes('3')) {
          success = true;
          message = '✅ 完美！你学会了使用break控制循环！';
        } else {
          success = false;
          message = '❌ 请找出第一个能被3整除的数并用break停止';
        }
      } else if (exercise.id === 'ex4-1') {
        if (code.includes('def') && code.includes('greet') && code.includes('return')) {
          success = true;
          message = '✅ 太棒了！你成功定义了第一个函数！';
        } else {
          success = false;
          message = '❌ 请定义一个返回"Hello, World!"的函数';
        }
      } else if (exercise.id === 'ex4-2') {
        if (code.includes('def') && code.includes('name') && code.includes('return')) {
          success = true;
          message = '✅ 很好！你掌握了带参数的函数！';
        } else {
          success = false;
          message = '❌ 请定义带参数的greet_person函数';
        }
      } else if (exercise.id === 'ex4-3') {
        if (code.includes('def') && code.includes('**') && code.includes('2')) {
          success = true;
          message = '✅ 正确！你学会了使用默认参数！';
        } else {
          success = false;
          message = '❌ 请定义带默认参数exponent=2的函数';
        }
      } else if (exercise.id === 'ex4-4') {
        if (code.includes('def') && code.includes('return') && code.includes(',')) {
          success = true;
          message = '✅ 完美！你学会了返回多个值！';
        } else {
          success = false;
          message = '❌ 请返回和与差两个值';
        }
      } else if (exercise.id === 'ex4-5') {
        if (code.includes('def') && code.includes('return') && (code.includes('n-1') || code.includes('n-2'))) {
          success = true;
          message = '✅ 太棒了！你掌握了递归函数！';
        } else {
          success = false;
          message = '❌ 请使用递归实现斐波那契数列';
        }
      } else if (exercise.id === 'ex5-1') {
        if (code.includes('input') && code.includes('print') && code.includes('Welcome')) {
          success = true;
          message = '✅ 很好！你掌握了用户输入！';
        } else {
          success = false;
          message = '❌ 请使用input()获取输入并输出欢迎信息';
        }
      } else if (exercise.id === 'ex5-2') {
        if (code.includes('input') && code.includes('int') && code.includes('+')) {
          success = true;
          message = '✅ 正确！你掌握了数字输入和计算！';
        } else {
          success = false;
          message = '❌ 请输入两个数字并计算它们的和';
        }
      } else if (exercise.id === 'ex5-3') {
        if (code.includes('f"') && (code.includes('姓名') || code.includes('name'))) {
          success = true;
          message = '✅ 完美！你学会了格式化输出！';
        } else {
          success = false;
          message = '❌ 请使用f-string格式化输出';
        }
      } else if (exercise.id === 'ex5-4') {
        if (code.includes('input') && code.includes('if') && code.includes('elif') && code.includes('+')) {
          success = true;
          message = '✅ 太棒了！你完成了一个计算器程序！';
        } else {
          success = false;
          message = '❌ 请实现基本的四则运算计算器';
        }
      } else {
        // 通用的检查
        if (code.trim().length > exercise.initialCode.trim().length) {
          success = true;
          message = '✅ 代码看起来不错！继续加油！';
        } else {
          success = false;
          message = '❌ 请编写你的代码';
        }
      }

      setExerciseResult(prev => ({
        ...prev,
        [`${courseId}-${exercise.id}`]: { success, message }
      }));

      // 如果成功，标记为已完成
      if (success) {
        setCompletedExercises(prev => new Set([...prev, `${courseId}-${exercise.id}`]));
      }
    } catch (error) {
      setExerciseResult(prev => ({
        ...prev,
        [`${courseId}-${exercise.id}`]: { 
          success: false, 
          message: '❌ 代码执行出错，请检查语法错误' 
        }
      }));
    }
  };

  const getCourseProgress = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return { completed: 0, total: 0 };
    
    const total = course.exercises.length;
    const completed = course.exercises.filter(ex => 
      completedExercises.has(`${courseId}-${ex.id}`)
    ).length;
    
    return { completed, total };
  };

  const getTotalProgress = () => {
    const total = courses.reduce((sum, course) => sum + course.exercises.length, 0);
    const completed = completedExercises.size;
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Python学习路径</h1>
          <p className="text-xl opacity-95 mb-8">从零基础到掌握Python编程，系统化的学习之旅</p>
          
          {/* 总体进度 */}
          <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">学习进度</span>
              <span className="text-2xl font-bold">{getTotalProgress().percentage}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${getTotalProgress().percentage}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm opacity-90">
              已完成 {getTotalProgress().completed} / {getTotalProgress().total} 道练习题
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* 学习路线图 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">学习路线图</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {courses.map((course, index) => {
                const progress = getCourseProgress(course.id);
                return (
                  <div 
                    key={course.id}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
                    onClick={() => toggleCourse(course.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {progress.completed}/{progress.total} 已完成
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all"
                        style={{ width: `${progress.total > 0 ? (progress.completed / progress.total) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 课程内容 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">课程内容</h2>
            <div className="space-y-6">
              {courses.map((course, courseIndex) => {
                const progress = getCourseProgress(course.id);
                
                return (
                  <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* 课程标题栏 */}
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition-all"
                      onClick={() => toggleCourse(course.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                            {courseIndex + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                            <p className="opacity-90">{course.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm opacity-90">课程进度</div>
                            <div className="text-2xl font-bold">{progress.completed}/{course.exercises.length}</div>
                          </div>
                          {expandedCourses[course.id] ? (
                            <ChevronDown className="h-8 w-8" />
                          ) : (
                            <ChevronRight className="h-8 w-8" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 课程详情 */}
                    {expandedCourses[course.id] && (
                      <div className="p-6">
                        {/* 学习目标 */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Award className="h-6 w-6 text-yellow-500" />
                            学习目标
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {course.content.objectives.map((obj, idx) => (
                              <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 border-l-4 border-green-500">
                                <div className="flex items-start gap-3">
                                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{obj}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 学习主题 */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-blue-500" />
                            学习主题
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {course.content.topics.map((topic, idx) => (
                              <span 
                                key={idx} 
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 详细内容 */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-800 mb-4">核心知识点</h4>
                          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 space-y-3">
                            {course.content.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                  {idx + 1}
                                </div>
                                <p className="text-gray-700 leading-relaxed">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 练习题部分 */}
                        <div className="border-t-2 border-gray-200 pt-6">
                          <div 
                            className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-150 p-4 rounded-xl cursor-pointer transition-all"
                            onClick={() => toggleExercises(course.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                <Play className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-800">实践练习</h4>
                                <p className="text-sm text-gray-600">
                                  完成 {course.exercises.length} 道练习题，巩固所学知识
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                                <span className="text-2xl font-bold text-green-600">{progress.completed}</span>
                                <span className="text-gray-400">/{course.exercises.length}</span>
                              </div>
                              {expandedExercises[course.id] ? (
                                <ChevronDown className="h-6 w-6 text-gray-600" />
                              ) : (
                                <ChevronRight className="h-6 w-6 text-gray-600" />
                              )}
                            </div>
                          </div>

                          {expandedExercises[course.id] && (
                            <div className="mt-6 space-y-6">
                              {course.exercises.map((exercise) => {
                                const exerciseKey = `${course.id}-${exercise.id}`;
                                const isCompleted = completedExercises.has(exerciseKey);
                                
                                return (
                                  <div 
                                    key={exercise.id} 
                                    className={`rounded-xl p-6 transition-all ${
                                      isCompleted 
                                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300' 
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                  >
                                    {/* 练习题标题 */}
                                    <div className="flex items-center justify-between mb-4">
                                      <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                          isCompleted 
                                            ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                                            : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                                        }`}>
                                          {isCompleted ? <Check className="h-5 w-5" /> : exercise.id.split('-')[1]}
                                        </div>
                                        <h5 className="text-lg font-bold text-gray-800">{exercise.title}</h5>
                                        {isCompleted && (
                                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            已完成
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    {/* 练习题描述 */}
                                    <p className="text-gray-600 mb-4">{exercise.description}</p>

                                    {/* 任务要求 */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                                      <h6 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                                        <Code className="h-4 w-4" />
                                        任务要求：
                                      </h6>
                                      <p className="text-blue-700 whitespace-pre-line">{exercise.task}</p>
                                    </div>

                                    {/* 代码编辑器 */}
                                    <div className="mb-4">
                                      <h6 className="font-semibold text-gray-700 mb-2">代码编辑器：</h6>
                                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                                        <textarea
                                          value={exerciseCode[exerciseKey] || exercise.initialCode}
                                          onChange={(e) => handleCodeChange(exerciseKey, e.target.value)}
                                          className="w-full h-48 bg-transparent text-green-400 font-mono p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="在此编写你的代码..."
                                        />
                                      </div>
                                    </div>

                                    {/* 操作按钮 */}
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                      <button
                                        onClick={() => runCode(exercise, course.id)}
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                      >
                                        <Play className="h-5 w-5" />
                                        运行代码
                                      </button>
                                      
                                      {exercise.solution && (
                                        <details className="group">
                                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                                            <span className="text-gray-400">|</span>
                                            查看参考答案
                                          </summary>
                                          <div className="mt-3 bg-gray-900 rounded-lg p-4">
                                            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                                              {exercise.solution}
                                            </pre>
                                          </div>
                                        </details>
                                      )}
                                    </div>

                                    {/* 提示 */}
                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
                                      <div className="flex items-start gap-3">
                                        <span className="text-2xl">💡</span>
                                        <div>
                                          <h6 className="font-bold text-yellow-800 mb-1">提示：</h6>
                                          <p className="text-yellow-700 font-mono">{exercise.hint}</p>
                                        </div>
                                      </div>
                                    </div>

                                    {/* 测试结果 */}
                                    {exerciseResult[exerciseKey] && (
                                      <div className={`p-4 rounded-lg ${
                                        exerciseResult[exerciseKey].success 
                                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400' 
                                          : 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-400'
                                      }`}>
                                        <div className="flex items-center gap-2 mb-2">
                                          {exerciseResult[exerciseKey].success ? (
                                            <Check className="h-6 w-6 text-green-600" />
                                          ) : (
                                            <X className="h-6 w-6 text-red-600" />
                                          )}
                                          <span className="font-bold text-lg">测试结果：</span>
                                        </div>
                                        <p className={`text-lg ${exerciseResult[exerciseKey].success ? 'text-green-800' : 'text-red-800'}`}>
                                          {exerciseResult[exerciseKey].message}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 学习建议 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">学习建议</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4 text-center">💻</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">多动手实践</h3>
                <p className="text-gray-600 text-center">看十遍不如写一遍，编程是技能，需要不断练习</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4 text-center">🧠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">理解原理</h3>
                <p className="text-gray-600 text-center">不要死记硬背，理解代码背后的逻辑和原理</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4 text-center">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">善于调试</h3>
                <p className="text-gray-600 text-center">遇到错误不要慌，学会阅读错误信息，定位问题</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">参考文档</h3>
                <p className="text-gray-600 text-center">学会查阅官方文档，这是最权威的学习资料</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-2">Python学习路径</p>
          <p className="opacity-70 mb-4">系统化的Python编程学习之旅</p>
          <div className="flex justify-center gap-4 text-sm opacity-70">
            <span>第一阶段：零基础入门</span>
            <span>|</span>
            <span>5门核心课程</span>
            <span>|</span>
            <span>17道实践练习</span>
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
