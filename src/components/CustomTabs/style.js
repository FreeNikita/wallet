import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => {
  console.log('asd', theme);
  return ({
    tabs: {
      // marginBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
  });
});
