import React, {useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useTranslation} from 'react-i18next';
import {UserContext} from '../../../contexts/user/userContext';

import {registration} from 'modules/firebase';

const useStyles = makeStyles((theme)=> {
  return {
    form: {
      display: 'grid',
    },
    input: {
      marginBottom: theme.spacing(2),
    },
  };
});

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [error, setError] = useState('');

  const classes = useStyles();
  const {loginUser} = useContext(UserContext);
  const {t} = useTranslation();

  const regis = (e) => {
    e.preventDefault();
    // if (password.length > 8 && password === conPassword) {
    registration(email, password)
        .then((res) => {
          console.log(res);
          const {email, uid, refreshToken} = res;
          loginUser({
            email,
            uid,
            refreshToken,
          });
        });
    // } else {
    //   setError('Please change password');
    // }
  };

  return (
    <form className={classes.form}>
      <TextField
        className={classes.input}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        autoComplete="email"
        value={email}
        onChange={({target: {value}}) => setEmail(value)}
      />
      <TextField
        className={classes.input}
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        autoComplete="password"
        value={password}
        onChange={({target: {value}}) => setPassword(value)}
      />
      <TextField
        className={classes.input}
        id="confirm_password"
        label="Confirm Password"
        type="password"
        variant="outlined"
        autoComplete="password"
        value={conPassword}
        onChange={({target: {value}}) => setConPassword(value)}
      />

      <Button
        color="primary"
        type="submit"
        onClick={regis}
      >
        {t('form.registration')}
      </Button>

      {error}
    </form>
  );
};
