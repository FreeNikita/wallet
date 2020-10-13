import React, { useCallback } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { useTranslation } from 'react-i18next';
import { recommend as pathRecommend } from 'configs/routing.config';
import { useHistory } from 'react-router-dom';

export const Recommend = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const push = useCallback(() => history.push(pathRecommend), [history]);

  return (
    <ListItem
      button
      onClick={push}
    >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary={t('toolbar.recommend')} />
    </ListItem>
  );
};
