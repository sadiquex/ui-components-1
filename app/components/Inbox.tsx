import React from "react";
import Image, { type StaticImageData } from "next/image";
import Jasmine from "./../../public/assets/images/jasmine-avatar.png";
import Sadique from "./../../public/assets/images/sadique-avatar.png";
import Bright from "./../../public/assets/images/bright-avatar.jpg";
import Winnifred from "./../../public/assets/images/winnifred-avatar.jpg";

type InboxCardProps = {
  mode: "light" | "dark";
};

type MessageCardProps = {
  messageStatus: "read" | "unread";
  activeStatus: "active" | "inactive";
  message: Message;
  mode: InboxCardProps["mode"];
};

type Message = {
  messageStatus: MessageCardProps["messageStatus"];
  activeStatus: MessageCardProps["activeStatus"];
  senderName: string;
  sentTime: string;
  messageContent: string;
  senderAvatar: StaticImageData;
};

const messages: Message[] = [
  {
    messageStatus: "unread",
    activeStatus: "active",
    senderName: "Bright",
    sentTime: "5m",
    messageContent: "So funny",
    senderAvatar: Bright,
  },
  {
    messageStatus: "unread",
    activeStatus: "inactive",
    senderName: "Sadique",
    sentTime: "30m",
    messageContent: "Thank you for the overview. I'm glad we were a...",
    senderAvatar: Sadique,
  },
  {
    messageStatus: "read",
    activeStatus: "active",
    senderName: "Winnifred",
    sentTime: "Just now",
    messageContent: "Coming to the office?",
    senderAvatar: Winnifred,
  },
  {
    messageStatus: "read",
    activeStatus: "inactive",
    senderName: "Jasmine",
    sentTime: "2hr",
    messageContent: "What did you say was the name of the uber dri...",
    senderAvatar: Jasmine,
  },
];

const MessageCard = ({
  messageStatus,
  activeStatus,
  message,
  mode,
}: MessageCardProps) => {
  return (
    <div className="flex justify-between items-center">
      {/* left sisde */}
      <div className="flex gap-2">
        <div className="flex gap-2 relative">
          {activeStatus === "active" && (
            <span className="bg-green-500 w-4 h-4 rounded-full absolute top-0 left-0 border-2 border-white"></span>
          )}

          <div className="rounded-full h-12 w-12 overflow-hidden">
            <Image
              alt={message.senderName}
              height={48}
              width={48}
              src={message.senderAvatar}
            />
          </div>
        </div>

        <div>
          {/* name and time */}
          <div className="flex items-center gap-4">
            <p
              className={`font-semibold ${
                mode === "light" ? "text-black" : "text-white"
              }`}
            >
              {message.senderName}
            </p>

            <span className="text-gray-400 text-sm">{message.sentTime}</span>
          </div>

          <p
            className={`text-sm font-medium ${
              messageStatus === "unread" ? "text-black" : "text-gray-500"
            } ${mode === "light" ? "text-gray-600" : "text-white"}`}
          >
            {message.messageContent}
          </p>
        </div>
      </div>
      {/* right side */}
      {messageStatus === "unread" && (
        <span className="bg-blue-500 rounded-full w-2 h-2">&nbsp;</span>
      )}
    </div>
  );
};

// default inbox card
const DefaultInboxCard = ({ mode }: InboxCardProps) => {
  return (
    <div
      className={`md:w-[468px] md:min-h-[580px] p-6 rounded-md flex flex-col gap-4 ${
        mode === "light" ? "bg-white" : "bg-[#1a1d1f]"
      }`}
    >
      {/* title */}
      <h3
        className={`font-semibold text-xl ${
          mode === "light" ? "" : "text-white"
        }`}
      >
        Messages{" "}
        <span className="rounded-full bg-blue-600 text-white p-1 text-sm">
          2 New
        </span>
      </h3>
      {/* messages */}
      <div className="flex flex-col gap-4">
        {messages.map((message, i) => (
          <React.Fragment key={i}>
            <MessageCard
              messageStatus={message.messageStatus}
              activeStatus={message.activeStatus}
              message={message}
              mode={mode}
            />
            <hr />
          </React.Fragment>
        ))}
      </div>
      {/* button */}
      <button
        className={`font-semibold border border-gray-400 p-2 rounded-md ${
          mode === "light" ? "" : "text-white"
        }`}
      >
        View all messages
      </button>
    </div>
  );
};

export default function Inbox() {
  return (
    <div className="bg-gray-200 p-4 md:h-screen flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
      {/* light */}
      <DefaultInboxCard mode="light" />
      {/* dark */}
      <DefaultInboxCard mode="dark" />
    </div>
  );
}
