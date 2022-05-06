import { useState } from "react";
import CurrentChat from "./CurrentChat";

const Chat = () => {
  const [messages, setmessages] = useState([
    {
      userText: "Hey waled!, will you watch ucl final ?",
      userID: "Salah",
      Date: "11:24 PM 6 May 2022",
    },
    { userText: "Hi Salah ♥", userID: "Waled", Date: "11:25 PM 6 May 2022" },
    {
      userText: "Yes, I know, but be careful over your shoulder 😂",
      userID: "Waled",
      Date: "11:30 PM 6 May 2022",
    },
    { userText: "😂😂😂", userID: "Salah", Date: "11:31 PM 6 May 2022" },
    {
      userText: "Egyptian King is here 😎",
      userID: "Salah",
      Date: "11:35 PM 6 May 2022",
    },
  ]);

  return <CurrentChat messages={messages} />;
};

export default Chat;
