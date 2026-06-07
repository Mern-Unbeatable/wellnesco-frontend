export default function Stats() {
  return (
    <div className="max-w-[1360px] mx-auto py-18 px-[5%] grid grid-cols-2 lg:grid-cols-4 gap-px bg-parch border-y border-parch">
      <div className="bg-white py-10 px-8 text-center rv">
        <div className="font-serif text-[3.2rem] font-normal text-deep leading-none">
          2,400+
        </div>
        <div className="text-[0.78rem] text-muted mt-[0.3rem]">
          Verified providers
        </div>
      </div>
      <div className="bg-white py-10 px-8 text-center rv d1">
        <div className="font-serif text-[3.2rem] font-normal text-deep leading-none">
          50K+
        </div>
        <div className="text-[0.78rem] text-muted mt-[0.3rem]">
          Sessions completed
        </div>
      </div>
      <div className="bg-white py-10 px-8 text-center rv d2">
        <div className="font-serif text-[3.2rem] font-normal text-deep leading-none">
          4.9 ★
        </div>
        <div className="text-[0.78rem] text-muted mt-[0.3rem]">
          Average rating
        </div>
      </div>
      <div className="bg-white py-10 px-8 text-center rv d3">
        <div className="font-serif text-[3.2rem] font-normal text-deep leading-none">
          24/7
        </div>
        <div className="text-[0.78rem] text-muted mt-[0.3rem]">Available</div>
      </div>
    </div>
  );
}
