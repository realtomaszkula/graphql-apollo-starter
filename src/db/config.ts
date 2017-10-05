import { TConfig } from 'pg-promise';
import { LambdaEnv } from './../env';

const { host, port, database, user, password }: LambdaEnv = process.env as any;

export const config: TConfig = {
  host,
  port: Number(port),
  database,
  user,
  password,
};
