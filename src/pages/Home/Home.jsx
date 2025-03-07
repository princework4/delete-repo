import React from "react";
import ImageSlider from "../../components/Slider";
import "./Home.css";

const Home = () => {
  const showcaseImgs = [
    [
      "https://www.conradpune.com/wp-content/uploads/2023/09/13-1.jpg",
      "Elevate your Stay at Corad Pune, Address Mentioned Below.",
    ],
    [
      "https://www.conradpune.com/wp-content/uploads/2023/09/14-1.jpg",
      "Hotels in Pune that Redefine Luxury and Elegance.",
    ],
    [
      "https://www.conradpune.com/wp-content/uploads/2023/09/15.jpg",
      "Experience Delightful Luxury Retreats at the Hilton Conrad, Pune. Keywords - hilton conrad pune, conrad pune prices",
    ],
    [
      "https://www.conradpune.com/wp-content/uploads/2023/09/16.jpg",
      "Pamper Yourself at One of the best 5 Star Hotels in Pune.",
    ],
    [
      "https://www.conradpune.com/wp-content/uploads/2022/08/11-4.png",
      "Conrad Pune Hotel: The Best in Luxury Accomodations.",
    ],
  ];

  return (
    <main>
      <section className="showcase">
        <div className="wrapper">
          <ImageSlider
            slidesToShow={1}
            slidesToScroll={1}
            images={showcaseImgs}
            isCarousel={false}
          />
        </div>
      </section>
      <section className="left_right_showcase">
        <div className="wrapper">
          <div className="left_right_showcase__first">
            <div>
              <h3>Al Di La</h3>
              <p>
                Revel in the luxury of an outdoor rooftop bar at 72 meters above
                ground level at a 5 star hotel in Pune. With its hypnotizing and
                enthralling view of Pune city, Al Di La is a spectacular choice
                for sundowners, cocktail parties, and social gatherings. The
                upbeat music, sprightly drinks, and an array of exquisite
                Italian concoctions and curations highlight render it the
                perfect party spot in the city.
              </p>
            </div>
            <figure>
              <img
                src="https://www.conradpune.com/wp-content/uploads/2022/07/2-4.png"
                alt=""
              />
            </figure>
          </div>
          <div className="left_right_showcase__second">
            <figure>
              <img
                src="https://www.conradpune.com/wp-content/uploads/2022/07/1-4.png"
                alt=""
              />
            </figure>
            <div>
              <h3>Coriander Kitchen</h3>
              <p>
                An all-day restaurant that takes you on an invigorating journey
                of flavours ranging from traditional to contemporary. Coriander
                Kitchen is the quintessential choice for a subtle lunch with
                friends and elaborate dinners with family. Serving Indian, Asian
                and Mediterranean street food-inspired cuisine, the restaurant
                also offers an unparalleled brunch buffet on the weekends.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="drinks_and_dining">
        <div className="wrapper">
          <h2>Drinks & Dining</h2>
          <ImageSlider
            slidesToShow={3}
            slidesToScroll={1}
            images={showcaseImgs}
            isCarousel={true}
          />
        </div>
      </section>
      <section className="awards"></section>
      <section className="reviews"></section>
      <section className="map_and_address"></section>
    </main>
  );
};

export default Home;
