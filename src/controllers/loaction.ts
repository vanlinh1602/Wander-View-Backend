import type { Request, Response } from 'express';
import { getCollection } from 'lib/firestore';

export const getLocations = async (req: Request, res: Response) => {
  const locations = await getCollection('locations');
  res.status(200).send(locations);
};
