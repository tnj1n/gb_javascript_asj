const user = {
    id: 1,
    name: "han",
};

// 구조 분해(비구조화 할당)
// const { id, name } = user;
// console.log(id, name);

// 초기값 설정
// const { id, name, age = 10 } = user;
// console.log(id, name, age);

// 프로퍼티 매핑 후 원하는 이름으로 변경
// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// product
// property: id, name, price
// 상품 객체 1개 만든 후
// 구조 분해를 사용해서 3개의 정보를 출력한다.
// 이 때, price대신 value를 사용한다.

// const product = {
//     id: 1,
//     name: "아이패드",
//     price: 650000,
// };
// const { id, name, price: value } = product;
// console.log(id, name, value);

// 객체 스프레드: 값 복사
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };

// immutable, 즉, 기존 객체의 주소가 아닌 값만 복사해 온다.
// const otherProduct = { ...product };
// otherProduct.name = "한동석";
// console.log(product);

// 기존에 없던 key를 작성하면 추가된다.
// const anotherProduct = { ...product, stock: 32 };
// console.log(anotherProduct);

// 이미 있는 key를 작성하면 수정된다.
// const anotherProduct = { ...product, price: 1000 };
// console.log(anotherProduct);

// 유치원에 어린이 3명이 있다.
// 어린이 3명의 정보는 다음과 같다.
// 이름, 나이
// 3명의 어린이를 유치원 객체에 담는다.
// 기존의 어린이 1명의 정보를 복사해서 유치원에 새로운 어린이로 추가한다.

function Child(name, age) {
    this.name = name;
    this.age = age;
}
const Kindergarten = new Object();
const child1 = new Child("안수진", 23);
const child2 = new Child("김정인", 22);
const child3 = new Child("안진영", 24);

Kindergarten.child1 = child1;
Kindergarten.child2 = child2;
Kindergarten.child3 = child3;

const child4 = { ...child3, age: child3.age + 1 };

Kindergarten.child4 = child4;

console.log(Kindergarten);
