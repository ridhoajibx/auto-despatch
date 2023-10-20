// withAuthentication.tsx
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import { getAuthMe, selectAuth } from '@/redux/features/AuthenticationReducers';
import React, { ComponentType, useEffect } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const withoutAuthentication = (WrappedComponent: ComponentType) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLogin, pending } = useAppSelector(selectAuth);
    const token = Cookies.get("accessToken")

    useEffect(() => {
      // Check the user's authentication status
      if (token) {
        // You might want to dispatch actions like loading user data or redirect to login
        // dispatch(loginUser()); // Load user data
        // Or redirect to login
        // history.push('/login');
        navigate("/")
      }
    }, [token]);

    // return token ? <WrappedComponent {...props} /> : null;
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withoutAuthentication;
