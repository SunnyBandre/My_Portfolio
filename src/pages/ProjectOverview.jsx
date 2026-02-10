import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";

function ProjectOverview() {
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto px-4 lg:px-12 bg-[#111] space-y-6 text-white pb-10">
        <section>
          <div className="flex justify-start gap-10">
            <div>
              <img
                src="/logoPlaceholder.png"
                alt="placeholder logo"
                className="aspect-square w-24"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2>FastOne</h2>
              <p>Forex Website</p>
            </div>
          </div>
        </section>
        {/* image section */}
        <div className="relative">
          <img
            src="/dummyImage.png"
            alt="placeholder for project"
            className="relative w-full h-[640px] object-fill rounded-xl"
          />
        </div>
        {/* section for the content */}
        <section>
          <div className=" bg-[#111] flex items-center justify-center ">
            <div className="grid lg:grid-cols-2 gap-8  w-full">
              {/* LEFT CARD */}
              <div className="relative rounded-2xl border border-[#1e1e1e] bg-gradient-to-br from-[#0b0b0b] to-[#050505] p-8 shadow-[0_0_60px_rgba(0,120,255,0.15)]">
                <h2 className="text-blue-400 text-xl font-semibold mb-4">
                  Over View
                </h2>

                <p className="text-white text-sm leading-relaxed mb-4">
                  Meet Glide— a world of Crypto and Web3.0 knowledge in your
                  pocket.
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Embark on a journey of knowledge and exploration with Glide –
                  your gateway to understanding Web 3.0 and Crypto. Glide
                  seamlessly combines an intuitive interface with rich content,
                  offering users a curated experience to delve into various
                  topics surrounding the decentralized future.
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Whether you're a seasoned enthusiast or a curious learner,
                  Glide empowers you to navigate the complex world of Web 3.0
                  and Crypto with ease, fostering a deeper understanding of the
                  technologies shaping the future of the digital landscape.
                  Elevate your learning experience and glide into the exciting
                  realms of decentralized technologies with confidence and
                  curiosity.
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-8">
                {/* TECH STACK */}
                <div className="rounded-2xl border border-[#1e1e1e] bg-gradient-to-br from-[#0b0b0b] to-[#050505] p-6 shadow-[0_0_40px_rgba(0,120,255,0.12)]">
                  <h2 className="text-blue-400 text-xl font-semibold mb-6">
                    Tech Stack
                  </h2>

                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 mb-5 last:mb-0"
                    >
                      <div className="w-12 h-12 rounded-md bg-gray-200" />
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Node JS
                        </p>
                        <p className="text-gray-400 text-xs">Node JS</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CREATED */}
                <div className="rounded-2xl border border-[#1e1e1e] bg-gradient-to-br from-[#0b0b0b] to-[#050505] p-6 shadow-[0_0_40px_rgba(0,120,255,0.12)]">
                  <h2 className="text-blue-400 text-xl font-semibold mb-6">
                    Created
                  </h2>
                  <p className="text-white text-3xl font-bold">2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ProcessSection />
        </section>
        <section>
          <NextProject />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ProjectOverview;

function NextProject() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a0a0a] to-black py-16 px-6">
      <div className="">
        <p className="text-gray-500 text-lg mb-3">Next Project</p>
        <div className="flex items-center gap-3 group cursor-pointer">
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Workved Interior
          </h2>

          <FiArrowRight className="text-white text-4xl md:text-5xl transform transition-transform duration-300 group-hover:translate-x-2" />
        </div>

        {/* underline glow */}
        <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="">
      <h2 className="text-blue-400 text-xl font-medium mb-4">Features</h2>
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />
      {/* Content */}
      <div className="text-gray-200 text-sm leading-relaxed space-y-8">
        <p>
          Meet Glide— a world of Crypto and Web3.0 knowledge in your pocket.
        </p>
        <p>
          Embark on a journey of knowledge and exploration with Glide – your
          gateway to understanding Web 3.0 and Crypto. Glide seamlessly combines
          an intuitive interface with rich content, offering users a curated
          experience to delve into various topics surrounding the decentralized
          future.
        </p>

        <p>
          Whether you're a seasoned enthusiast or a curious learner, Glide
          empowers you to navigate the complex world of Web 3.0 and Crypto with
          ease, fostering a deeper understanding of the technologies shaping the
          future of the digital landscape. Elevate your learning experience and
          glide into the exciting realms of decentralized technologies with
          confidence and curiosity.
        </p>

        <p>
          Meet Glide— a world of Crypto and Web3.0 knowledge in your pocket.
        </p>

        <p>
          Embark on a journey of knowledge and exploration with Glide – your
          gateway to understanding Web 3.0 and Crypto. Glide seamlessly combines
          an intuitive interface with rich content, offering users a curated
          experience to delve into various topics surrounding the decentralized
          future.
        </p>

        <p>
          Whether you're a seasoned enthusiast or a curious learner, Glide
          empowers you to navigate the complex world of Web 3.0 and Crypto with
          ease, fostering a deeper understanding of the technologies shaping the
          future of the digital landscape. Elevate your learning experience and
          glide into the exciting realms of decentralized technologies with
          confidence and curiosity.
        </p>
      </div>
    </div>
  );
}
