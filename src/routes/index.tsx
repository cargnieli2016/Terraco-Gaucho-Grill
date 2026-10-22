import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Flame, Salad, IceCream, Utensils } from "lucide-react";
import f01 from "@/assets/foto-01.webp.asset.json";
import f02 from "@/assets/foto-02.webp.asset.json";
import f03 from "@/assets/foto-03.webp.asset.json";
import f04 from "@/assets/foto-04.webp.asset.json";
import f05 from "@/assets/foto-05.webp.asset.json";
import f07 from "@/assets/foto-07.webp.asset.json";

const PHONE = "(19) 3879-5201";
const TEL = "tel:+551938795201";
const INSTA = "https://www.instagram.com/terracogauchogrilloficial/";
const ADDRESS = "R. Sete, 227 - Jardim Daniela, Monte Mor - SP, 13190-000";
const MAPS =
  "https://www.google.com/maps/place/Terra%C3%A7o+Ga%C3%BAcho+Grill/@-22.9199762,-47.2496412,19z/data=!4m6!3m5!1s0x94c89a34ac179a87:0x499ccea7c0cbf8cf!8m2!3d-22.919823!4d-47.2496998!16s%2Fg%2F11b776c37b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terraço Gaúcho Grill | Churrascaria em Monte Mor - SP" },
      { name: "description", content: "Churrasco, buffet completo, saladas e sobremesas no Terraço Gaúcho Grill, Jardim Daniela, Monte Mor - SP." },
      { property: "og:title", content: "Terraço Gaúcho Grill | Churrascaria em Monte Mor" },
      { property: "og:description", content: "Churrasco, buffet completo e sobremesas em Monte Mor - SP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Flame, title: "Churrasco na brasa", text: "Carnes selecionadas preparadas no ponto certo." },
  { icon: Utensils, title: "Buffet completo", text: "Pratos quentes variados todos os dias." },
  { icon: Salad, title: "Saladas frescas", text: "Bufê de saladas, legumes e queijos." },
  { icon: IceCream, title: "Sobremesas", text: "Pudim, mousses e doces caseiros." },
];

function Index() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-xl font-bold tracking-wide">
            Terraço <span className="text-primary">Gaúcho</span> Grill
          </span>
          <a href={TEL} className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground sm:flex">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-center">
        <img src={f01.url} alt="Fachada do Terraço Gaúcho Grill" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Churrascaria em Monte Mor</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            O sabor do churrasco gaúcho, do jeito que você merece.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Carnes na brasa, buffet completo, saladas frescas e sobremesas caseiras em um ambiente acolhedor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              <MapPin className="h-5 w-5" /> Como chegar
            </a>
            <a href={INSTA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-24 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-lg border bg-card p-6">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="bg-wine py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Nossa mesa</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-secondary-foreground/80">
            Um pouco do que espera por você no Terraço Gaúcho Grill.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              [f03, "Buffet de pratos quentes"],
              [f05, "Bufê de saladas"],
              [f04, "Batatas e acompanhamentos"],
              [f07, "Sobremesas caseiras"],
              [f02, "Massas"],
              [f01, "Nosso espaço"],
            ].map(([img, alt]) => (
              <figure key={alt as string} className="group overflow-hidden rounded-lg">
                <img src={(img as { url: string }).url} alt={alt as string} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">Venha nos visitar</h2>
          <ul className="mt-8 space-y-5 text-lg">
            <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /><a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-primary">{ADDRESS}</a></li>
            <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-primary" /><a href={TEL} className="hover:text-primary">{PHONE}</a></li>
            <li className="flex gap-3"><Instagram className="mt-1 h-5 w-5 shrink-0 text-primary" /><a href={INSTA} target="_blank" rel="noreferrer" className="hover:text-primary">@terracogauchogrilloficial</a></li>
          </ul>
        </div>
        <iframe
          title="Mapa Terraço Gaúcho Grill"
          src="https://maps.google.com/maps?q=-22.919823,-47.2496998&z=17&output=embed"
          className="h-80 w-full rounded-lg border"
          loading="lazy"
        />
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Terraço Gaúcho Grill · Monte Mor - SP
      </footer>
    </main>
  );
}
