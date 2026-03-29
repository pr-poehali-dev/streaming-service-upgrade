const fractions = [
  { id: "frac1", label: "Щебень 4–8 мм", tag: "Мелкий" },
  { id: "frac2", label: "Щебень 5–20 мм", tag: "Универсальный" },
  { id: "frac3", label: "Щебень 8–11 мм", tag: "Мелкий" },
  { id: "frac4", label: "Щебень 8–16 мм", tag: "Средний" },
  { id: "frac5", label: "Щебень 11,2–16 мм", tag: "Средний" },
  { id: "frac6", label: "Щебень 16–22 мм", tag: "Средний" },
  { id: "frac7", label: "Щебень 16–31 мм", tag: "Средний" },
  { id: "frac8", label: "Щебень 20–40 мм", tag: "Крупный" },
  { id: "frac9", label: "Щебень 40–70 мм", tag: "Крупный" },
  { id: "frac10", label: "Щебень 70–120 мм", tag: "Крупный" },
  { id: "frac11", label: "Щебень 70–150 мм", tag: "Крупный" },
  { id: "frac12", label: "Щебень 100–150 мм", tag: "Крупный" },
  { id: "frac13", label: "ЩПС 0–20 мм", tag: "Смесь" },
  { id: "frac14", label: "ЩПС 0–80 мм", tag: "Смесь" },
  { id: "frac15", label: "Отсев 0–4 мм", tag: "Отсев" },
  { id: "frac16", label: "Отсев 0–5 мм", tag: "Отсев" },
];

const tagColors: Record<string, string> = {
  "Мелкий": "bg-stone-100 text-stone-600",
  "Универсальный": "bg-neutral-100 text-neutral-600",
  "Средний": "bg-zinc-100 text-zinc-600",
  "Крупный": "bg-gray-100 text-gray-700",
  "Смесь": "bg-slate-100 text-slate-600",
  "Отсев": "bg-neutral-200 text-neutral-500",
};

export default function Catalog() {
  return (
    <section id="catalog" className="bg-white px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Продукция</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Все фракции<br />в наличии
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-200">
          {fractions.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white p-6 flex flex-col justify-between min-h-[140px] hover:bg-neutral-50 transition-colors duration-200"
            >
              <div>
                <span className={`inline-block text-xs uppercase tracking-wide px-2 py-0.5 rounded mb-3 ${tagColors[item.tag]}`}>
                  {item.tag}
                </span>
                <p className="text-lg font-semibold text-neutral-900 leading-tight">{item.label}</p>
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
