import express from 'express';

const router = express.Router();

const hospitals = [
  {
    id: 1,
    name: 'CHUK',
    location: 'Kigali',
    expertise: 'Eye deseases',
  },
  {
    id: 1,
    name: 'KACYIRU POLICE HOSPITAL',
    location: 'Kigali',
    expertise: 'Mental clinic',
  },
];

router.get('/hospitals', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Retrieved all Available hospitals',
    data: hospitals,
  });
});

export default router;
