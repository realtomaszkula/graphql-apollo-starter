import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '.env') });

import { matchers } from './matchers';
import { clearDB } from './helpers';

import { db } from '../src/db';

beforeEach(async () => {
  jest.addMatchers(matchers);
  await clearDB(db);
});

beforeAll(async () => {
  await clearDB(db);
});

afterAll(async () => {
  await clearDB(db);
  db.$pool.end();
});
