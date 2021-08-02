---
slug: typescript
title: Typescript-ийн үндэс
description: Javascript програмчлалыг дараагийн түвшинд гаргасан хэл
date: '2021-07-11'
---

# Typescript-ийн үндэс
Typescript хэлийг анх Microsoft-оос санаачлан гаргасан бөгөөд 2012 онд нийтэд танилцуулсанаас хойш одоо хүртэл идэвхитэй open-source лицензийн дор хөгжүүлж байна. Одоогоор хамгийн сүүлийн хувилбар 4.2. Албан [веб хуудас руу нь зочлох](https://www.typescriptlang.org/).

## Яагаад Typescript гэж?
Анх үүсгэсэн шалтгаан нь веб, мобайл хэрэглээ асар хурдтай өсөж байгааг даган хөгжүүлэлтийн шинэ технологиуд гарч ирж байгаа ч веб програмчлалын ганц гол хэл болох Javascript бий болж байгаа томоохон шаардлагуудыг хангахгүй байсан ба өөр хэлээр орлуулах бараг боломжгүй болтлоо өргөн ашиглагдах болсон байв. Үүний нэг шийдэл нь Javascript-ийг бүрэн агуулсан, мөн үүн дээр олон боломж нэмж өртгөсөн шинэ хэлийг үүсгэсэн явдал байв. 

![Typescript-visualization](https://4.bp.blogspot.com/-pYn2LAUvMNQ/WtWXBIT2IRI/AAAAAAAACK8/n9pH7ikTpo4xqIl8odqkJ7kfnbfpcsbxACLcBGAs/s1600/typescript.png)

**Type гэж юу вэ**  
Type буюу төрөл нь өгөгдөл/мэдээллийг төрөлжүүлэн ангилах гэж оролдсон хийсвэрлэл юм, товчхондоо өгөгдлийн бүтэц.  


## Давуу тал
Typescript-ийн гол давуу тал нь Javascript-д **type system** нэвтрүүлсэнд байдаг бөгөөд үүнийг нь ч өөрийнх нь нэр нь илэрхийлж байгаа юм. Яагаад энэ нь давуу тал болж байгааг тоочвол: 
- **Алдаанаас сэргийлэх**: Илэрхий тодорхойлогдсон төрлүүдийг ашиглан хөгжүүлэгч ямар мэдээлэл түүгээр дамжиж ирэх, дээр нь ямар үйлдэл хийх зэргийг хөгжүүлэлтийн явцад бүрэн мэдэх боломжтой тул ажиллуулах үед гарах болзошгүй олон алдаанаас сэргийлэхэд тусалдаг
- **Өндөр бүтээмж**: Хөгжүүлэлтийн IDE түүлүүд энэ эхнээсээ тодорхойлогдсон төрлүүдийн мэдээллийг ашиглан автоматаар бичиглэлийг гүйцээх, оновчтойгоор сонголтуудыг санал болгох мөн бичиглэлийн алдаануудыг дор бүр нь харуулдаг. Энэ нь хөгжүүлэгчийн бүтээмжийг өндөрсгөдөг.
- **Багийн ажиллагаа**: Хатуу тодорхойлогдсон төрөлтэй хэл дээр бичигдсэн бусдын кодийг ойлгоход харьцангуй хялбар байдаг учир олон хөгжүүлэгчид зэрэг ажиллаж буй төслүүд дээр нэгнийхээ кодыг засварлах, нэмж өргөтгөх зэрэг үйлдлүүдийг хийх нь дан javascript дээрх төслүүдээс илүү хялбар байдаг. 

![typescript-advantage](https://www.hiremotely.com/uploads/blog/typescript.png)

### Жишээ 1
Жаваскрипт дээр доорхи бичиглэл бүрэн боломжтой бөгөөд асуудалгүй ажиллана. 
```js
var age = 12;
age = "12"
```
Харин өөр нэг нь үүнийг шалгалгүйгээр дараах байдлуудаар үргэлжлүүлэн бичээд ажиллуулахад санаанд оромгүй алдаанууд гарах болно. 
```js
age + 1;    // "121"
age()       // TypeError: age is not a function
```
Харин typescipt дээр эдгээр бичиглэлийг ажиллуулахаас өмнө алдааны мэдээллийг гаргаж сануулдаг
```ts
var age = 12;
age = "12"  // Error: string is not assignable to number
age()       // Error: not callable
```

### Жишээ 2
Доорхи кодыг javascript дээр ажиллуулахад `undefined` утга хэвлэх бол typescript дээр уг мөрөн дээр алдаа заана. 
```js
const car = {
    model: "Kia",
    year: 2021
}
// javascript => undefined
// typescript => Error: property 'price' doesn't exist on the type
console.log(car.price)
```

## Суулгах, ажиллуулах

Мэдээж **nodejs** эхлээд суусан байх шаардлагатай ба `npm`, `yarn` package manager-үүдийн аль нэгийг ашиглан суулгана. 
```bash
npm install -g typescript
// or
yarn add global typescript
```
Ажиллуулахдаа эхлээд **typescript compiler**-ийг дуудах ба энэ нь харгалзах javascript файлыг үүсгэдэг (адилхан нэртэй `.js` өргөтгөлтэй). Энэ процесс нь бүх typescript бичиглэлүүдийг цэвэр javascript руу хөрвүүлж бровзер эсвэл node runtime дээр шууд ажиллахад бэлэн болгодог.

```bash
tsc test.ts   # compile хийх
node test.js  # үүссэн js файлыг ажиллуулах
```

## Basic types
 Хувьсагчийг зарлахдаа заавал харгалзах төрлийг тодорхойлох ёстой. Ихэнхи програмчлалын хэлнээс ялгаатай нь хувьсагчийн төрлийг хувьсагчийн нэрний араас тодорхойлох цэг тавьсны дараа тодорхойлж бичдэг.

 `const <хувьсагчийн нэр>: <хувьсагчийн төрөл>`

Зарлахдаа анхны утгыг оноож байгаа тохиолдолд төрлийг нь заавал тодорхойлж өгөх шаардлагагүй, compiler заасан утганаас нь төрлийнх нь мэдээллийг автоматаар авдаг:   
`const <хувьсагчийн нэр> = <анхны утга>`

```ts
const name: string
const height: number = 199
const weight = 65.5 // number төрөл 
```
### Primitive types
Typescript-ийн үндсэн төрөлд `number`, `string`, `boolean` ордог. Эдгээрийг **primitive types** гэх бөгөөд зөвхөн нэг л төрлийн мэдээлэл хадгалдаг.

#### Number
Энэ төрөл бүхэл болон бутархай бүх тоон утгыг илэрхийлдэг
```js
const a: number = 25
const b: number = 0.11
```

#### String
Javascript-ийн адилаар үг үсэг тэмдэгтүүдийг агуулдаг төрөл. 
```ts
let name: string
name = 'ubbuyan'
```

#### Boolean
Javascript-тэй ижил. Үнэн худал гэсэн төлөвийг заадаг. 
```ts
const isGood: boolean = true
```

### Array
Нэг төрлийн олон утгуудыг илэрхийлэх төрөл. Доорхи 2 бичиглэл ижил.
```ts
const names: string[]
// Generic ашигласан бичиглэл
const names: Array<string>
```


### Object
Хэд хэдэн төрлийн мэдээллийг нэгтгэж дамжуулахад **Object** төрлийг ашигладаг. Үүнийг тодорхойлохдоо төрлийнхөө нэрийн өмнө `interface` гэсэн түлхүүр үгийг бичнэ. 
```ts
// Төрөл тодорхойлолт
interface Person {
  name: string;
  age: number;
}

// Person гэсэн object төрөлтэй, анхны утгатай хувьсагч
const person: Person = {
  name: "Baabar"
  age: 60
}

// Хэрэглээ
console.log(person.age) // 60
```

### Any
Хувьсагчийн төрлийг яг тодорхой заах боломжгүй эсвэл шаардлагагүй үед энэ төрлийг оноож өгч болно. Тypescript `any` төрлийн хувьсагчтай холбоотой үйлдүүд дээр **type checking** хийхгүй. 
```ts
let myvar: any = { x: 0 };
// Доорхи бүх бичиглэлд typescript алдаа заахгүй
myvar.foo();
myvar();
myvar.bar = 100;
myvar = "hello";
const n: number = myvar;
```
Анхааруулахад, `any` төрлийг түгээмээл ашиглах нь typescript-ийн өөрийнх нь үндсэн зарчмийн эсрэг учир зөвхөн шаардлагатай үед л ашиглах хэрэгтэй.

## Union type
Typescript-д босоо зураасан тэмдэглэгээ `|` ашиглан хэд хэдэн төрлийн утга авч болох хувьсагчийг зарлаж болдог. Жишээ нь: 
```ts
let address: number | string
// Доорхи 2 бичиглэл хүчинтэй
address = 105
address = "hundred five"
// Харин өөр төрлийн утга оноосон бичиглэлд алдаа заана
address = true // Error not assignable
```

## Type alias
Нэг болон хэд хэдэн төрлүүдийг нэгтгэн зохиомол шинэ нэршил бүхий төрөл үүсгэж болдог.
```ts
type MyCleanString = string   // new alias for string type
const name: MyCleanString = "Newton"

type Id = number | string
let myId: Id = "988777655"
myId = 988777655

type Rectangle = {
  width: number
  height: number
}
const square = { width: 10, height: 10 }
```

## Intersection type
Мөн `&` тэмдэглэгээ ашиглаж хэд хэдэн төрлүүдийг нэгтгэсэн нэг төрөл зарлаж болдог. **Union type** (`|`)-ийн хувьд хувьсагч заасан төрлүүдийн зөвхөн аль нэгийг нь авч болох бол **Intersection type** (`&`) ийн хувьд бүгдий нь агуулсан төрлийг л авч болно. 

```ts
type MyType1 = {
  name: string
}

type MyType2 = {
  age: number
}

type MyTypeX = MyType1 & MyType2

const value: MyTypeX {
  age: 22,
  name: 'Joker',
}

function getPerson(): MyTypeX
function getPerson(): MyType1 & MyType2
```


## Interface
Обьект төрлийг **interface** байдлаар зарладаг тухай дээр товч дурьдсан. Бусад обьект хандалтад програмчлын хэлүүднээс ялгаатай нь, хэдийгээр өөр өөр обьект төрөлтэй ч ижил бүтэцтэй мэдээлэл агуулж байгаа бол тэдгээр хувьсагчдын хооронд утга оноох боломжтой. Жишээ нь:

```ts
interface Tseg {
  x: number
  y: number
}

interface Dot {
  x: number
  y: number
}

let tseg: Tseg = {
  x: 20,
  y: -10
}

let dot: Dot = {
  x: 20,
  y: -10
}

// Бусад хэлэнд доорхи 2 бичиглэл алдаа заана
// Учир нь тусдаа зарлагдсан л бол өөр төрөл гэж үздэг
// Харин typescript-д доторх бүтэц нь л таарч байвал оноож болно
tseg = dot
tseg = {
  x: 100,
  y: 200,
}
```

### Type, Interface 2-ийн ялгаа
Обьект төрлийг **type alias** эсвэл **interface** түлхүүр үг ашиглан зарлаж болох ба ажиллагааны хувьд хоёулаа адилхан. Гэхдээ зарим тохиолдуудад ялгаа гардаг. 

### Ялгаа 1: Удамшуулахад
**Interface**-ийг `extends` бичиглэл ашиглаж өргөтгөж болох бол **type alias**-аар зарласан төрлийг удамшуулж болдоггүй. 

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```

### Ялгаа 2: Өргөтөхөд
Өмнө зарласан **Interface**-ийг дахин адилхан нэрээр зарлаж өргөтгөж болдог бол **type alias**-аар зарласан төрлийг болдоггүй.

```ts
interface Door {
  title: string
}

interface Door {
  size: number
}

const door: Door = {
  title: 'oak',
  size: 230,
}
```
`type alias`-ийн хувьд ийм үйлдэл дээр compiler алдаа заана
```ts
type Door = {
  title: string
}

// Error: Duplicate identifier 'Door'.
type Door = {
  size: number
}
```

## Type assertions
Хувьсагчийн төрлийг дахин тодотгоход `as` түлхүүр үгийг ашигладаг. Өөр төрөлтэй ч агуулж байгаа утга нь харгалзах ижил бүтэцтэй төрөл бүхий хувьсагчид оноохдоо ингэж зааж өгч болно. 

```ts
const rawValue = getNameFromLibraryOrExternalApi()
const name: string = rawValue as string
// өөр бүтэцтэй төрлөөр cast хийж болохгүй
const x = "hello" as number; // Error
```
Жишээ нь, api эсвэл external library-ийн ирсэн утгын төрлийг compiler-т тодруулж өгөхөд ашиглаж болно.


## Literal types
Хувьсагчийг зарлахдаа төрлийнх нь оронд нэг болон хэд хэдэн тогтмол заасан утгуудыг тавьж өгч болдог. Ингэснээр уг хувьсагчид эдгээр утгыг л оноож болно. Өөр утга оноовол compiler алдаа заана. 

```ts
function printText(alignment: "left" | "right" | "center") {
  // ...
}
printText("left");
// Error Argument of type '"centre"' is not assignable
// to parameter of type '"left" | "right" | "center"'.
printText("centre"); 
```

## null and undefined
Javascript-тэй адилаар хоосон утгыг `null`, утга оноогоогүй төлөвийг `undefined` аар тэмдэглэдэг. Бүх төрлийн хувьсагчид ийм утгатай байж болох ба үүнийг шалгахгүйгээр өнгөрөөх нь олон алдааны эх үүсвэр болдог.

### strictNullChecks on
Энэ тохируулгыг хийснээр compiler нь хувьсагч `null` эсвэл `undefined` утгатай байгаа эсэхийг заавал шалгахыг шаарддаг.

```ts
// Доорхи мөр алдаа заана
function greetMe(name: string | null) {
  // Error: Object is possibly null
  console.log("Hello, " + name.toUpperCase());
}

// Зөв хувилбар нь
function greetMe(name: string | null) {
  if (name === null) {
    // do nothing
  } else {
    console.log("Hello, " + name.toUpperCase());
  }
}
```

### strictNullChecks off
Энэ сонголт хийснээр compiler хатуу шалгалт хийхгүй ба runtime үед алдаа гарах магадлал өндөрсөнө. Тохируулга хийхэд root фолдерт байрлах `tsconfig.json` файлд доорхи өөрчлөлтийг хийнэ:

```json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
  ...
}
```


### Non-null assertion
Хувьсагчийн нэрний араас `!` нэмсэнээр утга нь `null` эсвэл `undefined` байгаа эсэхийг typescript compiler автоматаар шалгадаг.
```ts
let variable: string | null
variable = null
// No error, just prints undefined
console.log(variable!.toLowerCase() 
```

## Enums
Хувьсагчийг зөвхөн цөөхөн хэдэн тогтмол утга авдаг болгоход `enum`-ийг ашиглаж болно. 

```ts
enum Position {
  Right,
  Left,
  Up,
  Down,
}

function move(position: Position) {
  // ...
}

move(Position.Left)
```

**Enum**-д зарласан тогтмолууд автоматаар 0-оос эхлэсэн индекс авдаг ба эхлэх утгыг хамгийн эхний тогтмолд утга оноож өгч зааж болно. Эсвэл бүгдэнд нь **string** төрлийн утга оноож ч болно. 

```ts
enum Position {
  Right = 1,
  Left,   // 2
  Up,     // 3
  Down,   // 4
}

enum Position {
  Right = "Right",
  Left = "Left",
  Up = "Up",
  Down = "Down",
}
```



