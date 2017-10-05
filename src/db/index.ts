import * as pgPromise from 'pg-promise';
import { IDatabase, IMain } from 'pg-promise';
import { config } from './config';
import { options, IExtensions } from './options';
import { setParsers } from './parsers';

export * from './loaders';
export * from './extend';
export * from './options';

export type Database = IDatabase<IExtensions> & IExtensions;

export const pgp: IMain = pgPromise(options);

setParsers(pgp);

export const db = pgp<IExtensions>(config);
