// tuple
/*
    tuple = 배열 
- 길이와 타입이 지정되어있는 배열 
*/

let drink: [string, string] = ["콜라", "사이다"]; //바로 할당해도 상관 ㄴㄴ
drink[0] = "cola";
console.log(drink[0]);
// drink[1]=2; string요소러를 number로 바꾸려고 한다면 error!
drink.push("str");
console.log(drink);

let drink2: readonly [string, number] = ["콜라", 2500];
// drink2.push("사이다") -> 새로운 요소 추가 오류
// drink2.push[0]("cola") -> 요소 변경 오류    => 리드온리이기 떄문에 둘다 불가!

/* enum */
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla = 10,
  strawberry,
  kiwi = "kiwi", //숫자와 문자형 같이 쓰기 가능
}

console.log(Cake.choco, Cake.vanilla, Cake.strawberry); //값을 주지 않으면 자동으로 0..1..2.. 하나씩 늘어남!

// 실습문제 1
// const olimpic_newgame:readonly[enum,boolean] = [{
//     name :"쇼트트랙",
//     type :"혼성계쭈"
// },
// true,];

let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성계쭈",
  },
  true,
];

// olimpic_newgame[1] = false;
console.log(olimpic_newgame[1]);

/* interface & type */
// 타입선언
interface Student {
  name: string;
  isPassed: boolean;
}

// 만든 타입 사용해보기!! name만 쓰면 안되고 ispassed도 꼭 같이 써줘야함 그렇게 선언했으니카!
const Student1: Student = {
  name: "jh",
  isPassed: false,
};
type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; //백넘버를 썻다 안썻다 하고 싶을때! -> ? 를 사용해주면 된다
  [grade: number]: Score;
  // grade 는 그냥 의미론적으로 써준거고(숫자가 의미하는게 grade니까 그냥 grade라 써준거임) 뒤에 타입이 중요함
  // 뒤에오는게 중요한데 키가 숫자이기만 하면 뒤에 score 가 올 수 있다는 것을 의미함!
}

const otani: 야구부 = {
  name: "ontani",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: "A",
  2: "A+",
  3: "F",
};

otani.position = "투수";
// otani.backNumber = 20; -> read only 했으니까 error!
otani["1"] = "B";
// otani.[1] = "A" 하묜안댐! 대괄호 접근법 써주기

console.log(otani);

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: Number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {
    console.log("이름은" + this.name + "입니다.");
  },
  color: "blue",
  price: 50000,
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

const daniel: Person = {
  name: "Daniel",
  gender: "male",
  age: 10,
};

type Gender = "Female" | "Male";
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "알버트 덤블도어",
  gender: "Male",
};

console.log(albert);

// 실습 2

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
