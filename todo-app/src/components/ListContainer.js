import TodoList from "./TodoList";
import DoneList from "./DoneList";
import "../scss/style.scss";

export default function ListContainer() {
  return (
    <div className="listContainer">
      <div className="todoContainer">
        <TodoList />
      </div>
      <div className="doneContainer">
        <DoneList />
      </div>
    </div>
  );
}
