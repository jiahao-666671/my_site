import { create } from 'zustand';
import { User, Course, Section, Lecture, Exercise, Assessment } from '../types';
import { supabase } from './supabase';

// 默认课程数据（当数据库为空时使用）
// 基于Python学习路径的四个阶段设计的课程体系
const defaultCourses: Course[] = [
  // 第一阶段：零基础入门
  {
    id: 'python-env-setup',
    title: 'Python环境搭建',
    description: '学习配置Python开发环境，安装IDE和必要的工具，为后续学习打下基础',
    category: 'stage1',
    level: 'beginner',
    cover_image_url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'python-basic-syntax',
    title: 'Python基础语法',
    description: '掌握Python基本语法规则，包括变量、数据类型、运算符等核心概念',
    category: 'stage1',
    level: 'beginner',
    cover_image_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z',
  },
  {
    id: 'python-flow-control',
    title: '流程控制',
    description: '学习条件语句if-elif-else和循环结构for、while，实现程序的逻辑控制',
    category: 'stage1',
    level: 'beginner',
    cover_image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-10T00:00:00Z',
  },
  {
    id: 'python-functions',
    title: '函数基础',
    description: '掌握函数的定义、参数传递、返回值等，学会封装和复用代码',
    category: 'stage1',
    level: 'beginner',
    cover_image_url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'python-io',
    title: '基本输入输出',
    description: '学习使用print()输出和input()获取用户输入，实现简单的人机交互',
    category: 'stage1',
    level: 'beginner',
    cover_image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  
  // 第二阶段：核心深入与思维提升
  {
    id: 'python-oop',
    title: '面向对象编程',
    description: '深入理解类与对象的概念，掌握封装、继承、多态等面向对象特性',
    category: 'stage2',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  },
  {
    id: 'python-file-exception',
    title: '文件与异常处理',
    description: '学习文件读写操作和异常捕获机制，编写健壮的程序',
    category: 'stage2',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-02-05T00:00:00Z',
    updated_at: '2024-02-05T00:00:00Z',
  },
  {
    id: 'python-modules',
    title: '模块与标准库',
    description: '掌握模块的导入和使用，熟悉Python标准库中常用的模块',
    category: 'stage2',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-02-10T00:00:00Z',
    updated_at: '2024-02-10T00:00:00Z',
  },
  {
    id: 'python-data-structures',
    title: '数据结构进阶',
    description: '深入学习列表、元组、字典、集合等数据结构的特性和应用场景',
    category: 'stage2',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-02-15T00:00:00Z',
    updated_at: '2024-02-15T00:00:00Z',
  },
  
  // 第三阶段：专项应用与实践
  {
    id: 'python-data-analysis',
    title: '数据分析实战',
    description: '使用NumPy、Pandas进行数据处理和分析，掌握数据可视化技能',
    category: 'stage3',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-03-01T00:00:00Z',
    updated_at: '2024-03-01T00:00:00Z',
  },
  {
    id: 'python-web-dev',
    title: 'Web开发',
    description: '使用Flask或Django框架开发Web应用，掌握前后端交互基础',
    category: 'stage3',
    level: 'advanced',
    cover_image_url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-03-05T00:00:00Z',
    updated_at: '2024-03-05T00:00:00Z',
  },
  {
    id: 'python-ml-intro',
    title: '机器学习入门',
    description: '了解机器学习基础概念，学习使用scikit-learn实现简单算法',
    category: 'stage3',
    level: 'advanced',
    cover_image_url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-03-10T00:00:00Z',
    updated_at: '2024-03-10T00:00:00Z',
  },
  {
    id: 'python-automation',
    title: '自动化与脚本',
    description: '编写自动化脚本处理重复性任务，提升工作效率',
    category: 'stage3',
    level: 'intermediate',
    cover_image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-03-15T00:00:00Z',
    updated_at: '2024-03-15T00:00:00Z',
  },
  
  // 第四阶段：高级主题与最佳实践
  {
    id: 'python-advanced-features',
    title: 'Python高级特性',
    description: '深入学习装饰器、生成器、上下文管理器等高级特性',
    category: 'stage4',
    level: 'advanced',
    cover_image_url: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-04-01T00:00:00Z',
    updated_at: '2024-04-01T00:00:00Z',
  },
  {
    id: 'python-concurrency',
    title: '并发编程',
    description: '掌握多线程、多进程、异步编程等并发技术',
    category: 'stage4',
    level: 'advanced',
    cover_image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-04-05T00:00:00Z',
    updated_at: '2024-04-05T00:00:00Z',
  },
  {
    id: 'python-best-practices',
    title: '代码规范与测试',
    description: '学习PEP8规范、单元测试、代码重构等最佳实践',
    category: 'stage4',
    level: 'advanced',
    cover_image_url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    created_by: 'admin',
    created_at: '2024-04-10T00:00:00Z',
    updated_at: '2024-04-10T00:00:00Z',
  },
];

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'student' | 'teacher') => Promise<void>;
  logout: () => Promise<void>;
  loadUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  loading: false,
  error: null,
  login: async (email, password) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    if (data.user) {
      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();
      if (userData) {
        set({ user: userData, loading: false });
      }
    }
  },
  register: async (email, password, name, role) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    if (data.user) {
      const { error: insertError } = await supabase
        .from('users')
        .insert({ id: data.user.id, email, name, role });
      if (insertError) {
        set({ error: insertError.message, loading: false });
        return;
      }
      set({ user: { id: data.user.id, email, name, role, created_at: new Date().toISOString() }, loading: false });
    }
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  loadUser: async () => {
    set({ loading: true });
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      if (userData) {
        set({ user: userData, loading: false });
      }
    } else {
      set({ loading: false });
    }
  },
}));

interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  sections: Section[];
  lectures: Lecture[];
  exercises: Exercise[];
  assessments: Assessment[];
  loading: boolean;
  error: string | null;
  loadCourses: () => Promise<void>;
  loadCourse: (id: string) => Promise<void>;
  loadSections: (courseId: string) => Promise<void>;
  loadLectures: (sectionId: string) => Promise<void>;
  loadExercises: (sectionId: string) => Promise<void>;
  loadAssessments: (courseId: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  currentCourse: null,
  sections: [],
  lectures: [],
  exercises: [],
  assessments: [],
  loading: false,
  error: null,
  loadCourses: async () => {
    set({ loading: true, error: null });
    const { data, error } = await supabase.from('courses').select('*');
    if (error) {
      // 如果数据库查询失败，使用默认数据
      console.warn('Failed to load courses from database, using default data');
      set({ courses: defaultCourses, loading: false });
      return;
    }
    // 如果数据库为空，使用默认数据
    set({ courses: data.length > 0 ? data : defaultCourses, loading: false });
  },
  loadCourse: async (id) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ currentCourse: data, loading: false });
  },
  loadSections: async (courseId) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('sections')
      .select('*')
      .eq('course_id', courseId)
      .order('order_number');
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ sections: data, loading: false });
  },
  loadLectures: async (sectionId) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('lectures')
      .select('*')
      .eq('section_id', sectionId)
      .order('order_number');
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ lectures: data, loading: false });
  },
  loadExercises: async (sectionId) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('exercises')
      .select('*')
      .eq('section_id', sectionId)
      .order('order_number');
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ exercises: data, loading: false });
  },
  loadAssessments: async (courseId) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('course_id', courseId);
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ assessments: data, loading: false });
  },
}));

interface ProgressState {
  progress: Record<string, boolean>; // lecture_id -> completed
  exerciseCompletions: Record<string, boolean>; // exercise_id -> passed
  assessmentResults: Record<string, number>; // assessment_id -> score
  loading: boolean;
  error: string | null;
  loadProgress: (userId: string) => Promise<void>;
  markLectureComplete: (userId: string, lectureId: string) => Promise<void>;
  submitExercise: (userId: string, exerciseId: string, code: string, passed: boolean) => Promise<void>;
  submitAssessment: (userId: string, assessmentId: string, score: number) => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: {},
  exerciseCompletions: {},
  assessmentResults: {},
  loading: false,
  error: null,
  loadProgress: async (userId) => {
    set({ loading: true, error: null });
    // 加载学习进度
    const { data: progressData, error: progressError } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', userId);
    if (progressError) {
      set({ error: progressError.message, loading: false });
      return;
    }
    const progressMap: Record<string, boolean> = {};
    progressData.forEach((p) => {
      progressMap[p.lecture_id] = p.completed;
    });
    
    // 加载练习完成情况
    const { data: exerciseData, error: exerciseError } = await supabase
      .from('exercise_completions')
      .select('*')
      .eq('user_id', userId);
    if (exerciseError) {
      set({ error: exerciseError.message, loading: false });
      return;
    }
    const exerciseMap: Record<string, boolean> = {};
    exerciseData.forEach((e) => {
      exerciseMap[e.exercise_id] = e.passed;
    });
    
    // 加载测评结果
    const { data: assessmentData, error: assessmentError } = await supabase
      .from('assessment_results')
      .select('*')
      .eq('user_id', userId);
    if (assessmentError) {
      set({ error: assessmentError.message, loading: false });
      return;
    }
    const assessmentMap: Record<string, number> = {};
    assessmentData.forEach((a) => {
      assessmentMap[a.assessment_id] = a.score;
    });
    
    set({
      progress: progressMap,
      exerciseCompletions: exerciseMap,
      assessmentResults: assessmentMap,
      loading: false,
    });
  },
  markLectureComplete: async (userId, lectureId) => {
    const { error } = await supabase
      .from('progress')
      .upsert({
        user_id: userId,
        lecture_id: lectureId,
        completed: true,
        completed_at: new Date().toISOString(),
      });
    if (error) {
      set({ error: error.message });
      return;
    }
    set((state) => ({
      progress: { ...state.progress, [lectureId]: true },
    }));
  },
  submitExercise: async (userId, exerciseId, code, passed) => {
    const { error } = await supabase
      .from('exercise_completions')
      .insert({
        user_id: userId,
        exercise_id: exerciseId,
        code,
        passed,
      });
    if (error) {
      set({ error: error.message });
      return;
    }
    set((state) => ({
      exerciseCompletions: { ...state.exerciseCompletions, [exerciseId]: passed },
    }));
  },
  submitAssessment: async (userId, assessmentId, score) => {
    const { error } = await supabase
      .from('assessment_results')
      .insert({
        user_id: userId,
        assessment_id: assessmentId,
        score,
      });
    if (error) {
      set({ error: error.message });
      return;
    }
    set((state) => ({
      assessmentResults: { ...state.assessmentResults, [assessmentId]: score },
    }));
  },
}));

interface AchievementState {
  achievements: any[];
  loading: boolean;
  error: string | null;
  loadAchievements: (userId: string) => Promise<void>;
}

export const useAchievementStore = create<AchievementState>((set) => ({
  achievements: [],
  loading: false,
  error: null,
  loadAchievements: async (userId) => {
    set({ loading: true, error: null });
    const { data, error } = await supabase
      .from('achievements')
      .select('*, type:achievement_types(*)')
      .eq('user_id', userId);
    if (error) {
      set({ error: error.message, loading: false });
      return;
    }
    set({ achievements: data, loading: false });
  },
}));
