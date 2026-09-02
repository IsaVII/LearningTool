import Reveal from "./components/motion/Reveal";

function FeatureGrid({ items }) {
  return (
    <div className="stagger-children grid grid-cols-2 gap-8">
      {items.map((item, i) => (
        <Reveal key={item.id} index={i % 4} direction="up">
          <div className="card">{item.title}</div>
        </Reveal>
      ))}
    </div>
  );
}
