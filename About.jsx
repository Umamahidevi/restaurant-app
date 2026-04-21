function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-images" data-aos="fade-right">
          <img src="INTERIOR.jpg" alt="" />
        </div>

        <div className="about-content" data-aos="fade-left">
          <h2>About Indian Restaurant</h2>
          <p>
            We are a family-owned and operated restaurant that has been serving
            delicious Indian cuisine for over 20 years.
          </p>
          <p>
            Our menu features a wide variety of traditional and modern Indian dishes,
            prepared with the finest ingredients and authentic spices.
          </p>
          <button className="btn-red">Learn More</button>
        </div>

      </div>
    </section>
  );
}
export default About;