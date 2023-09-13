# FS CCC UTILS

node.js fs utilities for the cloudFlight coding contest, you can use either js or ts

## Usage note

Install it using your package manager (using npm)

```
npm i @yumii.saiko/ccc-fs-util
```

Download the level inputs by clicking on

![image](https://github.com/YumeT023/ccc-fs-util/assets/96466759/35176da1-6380-40ba-b02a-ceb20d7e5380)

Then extract the _.zip_ file in a named directory inside your project. Let's say it is the `HoneyComb` level

Your file tree should then look like the following:

```
└───HoneyComb
    └─── level_1.in
    └─── level_2.in
    └─── level_1.example.in
└─── main.ts <--- here you are (js or ts, it doesn't matter)
└─── package.json
```

In the `main.ts`:

```typescript
// import ccc fs utilities fn
import {readInputsFromDirectory, writeSolutionsToDirectory} from "@yumii.saiko/ccc-fs-util";
import path from "node:path"; // ensure you have node.js installed

// resolve the absolute path from your location then concat with "HoneyComb"
// On windows OS, it'd look like _c://dummy/dummy/.../HoneyCom_
const levelDirectory = path.resolve(__dirname, "HoneyComb");

// Note that this fn skips example inputs
const inputs = readInputsFromDirectory(levelDirectory);

function doMagicToGetTheSolution(input: string) {
  // do some magic ✨ ...
}

const outputs = inputs.map(doMagicToGetTheSolution); // apply the magic to each input
writeSolutionsToDirectory(outputs, levelDirectory);
```

After these steps, you should have the following tree:

```
└───HoneyComb
    └─── Solution
        └─── solution_1.out
        └─── solution_2.out
    └─── level_1.in
    └─── level_2.in
    └─── level_1.example.in
└─── main.ts
```

just submit these solutions in the file inputs and that's it

![image](https://github.com/YumeT023/ccc-fs-util/assets/96466759/4e48b9ac-df52-4e45-96b7-5b1c5d14de93)
