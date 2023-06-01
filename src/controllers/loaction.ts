import type { Request, Response } from 'express';
import { getCollection, getDocData, updateDocData } from 'lib/firestore';
import { getUid } from 'lib/utils';

export const getLocations = async (req: Request, res: Response) => {
  const locations = await getCollection('locations');
  res.status(200).send(locations);
};

export const getReviews = async (req: Request, res: Response) => {
  const { postId } = req.body;
  const reviews = await getDocData('reviews', postId);
  res.status(200).send(reviews);
};

export const addReview = async (req: Request, res: Response) => {
  const { data, postId } = req.body;

  const cmtId = getUid();

  const created = await updateDocData(
    'reviews',
    postId,
    {
      [cmtId]: data,
    },
    { merge: true }
  );

  if (created) {
    res.status(200).send(cmtId);
  } else {
    res.status(500).send('Add fail');
  }
};
