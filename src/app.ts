import express, { Express, Request, Response } from 'express';
// routes
import textMemeRouter from './routes/textMeme/textMeme';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('memedata-api');
});

app.use('/text-meme', textMemeRouter);

export default app;
