import { Box } from "@mui/material";
import NextImage from "components/NextImage";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCustom } from "styled-components/CustomStyles.style";

const HeroSlider = ({ slides }) => {
  const imageUrls = slides
    ?.map((slide) => slide?.image_full_url)
    .filter(Boolean);

  if (!imageUrls?.length) {
    return null;
  }

  const settings = {
    dots: true,
    arrows: imageUrls.length > 1,
    infinite: imageUrls.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: imageUrls.length > 1,
    speed: 800,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        marginLeft: "calc(50% - 50vw)",
        position: "relative",
        overflow: "hidden",
        "& .slick-slider, & .slick-list, & .slick-track, & .slick-slide > div": {
          height: "80vh",
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
      <SliderCustom sx={{ height: "100%" }}>
        <Slider {...settings}>
          {imageUrls.map((src, index) => (
            <Box key={index} sx={{ width: "100%", height: "80vh" }}>
              <NextImage
                src={src}
                alt={`hero-slide-${index + 1}`}
                height={800}
                width={1000}
                objectFit="cover"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Slider>
      </SliderCustom>
    </Box>
  );
};

export default HeroSlider;
