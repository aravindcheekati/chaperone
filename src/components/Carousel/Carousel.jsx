const CarouselData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422197/image3_tj6611.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422197/image1_cuvdsu.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422198/image2_xqmirg.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422198/image4_qutdty.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422197/image3_tj6611.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dgpzptsuh/image/upload/v1729422197/image1_cuvdsu.png",
    description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
  }
];

import CarouselItem from "../CarouselItem/CarouselItem";

const Carousel = () => {
  return (
    <section>
      <h2>Nursery</h2>
      <div className="carousel-wrapper">
        {CarouselData.map((item, index) => (
          <CarouselItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
