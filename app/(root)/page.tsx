import Project from "@/components/cards/Project";
import TechLogo from "@/components/cards/TechLogo";
import LottieClientWrapper from "@/components/lotties/LottieClientWrapper";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center px-6 pb-6 pt-10 sm:px-14">
          <div className="flex flex-wrap md:flex-nowrap flex-1/2 justify-center items-center">
            <LottieClientWrapper />
            <p className="text-gray-500 text-wrap text-[28px] font-normal">I&apos;m here to support your business through web development, offering solutions and a commitment to <span className="font-bold text-7xl text-[#0d97c5]">Excellence</span></p>
          </div>
          <div className="flex-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/images/profile-photo.png"
                alt="Profile Photo"
                width={400}
                height={400}
                className="object-contain"
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[200px]">
        <div className="text-center space-y-3 px-6 sm:px-14">
          <p className="font-bold text-3xl text-[#0a2c42]">My Tech Stack</p>
          <p className="text-3xl text-gray-500">Technologies I&apos;ve been working with recently</p>

          <TechLogo />
        </div>
      </section>

      <section>
        <div className="text-center space-y-3 px-6 sm:px-14">
          <p className="font-bold text-3xl text-[#0a2c42]">Projects</p>
          <p className="text-3xl text-gray-500">Things I&apos;ve buid so far</p>

          <Project />
        </div>
      </section>
    </>
  );
}
