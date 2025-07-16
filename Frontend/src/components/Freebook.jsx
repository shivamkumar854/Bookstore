import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Adjusted for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <div className="mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl pb-2">
          Free Offered Courses
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore a wide range of free courses to enhance your skills and
          knowledge across different subjects.
        </p>
      </div>

      <Slider {...settings}>
        {book.map((item) => (
          <div key={item.id} className="px-2">
            {/* force each slide to take 100% width of its slot */}
            <div className="w-full">
              <Cards item={item} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
