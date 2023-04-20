import type { Request, Response } from 'express';
import { createDocData, getDocData } from 'lib/firestore';

export const getUser = async (req: Request, res: Response) => {
  const { uid, email } = req.body;

  const userInfo = await getDocData('users', uid);

  if (userInfo) {
    res.status(200).send(userInfo);
  } else {
    await createDocData({ email, name: email }, 'users', uid);
    res.status(200).send({ email });
  }
};
