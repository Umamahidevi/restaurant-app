function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay" data-aos="fade-up">
        <h1>Come Join Us for a Magical Dining Experience</h1>
        <p>When flavors meet culture, magic happens.</p>
        <div>
          <button 
  className="btn-red"
  onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
>
  View Menu
</button>

<button 
  className="btn-blue"
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
>
  Contact Us
</button>
        </div>
      </div>
    </section>
  );
}
export default Home;