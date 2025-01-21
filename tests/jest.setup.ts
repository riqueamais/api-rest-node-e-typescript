import supertest from 'supertest';

import { app } from '../src/server';

export const testServer = supertest(app);
