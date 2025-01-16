import express from 'express';
import 'dotenv/config'

import './shared/services/TranslationsYup'
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };
