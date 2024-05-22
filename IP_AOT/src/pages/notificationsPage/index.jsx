import React, { useState } from "react";
import Notif from "../../components/Notif";
import Message from "../../components/Message"; 
import ImageNotif from "../../components/ImageNotif"; 
import "../../styles/notificationspage/index.css"; 


function NotificationsPage() {
    const [read, setRead] = useState("unread");
    const [circle, setCircle] = useState("●");
    const [zero, setZero] = useState("3");
  
    const handleNotifs = () => {
      setRead("read");
      setZero("0");
      setCircle("");
    };
  
    return (
        <div className="notification-page bg-[#a8b6c2] absolute m-auto left-0 right-0 md:top-0 top-5 md:bottom-0 md:w-[31rem] w-[18rem] md:h-[39rem] h-[46rem] md:p-5 p-3 rounded-xl font-inter drop-shadow-xl">
          <div className="flex items-center mb-5">
          <h1 className="text-black font-bold text-[1.1rem]">Notifications</h1>
            <div className="notification-page bg-[#0e2152] pl-2 pr-2 ml-2 rounded-[4px]">
              <p className="text-[13px] text-white">{zero}</p>
            </div>
            <div className="absolute right-5">
              <p className="text-[12px] text-[#222233] link-hover" onClick={handleNotifs}>
                Mark all as read
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-y-scroll h-5/6">
            <div className={read}>
              <Notif
                name={"Professeur"}
                action={"reacted to your recent post"}
                post={"SOS!"}
                time={"1m"}
                circle={circle}
              />
            </div>
            <div className={read}>
              <Notif
                name={"Stoodent"}
                action={"has reacted to your recent post"}
                post={"mai bine dadeam la psihologie"}
                time={"5m"}
                circle={circle}
              />
            </div>
            <div className={read}>
              <Notif
                name={"Proff"}
                action={"has commented on your post"}
                post={"bine ca-s 3 ani ca daca erau 4 eram schizo"}
                time={"1 day"}
                circle={circle}
              />
            </div>
      
            <Message
              name={"Studen"}
              action={"sent you a private message"}
              post={""}
              time={"5 days"}
            />
            <ImageNotif
              name={"Profy"}
              action={"commented on your post"}
              post={""}
              time={"1 week"}
            />
            <Notif
              name={"Sudunt"}
              action={"reacted to your recent post"}
              post={"de ce am luat doar 4p la Web"}
              time={"2 weeks"}
            />
            <Notif
              name={"Prif"}
              action={"has commented on the thread"}
              post={"ASII"}
              time={"2 weeks"}
            />
          </div>
      </div>
    );
  }

export default NotificationsPage;
