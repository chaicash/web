import Image from "next/image";
import Comparison from "./components/Comparison";
import GuideVideo from "./components/GuideVideo";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-[family-name:var(--font-dm-sans)] overflow-x-hidden min-h-screen">
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-[1400px] mx-auto w-full z-50 relative">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight select-none">
          chai.cash
        </div>
        <nav className="flex gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base font-medium">
          <a href="#" className="text-black hover:opacity-70 transition-opacity whitespace-nowrap">About</a>
          <a href="#" className="text-black hover:opacity-70 transition-opacity whitespace-nowrap">Contact</a>
        </nav>
      </header>

      <main className="relative w-full max-w-[1800px] mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-32 sm:pb-40 md:pb-64 lg:pb-80 xl:pb-[520px]">
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[75px] font-bold text-[#5D4037] mb-3 sm:mb-4 md:mb-6 leading-[1.05] tracking-tight max-w-3xl select-none animate-liquid-pop delay-100">
            Monetization made <br className="hidden sm:block" /> simple for Indians.
          </h1>

          <p className="text-lg sm:text-lg md:text-xl lg:text-[20px] text-black/80 mb-6 sm:mb-8 md:mb-10 max-w-xl font-normal leading-relaxed select-none animate-liquid-pop delay-200 px-2 sm:px-0">
            Accept tips, offer memberships, and sell digital products to your audience
            with a fast, reliable, and creator-focused platform.
          </p>

          <button className="bg-[#6D4C41] text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-base sm:text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md animate-liquid-pop delay-300 active:scale-95">
            Start your page
          </button>
        </div>

        <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[4%] md:left-[6%] lg:left-[8%] xl:left-[14%] macbook-air-left-1 -rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left1.svg" alt="Autopay" width={260} height={260} className="drop-shadow-xl w-[180px] md:w-[200px] lg:w-[220px] xl:w-[260px]" />
          </div>

          <div className="absolute top-[45%] left-[1%] md:left-[2%] lg:left-[3%] xl:left-[8%] macbook-air-left-2 rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left2.svg" alt="You sent" width={260} height={260} className="drop-shadow-xl w-[180px] md:w-[200px] lg:w-[220px] xl:w-[260px]" />
          </div>

          <div className="absolute bottom-[10%] left-[4%] md:left-[6%] lg:left-[8%] xl:left-[14%] macbook-air-left-3 rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left3.svg" alt="Kax" width={240} height={240} className="drop-shadow-xl w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px]" />
          </div>

          <div className="absolute top-[8%] right-[4%] md:right-[6%] lg:right-[8%] xl:right-[14%] macbook-air-right-1 rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right1.svg" alt="Donation" width={260} height={260} className="drop-shadow-xl w-[180px] md:w-[200px] lg:w-[220px] xl:w-[260px]" />
          </div>

          <div className="absolute top-[45%] right-[1%] md:right-[2%] lg:right-[3%] xl:right-[8%] macbook-air-right-2 -rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right2.svg" alt="Goal" width={240} height={240} className="drop-shadow-xl w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px]" />
          </div>

          <div className="absolute bottom-[12%] right-[4%] md:right-[6%] lg:right-[8%] xl:right-[14%] macbook-air-right-3 -rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right3.svg" alt="Unlock" width={240} height={240} className="drop-shadow-xl w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px]" />
          </div>

          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 z-30 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image
              src="/rectangle.svg"
              alt="Profile"
              width={800}
              height={500}
              className="drop-shadow-2xl w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]"
            />
          </div>
        </div>
      </main>

      <Features />

      <Comparison />
      
      <GuideVideo />
      <Reviews />
      <Footer />
    </div>
  );
}
