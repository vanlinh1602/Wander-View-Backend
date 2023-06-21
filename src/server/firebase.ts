import admin, { app, ServiceAccount } from 'firebase-admin';

import serviceAccount from '../configs/scenic_spots.json';

export default (): app.App => {
  const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
  return firebase;
};
