# Unofficial Cloudflight coding contest utilities

node.js utilities for the cloudFlight coding contest, you can use either js or ts

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
import {executeSolutionWithLevel} from "@yumii.saiko/ccc-fs-util";
import path from "node:path"; // ensure you have node.js installed

const levelDir = path.resolve(__dirname, "HoneyComb");

executeSolutionWithLevel((input) => {
  /* your solution ✨, return a string */
}, levelDir);
```

After these steps, you should have the following tree:

```
└───HoneyComb
    └─── solution
        └─── solution_1.out
        └─── solution_2.out
    └─── level_1.in
    └─── level_2.in
    └─── level_1.example.in
└─── main.ts
```

just submit these solutions on the ccc solution input and that's it

![image](https://github.com/YumeT023/ccc-fs-util/assets/96466759/4e48b9ac-df52-4e45-96b7-5b1c5d14de93)
