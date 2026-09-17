const posters = [
  {
    label: "NIGHT MARKET",
    title: "城市在午夜以后，才开始说真话。",
    tone: "violet",
    date: "09 / 27",
  },
  {
    label: "OPEN STUDIO",
    title: "让还没有名字的想法，先被看见。",
    tone: "coral",
    date: "10 / 04",
  },
  {
    label: "SLOW SUNDAY",
    title: "留一点空白，给下一次出发。",
    tone: "mint",
    date: "10 / 18",
  },
];

function PosterCard({ poster, index }) {
  return (
    <article className={`poster poster--${poster.tone}`}>
      <div className="poster__topline">
        <span>{poster.label}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="poster__orb" aria-hidden="true" />
      <h2>{poster.title}</h2>
      <div className="poster__footer">
        <span>POSTER LAB</span>
        <strong>{poster.date}</strong>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <header className="hero">
        <div>
          <p className="eyebrow">REACT · CONTAINER · LAZYCAT</p>
          <h1>Poster Lab</h1>
        </div>
        <p className="intro">
          一个小型 React 海报展，用来验证从 Docker 镜像更新到懒猫微服应用审核的完整自动化链路。
        </p>
      </header>

      <section className="poster-grid" aria-label="海报作品">
        {posters.map((poster, index) => (
          <PosterCard key={poster.label} poster={poster} index={index} />
        ))}
      </section>

      <footer>
        <span>Build once.</span>
        <span>Verify every release.</span>
        <span>Publish deliberately.</span>
      </footer>
    </main>
  );
}
