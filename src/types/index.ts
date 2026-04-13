// 用户类型
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher';
  created_at: string;
}

// 课程类型
export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  cover_image_url?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// 章节类型
export interface Section {
  id: string;
  course_id: string;
  title: string;
  order_number: number;
  created_at: string;
  updated_at: string;
}

// 学习内容类型
export interface Lecture {
  id: string;
  section_id: string;
  title: string;
  content_type: 'video' | 'document' | 'code';
  content_url: string;
  duration?: number;
  order_number: number;
  created_at: string;
  updated_at: string;
}

// 练习类型
export interface Exercise {
  id: string;
  section_id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  order_number: number;
  created_at: string;
  updated_at: string;
}

// 练习测试用例类型
export interface ExerciseTestCase {
  id: string;
  exercise_id: string;
  input: string;
  expected_output: string;
  created_at: string;
}

// 测评类型
export interface Assessment {
  id: string;
  course_id: string;
  title: string;
  description: string;
  total_points: number;
  time_limit?: number;
  created_at: string;
  updated_at: string;
}

// 测评题目类型
export interface AssessmentQuestion {
  id: string;
  assessment_id: string;
  question_type: 'multiple_choice' | 'code';
  content: string;
  points: number;
  options?: string[];
  order_number: number;
  created_at: string;
}

// 报名记录类型
export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
}

// 学习进度类型
export interface Progress {
  id: string;
  user_id: string;
  lecture_id: string;
  completed: boolean;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

// 练习完成类型
export interface ExerciseCompletion {
  id: string;
  user_id: string;
  exercise_id: string;
  code: string;
  passed: boolean;
  completed_at: string;
}

// 测评结果类型
export interface AssessmentResult {
  id: string;
  user_id: string;
  assessment_id: string;
  score: number;
  completed_at: string;
}

// 测评答案类型
export interface AssessmentAnswer {
  id: string;
  result_id: string;
  question_id: string;
  answer: string;
  correct: boolean;
  points_earned: number;
}

// 成就类型
export interface AchievementType {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  condition: Record<string, any>;
  created_at: string;
}

// 成就记录类型
export interface Achievement {
  id: string;
  user_id: string;
  achievement_type_id: string;
  earned_at: string;
  type?: AchievementType;
}

// 代码执行请求类型
export interface CodeExecutionRequest {
  code: string;
  testCases: Array<{
    input: string;
    expected_output: string;
  }>;
}

// 代码执行响应类型
export interface CodeExecutionResponse {
  output: string;
  success: boolean;
  errors: string[];
}

// 测评代码评分请求类型
export interface CodeGradingRequest {
  code: string;
  problemId: string;
}

// 测评代码评分响应类型
export interface CodeGradingResponse {
  score: number;
  feedback: string;
}