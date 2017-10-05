import { IMain } from 'pg-promise';

export enum Parser {
  timestamptz = 1184,
}

export const setParsers = ({ pg }: IMain): void => {
  /* Return raw timestamp */
  pg.types.setTypeParser(Parser.timestamptz, (v: string) =>
    new Date(v).toISOString(),
  );
};
