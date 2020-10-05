import {HomePage} from '../pages/home';
import {LoginPage} from '../pages/login';

export const home = '/';
export const login = '/login';
export const all = '/*';

export const router = [
  {
    page: HomePage,
    path: home,
    exact: true,
    isPrivate: true,
  },
  {
    page: LoginPage,
    path: login,
    exact: false,
    isPrivate: false,
  },
];
