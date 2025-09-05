'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './auth-context';
import toast from 'react-hot-toast';

interface SocketContextType {
  socket: Socket | null;
  connected: boolean;
  onlineUsers: string[];
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5555';

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Get token for authentication
      const token = localStorage.getItem('access_token');
      
      if (!token) return;

      // Create socket connection
      const newSocket = io(SOCKET_URL, {
        auth: {
          token,
        },
        transports: ['websocket'],
      });

      // Connection events
      newSocket.on('connect', () => {
        console.log('Socket connected');
        setConnected(true);
      });

      newSocket.on('disconnect', () => {
        console.log('Socket disconnected');
        setConnected(false);
      });

      newSocket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });

      // User events
      newSocket.on('user:online', (data) => {
        setOnlineUsers((prev) => [...new Set([...prev, data.userId])]);
      });

      newSocket.on('user:offline', (data) => {
        setOnlineUsers((prev) => prev.filter((id) => id !== data.userId));
      });

      // Notification events
      newSocket.on('notification:new', (notification) => {
        toast(notification.message, {
          icon: '🔔',
          duration: 5000,
        });
      });

      // System broadcast
      newSocket.on('system:broadcast', (data) => {
        toast(data.message, {
          icon: data.type === 'error' ? '❌' : '📢',
          duration: 6000,
        });
      });

      // Force logout
      newSocket.on('auth:forceLogout', (data) => {
        toast.error(data.message);
        // The auth context will handle the actual logout
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      });

      // Application events
      newSocket.on('application:statusUpdated', (data) => {
        toast(`Application status updated to: ${data.newStatus}`, {
          icon: '📋',
        });
      });

      // Document events
      newSocket.on('document:statusChanged', (data) => {
        const statusIcon = data.newStatus === 'approved' ? '✅' : '❌';
        toast(`Document ${data.newStatus}`, {
          icon: statusIcon,
        });
      });

      // Payment events
      newSocket.on('payment:statusUpdate', (data) => {
        const statusIcon = data.status === 'completed' ? '💳' : '⏳';
        toast(`Payment ${data.status}`, {
          icon: statusIcon,
        });
      });

      // Comment events
      newSocket.on('comment:created', (data) => {
        // Handle in the application view component
      });

      newSocket.on('application:userTyping', (data) => {
        // Handle in the application view component
      });

      setSocket(newSocket);

      // Cleanup on unmount
      return () => {
        newSocket.disconnect();
      };
    } else {
      // Disconnect socket if user logs out
      if (socket) {
        socket.disconnect();
        setSocket(null);
        setConnected(false);
      }
    }
  }, [user]);

  const value = {
    socket,
    connected,
    onlineUsers,
  };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}

export function useSocket() {
  const context = useContext(SocketContext);
  
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  
  return context;
}