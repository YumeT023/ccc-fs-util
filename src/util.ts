import {readFileSync, statSync, readdirSync} from "node:fs";
import {parse, join} from "node:path";

export function readFile(path: string) {
  return readFileSync(path, "utf8");
}

export function walkFs(path: string, cb: (path: string, file: string, directory: string) => void) {
  const parsed = parse(path);
  const stat = statSync(path);
  if (stat.isFile()) {
    cb(path, parsed.base, parsed.dir);
    return;
  }
  const entries = readdirSync(path);
  entries.forEach((entry) => {
    walkFs(join(path, entry), cb);
  });
}

export function isExample(s: string) {
  return s.includes("example");
}
