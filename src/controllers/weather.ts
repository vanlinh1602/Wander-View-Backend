import type { Request, Response } from 'express';
import { getCurrentWeather } from 'lib/weatherApi';

export const getWeather = async (req: Request, res: Response) => {
  const { location }: { location: string } = req.body;
  const result = await getCurrentWeather(location);
  res.send(result);
};
