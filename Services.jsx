function Services() {
  const services = [
    {
      title: "Starters",
      desc: "Strategic consulting and technical advisory support to help clients make informed engineering decisions.",
      img: "starters.jpg"
    },
    {
      title: "Main Courses",
      desc: "Comprehensive project planning including feasibility studies, budgeting, scheduling, and risk management.",
      img: "biryani.jpg"
    },
   
    {
      title: "Naans & Breads",
      desc: "Precise structural and architectural detailing using advanced engineering tools and standards.",
      img: "buter naans.jpg"
    },
    {
      title: "Drinks",
      desc: "Optimizing project value by improving efficiency while reducing overall project costs.",
      img: "mocktails.jpg"
    }
  ];

  return (
    <section id="services" className="services">
      <h2 data-aos="fade-up">Our Services</h2>
      <p className="services-subtext" data-aos="fade-up">
        We provide a comprehensive range of engineering and consultancy services
        tailored to meet modern infrastructure demands.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-aos="zoom-in">
            <img src={service.img} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
   <button
  className="btn-red small-btn"
  onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }
>
  Learn More
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;