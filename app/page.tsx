import CourseCard from "./components/CourseCard";
import Inbox from "./components/Inbox";
import MeetingInviteCard from "./components/MeetingInviteCard";
import UploadDocumentCard from "./components/UploadDocumentCard";

export default function Home() {
  return (
    <main className="space-y-4">
      <CourseCard />
      <UploadDocumentCard />
      <MeetingInviteCard />
      <Inbox />
    </main>
  );
}
