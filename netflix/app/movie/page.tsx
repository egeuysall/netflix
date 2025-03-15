import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Open() {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-neutral-900 font-semibold flex-col gap-8 ${montserrat.className}`}
    >
      <h1 className="text-white text-2xl">Who's watching?</h1>
      <div className="flex gap-6">
        <div className="flex gap-8 flex-col md:flex-row">
        </div>
      </div>
    </div>
  );
}
