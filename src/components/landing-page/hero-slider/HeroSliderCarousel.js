import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCustom } from "styled-components/CustomStyles.style";

const HeroSliderCarousel = ({ imageUrls, sx }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <Box
      sx={{
        ...sx,
        "& .slick-slide img": {
          width: "100%",
          height: "auto",
          display: "block",
        },
        "& .slick-dots": {
          bottom: "16px",
        },
        "& .slick-dots li button:before": {
          fontSize: "10px",
          color: "#fff",
          opacity: 0.6,
        },
        "& .slick-dots li.slick-active button:before": {
          opacity: 1,
          color: "#fff",
        },
      }}
    >
      <SliderCustom>
        <Slider {...settings}>
          {imageUrls.map((src, index) => (
            <Box key={index}>
              <Box
                component="img"
                src={src}
                alt={`hero-slide-${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Box>
          ))}
        </Slider>
      </SliderCustom>
    </Box>
  );
};

export default HeroSliderCarousel;
