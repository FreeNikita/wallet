import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useTranslation} from 'react-i18next';

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

export const Login = () => {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <form className={classes.form}>
      <TextField
        className={classes.input}
        id="email"
        label="Email"
        type="email"
        // autoComplete="current-password"
        variant="outlined"
      />
      <TextField
        className={classes.input}
        id="password"
        label="Password"
        type="password"
        // autoComplete="current-password"
        variant="outlined"
      />

      <Button color="primary">
        {t('form.login')}
      </Button>
    </form>
  );
};
