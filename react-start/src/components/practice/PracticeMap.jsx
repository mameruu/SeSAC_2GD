import MapChild from "./MapChild";

export default function PracticeMap() {
  const items = [
    {
      item: "PS5",
      price: "685,000",
    },
    {
      item: "에어 프라이어",
      price: "50,000",
    },
    {
      item: "사세 치킨윙",
      price: "11,500",
    },
  ];

  return (
    <>
      {/* id있는 경우엔 key= 해서 아이디값 줘도 ㄱㅊ */}
      {items.map((data, i) => {
        return <MapChild key={i} item={data.item} price={data.price} />;
      })}
      {/* <MapChild item={items[0].item} price={items[0].price} />; */}
    </>
  );
}
