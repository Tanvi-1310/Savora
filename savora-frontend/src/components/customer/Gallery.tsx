const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    title: "Fine Dining",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600",
    title: "Signature Dishes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
    title: "Luxury Interior",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600",
    title: "Desserts",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
    title: "Chef's Special",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
    title: "Outdoor Seating",
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Experience Savora
          </h2>

          <p className="mt-4 text-gray-500">
            Discover our elegant ambience, signature dishes,
            and unforgettable dining experience.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl shadow-md"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-5">

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;