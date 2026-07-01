import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const HeroSliderCarousel = dynamic(() => import("./HeroSliderCarousel"), {
  ssr: false,
});

const heroSliderSx = {
  width: "100vw",
  maxWidth: "100vw",
  height: "80vh",
  marginLeft: "calc(50% - 50vw)",
  position: "relative",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
};

const HeroSlider = ({ slides }) => {
  const imageUrls = slides
    ?.map((slide) => slide?.image_full_url)
    .filter(Boolean);

  if (!imageUrls?.length) {
    return null;
  }

  if (imageUrls.length === 1) {
    return (
      <Box sx={heroSliderSx}>
        <Box
          component="img"
          src={imageUrls[0]}
          alt="hero-slide-1"
          loading="eager"
        />
      </Box>
    );
  }

  return <HeroSliderCarousel imageUrls={imageUrls} sx={heroSliderSx} />;
};

export default HeroSlider;
