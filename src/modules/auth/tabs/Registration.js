import React, { useState, memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

export const Registration = memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const classes = useStyles();
  const { t } = useTranslation();

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
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <TextField
        className={classes.input}
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        autoComplete="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <TextField
        className={classes.input}
        id="confirm_password"
        label="Confirm Password"
        type="password"
        variant="outlined"
        autoComplete="password"
        value={conPassword}
        onChange={({ target: { value } }) => setConPassword(value)}
      />

      <Button color="primary" type="submit">
        {t('form.registration')}
      </Button>
    </form>
  );
});

Registration.displayName = 'Registration';
