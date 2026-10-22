import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Instagram,
  Flame,
  Salad,
  IceCream,
  Utensils,
  ArrowDownRight,
} from "lucide-react";
import f01 from "@/assets/foto-01.jpg";
import f02 from "@/assets/foto-02.jpg";
import f03 from "@/assets/foto-03.jpg";
import f04 from "@/assets/foto-04.jpg";
import f05 from "@/assets/foto-05.jpg";
import f07 from "@/assets/foto-07.jpg";
import heroImage from "@/assets/churrasco-espeto.jpg";

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
      {
        name: "description",
        content:
          "Churrasco, buffet completo, saladas e sobremesas no Terraço Gaúcho Grill, Jardim Daniela, Monte Mor - SP.",
      },
      { property: "og:title", content: "Terraço Gaúcho Grill | Churrascaria em Monte Mor" },
      {
        property: "og:description",
        content: "Churrasco, buffet completo e sobremesas em Monte Mor - SP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Flame,
    title: "Churrasco na brasa",
    text: "Carnes selecionadas preparadas no ponto certo.",
  },
  { icon: Utensils, title: "Buffet completo", text: "Pratos quentes variados todos os dias." },
  { icon: Salad, title: "Saladas frescas", text: "Bufê de saladas, legumes e queijos." },
  { icon: IceCream, title: "Sobremesas", text: "Pudim, mousses e doces caseiros." },
];

function Index() {
  return (
    <main>
      <header className="site-header">
        <div className="site-nav">
          <a href="#topo" className="site-brand" aria-label="Terraço Gaúcho Grill, início">
            <span className="brand-mark">TG</span>
            <span>
              <span className="brand-name">
                TERRAÇO <span>GAÚCHO</span>
              </span>
              <span className="brand-caption">GRILL · MONTE MOR</span>
            </span>
          </a>
          <nav className="site-links" aria-label="Navegação principal">
            <a href="#experiencia">A casa</a>
            <a href="#sabores">Sabores</a>
            <a href="#visite">Onde estamos</a>
          </nav>
          <a href={MAPS} target="_blank" rel="noreferrer" className="nav-cta">
            <MapPin className="h-4 w-4" /> Como chegar
          </a>
        </div>
      </header>

      <section id="topo" className="hero-section">
        <img
          src={heroImage}
          alt="Carnes e legumes assados em espetos na brasa"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span /> Churrascaria em Monte Mor
          </p>
          <h1 className="hero-title">
            O verdadeiro
            <br />
            <span>sabor da brasa.</span>
          </h1>
          <p className="hero-description">
            Carnes no espeto, buffet completo e aquele jeito gaúcho de receber. Sua próxima boa
            lembrança começa à mesa.
          </p>
          <div className="hero-actions">
            <a href={MAPS} target="_blank" rel="noreferrer" className="button-primary">
              <MapPin className="h-5 w-5" /> Venha nos visitar
            </a>
            <a href="#sabores" className="button-outline">
              Conheça a casa <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
          <div className="hero-notes" aria-label="Destaques">
            <span>
              <i /> Churrasco na brasa
            </span>
            <span>
              <i /> Buffet variado
            </span>
            <span>
              <i /> Monte Mor · SP
            </span>
          </div>
        </div>
        <a href="#experiencia" className="hero-scroll" aria-label="Rolar para conhecer a casa">
          <span>DESCUBRA</span>
          <ArrowDownRight className="h-4 w-4" />
        </a>
      </section>

      <section id="experiencia" className="highlights-section">
        <div className="section-kicker">FEITO PARA SENTAR E APROVEITAR</div>
        <div className="highlights-grid">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="highlight-card">
              <span className="highlight-number">0{index + 1}</span>
              <Icon className="highlight-icon" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sabores" className="gallery-section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="gallery-heading">
            <div>
              <p className="section-kicker">DA BRASA PARA A MESA</p>
              <h2>Nossos sabores</h2>
            </div>
            <p>
              Uma mesa farta, ingredientes frescos e o prazer de comer bem. Veja um pouco do que
              espera por você.
            </p>
          </div>
          <div className="gallery-grid">
            {[
              [f03, "Buffet de pratos quentes"],
              [f05, "Bufê de saladas frescas"],
              [f04, "Acompanhamentos preparados com cuidado"],
              [f07, "Sobremesas caseiras"],
              [f02, "Massas servidas no buffet"],
              [f01, "Fachada do Terraço Gaúcho Grill"],
            ].map(([img, alt], index) => (
              <figure key={alt} className={`gallery-item gallery-item-${index + 1}`}>
                <img src={img} alt={alt} loading="lazy" />
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visite" className="visit-section">
        <div className="visit-copy">
          <p className="section-kicker">VAI SER UM PRAZER RECEBER VOCÊ</p>
          <h2>
            Uma boa mesa
            <br />
            <span>fica ainda melhor</span>
            <br />
            com você.
          </h2>
          <ul className="visit-details">
            <li>
              <MapPin />
              <a href={MAPS} target="_blank" rel="noreferrer">
                {ADDRESS}
              </a>
            </li>
            <li>
              <Phone />
              <a href={TEL}>{PHONE}</a>
            </li>
            <li>
              <Instagram />
              <a href={INSTA} target="_blank" rel="noreferrer">
                @terracogauchogrilloficial
              </a>
            </li>
          </ul>
          <a href={MAPS} target="_blank" rel="noreferrer" className="button-primary visit-button">
            Abrir no Google Maps <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa Terraço Gaúcho Grill"
            src="https://maps.google.com/maps?q=-22.919823,-47.2496998&z=17&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="site-footer">
        <a href="#topo" className="footer-brand">
          TERRAÇO <span>GAÚCHO</span> GRILL
        </a>
        <span>© {new Date().getFullYear()} Terraço Gaúcho Grill · Monte Mor - SP</span>
        <a href={INSTA} target="_blank" rel="noreferrer">
          Siga no Instagram <ArrowDownRight className="h-4 w-4" />
        </a>
      </footer>
    </main>
  );
}
