import path from "node:path";
import {readFile} from "../util";
import {executeSolutionWithLevel} from "../";

describe("FS-ccc-util Public API", () => {
  /**
   * level_1: 1
   * level_2: 3
   * level_1.example should be skipped
   */
  const LEVEL_DIR = path.join(__dirname, "./fixture");

  it("Writes solutions in the fixture directory inside a 'Solution' directory", () => {
    executeSolutionWithLevel((rawInput) => {
      const input = parseInt(rawInput);
      const squared = input * 2;
      return String(squared);
    }, LEVEL_DIR);

    const level1 = path.join(LEVEL_DIR, "solution/level_1.out");
    const output1 = readFile(level1);
    expect(output1).toBe("2");

    const level2 = path.join(LEVEL_DIR, "solution/level_2.out");
    const output2 = readFile(level2);
    expect(output2).toBe("6");
  });
});
