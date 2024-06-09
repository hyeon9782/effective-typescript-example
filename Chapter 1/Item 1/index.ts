let city = "new your city";
console.log(city.toUppercase()); // 에러 발생

interface State {
  name: string;
  captial: string;
}

const status: State[] = [
  { name: "Alabama", captial: "Montgomery" },
  { name: "Alaska", captial: "Joneau" },
  { name: "Arizona", captial: "Phoenix" },
];

for (const state of status) {
  console.log(state.captiol); // 에러 발생
}

const x = 2 + "3"; // 정상
const y = "2" + 3; // 정상

const a = null + 7; // 에러 발생
const b = [] + 12; // 에러 발생
alert("hello", "typescript"); // 에러 발생

// 타입스크립트는 자바스크립트의 런타임을 모방합니다.

// 타입 체크에 통과하지만 런타임에서 에러를 발생시킵니다.
const names = ["Alice", "Bob"];
console.log(names[2].toUpperCase());
