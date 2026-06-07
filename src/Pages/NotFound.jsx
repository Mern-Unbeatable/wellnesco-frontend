import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-[66px] min-h-[80vh] flex flex-col items-center justify-center bg-cream px-[5%] text-center">
      <div className="rv max-w-[600px] mx-auto">
        <div className="font-serif text-[clamp(6rem,15vw,12rem)] leading-none text-[rgba(154,114,72,0.15)] select-none mb-4 font-bold tracking-tight">
          404
        </div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em] mb-6">
          This page is <br className="md:hidden" />
          <i className="italic text-sage">currently unavailable.</i>
        </h1>
        <p className="text-[1.05rem] text-soft leading-[1.7] max-w-[460px] mx-auto mb-12">
          The wellness journey you are looking for seems to have taken a
          different path. This page may have been moved, removed, or never
          existed.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-[0.6rem] bg-deep text-white border-none rounded-full px-10 py-[1.1rem] font-sans text-[0.95rem] font-bold cursor-pointer transition duration-200 hover:bg-gold no-underline shadow-md hover:-translate-y-[2px]"
        >
          <ArrowLeft size={18} />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
