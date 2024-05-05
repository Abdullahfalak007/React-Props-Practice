import React from "react";

export default function FirstChild(props) {
  return (
    <div>
      <ul>
        {props.data?.map((item) => {
          console.log(item);
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
