//Imports
import React, { useRef} from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Content.css";

const Content = (props) => {
  const lineRef = useRef(null); //Status underline ref

  // Underline Status position and width changer function
  const underlineStatusHandler = (e) => {
    let width = e.target.clientWidth;
    let left = e.target.offsetLeft;
    lineRef.current.style.width = `${width}px`;
    lineRef.current.style.left = `${left}px`;
  };

  // Each todo item overline width changer function
  const todoLineHandler = (e) => {
    if (e.target.checked === true) {
      e.target.nextElementSibling.nextElementSibling.style.color = "#ddd";
      e.target.previousElementSibling.style.width = `${e.target.nextElementSibling.nextElementSibling.clientWidth}px`;
    } else {
      e.target.previousElementSibling.style.width = "0";
      e.target.nextElementSibling.nextElementSibling.style.color = "#000";
    }
  };

  return (
    <div className="content-con">
      <div className="tag-con">
        <p>Tags</p>
        <div className="tag home">
          <span id="tag-circle"></span>
          Home
        </div>
        <div className="tag work">
          <span id="tag-circle"></span>
          Work
        </div>
        <div className="tag school">
          <span id="tag-circle"></span>
          School
        </div>
        <div className="tag others">
          <span id="tag-circle"></span>
          others
        </div>
      </div>
      <div className="todo-items-con">
        {props.mainTodoList.length > 0 ? (
          props.mainTodoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              id={item.id}
              tagColor={item.todo_tag}
              todoLineHandler={todoLineHandler}
              changeItemStatusHandler={props.changeItemStatusHandler}
              deleteItemHandler={props.deleteItemHandler}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="tag-status-show">
        <div className="tag-status-show-f">
          <div ref={lineRef} className="line"></div>
          <button
            onClick={(e) => {
              underlineStatusHandler(e);
              props.showContentHandler("all");
            }}
          >
            All Tasks
          </button>
          <button
            onClick={(e) => {
              underlineStatusHandler(e);
              props.showContentHandler("active");
            }}
          >
            Active
          </button>
          <button
            onClick={(e) => {
              underlineStatusHandler(e);
              props.showContentHandler("completed");
            }}
          >
            Completed
          </button>
        </div>
        <p>
          {props.completedTodoNumberHandler()} / {props.todoListAll.length}{" "}
          Completed
        </p>
      </div>
    </div>
  );
};

export default Content;
