import { IOptions } from 'pg-promise';
import { receive } from './receive';
import { extend, IExtensions } from './extend';

export * from './extend';
export * from './receive';

export const options: IOptions<IExtensions> = {
  receive,
  extend,
};
