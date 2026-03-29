const items = [
  { id: "g1", label: "Памятник одиночный", desc: "Вертикальная стела, полировка с двух сторон", tag: "Памятники" },
  { id: "g2", label: "Памятник двойной", desc: "Горизонтальная плита для двух захоронений", tag: "Памятники" },
  { id: "g3", label: "Надгробная плита", desc: "Горизонтальное надгробие, любые размеры", tag: "Памятники" },
  { id: "g4", label: "Столешница", desc: "Кухонная или барная, толщина 20–30 мм", tag: "Интерьер" },
  { id: "g5", label: "Подоконник", desc: "Полировка, термообработка, любой цвет гранита", tag: "Интерьер" },
  { id: "g6", label: "Ступени", desc: "Для лестниц, крыльца, уличные и интерьерные", tag: "Интерьер" },
  { id: "g7", label: "Плитка полированная", desc: "Для пола и стен, форматы 300×300 — 600×600 мм", tag: "Интерьер" },
  { id: "g8", label: "Брусчатка", desc: "Мощение дорожек, площадей, парковок", tag: "Благоустройство" },
  { id: "g9", label: "Бордюр гранитный", desc: "Дорожный и садовый, длина 500–1000 мм", tag: "Благоустройство" },
  { id: "g10", label: "Поребрик", desc: "Разделитель зон, парков, газонов", tag: "Благоустройство" },
  { id: "g11", label: "Шаровая опора", desc: "Декоративные шары для въезда и парков", tag: "Благоустройство" },
  { id: "g12", label: "Облицовочная плита", desc: "Фасады, цоколи, колонны — любой размер", tag: "Фасад" },
];

const tagColors: Record<string, string> = {
  "Памятники": "bg-stone-100 text-stone-600",
  "Интерьер": "bg-zinc-100 text-zinc-600",
  "Благоустройство": "bg-neutral-100 text-neutral-600",
  "Фасад": "bg-slate-100 text-slate-600",
};

export default function GraniteCatalog() {
  return (
    <section id="granite-products" className="bg-neutral-50 px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Изделия из гранита</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Гранитные изделия<br />под заказ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-200">
          {items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white p-6 flex flex-col justify-between min-h-[160px] hover:bg-neutral-50 transition-colors duration-200"
            >
              <div>
                <span className={`inline-block text-xs uppercase tracking-wide px-2 py-0.5 rounded mb-3 ${tagColors[item.tag]}`}>
                  {item.tag}
                </span>
                <p className="text-lg font-semibold text-neutral-900 leading-tight mb-2">{item.label}</p>
                <p className="text-sm text-neutral-500 leading-snug">{item.desc}</p>
              </div>
              <a
                href="#contact"
                className="mt-4 text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 uppercase tracking-wide"
              >
                Запросить цену →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
