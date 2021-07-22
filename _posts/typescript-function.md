---
slug: typescript-function
title: Typescript functions
description: Typescript-ийн цөм болох функцийг хэрхэн хэрэглэх вэ
date: '2021-07-20'
---

# Typescript functions
Функцийг local, global түвшинд болон класс дотор зарлаж болох ба мөн функц төрөл зарлаж фараметрээр дамжуулж ашиглаж болдог. 

## Функц зарлах
Typescript-д функцийг `function` түлхүүр үгээр эсвэл ES6-ийн **arrow funcion** `() => ` бичиглэлийг ашиглан зарлаж болно. 

### Keyword function
```ts
// Загвар
function <нэр>(<фараметр> : <төрөл>): <буцаах төрөл> {
    // ...
}

// Жишээ 1
function sum(a: number, b: number): number {
    return a + b
}

// Жишээ 2
const myFunc = function(a: number): void {
    // ...
}
```

### Arrow function
Энэ бичиглэлийг өөрөөр **anonymous function** мөн **lambda function** гэж нэрлэдэг. 
```ts
// Загвар
<нэр> = (<фараметр> : <төрөл>): <буцаах төрөл> => {
    // ...
}

// Жишээ
let sum = (a: number, b: number): number => {
    return a + b
}
```

### Function type
**Type alias** ашиглан функц төрөл зарлаж болно.

```ts
// Утга буцаадаггүй функцийн төрөл
type voidFunc = () => void

// Тоо аваад string буцаадаг функцийн төрөл
type toStrFunc = (a: number) => string

const hevleh: toStrFunc = function(value: number) {
    return `Value: ${value}`
}

hevleh(45) // Value: 45

// Нийлмэл төрөл
type DescribableFunction = {
  description: string;
  (arg: number): boolean;
};

function doSomething(func: DescribableFunction) {
  console.log(func.description + " returned " + func(12));
}
```

### Declare түлхүүр үг
Javascript дээр бичигдсэн кодоос (ялангуяа external library) функц, тогтмолуудыг typescript-д дуудаж ашиглахад **compiler**-т таниулахын тулд `declare` түлхүүр үгийг хэрэглэдэг.

```ts
// Both exist outside of current codebase
declare function helloFromOutside(name: string): void
declare const someConstant: any
```

## Return type
Функц утга буцаагаагүй тохиолдолд буцаах төрлийг орхих эсвэл `void` оор орлуулж болно. 

```ts
function greet(name: string): void {
    console.log(`Hello ${name}`)
}

const greet = (name: string) => {
    console.log(`Hello ${name}`)
}
```

## Optional parameter
Typescript функцийг заавал дамжуулах шаардлагагүй фараметртэй байхаар зарлаж болно. Ингэхдээ фараметрийн нэрний араас `?`-ийг бичдэг. Энэ үед тухайн фараметрийн утга `undefined` байгаа эсэхийг заавал шалгахыг **compiler** шаарддаг.

```ts
function greet(name?: string) {
    if (name === undefined) {
        console.log("Hello anonymous")
    } else {
        console.log(`Hello ${name.toUpperCase()}`)
    }
}

greet("Simon")      // Hello Simon
greet()             // Hello anonymous
greet(undefined)    // Hello anonymous
```

## Other types


### unknown  
Энэ төрөл Typescript 3.0 хувилбарт шинээр нэмэгдсэн. `any` тай адил бүх төрлийн утга агуулах боломжтой.  

`any`-аас ялгаатай нь **type checking** хийгдэх болохоор `any` шиг энэ төрлийн утгыг функц шиг дуудаж болохгүй, мөн property уншиж болохгүй.

```ts
const a: unknown = 123
a()     // Error: Object is type of 'unknown'
a.name  // Error: Object is type of 'unknown'

const b: any = 123
b()     // no type checking, so no error
b.name  // no type checking, so no error
```

Бусад бүх төрлийн утга оноож болох ч буцаагаад өөр төрөл рүү оноохоосоо өмнө заавал тэр төрлийн утга мөн эсэхийг шалгахыг шаардлагатай.

```ts
const a: unknown = 456
let b: number

// Error: Type known is not assignable to number
b = a
if (typeof a === 'number')
    // Өмнө нь тоон төрөл мөн эсэхийг шалгасан тул OK
    b = a 

```

### never
Энэ төрөл зөвхөн функцийн буцаах төрөлд хэрэглэгддэг ба тухайн функц юу ч буцаахгүй буюу төгсгөлөө хүртэл ажиллахгүй харин дундаасаа алдаа заах эсвэл төгсгөлгүй цикл ажиллуулдаг байж ч болно. 

```ts
function throwError(errorMsg: string): never { 
    throw new Error(errorMsg)
} 

function keepProcessing(): never { 
    while (true) { 
        console.log('It never ends.')
    }
}
```


