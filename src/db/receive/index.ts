import { camelizeColumns } from './camelize';
export const receive = (data: any, result: any, e: any) => {
  camelizeColumns(data);
};
