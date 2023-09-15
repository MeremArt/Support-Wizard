import Image from "next/image";
import Faq from "@/components/Faq/Faq";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="dark:bg-zinc-800">
        <section>
          {/* hero container  */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* content container  */}
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-left dark:text-white">
                Unlock Customer Delight with
                <br /> <span className="text-wizard">Support Wizard's</span>
                <br /> Enchanting Messaging!
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-left tracking-wider  ">
                With Support Wizard, you can seamlessly track your visitors'
                real-time page views, their Knowledge Base searches, and website
                visits. Gain insight into their entire journey, identify team
                members who interacted with customers recently, and effortlessly
                maintain a comprehensive conversation history.
              </p>
              <div className="flex mx-auto lg:mx-0 space-x-2">
                <input
                  className="py-3 px-8 text-black text-center placeholder:text-sm  border-wizard border-2 rounded-full  placeholder:sm:text-left dark:bg-zinc-800 dark:text-white focus:outline-none "
                  placeholder="Enter your email..."
                />
                <button className=" py-3 px-8 text-white bg-wizard rounded-full text-transform: capitalize hover:opacity-70 duration-200">
                  Sign up free
                </button>
              </div>
            </div>
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <img
                className="hover:scale-105 duration-300"
                src="/images/cuate.png"
                alt="feature"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section>
          {/* How it works */}
          <div className="flex items-center justify-center mx-auto ">
            <h2 className="underline tracking-wide  decoration-wizard decoration-4 underline-offset-8   hover:decoration-4 text-4xl font-bold text-center text-black lg:text-4xl duration-200   dark:text-white ">
              How it works ?
            </h2>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* hero container  */}
          <div className="container flex flex-col mx-auto p-6 lg:flex-row">
            {/* content container  */}
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <img
                className="hover:scale-105 duration-300 "
                src="/images/pana.png"
                alt="feature"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-50">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-right dark:text-white">
                Fostering <span className="text-wizard"> Exceptional</span>{" "}
                Customer Experiences
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-right tracking-wider  ">
                Support Wizard envisions a world where you effortlessly see the
                pages your visitors explore in real-time, understand their
                quests within your Knowledge Base, and embrace their frequent
                returns to your website. We aspire to provide a panoramic view
                of their journey, ensuring you always know which team member
                last engaged with a customer and maintain a rich conversation
                history, fostering extraordinary customer experiences.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* hero container  */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* content container  */}
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-left dark:text-white">
                <span className="text-wizard">Pioneering </span>{" "}
                Customer-Centricity
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-left tracking-wider  ">
                Support Wizard envisions a digital landscape where your
                omnipresent presence is the lifeblood of the web. Our mission is
                to ensure you are seamlessly aligned with your customers,
                leaving no room for your competitors to claim the spotlight.
                Armed with Live Chat, Ticketing, a Knowledge Base, and optional
                video and voice add-ons, we empower you to be there for your
                customers, fulfilling their needs precisely when and where they
                need you most.
              </p>
            </div>
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <img
                className="hover:scale-105 duration-300"
                src="/images/rafiki.png"
                alt="feature"
              />
            </div>
          </div>
        </section>
        <br />
        <section>
          {/* hero container  */}
          <div
            className="container bg-cover bg-no-repeat py-24  flex flex-col mx-auto p-6 lg:flex-row"
            style={{ backgroundImage: `url('/images/bddesk.png')` }}
          >
            {/* content container  */}
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <img
                className="hover:scale-105 duration-300 "
                src="/images/computer.png"
                alt="feature"
              />
            </div>
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-50">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-right text-white">
                <span className="text-black">Orchestrating</span> a Symphony of
                Service
              </h1>
              <p className="text-xl text-center text-black lg:max-w-4xl lg:text-right tracking-wider lg:text-white  ">
                In our visionary world, the process of effortlessly tagging and
                assigning conversations to your esteemed team members is a
                seamless orchestration. Every customer query finds its way to
                the precise hands at precisely the right moment, forming a
                synchronized symphony of service.
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-cover bg-center h-screen py-10   bg-no-repeat "
          style={{ backgroundImage: `url('/images/diff.png')` }}
        >
          <div>
            <h2 className=" cta flex text-3xl lg:text-5xl items-center justify-center mt-0 lg:mt-32  mx-auto tracking-wide leading-relaxed lg:leading-normal">
              Transforming Website Visits into Sales <br /> and Customer
              Satisfaction <br /> into Business
              <br /> Success
            </h2>
            <div className="flex items-center justify-center mt-2 lg:mt-28 mx-auto lg:mx-0 space-x-2">
              <input
                className="py-3 px-8 text-black text-center placeholder:text-sm  border-wizard border-2 rounded-full  placeholder:sm:text-left dark:bg-none  focus:outline-none "
                placeholder="Enter your email..."
              />
              <button className=" py-3 px-8 text-white bg-wizard rounded-full text-transform: capitalize hover:opacity-70 duration-200">
                Sign up free
              </button>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="dark:bg-zinc-800 h-screen dark:text-white">
            <Faq className="mt-10" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
