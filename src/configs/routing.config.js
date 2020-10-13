import { HomePage } from 'pages/home';
import { LoginPage } from 'pages/login';
import { ProfilePage } from 'pages/profile';
import { RecommendPage } from 'pages/recommend';
import { WalletPage } from 'pages/wallet';

export const home = '/';
export const login = '/login';
export const profile = '/profile';
export const recommend = '/recommend';
export const wallet = '/wallet';
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
  {
    page: ProfilePage,
    path: profile,
    exact: false,
    isPrivate: true,
  },
  {
    page: WalletPage,
    path: `${wallet}/:id`,
    exact: false,
    isPrivate: true,
  },
  {
    page: RecommendPage,
    path: recommend,
    exact: false,
    isPrivate: true,
  },
];
