---
slug: typescript-settings
title: Typescript settings
description: Typescript прожектийн бүтэц, тохиргооны талаар
date: '2021-08-01'
---

# Typescript settings

*Under construction*

## tsconfig.json file
Typescript-д функцийг `function` түлхүүр үгээр эсвэл ES6-ийн **arrow funcion** `() => ` бичиглэлийг ашиглан зарлаж болно. 


## Type declaration file .d.ts 
Javascript дээр бичигдсэн library болон module-г typescript прожектэд ашиглахад type-ийн мэдээллээр хангах `.d.ts` өргөтгөлтэй адилхан нэртэй файлийг үүсгэх хэрэгтэй. Уг файлд функц болон тогтмолуудыг `declare` хийж өгөх ба тэдгээрийг typescript compiler ашигладаг. Жишээ нь:

```ts
src/
  my-module.js
  my-module.d.ts
  index.ts
```

`my-module.js` файлд
```ts
const someConstant = 42
module.exports = { someConstant }
```

`my-module.d.ts` файлд
```ts
export declare const someConstant: number
```

Жишээ нь `index.ts` файлд ашиглахад
```ts
import { someConstant } from "./my-module" // <- no extension

// runtime implementation of `someConstant` is taken from ".js"
console.log(someConstant); // 42

// type declaration of `someConstant` is taken from ".d.ts"
type TypeOfConstant = typeof someConstant; // number
```

**Type declaration** файлыг одоо байгаа `.js`, `.ts` файлуудаас Typescript compiler-ийн `--declaration` сонголтийг ашиглан автоматаар үүсгэж авч болдог. 

