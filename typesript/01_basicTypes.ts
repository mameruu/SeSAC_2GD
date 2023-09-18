// 1. number type
let num: number = 1;
num = 2;

// 2. string type
let str1: string = "안뇽하세요?";

console.log(str1, num);

// 3. boolean, null, undefined
let isTre: boolean = true; //문자열 true는 오류!
let undef: undefined;
const empty: null = null;

// 4. object
const obj1: object = {
  name: "allie",
};

// 5.arr
// let arr = [1, 2, 3, 4, 5];
// let arr = ["a", "b", "c"];
// let arr = ["a", "b", 1, 2];
// js때는 이렇게 했는데 ts 에선 무슨 형인지 지정해줘야함!

let numArr: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["a", "b"];
let arr3: Array<string> = ["a", "b"];
let arr4: Array<string | number> = ["a", "b", 1, 2];
let arr5: (string | number)[] = ["a", "b", 1, 2];

// boolean, null, number arr 가 요소로 들어가는 배열 arr6
const arr6: (boolean | null | number[])[] = [true, null, [1, 2, 3]];
// const arr6: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];
console.log(arr6[0]);
arr6[1] = [5, 6, 7];
console.log(arr6[1]);
// arr6[2] = "str"  선언할 때 부여한 type이 아니라면 오류를 보여줌

let arrAny: any[] = [1, 2, "apple", null, true, undefined];
//모든걸 자유롭게 사용할 수 있음 근데 정말정말 되도록이면 안쓰는게 좋다!
