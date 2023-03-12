//Imports
import React, { useEffect } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  //This useEffect overLine todoitem if item status is completed any time component render
  useEffect((e) => {
    let element = document.querySelectorAll(".todo-item");
    Array.from(element).map((i) => {
      if (props.item.id === i.id) {
        if (props.item.status === "completed") {
          i.children[0].children[1].checked = true;
          i.children[0].children[0].style.width = `${i.children[0].children[3].clientWidth}px`;
          i.children[0].children[3].style.color = "#ddd";
        }
      }
    });
  });

  return (
    <div key={props.id} id={props.item.id} className="todo-item">
      <div className="todo-item-f">
        <div className="todo-line"></div>
        <input
          onClick={(e) => {
            props.todoLineHandler(e);
            props.changeItemStatusHandler(e, props.item);
          }}
          type="checkbox"
          id={props.item.label_key}
        />
        <div className={`tag ${props.item.todo_tag}`}>
          <span id="tag-circle"></span>
        </div>
        <label htmlFor={props.item.label_key}>{props.item.todo_text}</label>
      </div>
      <svg
        onClick={() => props.deleteItemHandler(props.item)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="todo-item-x-mark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default TodoItem;
