import { create } from 'zustand';
import { User, Course, Section, Lecture, Exercise, Assessment } from '../types';
import { supabase } from './supabase';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Python数据分析入门',
    description: '从零开始学习Python数据分析，掌握Pandas、NumPy等核心工具库',
    level: 'beginner',
    category: 'basic',
    created_by: '1',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: '2',
    title: '数据可视化实战',
    description: '使用Matplotlib和Seaborn创建专业的数据可视化图表',
    level: 'beginner',
    category: 'basic',
    created_by: '1',
    created_at: '2024-01-02',
    updated_at: '2024-01-02',
  },
  {
    id: '3',
    title: '电商用户行为分析',
    description: '基于真实电商数据进行用户行为分析和洞察',
    level: 'intermediate',
    category: 'business',
    created_by: '1',
    created_at: '2024-01-03',
    updated_at: '2024-01-03',
  },
  {
    id: '4',
    title: '机器学习入门',
    description: '学习Scikit-learn库，掌握常用机器学习算法',
    level: 'intermediate',
    category: 'advanced',
    created_by: '1',
    created_at: '2024-01-04',
    updated_at: '2024-01-04',
  },
  {
    id: '5',
    title: '时间序列分析',
    description: '学习时间序列数据处理和预测方法',
    level: 'advanced',
    category: 'advanced',
    created_by: '1',
    created_at: '2024-01-05',
    updated_at: '2024-01-05',
  },
  {
    id: '6',
    title: '数据清洗与预处理',
    description: '掌握数据清洗的最佳实践和常用技术',
    level: 'beginner',
    category: 'tools',
    created_by: '1',
    created_at: '2024-01-06',
    updated_at: '2024-01-06',
  },
];

const mockSections: Record<string, Section[]> = {
  '1': [
    { id: 's1-1', course_id: '1', title: 'Python基础回顾', order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 's1-2', course_id: '1', title: 'NumPy数组操作', order_number: 2, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 's1-3', course_id: '1', title: 'Pandas数据处理', order_number: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
  '2': [
    { id: 's2-1', course_id: '2', title: 'Matplotlib基础', order_number: 1, created_at: '2024-01-02', updated_at: '2024-01-02' },
    { id: 's2-2', course_id: '2', title: 'Seaborn高级图表', order_number: 2, created_at: '2024-01-02', updated_at: '2024-01-02' },
    { id: 's2-3', course_id: '2', title: '交互式可视化', order_number: 3, created_at: '2024-01-02', updated_at: '2024-01-02' },
  ],
  '3': [
    { id: 's3-1', course_id: '3', title: '数据采集与清洗', order_number: 1, created_at: '2024-01-03', updated_at: '2024-01-03' },
    { id: 's3-2', course_id: '3', title: '用户行为分析', order_number: 2, created_at: '2024-01-03', updated_at: '2024-01-03' },
    { id: 's3-3', course_id: '3', title: '销售数据分析', order_number: 3, created_at: '2024-01-03', updated_at: '2024-01-03' },
  ],
};

const mockLectures: Record<string, Lecture[]> = {
  's1-1': [
    { id: 'l1-1', section_id: 's1-1', title: 'Python数据类型', content_type: 'video', content_url: '', duration: 15, order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l1-2', section_id: 's1-1', title: '条件语句与循环', content_type: 'video', content_url: '', duration: 20, order_number: 2, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l1-3', section_id: 's1-1', title: '函数定义与使用', content_type: 'video', content_url: '', duration: 25, order_number: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
  's1-2': [
    { id: 'l2-1', section_id: 's1-2', title: 'NumPy数组创建', content_type: 'video', content_url: '', duration: 18, order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l2-2', section_id: 's1-2', title: '数组索引与切片', content_type: 'video', content_url: '', duration: 22, order_number: 2, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l2-3', section_id: 's1-2', title: '数组运算', content_type: 'video', content_url: '', duration: 20, order_number: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
  's1-3': [
    { id: 'l3-1', section_id: 's1-3', title: 'DataFrame入门', content_type: 'video', content_url: '', duration: 25, order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l3-2', section_id: 's1-3', title: '数据选择与过滤', content_type: 'video', content_url: '', duration: 30, order_number: 2, created_at: '2024-01-01', updated_at: '2024-01-01' },
    { id: 'l3-3', section_id: 's1-3', title: '数据聚合与分组', content_type: 'video', content_url: '', duration: 35, order_number: 3, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
};

const mockExercises: Record<string, Exercise[]> = {
  's1-1': [
    { id: 'e1-1', section_id: 's1-1', title: '变量与数据类型练习', description: '练习Python基本数据类型和变量操作', difficulty: 'easy', order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
  's1-2': [
    { id: 'e2-1', section_id: 's1-2', title: 'NumPy数组操作练习', description: '练习NumPy数组的创建和操作', difficulty: 'easy', order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
  's1-3': [
    { id: 'e3-1', section_id: 's1-3', title: 'Pandas数据处理练习', description: '练习使用Pandas进行数据处理', difficulty: 'medium', order_number: 1, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
};

const mockAssessments: Record<string, Assessment[]> = {
  '1': [
    { id: 'a1-1', course_id: '1', title: '课程测评', description: '测试Python数据分析基础知识', total_points: 100, time_limit: 60, created_at: '2024-01-01', updated_at: '2024-01-01' },
  ],
};

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
    try {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        throw error;
      }
      set({ courses: data, loading: false });
    } catch {
      set({ courses: mockCourses, loading: false });
    }
  },
  loadCourse: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        throw error;
      }
      set({ currentCourse: data, loading: false });
    } catch {
      const course = mockCourses.find(c => c.id === id);
      set({ currentCourse: course || null, loading: false });
    }
  },
  loadSections: async (courseId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('sections')
        .select('*')
        .eq('course_id', courseId)
        .order('order_number');
      if (error) {
        throw error;
      }
      set({ sections: data, loading: false });
    } catch {
      set({ sections: mockSections[courseId] || [], loading: false });
    }
  },
  loadLectures: async (sectionId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('lectures')
        .select('*')
        .eq('section_id', sectionId)
        .order('order_number');
      if (error) {
        throw error;
      }
      set({ lectures: data, loading: false });
    } catch {
      set({ lectures: mockLectures[sectionId] || [], loading: false });
    }
  },
  loadExercises: async (sectionId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .eq('section_id', sectionId)
        .order('order_number');
      if (error) {
        throw error;
      }
      set({ exercises: data, loading: false });
    } catch {
      set({ exercises: mockExercises[sectionId] || [], loading: false });
    }
  },
  loadAssessments: async (courseId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('assessments')
        .select('*')
        .eq('course_id', courseId);
      if (error) {
        throw error;
      }
      set({ assessments: data, loading: false });
    } catch {
      set({ assessments: mockAssessments[courseId] || [], loading: false });
    }
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
    try {
      // 加载学习进度
      const { data: progressData, error: progressError } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId);
      if (progressError) {
        throw progressError;
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
        throw exerciseError;
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
        throw assessmentError;
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
    } catch (error) {
      // 提供默认的模拟数据
      set({
        progress: {},
        exerciseCompletions: {},
        assessmentResults: {},
        loading: false,
      });
    }
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
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*, type:achievement_types(*)')
        .eq('user_id', userId);
      if (error) {
        throw error;
      }
      set({ achievements: data, loading: false });
    } catch (error) {
      // 提供默认的模拟数据
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
      set({ achievements: mockAchievements, loading: false });
    }
  },
}));