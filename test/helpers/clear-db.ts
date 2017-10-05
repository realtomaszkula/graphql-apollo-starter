import { IDatabase } from 'pg-promise';

export enum Table {

}

export const tables: Table[] = [

];

export const clearDB = async (db: IDatabase<any>) => {
  const promises = tables.map(async table =>
    db.none('delete from $1:raw', table),
  );
  return Promise.all(promises);
};
