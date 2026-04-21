function Offers() {
  const offers = [
    { title: "Weekend Special", desc: "Flat 20% off on all orders!" },
    { title: "Family Combo", desc: "Buy 3 meals, get 1 free!" },
    { title: "Happy Hours", desc: "Free drink with every meal (5–7 PM)" }
  ];

  return (
    <section id="offers" className="services">
      <h2 data-aos="fade-up">Special Offers</h2>

      <div className="services-grid">
        {offers.map((offer, index) => (
          <div className="service-card" key={index} data-aos="zoom-in">
            <div className="service-content">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <button className="btn-red small-btn">Grab Deal</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;