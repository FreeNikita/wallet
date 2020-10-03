import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useTranslation} from 'react-i18next';

import {CustomTeb} from 'components/Tab';

import {Login} from './Login';
import {Registration} from './Registration';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: 'calc(100vh - 64px)',
    },
    wrapper: {
      padding: theme.spacing(2),
      display: 'grid',
    },
  };
});

export const LogonForm = () => {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper
        elevation={3}
        className={classes.wrapper}
      >
        <CustomTeb
          tabs={[t('form.login'), t('form.registration')]}
          content={[Login, Registration]}
        />
      </Paper>
    </Grid>
  );
};
