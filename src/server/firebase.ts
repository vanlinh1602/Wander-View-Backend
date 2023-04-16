import admin, { app } from 'firebase-admin';

const serviceAccount = require('../configs/scenic_spots.json');

export default (): app.App => {
  const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  return firebase;
};
