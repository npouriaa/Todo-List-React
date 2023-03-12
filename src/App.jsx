//Imports
import React, { useState } from "react";
import Input from "./Components/Input/Input";
import Content from "./Components/Content/Content";
import "./App.css";

const App = () => {
  //States
  const [todoListAll, setTodoListAll] = useState([]); // All status state (a state which all type of status have (active and completed))
  const [mainTodoList, setMainTodoList] = useState([]); // A state which content is displayed from

  // Set todo Item function
  const setTodoItem = (text, tag) => {
    let itemsArray = [...mainTodoList];
    let label_key = Math.random().toString(36).substring(2, 7); //Make random label for key every time function invoke 
    let id = Math.random().toString(36).substring(2, 7); //Make random id every time function invoke 
    let itemObj = {
      id: id,
      todo_text: text,
      todo_tag: tag,
      status: "active",
      label_key : label_key
    };
    itemsArray.push(itemObj);
    setMainTodoList(itemsArray);
    setTodoListAll(itemsArray);
  };

  const ContentMap = (status) => {
    let fakeArray = [...todoListAll];
    let mainArray = [];
    fakeArray.map((item) => {
      if (item.status === status) {
        mainArray.push(item);
      }
    });
    setMainTodoList(mainArray);
  };

  //Show chosen status Items function
  const showContentHandler = (status) => {
    if (status === "all") {
      setMainTodoList(todoListAll);
    }
    if (status === "active") {
      ContentMap("active");
    }
    if (status === "completed") {
      ContentMap("completed");
    }
  };

  //Change Item status function
  const changeItemStatusHandler = (e, item) => {
    e.target.classList.toggle("completed");
    let array = [...mainTodoList];
    let cItem = array.indexOf(item);
    if (e.target.classList.contains("completed")) {
      array[cItem].status = "completed";
    } else {
      array[cItem].status = "active";
    }
    setMainTodoList(array);
  };

  //Delete todoItem function
  const deleteItemHandler = (item) => {
    function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }

    let arrayM = [...mainTodoList];
    let arrayAll = [...todoListAll];

    let a = arrayRemove(arrayM, item);
    let b = arrayRemove(arrayAll, item);

    setMainTodoList(a);
    setTodoListAll(b);
  };

  //show completed todo items number function
  const completedTodoNumberHandler = () => {
    let arr = [...todoListAll];
    let completed = [];
    arr.map((i) => {
      if (i.status == "completed") {
        completed.push(i);
      }
    });

    return completed.length;
  };

  return (
    <div className="container">
      <div className="header">
        <h1>REACT TODO APP</h1>
        <span></span>
      </div>
      <div className="main-con">
        <Input setTodoItem={setTodoItem} />
        <Content
          mainTodoList={mainTodoList}
          setMainTodoList={setMainTodoList}
          deleteItemHandler={deleteItemHandler}
          showContentHandler={showContentHandler}
          changeItemStatusHandler={changeItemStatusHandler}
          todoListAll={todoListAll}
          completedTodoNumberHandler={completedTodoNumberHandler}
        />
      </div>
    </div>
  );
};

export default App;
