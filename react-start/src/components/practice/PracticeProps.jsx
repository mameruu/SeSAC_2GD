import ListChild from "./ListChild";

function PracticeProps() {
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <ListChild tittle="블로그 쓰기🥺" content="블로그 두개 쓰기"></ListChild>
      <ListChild
        tittle="react공부하기📚"
        content="state 사용법 익히기"
      ></ListChild>

      {/* <h2>리액트 공부하기</h2>
      <p>state 사용법 익히기</p> */}
      {/* <hr /> */}

      {/* <h2>저녁 먹기</h2>
      <p>스타필드 맛집 정복!!</p> */}
      {/* <hr /> */}
    </div>
  );
}

export default PracticeProps;

// 해당 코드를 컴포넌트와 Props 를 사용해서
// 수정
// •반복적으로 사용되는 <h2>, <p> 태그로 구성
// 된 오늘 할 일 목록을 ListChild 라는 컴포넌
// 트로 만들어 주세요!
// •내용은 Props 로 전달하여 왼쪽 코드의 결과
// 물과 똑같이 나올 수 있도록 만들어 주세요!
