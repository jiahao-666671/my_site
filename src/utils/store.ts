import { create } from 'zustand';
import { User, Course, Section, Lecture, Exercise, Assessment } from '../types';
import { supabase } from './supabase';

// 默认课程数据（当数据库为空时使用）
const defaultCourses: Course[] = [
  {
    id: 'python-basic',
    title: 'Python编程基础',
    description: '从零开始学习Python编程，掌握基本语法和核心概念',
    category: 'basic',
    level: 'beginner',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20concept%20abstract%20illustration%20with%20code%20elements%20and%20snake%20logo&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'data-analysis',
    title: '数据分析实战',
    description: '使用Python进行数据分析，掌握Pandas、NumPy等核心库',
    category: 'business',
    level: 'intermediate',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20dashboard%20with%20charts%20and%20graphs%20visualization&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  },
  {
    id: 'machine-learning',
    title: '机器学习入门',
    description: '学习机器学习基础理论，动手实现经典算法',
    category: 'advanced',
    level: 'advanced',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20neural%20network%20visualization%20with%20data%20flow&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-03-10T00:00:00Z',
    updated_at: '2024-03-10T00:00:00Z',
  },
  {
    id: 'excel-advanced',
    title: 'Excel高级应用',
    description: '掌握Excel高级功能，提升数据处理效率',
    category: 'tools',
    level: 'intermediate',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Excel%20spreadsheet%20with%20formulas%20and%20data%20tables%20professional%20style&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  {
    id: 'sql-database',
    title: 'SQL数据库基础',
    description: '学习SQL语言，掌握数据库查询和管理技能',
    category: 'basic',
    level: 'beginner',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20query%20visualization%20with%20tables%20and%20data%20connections&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-02-15T00:00:00Z',
    updated_at: '2024-02-15T00:00:00Z',
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '使用Matplotlib、Seaborn等库创建专业数据图表',
    category: 'business',
    level: 'intermediate',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20charts%20graphs%20colorful%20professional%20dashboard&image_size=landscape_16_9',
    created_by: 'admin',
    created_at: '2024-03-01T00:00:00Z',
    updated_at: '2024-03-01T00:00:00Z',
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