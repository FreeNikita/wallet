import React, { memo } from 'react';
import { string, func } from 'prop-types';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { home } from 'configs/routing.config';

export const SocialLoginButton = memo(({ title, sing }) => {
  const history = useHistory();
  const login = () => sing().then(() => history.push(home));

  return (
    <Button color="primary" key={title} onClick={login}>
      {title}
    </Button>
  );
});

SocialLoginButton.displayName = 'SocialLoginButton';

SocialLoginButton.propTypes = {
  title: string.isRequired,
  sing: func.isRequired,
};
