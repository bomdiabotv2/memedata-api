import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const port: string = process.env.PORT as string;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
