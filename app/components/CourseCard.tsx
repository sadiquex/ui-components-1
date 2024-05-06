import Image from "next/image";
import AudioCourse from "./../../public/assets/images/audio-course.png";
import AudioLines from "./../../public/assets/images/lucide_audio-lines.png";
import LayeredImages from "./../../public/assets/images/layered-images-1.png";

type BlankCardProps = {
  mode: "light" | "dark";
};

// blank card
const BlankCard = ({ mode }: BlankCardProps) => {
  return (
    <div
      className={`w-[365px] h-[503px] rounded-2xl p-6 flex flex-col gap-4 justify-between ${
        mode === "light" ? "bg-white" : "bg-[#272727]"
      }`}
    >
      {/* top side */}
      <div className="flex flex-col gap-6">
        {/* title */}
        <div className="w-full flex justify-between items-center">
          <h2
            className={`font-bold text-2xl ${
              mode === "light" ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            You may like it
          </h2>
          <button className="text-[12px] bg-[#efeeee] p-2 rounded-lg font-medium">
            #Design
          </button>
        </div>

        <Image alt="Audio course" src={AudioCourse} width={400} height={400} />

        {/* title x desc */}
        <div className="flex flex-col gap-2">
          {/* course title */}
          <div className="w-full flex items-center gap-4">
            <Image alt="Audio Lines" src={AudioLines} width={40} height={40} />
            <div
              className={`text-[16px] font-semibold ${
                mode === "light" ? "text-[#0a0a0a]" : "text-white"
              }`}
            >
              Audio course. The Art of Visual Storytelling
            </div>
          </div>
          {/* description */}
          <p
            className={`text-[14px] ${
              mode === "light" ? "text-[#525151]" : "text-white"
            }`}
          >
            The Compositional Toolbox. Techniques for Crafting Engaging Designs
          </p>
        </div>
      </div>

      {/* buttom side */}
      <div className="">
        <div className="w-full flex justify-between items-center">
          <div>
            <Image
              alt="LayeredImages"
              src={LayeredImages}
              width={95}
              height={40}
            />
          </div>
          <button
            className={`rounded-full font-semibold py-2 px-4 ${
              mode === "light"
                ? "bg-[#0a0a0a] text-white"
                : "bg-white text-[#0a0a0a]"
            }`}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CourseCard() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center gap-12">
      {/* light */}
      <BlankCard mode="light" />

      {/* dark */}
      <BlankCard mode="dark" />
    </div>
  );
}
