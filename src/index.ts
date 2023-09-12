import fs from "node:fs";
import path from "node:path";
import util from "node:util";

const READ_FILE_OPTIONS: {encoding: BufferEncoding} = {
  encoding: "utf8",
};

const WRITE_FILE_OPTIONS = {
  ...READ_FILE_OPTIONS,
  flag: "w+",
};

const SOLUTION_FILENAME = "solution_%d.out";

const SOLUTION_PATH = "solution";

function getNonExample(files: string[]) {
  return files.filter((file) => !file.includes("example"));
}

export function readInputsFromDirectory(directory: string) {
  const files: string[] = fs.readdirSync(directory);
  return getNonExample(files).reduce<string[]>((prev, file) => {
    const name = path.resolve(directory, file);
    if (fs.statSync(name).isFile()) {
      return [...prev, fs.readFileSync(name, READ_FILE_OPTIONS).trimEnd()];
    }
    return prev;
  }, []);
}

export function makeSolutionFilename(index: number) {
  return util.format(SOLUTION_FILENAME, index);
}

export function writeSolutionsToDirectory(solutions: Array<string | number>, directory: string) {
  const _directory = path.resolve(directory, SOLUTION_PATH);

  // create solution dir if non-existent
  if (!fs.existsSync(_directory)) {
    fs.mkdirSync(_directory);
  }

  solutions.forEach((solution, index) => {
    const filepath = path.resolve(
      _directory,
      makeSolutionFilename(index + 1 /* Adding 1 to account the leading zero */)
    );
    fs.writeFileSync(filepath, String(solution), WRITE_FILE_OPTIONS);
  });
}
