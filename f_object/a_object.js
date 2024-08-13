// 함수와 메소드
// 함수는 어떤 영역에도 갇혀있지 않은 상태로 선언된 형태
// 메소드는 어떤 영억 내에 갇혀있는 상태로 선언된 형태

// JS에서는 객체 내부의 필드를 프로퍼티라고 부른다.
// let user = {
//     name: "한동석",
//     age: 20,
//     address: "경기도",
//     introduce: () => {
//         console.log("Hi😍");
//     },
// };

// console.log(typeof user);
// console.log(user.name);
// user.introduce();
// console.log(user["address"]);

// 만약 key값에 특수문자가 포함되어 있다면,
// const p = {
//     "data-x": "text-container",
// };

// 대괄호로 접근한다.
// 이런 상황 외에는 마침표로 접근하는 것이 편하다.
// console.log(p["data-x"]);

// 만약 프로퍼티 key값에 규칙성이 있다면,
// const user = {
//     name: "한동석",
//     address1: "경기도 남양주시",
//     address2: "화도읍",
//     address3: "구암리",
// };

// // 이 또한 대괄호를 사용하여 순서대로 가져올 수 있다.
// for (let i = 0; i < 3; i++) {
//     console.log(user[`address${i + 1}`]);
// }

// 상품 정보를 JS 객체로 구성한다.
const productInfo = {
    id: 1,
    name: "키보드",
    price: 100000,
    "stock-1": 10,
    "stock-2": 4,
    totalPrice: () => {
        return productInfo.price * productInfo["stock-1"];
    },
};

with (productInfo) {
    console.log(id, name, price);
    for (let i = 0; i < 2; i++) {
        console.log(productInfo[`stock-${i + 1}`]);
    }
}
console.log(`총 가격: ${productInfo.totalPrice()}`);
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고1과 재고2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다.
// 상품 정보에 재고-1을 사용해서 총 가격을 리턴하는 메소드를 선언 한다.

const product = {
    id: 1,
    name: "보리차",
    price: 1300,
    "stock-1": 32,
    "stock-2": -2,
    getTotal: () => {
        return product.price * product["stock-1"];
    },
};

with (product) {
    console.log(id, name, price);
    for (let i = 0; i < 2; i++) {
        console.log(product[`stock-${i + 1}`]);
    }
}
