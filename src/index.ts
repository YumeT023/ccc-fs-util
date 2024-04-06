import {existsSync, mkdirSync, writeFileSync} from "node:fs";
import {join, parse, resolve} from "node:path";
import {Input, Output, ResolveFn} from "./types";
import {walkFs, isExample, readFile} from "./util";

export function executeSolutionWithLevel(resolve: ResolveFn, levelDir: string) {
  createSolutionDir(levelDir);
  getInputs(levelDir).forEach((input) => {
    writeSolution(input, resolve(input.raw));
  });
}

function getInputs(directory: string) {
  const inputs: Input[] = [];
  walkFs(directory, (path, file, dir) => {
    if (!dir.includes("solution") && !isExample(file)) {
      const input: Input = {
        name: parse(file).name,
        file,
        path,
        dir,
        raw: readFile(path).trim(),
      };
      inputs.push(input);
    }
  });
  return inputs;
}

function createSolutionDir(levelDir: string) {
  const solutionDir = join(levelDir, "solution");
  if (!existsSync(solutionDir)) {
    mkdirSync(solutionDir);
  }
}

function writeSolution(input: Input, output: Output) {
  const path = join(input.dir, "solution", input.file.replace("in", "out"));
  writeFileSync(path, output, {encoding: "utf8", flag: "w+"});
}
