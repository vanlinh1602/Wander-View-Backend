import setUpFirebase from './firebase';

export const startServer = () => {
  global.Firebase = setUpFirebase();
};
