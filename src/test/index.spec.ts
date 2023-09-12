import {makeSolutionFilename, readInputsFromDirectory, writeSolutionsToDirectory} from "../index";
import path from "node:path";
import fs from "node:fs";

describe("FS-ccc-util Public API", () => {
  const WORKING_DIR = path.resolve(__dirname, "./fixture");
  const SOLUTION_PATH = path.resolve(WORKING_DIR, "solution");

  beforeAll(() => {
    fs.mkdirSync(SOLUTION_PATH);
  });

  afterAll(() => {
    /* clean temp solution dir */
    fs.rmSync(SOLUTION_PATH, {force: true, recursive: true});
  });

  it("Reads inputs in the fixture directory. Skipping example input", () => {
    const inputs = readInputsFromDirectory(WORKING_DIR);
    expect(inputs).toEqual(["1", "3"]);
  });

  it("Writes solutions in the fixture directory inside a 'Solution' directory", () => {
    const mockOutputs = [1, 2, 10];
    writeSolutionsToDirectory(mockOutputs, WORKING_DIR);
    const files = fs.readdirSync(SOLUTION_PATH);
    expect(files).toHaveLength(3);
    files.forEach((file, index) => {
      const p = path.resolve(SOLUTION_PATH, makeSolutionFilename(index + 1));
      const content = fs.readFileSync(p, {encoding: "utf8"});
      expect(parseInt(content)).toBe(mockOutputs[index]);
    });
  });
});
