import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./globals.css";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-bl from-gray-900 to-slate-800">
      <div className="flex h-[110vh] w-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat opacity-75 blur-lg fade-b-[15vh]" />
      <div className="absolute top-0 flex h-[90vh] w-screen flex-col items-center justify-center gap-10 sm:h-[100vh]">
        <div className="h-auto w-auto">
          <p className="intersect-once pb-3 text-4xl font-bold text-white motion-duration-1500 intersect:motion-translate-y-in-150 intersect:motion-blur-in-md intersect:motion-opacity-in-0 sm:pb-5 sm:text-5xl md:text-7xl lg:text-8xl">
            Your Swim Stats
          </p>
          <div className="intersect-once flex h-20 items-center justify-center bg-[#282933] motion-duration-1500 intersect:motion-translate-y-in-150 intersect:motion-blur-in-md intersect:motion-opacity-in-0 sm:h-32 md:h-40">
            <p className="bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent sm:text-6xl md:text-8xl lg:text-9xl">
              Simplified
            </p>
          </div>
        </div>
        <Image
          className="intersect-once max-w-[3in] rounded-[56px] bg-gradient-to-b from-[#313131] to-[#141414] shadow-2xl motion-duration-1500 intersect:motion-translate-y-in-150 intersect:motion-blur-in-md intersect:motion-opacity-in-0 sm:max-w-[22%]"
          src="/transparenticon.png"
          width={500}
          height={500}
          alt="App Icon"
        />
        <a href="appstorebadge">
          <Image
            className="intersect-once motion-duration-1500 intersect:motion-translate-y-in-150 intersect:motion-blur-in-md intersect:motion-opacity-in-0"
            src="/appstorebadge2.svg"
            width={200}
            height={200}
            alt="App Store Badge"
          />
        </a>
      </div>
      <div className="h-auto w-[100%] flex-col justify-center justify-self-center pt-20 lg:w-[95%]">
        <div className="grid w-[90%] grid-flow-row grid-cols-1 gap-5 lg:grid-cols-2">
          <Image
            className="mr-36 w-[55%] justify-self-end rounded-[56px] shadow-2xl"
            src="/themespreview.png"
            width={600}
            height={600}
            alt="Themes Preview"
          />
          <div className="align-center flex w-full flex-col justify-center gap-6 p-3">
            <h1 className="text-7xl font-bold">Modern User Inteface</h1>
            <p className="text-xl">
              SwimFast features a sleek, modern user interface with a clean
              layout and intuitive navigation. The design prioritizes
              simplicity, using smooth animations and a streamlined color scheme
              to enhance user experience. Key metrics and progress tracking are
              presented in a visually appealing, easy-to-read format.{" "}
            </p>
          </div>
          <div className="align-center ml-36 flex w-full flex-col justify-center gap-6 p-3 text-right">
            <h1 className="justify-end text-7xl font-bold">Up-To-Date Times</h1>
            <p className="text-xl">
              SwimFast ensures you always have the most current swim times by
              pulling data from multiple reliable sources. Whether it&apos;s
              official meet results, personal bests, or recent splits, the app
              keeps everything up to date in one place. No more searching—just
              accurate, real-time updates at your fingertips.
            </p>
          </div>
          <Image
            className="w-[55%] justify-self-end rounded-[56px] shadow-2xl"
            src="/timespreview.png"
            width={600}
            height={600}
            alt="Times Preview"
          />
          <Image
            className="mr-36 w-[55%] justify-self-end rounded-[56px] shadow-2xl"
            src="/statspreview.png"
            width={600}
            height={600}
            alt="Stats Preview"
          />
          <div className="align-center flex w-full flex-col justify-center gap-6 p-3">
            <h1 className="text-7xl font-bold">Detailed Statistics</h1>
            <p className="text-xl">
              SwimFast gives you a complete overview of your performance by
              displaying all your time standards in one place. Easily track your
              best events, compare progress, and see where you stand across
              different levels. With clear insights, you can focus on what
              matters most—improving your swim times.
            </p>
          </div>
        </div>
        <h1 className="mt-20 text-center font-serif text-8xl font-bold leading-tight">
          So, why not dive in and see the difference for yourself?
        </h1>
        <a href="appstorebadge" className="mt-10 flex justify-center">
          <Image
            src="/appstorebadge2.svg"
            width={200}
            height={200}
            alt="App Store Badge"
          />
        </a>
      </div>
      <footer className="mt-20 bg-gray-800 py-6 text-center text-white">
        <div className="flex h-10 flex-row justify-center gap-10 align-middle text-gray-400">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
        <p>&copy; 2025 SwimFast. All rights reserved.</p>
      </footer>
    </div>
  );
}
