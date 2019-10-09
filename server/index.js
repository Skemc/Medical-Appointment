import express from 'express';
import dotenv from 'dotenv';
import route from '../server/routes/route';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to appoitment porta' });
});

app.use('/', route);
app.listen(process.env.PORT, () => {
  console.log(`App running on PORT: ${process.env.PORT}`);
});

export default app;
