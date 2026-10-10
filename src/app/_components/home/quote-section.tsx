export default function QuoteSection() {
  return (
    <section className="flex flex-col justify-center items-center pb-28 gap-8 px-4 sm:px-6 md:px-8">
      <div className="border border-gray-primary p-6 w-full max-w-2xl relative">
        <p className="font-kufi-arabic text-lg sm:text-xl md:text-2xl font-medium text-center leading-relaxed">
          ...درد یا لذت کاری که انجام میدی نمیمونه اما افتخار یا شرمندگیش چرا
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="animate-bounce text-4xl sm:text-5xl md:text-6xl text-white">
          ↓
        </div>
        <p className="text-lg sm:text-xl font-bold text-primary">
          Scroll down
        </p>
      </div>
    </section>
  );
}
