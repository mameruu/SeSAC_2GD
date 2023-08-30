//함수형!
import { useState } from "react";

function HandlerExState() {
  const [text, setText] = useState({ text: "Hello world" });

  return (
    <div>
      {text.text}
      <button onClick={() => setText({ Text: "Goodbye World!" })}>클릭</button>
    </div>
  );
}

// import { Component } from "react";

// class HandlerExState extends Component {
//   state = {
//     Text: "hello World!",
//   };

//   render() {
//     const { Text } = this.state;
// return (
//       <div>
//         <h1>{Text}</h1>
//         <button onClick={() => this.setState({ Text: "Goodbye World!" })}>
//           클릭
//         </button>
//       </div>
//     );
//   }
// }

export default HandlerExState;
