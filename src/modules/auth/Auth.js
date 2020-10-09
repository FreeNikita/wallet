import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';

import { CustomTabs } from 'components/CustomTabs';
import { Login, Registration } from './tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
  },
  wrapper: {
    padding: theme.spacing(2),
    display: 'grid',
  },
}));

export const Auth = memo(() => {
  const classes = useStyles();
  const { t } = useTranslation();

  const tabs = [
    { title: t('form.login') },
    { title: t('form.registration'), disabled: true },
  ];

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
        <CustomTabs
          tabs={tabs}
          content={[Login, Registration]}
        />
      </Paper>
    </Grid>
  );
});

Auth.displayName = 'Auth';
