export interface Input {
  name: string;
  path: string;
  file: string;
  raw: string;
  dir: string;
}

export type Output = string;

export type ResolveFn = (raw: string) => Output;
