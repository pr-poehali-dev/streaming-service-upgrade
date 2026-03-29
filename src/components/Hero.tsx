import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <img
          src="https://cdn.poehali.dev/projects/05316209-5a4e-466b-826d-0ef97cbd83de/bucket/71df3769-bab5-47e2-9893-fc1ab2007fa6.jpg"
          alt="Башкирская гранитная компания"
          className="mx-auto mb-6 w-36 md:w-52 lg:w-56 object-contain drop-shadow-2xl"
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ГРАНИТНЫЙ<br />ЩЕБЕНЬ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Прочность миллионов лет в каждом кубометре. Поставляем щебень фракций 5–20, 20–40, 40–70 мм прямо с карьера.
        </p>
        <a href="#contact" className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300">
          Получить прайс
        </a>
      </div>
    </div>
  );
}