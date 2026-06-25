import { Box } from "@mui/system";
import React from "react";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";

const bannerBoxSx = {
  position: "relative",
  width: "100%",
  borderRadius: "20px",
  overflow: "hidden",
  lineHeight: 0,
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "contain",
    borderRadius: "20px",
  },
};

const DiscountBanner = ({ bannerImage, isSmall }) => {
  return (
    <CustomContainer>
      <Box
        sx={{
          ...bannerBoxSx,
          marginBottom: isSmall ? "20px" : "40px",
          marginTop: isSmall ? "20px" : "45px",
        }}
      >
        <CustomImageContainer
          src={bannerImage}
          alt="banner"
          height="auto"
          width="100%"
          objectfit="contain"
          borderRadius="20px"
        />
      </Box>
    </CustomContainer>
  );
};

export default DiscountBanner;
