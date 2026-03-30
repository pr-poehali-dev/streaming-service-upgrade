import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute top-12 right-6 z-10 text-right">
        <h3 className="text-white uppercase text-sm md:text-base lg:text-lg tracking-widest">
          Доставка по всей России
        </h3>
        <a href="tel:+79871372409" className="block text-white/80 hover:text-white text-sm mt-1 tracking-wide transition-colors">+7 987 137-24-09</a>
        <a href="tel:+79272327900" className="block text-white/80 hover:text-white text-sm mt-0.5 tracking-wide transition-colors">+7 927 232-79-00</a>
      </div>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 leading-tight">
        Работаем с крупными подрядчиками, дорожными компаниями и частными застройщиками. Отгрузка от 5 вагонов, собственный парк техники.
      </p>
    </div>
  );
}