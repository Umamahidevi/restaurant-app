function Menu() {
  const menuItems = [
    { name: "Starters", price: "₹Starting at ₹200", img: "starters.jpg" },
    { name: "Main Courses", price: " Starting at ₹270", img: "biryani.jpg" },
    { name: " Naans&Breads", price: " Starting at ₹40", img: "buter naans.jpg" },
    {name: "Curries", price: "Starting at ₹180", img: "curries.avif" },
    { name: "Salads", price: " Starting at ₹100", img: "salads.avif" },
    { name: "Drinks", price: " Starting at ₹120", img: "mocktails.jpg" },
    { name: " Pizzas", price: " Starting at ₹150", img: "pizza.avif" },
    { name: "Tandoori Items", price: " Starting at ₹150", img: "tandoori.avif" },
    
  ];

  return (
    <section id="menu" className="services">
      <h2 data-aos="fade-up">Our Menu</h2>
      <p className="services-subtext">Explore our delicious offerings</p>

      <div className="services-grid">
        {menuItems.map((item, index) => (
          <div className="service-card" key={index} data-aos="zoom-in">
            <img src={item.img} alt={item.name} />
            <div className="service-content">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button className="btn-red small-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;