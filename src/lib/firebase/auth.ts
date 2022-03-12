import type { Auth } from 'firebase/auth';
import {
  getAuth,
  TwitterAuthProvider,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

import { getApp } from './app';

const getAuthenticate = (): Auth => {
  const auth = getAuth(getApp())
  auth.languageCode = 'ja'
  return auth
};

const login = async () => {
  const auth = getAuthenticate();
  const provider = new TwitterAuthProvider();
  provider.setCustomParameters({
    lang: 'ja',
  });

  signInWithRedirect(auth, provider);
};

const logout = async () => {
  signOut(getAuthenticate());
};

export {
  getAuthenticate,
  login,
  logout,
};
