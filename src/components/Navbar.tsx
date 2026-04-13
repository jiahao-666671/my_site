import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../utils/store';
import { Menu, X, User, LogOut, Book, Award, Home, UserCheck, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-8 w-8" />
            <span className="text-xl font-bold">数据学习平台</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Home className="h-5 w-5" />
              <span>首页</span>
            </Link>
            <Link to="/courses" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Book className="h-5 w-5" />
              <span>课程</span>
            </Link>
            <Link to="/python-learning-path" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Code className="h-5 w-5" />
              <span>Python学习路径</span>
            </Link>
            {user && (
              <Link to="/profile" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <User className="h-5 w-5" />
                <span>个人中心</span>
              </Link>
            )}
            {user && user.role === 'teacher' && (
              <Link to="/admin" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <UserCheck className="h-5 w-5" />
                <span>管理后台</span>
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 hover:text-orange-400 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>退出</span>
              </button>
            ) : (
              <Link to="/login" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md transition-colors">
                登录/注册
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>首页</span>
              </Link>
              <Link
                to="/courses"
                className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Book className="h-5 w-5" />
                <span>课程</span>
              </Link>
              <Link
                to="/python-learning-path"
                className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                <span>Python学习路径</span>
              </Link>
              {user && (
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>个人中心</span>
                </Link>
              )}
              {user && user.role === 'teacher' && (
                <Link
                  to="/admin"
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserCheck className="h-5 w-5" />
                  <span>管理后台</span>
                </Link>
              )}
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>退出</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  登录/注册
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;