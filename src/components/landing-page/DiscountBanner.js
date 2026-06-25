import { Box } from "@mui/system";
import React from "react";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";

const bannerBoxSx = {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 1",
  minHeight: { xs: "200px", sm: "260px", md: "340px" },
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
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
          height="100%"
          width="100%"
          objectfit="cover"
          borderRadius="20px"
        />
      </Box>
    </CustomContainer>
  );
};

export default DiscountBanner;
