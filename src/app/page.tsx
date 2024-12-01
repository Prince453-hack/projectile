import StoriesSection from "@/components/Data";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import StickyNavbar from "@/components/Navbar";
import NewSection from "@/components/NewSection";
import Points from "@/components/Points";
import ProjectAyanna from "@/components/Project-Ayanna";
import Slider from "@/components/Slider";
import TeamMembers from "@/components/TeamMembers";

export default function Home() {
  return (
    <div className="select-none">
      <StickyNavbar />
      <Slider />

      <div className="mx-14 my-2 sm:my-5 space-y-6" id="secure">
        <h1 className="font-semibold text-3xl sm:text-4xl underline underline-offset-8">
          WHY THESECURELEAP?
        </h1>
        <p className="font-normal max-w-7xl leading-8">
          21st Century education ushered the new era of global education. Today,
          we try to explore our education opportunities across various countries
          like the US, Canada, European Countries, Australia, and New Zealand
          along with Singapore. These are interesting times, in which there is
          no dearth of the professional education avenues. However, while
          exploring these opportunities, it is critical to understand various
          challenges.
        </p>
        <Points />
      </div>
      <NewSection />

      <div className="">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl">
          Stories
        </h1>
        <StoriesSection />
      </div>

      <ProjectAyanna />
      <TeamMembers />

      <Footer />
    </div>
  );
}
