export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Продукция</h3>
                <a href="#frac1" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 4–8 мм</a>
                <a href="#frac2" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 5–20 мм</a>
                <a href="#frac3" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 8–11 мм</a>
                <a href="#frac4" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 8–16 мм</a>
                <a href="#frac5" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 11,2–16 мм</a>
                <a href="#frac6" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 16–22 мм</a>
                <a href="#frac7" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 16–31 мм</a>
                <a href="#frac8" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 20–40 мм</a>
                <a href="#frac9" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 40–70 мм</a>
                <a href="#frac10" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 70–120 мм</a>
                <a href="#frac11" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 70–150 мм</a>
                <a href="#frac12" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Щебень 100–150 мм</a>
                <a href="#frac13" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">ЩПС 0–20 мм</a>
                <a href="#frac14" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">ЩПС 0–80 мм</a>
                <a href="#frac15" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Отсев 0–4 мм</a>
                <a href="#frac16" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Отсев 0–5 мм</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="#order"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Заказать
                </a>
                <a
                  href="#docs"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Сертификаты
                </a>
                <a
                  href="#delivery"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Доставка
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ГРАНИТ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Мансуровское месторождение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}