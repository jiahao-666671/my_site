import React, { useState, useEffect, useRef } from 'react';
import { Play, Loader2, CheckCircle2, XCircle } from 'lucide-react';

// 加载Pyodide
const loadPyodideInstance = async () => {
  const pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
  });
  
  // 加载必要的包
  await pyodide.loadPackage(['numpy', 'pandas', 'micropip']);
  
  return pyodide;
};

interface PythonExecutorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  height?: string;
  readOnly?: boolean;
}

const PythonExecutor: React.FC<PythonExecutorProps> = ({
  initialCode = '# 在这里编写你的Python代码\nimport pandas as pd\nimport numpy as np\n\n# 示例：创建一个DataFrame\ndata = {\n    "姓名": ["张三", "李四", "王五"],\n    "年龄": [25, 30, 35],\n    "城市": ["北京", "上海", "广州"]\n}\n\ndf = pd.DataFrame(data)\nprint("创建的DataFrame：")\nprint(df)\nprint("\\n基本统计信息：")\nprint(df.describe())\n',
  onCodeChange,
  height = '400px',
  readOnly = false,
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ type: 'stdout' | 'stderr'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);
  const [hasRun, setHasRun] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoRef = useRef<any>(null);
  const [Editor, setEditor] = React.useState<any>(null);

  // 动态导入Monaco Editor
  useEffect(() => {
    import('@monaco-editor/react').then((mod) => {
      setEditor(() => mod.default);
    });
  }, []);

  // 加载Pyodide
  useEffect(() => {
    const initPyodide = async () => {
      try {
        setIsPyodideLoading(true);
        
        // 动态加载Pyodide
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        script.async = true;
        
        script.onload = async () => {
          try {
            const pyodideInstance = await loadPyodideInstance();
            setPyodide(pyodideInstance);
            setIsPyodideLoading(false);
          } catch (error) {
            console.error('Failed to initialize Pyodide:', error);
            setIsPyodideLoading(false);
          }
        };
        
        script.onerror = () => {
          console.error('Failed to load Pyodide script');
          setIsPyodideLoading(false);
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Failed to initialize Pyodide:', error);
        setIsPyodideLoading(false);
      }
    };

    initPyodide();
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    const newCode = value || '';
    setCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const runCode = async () => {
    if (!pyodide || isLoading) return;

    setIsLoading(true);
    setOutput([]);
    setHasRun(true);
    setIsSuccess(null);

    try {
      // 重定向stdout和stderr
      await pyodide.runPythonAsync(`
import sys
from io import StringIO

# 创建自定义stdout和stderr
class OutputCapture:
    def __init__(self, output_type):
        self.output_type = output_type
        self.text = ""
    
    def write(self, text):
        if text.strip():
            self.text += text
    
    def flush(self):
        pass

sys.stdout = OutputCapture('stdout')
sys.stderr = OutputCapture('stderr')
      `);

      // 运行用户代码
      await pyodide.runPythonAsync(code);

      // 获取输出
      const stdoutOutput = await pyodide.runPythonAsync('sys.stdout.text');
      const stderrOutput = await pyodide.runPythonAsync('sys.stderr.text');

      const newOutput: { type: 'stdout' | 'stderr'; content: string }[] = [];
      
      if (stdoutOutput) {
        newOutput.push({ type: 'stdout', content: stdoutOutput });
      }
      
      if (stderrOutput) {
        newOutput.push({ type: 'stderr', content: stderrOutput });
        setIsSuccess(false);
      } else if (stdoutOutput) {
        setIsSuccess(true);
      }

      setOutput(newOutput);
    } catch (error: any) {
      setOutput([{ type: 'stderr', content: error.message || String(error) }]);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
    setHasRun(false);
    setIsSuccess(null);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-3 text-sm font-medium">Python 代码编辑器</span>
        </div>
        <div className="flex items-center gap-2">
          {isPyodideLoading ? (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>加载Python环境...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-green-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Python 3.11 已就绪</span>
            </div>
          )}
        </div>
      </div>

      {/* 代码编辑器 */}
      <div className="relative" style={{ height }}>
        {Editor ? (
          <Editor
            height="100%"
            defaultLanguage="python"
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "'Fira Code', 'Consolas', monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              readOnly: readOnly,
              padding: { top: 10 },
              lineNumbers: 'on',
              renderLineHighlight: 'line',
              tabSize: 4,
              wordWrap: 'on',
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>加载编辑器...</span>
            </div>
          </div>
        )}
      </div>

      {/* 控制栏 */}
      {!readOnly && (
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={runCode}
              disabled={isLoading || isPyodideLoading}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>运行中...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>运行代码</span>
                </>
              )}
            </button>
            <button
              onClick={resetCode}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
            >
              重置
            </button>
          </div>

          {hasRun && (
            <div className="flex items-center gap-2">
              {isSuccess === true && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">运行成功</span>
                </div>
              )}
              {isSuccess === false && (
                <div className="flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" />
                  <span className="font-medium">运行失败</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 输出区域 */}
      {(output.length > 0 || hasRun) && (
        <div className="border-t border-gray-200 bg-gray-900 text-gray-100">
          <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-sm font-medium text-gray-300">输出结果</span>
          </div>
          <div className="p-4 max-h-60 overflow-auto">
            {output.length === 0 ? (
              <p className="text-gray-500 italic">无输出</p>
            ) : (
              output.map((line, index) => (
                <pre
                  key={index}
                  className={`font-mono text-sm whitespace-pre-wrap mb-2 ${
                    line.type === 'stderr' ? 'text-red-400' : 'text-green-400'
                  }`}
                >
                  {line.content}
                </pre>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// 添加Pyodide类型声明
declare global {
  interface Window {
    loadPyodide: any;
  }
}

export default PythonExecutor;
