import { Stack, alpha } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import {
  CustomStackFullWidth,
  SliderCustom,
} from "styled-components/CustomStyles.style";
import CustomContainer from "../container";
import NextImage from "components/NextImage";

const promoSquareSx = {
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "620px",
  "img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "24px",
  },
  "@media (min-width: 1000px)": {
    width: "590px",
    minHeight: "550px",
  },
};

const Banners = ({ promotionalBanner, isSmall, feature }) => {
  const infiniteManage = () => {
    if (isSmall) {
      if (promotionalBanner?.length === 1) {
        return false;
      } else {
        return true;
      }
    } else {
      if (promotionalBanner?.length > 3) {
        return true;
      } else {
        return false;
      }
    }
  };

  const slidesToShowManage = () => {
    if (isSmall) {
      return 1;
    } else {
      if (promotionalBanner?.length > 2) {
        return 2;
      } else if (promotionalBanner?.length === 2) {
        return 2;
      } else {
        return 1;
      }
    }
  };

  const promoBoxSx = (theme) => ({
    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
    ...promoSquareSx,
  });

  const twoItemManage = () => {
    return (
      <CustomStackFullWidth
        justifyContent="center"
        flexDirection="row"
        gap="20px"
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
      >
        {promotionalBanner?.map((item, index) => {
          return (
            <Box
              key={index}
              sx={(theme) => ({
                ...promoBoxSx(theme),
                flex: { md: "1 1 0" },
                width: { xs: "100%", md: "calc(50% - 10px)" },
                maxWidth: { xs: "100%", md: "620px" },
              })}
            >
              <NextImage
                src={item}
                alt="banners"
                height={550}
                width={590}
                objectFit="cover"
                borderRadius="24px"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          );
        })}
      </CustomStackFullWidth>
    );
  };

  const sliderManage = () => {
    return (
      <SliderCustom
        sx={{
          "& .slick-slider": {
            "& .slick-slide": {
              padding: "0 10px",
              "img": {
                width: "100%",
              },
            },
          },
        }}
      >
        <Slider {...settings}>
          {promotionalBanner?.map((item, index) => {
            return (
              <Box key={index} sx={(theme) => promoBoxSx(theme)}>
                <NextImage
                  src={item}
                  alt="banners"
                  height={550}
                  width={590}
                  objectFit="cover"
                  borderRadius="24px"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            );
          })}
        </Slider>
      </SliderCustom>
    );
  };

  const settings = {
    dots: false,
    infinite: infiniteManage(),
    slidesToShow: slidesToShowManage(),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const singleImageManage = () => {
    return (
      <Stack alignItems="center">
        <Box
          sx={(theme) => ({
            ...promoBoxSx(theme),
            maxWidth: { xs: "100%", md: "620px" },
          })}
        >
          <NextImage
            src={promotionalBanner[0]?.img}
            alt="banners"
            height={550}
            width={590}
            objectFit="cover"
            borderRadius="24px"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    );
  };

  const handleContent = () => {
    if (isSmall) {
      if (promotionalBanner?.length === 1) {
        return <>{singleImageManage()}</>;
      } else {
        return <>{sliderManage()}</>;
      }
    } else {
      if (promotionalBanner?.length === 1) {
        return <>{singleImageManage()}</>;
      } else if (promotionalBanner?.length === 2) {
        return <>{twoItemManage()}</>;
      } else {
        return <>{sliderManage()}</>;
      }
    }
  };

  return (
    <CustomContainer>
      <Stack sx={{ marginY: isSmall ? "22px" : "40px" }}>
        {handleContent()}
      </Stack>
    </CustomContainer>
  );
};

export default Banners;
