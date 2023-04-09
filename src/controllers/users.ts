import type { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  res.status(200).send({ message: `You just send to back end: ${name}, ${email}` });
};
