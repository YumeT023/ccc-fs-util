# FS CCC UTILS

node.js fs utilities for the cloudFlight coding contest

### Usage

Install it using your package manager (using npm)

```
npm i @yumii.saiko/ccc-fs-util
```

Consider this folder three

```
└───HoneyComb
    └─── level_1.in
    └─── level_2.in
    └─── level_1.example.in
└─── main.ts <--- here you are
```

In the `main.ts`:

```typescript
import {readInputsFromDirectory, writeSolutionsToDirectory} from "@yumii.saiko/ccc-fs-util";
import path from "node:path"; // ensure you have node.js installed

const levelDirectory = path.resolve(__dirname, "HoneyComb");

const inputs = readInputsFromDirectory(levelDirectory);

function doMagicToGetTheSolution(input: string) {
  // do some magic ✨ ...
}

const outputs = inputs.map(doMagicToGetTheSolution);
writeSolutionsToDirectory(outputs, levelDirectory);
```

After these steps, you should have the following tree:

```
└───HoneyComb
    └─── Solution (just submit these and u're good to go)
        └─── solution_1.out
        └─── solution_2.out (skipped example input so there is no output for it)
    └─── level_1.in
    └─── level_2.in
    └─── level_1.example.in
└─── main.ts
```
