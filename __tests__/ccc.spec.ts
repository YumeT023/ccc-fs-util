import path from "node:path";
import {describe, it, expect} from "vitest";
import {readFile} from "../src/util";
import {executeSolutionWithLevel} from "../src";

describe("FS-ccc-util Public API", () => {
  /**
   * level_1: 1
   * level_2: 3
   * level_1.example should be skipped
   */
  const LEVEL_DIR = path.join(__dirname, "./fixture");

  it("should execute fn on each input and write solution to 'solution/**level**'", () => {
    executeSolutionWithLevel((rawInput) => {
      const input = parseInt(rawInput);
      const squared = input * 2;
      return String(squared);
    }, LEVEL_DIR);

    const level1 = path.join(LEVEL_DIR, "solution/level_1.out");
    const output1 = readFile(level1);
    expect(output1).to.be.eq('2');

    const level2 = path.join(LEVEL_DIR, "solution/level_2.out");
    const output2 = readFile(level2);
    expect(output2).to.be.eq('6');
  });
});
