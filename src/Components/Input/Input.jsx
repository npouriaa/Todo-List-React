//Imports
import React, { useRef } from "react";
import "./Input.css";

const Input = (props) => {
  //Refs
  const inputValueRef = useRef(null);
  const selectOptionValueRef = useRef(null);

  //Get and send inputs value function
  const addTodoHandler = (e) => {
    e.preventDefault();
    props.setTodoItem(inputValueRef.current.value , selectOptionValueRef.current.value)
    e.target.reset();
  };


  return (
    <form onSubmit={addTodoHandler} action="" className="input-con">
      <div className="input-con">
        <input
          required
          ref={inputValueRef}
          placeholder="What do you need to do ?"
          type="text"
          name=""
          id=""
        />
        <div className="">
          <label htmlFor="">Tag :</label>
          <select ref={selectOptionValueRef} name="" id="">
            <option value="home">home</option>
            <option value="work">work</option>
            <option value="school">school</option>
            <option value="others">others</option>
          </select>
        </div>
      </div>
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
};

export default Input;
