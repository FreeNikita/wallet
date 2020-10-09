import React, { memo } from 'react';
import { LOGIN_METHODS } from 'configs/login.config';
import { SocialLoginButton } from 'modules/auth/components/SocialLoginButton';

export const Login = memo(() => (
  <>
    {LOGIN_METHODS.map(({ title, sing }) => <SocialLoginButton title={title} sing={sing} key={title} />)}
  </>
));

Login.displayName = 'Login';
