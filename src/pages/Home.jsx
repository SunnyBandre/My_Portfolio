import GetInTouch from "../components/GetInTouch";
import Card from "../components/Card";
import Expertise from "../components/Expertise";
import Header from "../components/Header";

const expertiseCardDetails = [
  {
    title: "Software  Development",
    icon: "MdMonitor",
    description:
      "Experienced in both functional and oop: Java, JavaScript, TypeScript, C/C++, HTML, CSS.",
  },
  {
    title: "Frontend developer",
    icon: "MdMonitor",
    description:
      "Over 2 years of development experience in React, NextJS, NodeJS, MongoDB, Express, Tailwind, RESTful APIs Framework & Libraries.",
  },
  {
    title: "Android & iOS developer",
    icon: "MdMonitor",
    description:
      "Skilled at crafting seamless hybrid mobile apps and cross-platform experiences with React Native, Expo, Firebase.Framework & Libraries.",
  },
];
const WebsiteWorkedOn = [
  {
    name: "fastone",
  },
  {
    name: "603 thee working space",
  },
  {
    name: "Workved Interior",
  },
  {
    name: "Frameazy",
  },
];
function Home() {
  return (
    <div className="bg-[#111] text-white space-y-10 font-poppins">
      <Header />
      <section className="lg:container lg:mx-auto  px-4 lg:px-12">
        {/* div for profile */}
        <div className="flex justify-center relative">
          <img
            src="/Me.png"
            alt="profile "
            className="object-contain max-w-xs lg:max-w-3xl"
          />
          <p className="text-xl lg:text-6xl text-center absolute bottom-8">
            Hi, I’m Sunny I develop Mobile Apps and Web Experience{" "}
          </p>
        </div>
      </section>
      {/* expertize section */}
      <div className="lg:container lg:mx-auto  px-4 lg:px-12">
        <h1 className="font-bold lg:text-7xl text-[#F9F9F9] text-center">
          My expertise
        </h1>
        {/* div for card display */}
        <div className="py-10">
          {/* card */}
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            {expertiseCardDetails?.map((card) => {
              return <Expertise card={card} key={card?.title} />;
            })}
          </div>
        </div>
      </div>
      <section className="lg:container lg:mx-auto  px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10">
          {WebsiteWorkedOn?.map((website) => {
            return <Card key={website?.name} website={website} />;
          })}
        </div>
      </section>

      <section className="lg:container lg:mx-auto  px-4 lg:px-12 pb-10">
        <GetInTouch />
      </section>
    </div>
  );
}

export default Home;
