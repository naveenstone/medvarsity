import CourseDetails from "@/components/Course/details";
import FullCourseDetails from "@/components/Course/fullDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-custom-bg flex flex-col place-items-center">
      <Header/>
      <CourseDetails />
      <FullCourseDetails />
      <Footer />
    </div>
  )
}
