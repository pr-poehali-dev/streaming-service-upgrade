import { useState } from "react";

const CONTACT_URL = "https://functions.poehali.dev/9d05787e-9520-436e-ad41-fcf6cf7dee07";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-neutral-100 px-6 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Заявка</h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-10 leading-tight">
          Получить прайс<br />или задать вопрос
        </h2>

        {status === "success" ? (
          <div className="bg-white border border-neutral-200 p-8 text-center">
            <p className="text-xl font-semibold text-neutral-900 mb-2">Заявка принята!</p>
            <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm underline text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя *"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              value={form.phone}
              onChange={handleChange}
              required
              className="bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Комментарий (фракция, объём, адрес доставки)"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
            />
            {status === "error" && (
              <p className="text-red-500 text-sm">Ошибка при отправке. Попробуйте ещё раз.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white border border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 w-fit"
            >
              {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
