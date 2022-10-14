import express, { Router, Request, Response } from 'express';
const textMemeRouter: Router = express.Router();

textMemeRouter.get('/', (req: Request, res: Response) => {
  res.send('text-meme')
});

export default textMemeRouter;
