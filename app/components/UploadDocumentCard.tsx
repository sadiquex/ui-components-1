import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

type DefaultDocumentUploadProps = {
  mode: string;
};

const DefaultDocumentUpload = ({ mode }: DefaultDocumentUploadProps) => {
  return (
    <div
      className={`w-[440px] h-[313px] rounded-2xl p-6 flex flex-col justify-between ${
        mode === "light" ? "bg-white" : " bg-[#1a1d1f]"
      }`}
    >
      {/* title and X */}
      <div
        className={`flex justify-between items-center ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        <p className="text-xl font-medium">Upload Document</p>
        <IoCloseSharp size={24} />
      </div>
      {/* input field */}
      <label
        htmlFor="file-upload"
        className={`rounded-md border-2 border-gray-300 border-dashed border-spacing-4 p-8 flex flex-col items-center justify-center cursor-pointer ${
          mode === "light" ? "bg-white" : "bg-[#272b30]"
        }`}
      >
        <input id="file-upload" type="file" className="hidden" />
        <AiOutlineCloudUpload size={28} color="#525866" />
        <p
          className={`font-medium ${
            mode === "light" ? "text-black" : "text-white"
          }`}
        >
          Drag and drop or{" "}
          <span className="text-[#ff6a55]">Click to upload</span>
        </p>
        <p
          className={`text-sm ${
            mode === "light" ? "text-[#868c98]" : "text-white"
          }`}
        >
          JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
        </p>
      </label>

      {/* buttons */}
      <div className="flex justify-end gap-4">
        <button className="py-2 px-4 rounded-lg border-2 border-[#525866] bg-white">
          Cancel
        </button>
        <button className="py-2 px-4 bg-[#ff6a55] text-white rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default function UploadDocumentCard() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center gap-12">
      {/* light */}
      <DefaultDocumentUpload mode="light" />
      {/* dark */}
      <DefaultDocumentUpload mode="dark" />
    </div>
  );
}
