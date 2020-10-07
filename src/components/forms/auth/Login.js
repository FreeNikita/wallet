import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useTranslation} from 'react-i18next';
import {login, signGoogle} from 'modules/firebase';
import {UserContext} from '../../../contexts/user/userContext';

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
  const {setLoginType, user} = useContext(UserContext);

  console.log('user', user)

  return (
    <Button color="primary" onClick={() => setLoginType('google')}>
          Google
    </Button>
  );

  // return (
  //   <form className={classes.form}>
  //     <TextField
  //       className={classes.input}
  //       id="email"
  //       label="Email"
  //       type="email"
  //       value={''}
  //       variant="outlined"
  //     />
  //     <TextField
  //       className={classes.input}
  //       id="password"
  //       label="Password"
  //       type="password"
  //       value={''}
  //       autoComplete="password"
  //       variant="outlined"
  //     />
  //
  //     <Button color="primary" onClick={() => {
  //       login('qweqwe@qwe.qwe', 'qweqwe');
  //     }}>
  //       {t('form.login')}
  //     </Button>
  //   </form>
  // );
};
