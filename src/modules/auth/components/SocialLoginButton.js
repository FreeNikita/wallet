import React, { memo } from 'react';
import { string, func } from 'prop-types';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { home } from 'configs/routing.config';

import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation SetUser($firebase_id: String!) {
    setUser(firebase_id: $firebase_id) {
      id
    }
  }
`;

// setUser(firebase_id: String): User

export const SocialLoginButton = memo(({ title, sing }) => {
  const history = useHistory();
  const [setUser, { data }] = useMutation(ADD_TODO);

  const login = () => sing()
    .then(({ additionalUserInfo: { profile }, user }) => {
      const { email, family_name, given_name } = profile;
      const { uid } = user;
      setUser({
        variables: {
          firebase_id: uid,
          email,
          name: given_name,
          surname: family_name,
        },
      });
    })
    .then(() => history.push(home));

  return (
    <Button color="primary" onClick={login}>
      {title}
    </Button>
  );
});

SocialLoginButton.displayName = 'SocialLoginButton';

SocialLoginButton.propTypes = {
  title: string.isRequired,
  sing: func.isRequired,
};
