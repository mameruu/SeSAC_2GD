// store 전체를 총괄할 수 있는 index.js를 만들어줌
// 총괄하는 역활만 하게 할 것입니다!

import { combineReducers } from "redux";
import { todo } from "./modules/todo";

export default combineReducers({
  todo,
});
