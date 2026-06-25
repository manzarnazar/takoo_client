import {
  Button,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { alpha, Box } from "@mui/system";
import CustomImageContainer from "../CustomImageContainer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QRCodeClient from "./QRCodeClients";
import { t } from "i18next";
import AppLinks from "components/footer/footer-middle/AppLinks";
import DollarSignHighlighter from "components/DollarSignHighlighter";
import Link from "next/link";
import { styled } from "@mui/material/styles";

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "440px",
  aspectRatio: "1",
  minHeight: "340px",
  flexShrink: 0,
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "360px",
    minHeight: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "280px",
    minHeight: "240px",
  },
}));

const Registration = ({
  seller_app_download_section,
  user_app_download_section,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: "20px", md: "40px" },
        minHeight: { md: "380px" },
        boxShadow:
          "0px 8px 15px 0px #1C1E2008, 0px 0px 2px 0px #1C1E2014",
        borderRadius: "12px",
        background: theme.palette.neutral[100],
        width: "100%",
        my: { xs: ".5rem", md: "1rem" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ flexWrap: { md: "nowrap" } }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <ImageContainer>
                <CustomImageContainer
                  src={
                    seller_app_download_section?.download_seller_app_image_full_url
                  }
                  alt="seller app"
                  width="100%"
                  height="100%"
                  objectfit="contain"
                  borderRadius="12px"
                />
              </ImageContainer>
            </Grid>

            <Grid
              item
              xs={12}
              sm={7}
              md={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
                minWidth: 0,
              }}
            >
              <Typography
                variant="h4"
                fontSize={{ xs: "18px", md: "28px" }}
                fontWeight="600"
              >
                <DollarSignHighlighter
                  text={seller_app_download_section?.download_seller_app_title}
                  theme={theme}
                />
              </Typography>

              <Typography my=".8rem" color={theme.palette.neutral[600]}>
                {seller_app_download_section?.download_seller_app_sub_title}
              </Typography>

              <Link
                href={{
                  pathname: "/store-registration",
                  query: { active: "active" },
                }}
                prefetch={false}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    padding: "8px 18px",
                    marginTop: ".5rem",
                  }}
                >
                  {seller_app_download_section?.download_seller_app_content_button_title ||
                    "Start Selling"}
                  <ArrowForwardIcon sx={{ ml: 1, fontSize: "20px" }} />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: "470px",
              margin: { xs: "0 auto", md: "0 0 0 auto" },
              p: { xs: "1rem", md: "1.2rem" },
              backgroundColor: alpha(theme.palette.neutral[200], 0.5),
              border: "1px solid",
              borderRadius: "1rem",
              borderColor: theme.palette.neutral[300],
            }}
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: theme.palette.neutral[100],
                    borderRadius: "12px",
                    gap: "8px",
                  }}
                >
                  <QRCodeClient
                    size={70}
                    playStoreLink={
                      seller_app_download_section?.download_seller_app_links
                        ?.playstore_url_status === 1
                        ? seller_app_download_section?.download_seller_app_links
                            ?.playstore_url
                        : null
                    }
                    appStoreLink={
                      seller_app_download_section?.download_seller_app_links
                        ?.apple_store_url_status === 1
                        ? seller_app_download_section?.download_seller_app_links
                            ?.apple_store_url
                        : null
                    }
                  />

                  <Typography
                    color={theme.palette.neutral[500]}
                    fontSize="13px"
                    textAlign="center"
                  >
                    {t("Scan to Download")}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={8} md={8}>
                <Typography
                  fontSize="18px"
                  fontWeight="600"
                  color={theme.palette.neutral[1000]}
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  {seller_app_download_section?.download_seller_app_links
                    ?.download_user_app_title ??
                    user_app_download_section?.download_user_app_button_title ??
                    t("Download the Customer App")}
                </Typography>

                <Typography
                  mb="1rem"
                  color={theme.palette.neutral[500]}
                  fontSize="14px"
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  {seller_app_download_section?.download_seller_app_links
                    ?.download_user_app_sub_title ??
                    user_app_download_section?.download_user_app_button_sub_title ??
                    t("Smart shopping starts here.")}
                </Typography>

                <AppLinks
                  landingPageData={{
                    app_store_link:
                      seller_app_download_section?.download_seller_app_links
                        ?.apple_store_url,
                    play_store_link:
                      seller_app_download_section?.download_seller_app_links
                        ?.playstore_url,
                    app_status:
                      seller_app_download_section?.download_seller_app_links
                        ?.apple_store_url_status,
                    play_status:
                      seller_app_download_section?.download_seller_app_links
                        ?.playstore_url_status,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registration;
