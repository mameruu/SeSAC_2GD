const initialState = {
  list: [
    {
      id: 0,
      text: "리엑트 공부하기",
      done: false,
    },
    { id: 1, text: "스트레칭 하기", done: false },
    { id: 2, text: "운동하기", done: false },
  ],
};

// id 전역 관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState["nextID"] = count;

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export function create(payload) {
  return {
    type: CREATE,
    payload, //obj형
  };
}
export function done(id) {
  return {
    type: DONE,
    id, //number형
  };
}

export function todo(state = initialState, action) {
  // action ={
  //   type: 'todo/CREATE',
  //   payload:{
  //     id:3,
  //     text: '점심먹기'
  //   }
  // }

  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") {
        //->공백일때 추가 안되게
        return state;
      } else {
        return {
          ...state,
          list: state.list.concat({
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          }),
          nextID: action.payload.id + 1,
        };
      }

    case DONE: {
      return {
        // 기존의 List 에서의 id 값과 action으로 들어온 id가 같다면
        // done:false ->true 로 변경
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              // id: 0,
              // text: "리엑트 공부하기",
              // done: false,
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    }

    default:
      return state;
  }
}
