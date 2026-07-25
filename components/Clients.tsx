const clients = [
  "Cairn Supply Co.",
  "Loam & Ridge",
  "Kestrel Bikes",
  "Fieldnote Paper",
  "Alta Verde",
  "Summit & Sons",
];

export default function Clients() {
  return (
    <section className="clients section" aria-label="Brands we have worked with">
      <div className="container clients-inner">
        <p className="clients-label">On the rope with us</p>
        <ul className="clients-list">
          {clients.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
