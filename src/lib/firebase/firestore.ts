import { getFirestore as getStore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import { getApp } from './app';

const getFirestore = (): Firestore => {
  return getStore(getApp());
};

export { getFirestore };
