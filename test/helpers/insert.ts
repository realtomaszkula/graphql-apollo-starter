import { Database } from './../../src/db';

export interface InsertExampleParams {
  db: Database;
  params?: Partial<any>;
}
export const insertCity = async ({
  db,
  params,
}: InsertExampleParams): Promise<{ example: any; params: any }> => {
  const base: any = {};

  const merged = params ? { ...base, ...params } : base;

  return {
    params: merged,
    example: {},
  };
};
