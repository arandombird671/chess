import React, { useContext, useEffect, useState } from "react";
import UserAvatar from "../../UserAvatar";

function UserTabHeaderOrFooter(props: {
  user: any;
  timeLeft: number;
  turn: string;
  showTime: boolean;
}) {
  const [formattedTime, setFormattedTime] = useState("");
  useEffect(() => {
    console.log(props.timeLeft);
    const mins = Math.floor(props.timeLeft / 60);
    const secs = props.timeLeft % 60;

    setFormattedTime(`${mins}:${countDigits(secs) === 1 ? `0${secs}` : secs}`);
  }, [props.timeLeft]);

  function countDigits(num: number) {
    return num.toString().length;
  }
  return (
    <div
      style={{
        height: "40px",
        width: "",
        overflow: "hidden",
      }}
      className="d-flex align-items-center my-2"
    >
      <UserAvatar src={props.user.avatar} />
      <div className="flex-grow-1 d-flex align-items-center ms-2">
        {props.user.name}
      </div>

      {props.showTime && (
        <div
          style={{
            height: "fit-content",
            color: "#EEEEEE",
            backgroundColor: "#1E201E",
            opacity: props.turn === props.user.color ? "1" : "0.4",
            padding: "0.1rem 2rem",
          }}
        >
          {formattedTime}
        </div>
      )}
    </div>
  );
}

export default UserTabHeaderOrFooter;
