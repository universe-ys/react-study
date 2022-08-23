/** @format */

import React, { useEffect, useReducer, useState } from "react";
import useInput from "./useInput";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInput(reducer, {
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  // useEffect(() => {
  //   console.log("effect");
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임 :</b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
