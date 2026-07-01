import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { getHeroSliderSx } from "./heroSliderStyles";

const HeroSliderCarousel = dynamic(() => import("./HeroSliderCarousel"), {
  ssr: false,
});

const HeroSlider = ({ slides }) => {
  const heroSliderSx = getHeroSliderSx();

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
