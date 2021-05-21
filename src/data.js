/** 파일을 쪼갤 때에는 import/export 활용하기
 * export는 현재 파일을 다른 파일에서 쓸 수 있게 만드는 것
 * 내보내기: export default 변수명
 * 두개 이상 내보낼 경우: export { name1, name2 } (default 안씀)
 * 두개 이상 쓸 경우 import시 변수 이름을 그대로 써야 함
 */
export default [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    img: "https://codingapple1.github.io/shop/shoes1.jpg",
  },
  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    img: "https://codingapple1.github.io/shop/shoes2.jpg",
  },
  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    img: "https://codingapple1.github.io/shop/shoes3.jpg",
  },
];
