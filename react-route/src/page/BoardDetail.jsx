import { useParams } from "react-router-dom";
import img1 from "../asset/pooh1.webp";
import img2 from "../asset/pooh2.jpg";
import NotFound from "./NotFound";

// export default function BoardDetail() {
//   const params = useParams();
//   console.log(params);
//   //   params = {boardId=2}
//   const { boardID } = useParams();
//   return (
//     <>
//       <h2> {boardID}번 게시글 입니다. </h2>
//       <h2> {params.boardID}번 게시글임. 안녕하세요? </h2>
//     </>
//   );
// }

export default function BoardDetail() {
  const { boardID } = useParams();
  const boardDate = [
    {
      id: 1,
      title: "1번 글",
      content: "1번 내용~",
      imgScr: img1,
    },
    {
      id: 2,
      title: "2번 글",
      content: "2번 내용~",
      imgScr: img2,
    },
  ];
  // 보드데이터와, 요소인 오브젝트의 아이디와 파라미터가 같은 것 리턴
  const board = boardDate.filter((el) => el.id === Number(boardID))[0];
  return board ? (
    <>
      <h1> 🍌 게시글 {boardID}번 🍌</h1>
      <img src={board.imgScr} alt={`${boardID}번 이미지`} />
      <h3>{board.title}</h3>
      <p>{board.content}</p>
    </>
  ) : (
    <NotFound />
  );
}
