import {JestConfigWithTsJest} from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/test/**/*.spec.ts"],
};

export default jestConfig;
