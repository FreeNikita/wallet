import React from 'react';
import Button from '@material-ui/core/Button';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import {LOGIN_METHODS} from 'constants/login.config';

// const useStyles = makeStyles((theme)=> {
//   return {
//     form: {
//       display: 'grid',
//     },
//     input: {
//       marginBottom: theme.spacing(2),
//     },
//   };
// });

export const Login = () => {
  return (
    <React.Fragment>
      {
        LOGIN_METHODS.map( ({title, sing}) => (
          <Button color="primary" key={title} onClick={sing}>
            {title}
          </Button>
        ))
      }
    </React.Fragment>
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
