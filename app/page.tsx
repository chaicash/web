import Image from "next/image";
import ComparisonSection from "./components/ComparisonSection";

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-[family-name:var(--font-dm-sans)] overflow-x-hidden">
      <header className="flex items-center justify-between px-6 py-2 max-w-[1400px] mx-auto w-full z-50 relative">
        <div className="text-2xl font-bold text-black tracking-tight select-none">
          chai.cash
        </div>
        <nav className="flex gap-8 text-base font-medium">
          <a href="#" className="text-black hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="text-black hover:opacity-70 transition-opacity">Contact</a>
        </nav>
      </header>

      <main className="relative w-full max-w-[1800px] mx-auto pt-32 md:pt-28 pb-[520px]">
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 mx-auto">
          <h1 className="text-4xl md:text-[75px] font-bold text-[#5D4037] mb-4 leading-[1.05] tracking-tight max-w-3xl select-none animate-liquid-pop delay-100">
            Monetization made <br className="hidden md:block" /> simple for Indians.
          </h1>

          <p className="text-lg md:text-[20px] text-black/80 mb-10 max-w-xl font-normal leading-relaxed select-none animate-liquid-pop delay-200">
            Accept tips, offer memberships, and sell digital products to your audience
            with a fast, reliable, and creator-focused platform.
          </p>

          <button className="bg-[#6D4C41] text-white px-8 py-3.5 rounded-full text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md animate-liquid-pop delay-300">
            Start your page
          </button>
        </div>

        <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[4%] lg:left-[10%] xl:left-[14%] -rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left1.svg" alt="Autopay" width={260} height={260} className="drop-shadow-xl" />
          </div>

          <div className="absolute top-[45%] left-[1%] lg:left-[4%] xl:left-[8%] rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left2.svg" alt="You sent" width={260} height={260} className="drop-shadow-xl" />
          </div>

          <div className="absolute bottom-[10%] left-[4%] lg:left-[10%] xl:left-[14%] rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/left3.svg" alt="Kax" width={240} height={240} className="drop-shadow-xl" />
          </div>

          <div className="absolute top-[8%] right-[4%] lg:right-[10%] xl:right-[14%] rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right1.svg" alt="Donation" width={260} height={260} className="drop-shadow-xl" />
          </div>

          <div className="absolute top-[45%] right-[1%] lg:right-[4%] xl:right-[8%] -rotate-3 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right2.svg" alt="Goal" width={240} height={240} className="drop-shadow-xl" />
          </div>

          <div className="absolute bottom-[12%] right-[4%] lg:right-[10%] xl:right-[14%] -rotate-6 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image src="/right3.svg" alt="Unlock" width={240} height={240} className="drop-shadow-xl" />
          </div>

          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 z-30 hover:scale-105 transition-transform animate-pop-in-delayed">
            <Image
              src="/rectangle.svg"
              alt="Profile"
              width={800}
              height={500}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="md:hidden mt-12 grid grid-cols-1 gap-6 w-full max-w-sm px-4 mx-auto">
          <Image src="/left1.svg" alt="" width={240} height={180} className="mx-auto drop-shadow-lg" />
          <Image src="/right1.svg" alt="" width={240} height={180} className="mx-auto drop-shadow-lg" />
          <Image src="/rectangle.svg" alt="" width={320} height={200} className="mx-auto drop-shadow-lg" />
        </div>
      </main>

      <ComparisonSection />
    </div>
  );
}
