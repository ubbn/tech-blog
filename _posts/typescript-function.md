---
slug: typescript-function
title: Typescript functions
description: Typescript-ийн цөм болох функцийг хэрхэн хэрэглэх вэ
date: '2021-07-20'
---

# Typescript functions
Функцийг local, global түвшинд болон класс дотор зарлаж болох ба мөн фараметр байдлаар дамжуулж ашиглаж болдог. 

## Функц зарлах
Typescript-д функцийг `function` түлхүүр үгээр эсвэл ES6-ийн **arrow funcion** `() => ` бичиглэлийг ашиглан зарлаж болно. 

### Keyword function
```ts
// Загвар
function <нэр>(<фараметр> : <төрөл>): <буцаах төрөл> {
    // ...
}

// Жишээ
function sum(a: number, b: number): number {
    return a + b
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

### Return type
Функц утга буцаагаагүй тохиолдолд буцаах төрлийг орхиж болно, эсвэл `void` оор орлуулж болно. 

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

greet("Simon")
greet()
greet(undefined)
```

