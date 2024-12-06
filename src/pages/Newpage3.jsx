import React from "react";
import GroupChatHead from "../components/GroupChatHead";
import GroupConversation from "../components/GroupConversation";
import ChatInputBox from "../components/ChatInputBox";

const Newpage3 = () => {
  return (
    <>
      <GroupChatHead />
      <GroupConversation />
      <div className="fixed w-3/5 bottom-4 left-1/2 transform -translate-x-1/2">
        <ChatInputBox />
      </div>
    </>
  );
};

export default Newpage3;
