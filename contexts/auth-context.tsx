'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/axios';
import { toast } from 'sonner';

interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'applicant' | 'case_manager' | 'admin';
  phone?: string;
  profileImage?: string;
  isEmailVerified: boolean;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, redirectUrl?: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await api.get<{ success?: boolean; data?: User }>('/auth/me');

      if (response?.success && response?.data) {
        setUser(response.data);
      }
    } catch (error) {
      // Token is invalid, clear storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string, redirectUrl?: string) => {
    try {
      const response = await api.post<{ success?: boolean; data?: { user: User; accessToken: string; refreshToken: string } }>('/auth/login', { email, password });

      if (response?.success && response?.data) {
        const { user, accessToken, refreshToken } = response.data;

        // Store tokens
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        setUser(user);
        toast.success('Login successful!');

        // Check for redirect URL (from query params or localStorage)
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = redirectUrl || urlParams.get('redirect');

        if (redirect) {
          router.push(redirect);
          return;
        }

        // Redirect to home page (dashboard will be shown there)
        router.push('/');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      const message = err.response?.data?.message || 'Login failed';
      toast.error(message);
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await api.post<{ success?: boolean; data?: { user: User; accessToken: string; refreshToken: string } }>('/auth/register', data);

      if (response?.success && response?.data) {
        const { user, accessToken, refreshToken } = response.data;

        // Store tokens
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        setUser(user);
        toast.success('Registration successful!');

        // Redirect to home page (dashboard will be shown there)
        router.push('/');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      const message = err.response?.data?.message || 'Registration failed';
      toast.error(message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      
      // Call logout API
      await api.post('/auth/logout', { refreshToken });
    } catch (error) {
      // Ignore logout errors
    } finally {
      // Clear local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      setUser(null);
      router.push('/login');
      toast.success('Logged out successfully');
    }
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}