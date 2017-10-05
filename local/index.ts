import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '.env') });

import { app } from '../src/app';

app.listen(3000, () => console.log('Listening...'));
