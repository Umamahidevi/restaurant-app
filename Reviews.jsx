function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      text: "Amazing food and great ambiance!",
    },
    {
      name: "Sneha",
      text: "Best biryani in town. Highly recommend!",
    },
    {
      name: "Arjun",
      text: "Loved the service and taste!",
    }
  ];

  return (
    <section id="reviews" className="services">
      <h2 data-aos="fade-up">Customer Reviews</h2>

      <div className="services-grid">
        {reviews.map((review, index) => (
          <div className="service-card" key={index} data-aos="zoom-in">
            <div className="service-content">
              <h3>{review.name}</h3>
              <p>"{review.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;