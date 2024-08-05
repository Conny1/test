import React, { useEffect, useState } from "react";
import "./Userinfo.css";
import mail from "../../assets/mail.png";
import more from "../../assets/more.png";
import avatars from "../../assets/avatars.png";

import less from "../../assets/less.png";

const Userinfo = ({ user }) => {
  // console.log(user);
  const [openmore, setopenmore] = useState(false);
  const [delay, setdelay] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setdelay(true);
    }, 3000);
  });

  if (user.length === 0) {
    return <>Loading...</>;
  }

  function formatDate(date) {
    // Define options for formatting the date
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);

    return formatter.format(date);
  }

  function daysAgo(date) {
    const now = new Date();
    const givenDate = new Date(date);

    // Calculate the difference in milliseconds
    const diffMs = now - givenDate;

    // Convert milliseconds to days
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let ago = diffDays === 1 ? "day ago" : "days ago";
    if (diffDays >= 30) {
      diffDays = Math.floor(diffDays / 30);
      ago = diffDays === 1 ? "month ago" : "months ago";
    }
    return diffDays + " " + ago;
  }

  return (
    <div className="lineBlock">
      <div className="userCard">
        <div className="imageContainer">
          <img src={user.img} alt={user.name} />
        </div>
        <div className="cardInfo">
          <p className="name">{user.name}</p>
          <p className="details">{user.position}</p>
          <p className="details">{user.city}</p>
          <section className="avatars">
            <img src={avatars} alt="" />
            <p>Peter Swage, John Eremic, and 281 other mutual connections</p>
          </section>
        </div>
      </div>
      {delay && (
        <div className="replyContainer">
          <div className="replyTitle">
            <img src={mail} alt="mail" />
            <p>Reply from Emry Wells</p>
          </div>
          <div className="messageContainer">
            <div className="timeContainer">
              <p className="time">{formatDate(new Date(user.created_at))}</p>
              <p>{daysAgo(user.created_at)}</p>
            </div>
            <div className="messagedetails">
              <p className="messageTitle">
                {user?._orbits_last_message?.message_head}
              </p>
              {openmore ? (
                <p className="message">{user?._orbits_last_message?.message}</p>
              ) : (
                <p className="message">
                  {user?._orbits_last_message?.message.substring(0, 50)}...
                </p>
              )}

              <button
                onClick={() => setopenmore((prev) => !prev)}
                className="more"
              >
                {openmore ? <span>Less</span> : <span>More</span>}

                <img src={openmore ? less : more} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
