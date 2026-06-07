import { Syringe, Activity, Stethoscope, Moon, ShieldCheck, Sparkles } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-warm py-[1.1rem] px-[5%] flex items-center justify-center gap-[3rem] flex-wrap rv">
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <Syringe size={14} className="text-gold" /> <strong className="text-mid font-semibold">IV Therapy</strong> at home
      </div>
      <div className="w-[1px] h-[20px] bg-parch"></div>
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <Activity size={14} className="text-gold" /> <strong className="text-mid font-semibold">Pilates & Yoga</strong> delivered
      </div>
      <div className="w-[1px] h-[20px] bg-parch hidden sm:block"></div>
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <Stethoscope size={14} className="text-gold" /> <strong className="text-mid font-semibold">Concierge medicine</strong> house calls
      </div>
      <div className="w-[1px] h-[20px] bg-parch hidden md:block"></div>
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <Moon size={14} className="text-gold" /> <strong className="text-mid font-semibold">After-hours</strong> availability
      </div>
      <div className="w-[1px] h-[20px] bg-parch hidden lg:block"></div>
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <ShieldCheck size={14} className="text-gold" /> <strong className="text-mid font-semibold">7-layer</strong> safety system
      </div>
      <div className="w-[1px] h-[20px] bg-parch hidden xl:block"></div>
      <div className="flex items-center gap-[0.55rem] text-[0.8rem] text-muted whitespace-nowrap">
        <Sparkles size={14} className="text-gold" /> <strong className="text-mid font-semibold">Inner Circle</strong> retreats & events
      </div>
    </div>
  );
}
