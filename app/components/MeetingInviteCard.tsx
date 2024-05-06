import { LuLink } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import Avatar1 from "./../../public/assets/images/avatar-1.png";
import Avatar2 from "./../../public/assets/images/avatar-2.png";
import Image, { type StaticImageData } from "next/image";

type MeetingInviteCardProps = {
  mode: "light" | "dark";
};

type Person = {
  name: string;
  email: string;
  avatar: string | StaticImageData;
  role: string;
};

type PersonCardProps = {
  mode: MeetingInviteCardProps["mode"];
  person: Person;
};

// card to select person
const PersonCard = ({ mode, person }: PersonCardProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src={person.avatar} width={47} height={47} alt={person.name} />
        <span className="flex flex-col">
          <p
            className={`font-semibold ${mode === "light" ? "" : "text-white"}`}
          >
            {person.name}
          </p>
          <p className={mode === "light" ? "text-gray-600" : "text-[#67767e]"}>
            {person.email}
          </p>
        </span>
      </div>

      <div
        className={`p-4 rounded-lg cursor-pointer ${
          mode === "light"
            ? "border border-gray-500"
            : "bg-[#67767e] text-white"
        }`}
      >
        <select className="border-none bg-transparent">
          <option value="manager" disabled>
            {person.role}
          </option>
          <option value="owner">Manager</option>
          <option value="owner">Owner</option>
        </select>
      </div>
    </div>
  );
};

const BlankMeetingInviteCard = ({ mode }: MeetingInviteCardProps) => {
  return (
    <div
      className={`w-[490px] min-h-[323px] flex flex-col gap-4 rounded-2xl p-6 ${
        mode === "light" ? "bg-white" : "bg-[#1a1d1f]"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* left */}
        <div className="flex flex-col">
          <h4
            className={`font-medium text-2xl ${
              mode === "light" ? "" : "text-white"
            }`}
          >
            Invite Team Member
          </h4>
          <p className={mode === "light" ? "" : "text-[#67767e]"}>
            Everyone at project access this file
          </p>
        </div>
        {/* right */}
        <div className="flex items-center gap-2 text-[#8e59ff]">
          <span className="flex items-center gap-1 text-lg">
            <LuLink size={26} /> Copy Link
          </span>
          <IoCloseSharp
            size={26}
            color={mode === "light" ? "black" : "white"}
          />
        </div>
      </div>

      {/* input field */}
      <div
        className={`flex items-center rounded-lg p-3 gap-4 ${
          mode === "light"
            ? "bg-[#f4f4f4]"
            : "bg-[#33383f] border border-gray-500"
        }`}
      >
        <input
          type="text"
          placeholder="josephboyce@gmail.com"
          className={`p-3 w-full rounded-lg bg-transparent ${
            mode === "light" ? "placeholder-black" : "placeholder-white"
          }`}
        />
        <button className="p-3 bg-[#8e59ff] text-white rounded-lg whitespace-nowrap">
          Send Invite
        </button>
      </div>

      {/* people */}
      <div className="flex flex-col gap-3">
        <p className={mode === "light" ? "text-gray-700" : "text-white"}>
          Project Member
        </p>

        {/* people */}
        {[
          {
            name: "James Addo",
            email: "jaddo9@gmail.com",
            avatar: Avatar1,
            role: "Owner",
          },
          {
            name: "William Opare",
            email: "williamopare16@gmail.com",
            avatar: Avatar2,
            role: "Manager",
          },
        ].map((person, i) => (
          <PersonCard mode={mode} person={person} key={i} />
        ))}
      </div>
    </div>
  );
};

export default function MeetingInviteCard() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center gap-12">
      {/* light */}
      <BlankMeetingInviteCard mode="light" />
      <BlankMeetingInviteCard mode="dark" />
    </div>
  );
}
