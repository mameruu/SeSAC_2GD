import "../styles/style.scss";
import img1 from "../assets/img1.png";
export default function UseScss() {
  return (
    <>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      {/* .box1*3+p.circle*3+..box2{HI$}*4 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">HI1</div>
        <div className="box2">HI2</div>
        <div className="box2">HI3</div>
        <div className="box2">HI4</div>
      </div>
      <h2> 참고&gt; 이미지 적용하기</h2>
      <h4> 1. src 폴더 내부의 이미지 가져오기</h4>
      <img src="../assets/img1.png" alt="경로명으로 접근" width={"100px"} />
      <img src={img1} alt="import로 접근" />
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      <img src="/img1.png" alt="public 폴더 사진 접근" width={"100px"} />
      {/* 아래에 있는 코드가 배포했을때 좀 더 안전한 코드! */}
      <img
        src={process.env.PUBLIC_URL + "/img1.png"}
        alt="public 폴더 사진 접근"
        width={"100px"}
      />

      <div className="public=img img-test"></div>

      <div className="practice">
        <h1>실습문제</h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
