import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { ImageContainer } from "../Registration";
import CustomImageContainer from "components/CustomImageContainer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QRCodeClient from "../QRCodeClients";
import { t } from "i18next";
import AppLinks from "components/footer/footer-middle/AppLinks";
import DollarSignHighlighter from "components/DollarSignHighlighter";
import Link from "next/link";
import { alpha } from "@mui/system";

interface DeliveryManAppDownloadProps {
  deliveryManApp?: any;
}

const DeliveryManAppDownload: React.FC<DeliveryManAppDownloadProps> = ({
  deliveryManApp,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: "16px", md: "30px" },
        boxShadow: "0px 8px 15px 0px #1C1E2008, 0px 0px 2px 0px #1C1E2014",
        borderRadius: "12px",
        background: (theme) => theme.palette.neutral[100],
        width: "100%",
        my: { xs: ".5rem", md: "1rem" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Download — left */}
        <Grid item xs={12} md={5} sx={{ order: { xs: 3, md: 1 } }}>
          <Box
            sx={{
              maxWidth: "470px",
              margin: { xs: "0 auto", md: "0 auto 0 0" },
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
                      deliveryManApp?.download_dm_app_links?.playstore_url_status ===
                      1
                        ? deliveryManApp?.download_dm_app_links?.playstore_url
                        : null
                    }
                    appStoreLink={
                      deliveryManApp?.download_dm_app_links
                        ?.apple_store_url_status === 1
                        ? deliveryManApp?.download_dm_app_links?.apple_store_url
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
                  {deliveryManApp?.download_dm_app_button_title ??
                    t("Download the Driver App")}
                </Typography>

                <Typography
                  mb="1rem"
                  color={theme.palette.neutral[500]}
                  fontSize="14px"
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  {deliveryManApp?.download_dm_app_button_sub_title ??
                    t("Smart shopping starts here.")}
                </Typography>

                <AppLinks
                  landingPageData={{
                    app_store_link:
                      deliveryManApp?.download_dm_app_links?.apple_store_url,
                    play_store_link:
                      deliveryManApp?.download_dm_app_links?.playstore_url,
                    app_status:
                      deliveryManApp?.download_dm_app_links?.apple_store_url_status,
                    play_status:
                      deliveryManApp?.download_dm_app_links?.playstore_url_status,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Text + image — right */}
        <Grid
          container
          item
          xs={12}
          md={7}
          spacing={3}
          alignItems="center"
          sx={{ order: { xs: 1, md: 2 }, flexWrap: { md: "nowrap" } }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            sx={{
              textAlign: { xs: "center", md: "left" },
              minWidth: 0,
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant="h4"
              fontSize={{ xs: "18px", md: "28px" }}
              sx={{ fontWeight: "600" }}
            >
              <DollarSignHighlighter
                text={deliveryManApp?.download_dm_app_title}
                theme={theme}
              />
            </Typography>

            <Typography
              fontSize={{ xs: "14px", md: "16px" }}
              color={theme.palette.neutral[600]}
              my=".8rem"
              textAlign={{ xs: "center", md: "left" }}
              dangerouslySetInnerHTML={{
                __html: deliveryManApp?.download_dm_app_sub_title ?? "",
              }}
            />

            <Link
              href={{ pathname: "/deliveryman-registration" }}
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
                {deliveryManApp?.download_dm_app_content_button_title ||
                  "Start Earning"}
                <ArrowForwardIcon sx={{ ml: 1, fontSize: "20px" }} />
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              order: { xs: 1, md: 2 },
            }}
          >
            <ImageContainer>
              <CustomImageContainer
                src={deliveryManApp?.download_dm_app_image_full_url}
                alt="delivery man"
                width="100%"
                height="100%"
                objectfit="contain"
                borderRadius="16px"
              />
            </ImageContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryManAppDownload;
