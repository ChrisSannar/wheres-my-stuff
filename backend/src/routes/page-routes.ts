import express from 'express';
const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  req;
  res.send('OK');
});

export default router;