import type { Request, Response } from 'express';
import { createDocData, getDocData, updateDocData } from 'lib/firestore';
import { getUid } from 'lib/utils';

export const getUser = async (req: Request, res: Response) => {
  const { uid, email } = req.body;

  const userInfo = await getDocData('users', uid);

  if (userInfo) {
    res.status(200).send(userInfo);
  } else {
    const data = { email, name: email, avatar: 'avatar1' };
    await createDocData(data, 'users', uid);
    res.status(200).send(data);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { uid, ...data } = req.body;

  const updated = await updateDocData('users', uid, data);
  if (updated) {
    res.send(true);
  } else {
    res.send(false);
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  const { userId, plan, isRemove } = req.body;
  if (isRemove) {
    const updated = await updateDocData('users', userId, plan);
    if (updated) {
      res.status(200).send(true);
    } else {
      res.status(500);
    }
  } else {
    const planId = getUid();
    const updated = await updateDocData(
      'users',
      userId,
      {
        plans: {
          [planId]: plan,
        },
      },
      { merge: true }
    );
    if (updated) {
      res.status(200).send(planId);
    } else {
      res.status(500);
    }
  }
};

export const updateUserSave = async (req: Request, res: Response) => {
  const { data, userId } = req.body;

  const updated = await updateDocData(
    'users',
    userId,
    {
      save: data,
    },
    { merge: true }
  );
  if (updated) {
    res.send(true);
  } else {
    res.status(500).send('Save fail');
  }
};

export const checkAdmin = async (req: Request, res: Response) => {
  const { email } = req.body;

  const info = await getDocData('admins', email);
  if (info) {
    res.send(info);
  } else {
    res.status(500).send('Save fail');
  }
};

export const updateNotify = async (req: Request, res: Response) => {
  const { userId, data } = req.body;

  const updated = await updateDocData(
    'users',
    userId,
    {
      notification: {
        [data.id]: data,
      },
    },
    { merge: true }
  );

  if (updated) {
    res.send(true);
  } else {
    res.status(500).send('Something fail');
  }
};
