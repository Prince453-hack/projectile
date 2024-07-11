import React from "react";

const NewSection = () => {
  return (
    <div>
      <div className="border-2 border-violet-950 rounded-md mx-5 sm:mx-10 my-5 mb-10 px-2 py-10 text-zinc-950">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl text-purple-950 mb-7">
          HOW CAN WE HELP?
        </h1>
        <p className="font-normal text-center mx-2 sm:mx-7 lg:mx-20 text-lg">
          The aim of this platform is to ease this stress and help students of
          all ages leap to new horizons, diligently. Students under stress are
          not inanimate data points and are more than important to be
          marginalized through statistical percentages. The vision is to reduce
          the chaos and help students build their confidence in the new lands to
          utilize their education meaningfully. To achieve this we offer the
          customized due-diligence and recommendations to help you carve your
          niche on the global canvas.
        </p>
      </div>

      <div className="my-2 sm:my-12 mx-1 sm:mx-2 space-y-10" id="community">
        <h1 className="font-semibold text-3xl text-center sm:text-5xl mb-2">
          Community
        </h1>
        <p className="font-normal text-center mx-0 sm:mx-7 lg:mx-12 text-lg">
          While scouting for the right college it is easy to get distracted with
          all the information out there and it gets harder to find the right
          fit. In such a scenario, the experience of senior students who have
          already gone through the labyrinth of the university admissions can
          prove to be invaluable. They can direct you in the right direction by
          pointing out the loopholes and realities the luring college admission
          sites won’t mention. Having a rough idea of how exactly your college
          life looks like can make your first day feel like a breeze than
          overload of information. Thus, understanding the importance of mentors
          while making your decision, this platform is developed by students to
          help their fellow students find the right path and make their journey
          meaningful.
        </p>
      </div>
    </div>
  );
};

export default NewSection;
