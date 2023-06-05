import type { Request, Response } from 'express';
import { createDocData, getCollection, getDocData, updateDocData } from 'lib/firestore';
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

  const postReview: CustomObject<{ rating: number }> = await getDocData('reviews', postId);

  let postRating = 0;
  Object.entries(postReview ?? {}).forEach(([_id, { rating }]) => {
    postRating += rating;
  });
  postRating /= Object.values(postReview).length;

  if (created) {
    updateDocData('locations', postId, { rating: postRating }, { merge: true });
    res.status(200).send({ cmtId, postRating: postRating.toString() });
  } else {
    res.status(500).send('Add fail');
  }
};

export const addLocation = async (req: Request, res: Response) => {
  const { data } = req.body;

  const id = getUid();

  const added = await createDocData({ ...data, id }, 'locations', id, {
    merge: true,
  });

  if (added) {
    res.send(true);
  } else {
    res.status(500).send('Add fail');
  }
};
