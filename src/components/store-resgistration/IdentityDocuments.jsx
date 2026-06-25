import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import {
  CustomBoxFullWidth,
  CustomStackFullWidth,
} from "styled-components/CustomStyles.style";
import ImageUploaderWithPreview from "components/single-file-uploader-with-preview/ImageUploaderWithPreview";

const IDENTITY_FILE_SIZE = 2097152;
const IMAGE_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const COFEPRIS_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

const IdentityDocuments = ({ RestaurantJoinFormik }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const cofeprisInputRef = useRef(null);

  const handleImageUpload = (field) => (e) => {
    const file = e.currentTarget?.files?.[0] || e;
    if (!file) return;
    if (file.size > IDENTITY_FILE_SIZE) {
      toast.error(t("File size must be less than 2MB"));
      return;
    }
    if (!IMAGE_FORMATS.includes(file.type)) {
      toast.error(t("Unsupported Format"));
      return;
    }
    RestaurantJoinFormik.setFieldValue(field, file);
    RestaurantJoinFormik.setFieldTouched(field, true);
  };

  const handleCofeprisUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > IDENTITY_FILE_SIZE) {
      toast.error(t("File size must be less than 2MB"));
      e.target.value = "";
      return;
    }
    if (!COFEPRIS_FORMATS.includes(file.type)) {
      toast.error(t("Unsupported Format"));
      e.target.value = "";
      return;
    }
    RestaurantJoinFormik.setFieldValue("cofepris_document_image", file);
    RestaurantJoinFormik.setFieldTouched("cofepris_document_image", true);
  };

  const renderFieldError = (field) =>
    RestaurantJoinFormik.touched[field] &&
    RestaurantJoinFormik.errors[field] && (
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "inherit",
          color: theme.palette.error.main,
        }}
      >
        {RestaurantJoinFormik.errors[field]}
      </Typography>
    );

  const cofeprisFile = RestaurantJoinFormik.values.cofepris_document_image;

  return (
    <CustomBoxFullWidth>
      <Typography
        fontSize={{ xs: "16px", sm: "18px" }}
        fontWeight="500"
        textAlign="left"
        p={{ xs: 1.2, sm: 2 }}
        sx={{
          borderBottom: `1px solid ${theme.palette.neutral[400]}33`,
        }}
      >
        {t("Identity Info")}
      </Typography>

      <CustomStackFullWidth
        spacing={2}
        p={{ xs: 1.2, sm: 2 }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: ".5rem",
            padding: "1rem",
            flexGrow: 1,
          }}
        >
          <Stack spacing={1.5}>
            <Stack>
              <InputLabel sx={{ fontWeight: "500", color: theme.palette.neutral[1000] }}>
                {t("INE_card_front")}
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Typography fontSize="10px" mt={0.25}>
                {t("JPG, JPEG, PNG. Max 2 MB")}
              </Typography>
            </Stack>
            <ImageUploaderWithPreview
              type="file"
              labelText={t("Add Image")}
              file={RestaurantJoinFormik.values.ine_image}
              onChange={handleImageUpload("ine_image")}
              imageOnChange={handleImageUpload("ine_image")}
              width="250px"
              height="100%"
              error={
                RestaurantJoinFormik.touched.ine_image &&
                RestaurantJoinFormik.errors.ine_image
              }
            />
            {renderFieldError("ine_image")}
          </Stack>
        </Box>

        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: ".5rem",
            padding: "1rem",
            flexGrow: 1,
          }}
        >
          <Stack spacing={1.5}>
            <Stack>
              <InputLabel sx={{ fontWeight: "500", color: theme.palette.neutral[1000] }}>
                {t("INE_card_back")}
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Typography fontSize="10px" mt={0.25}>
                {t("JPG, JPEG, PNG. Max 2 MB")}
              </Typography>
            </Stack>
            <ImageUploaderWithPreview
              type="file"
              labelText={t("Add Image")}
              file={RestaurantJoinFormik.values.ine_back_image}
              onChange={handleImageUpload("ine_back_image")}
              imageOnChange={handleImageUpload("ine_back_image")}
              width="250px"
              height="100%"
              error={
                RestaurantJoinFormik.touched.ine_back_image &&
                RestaurantJoinFormik.errors.ine_back_image
              }
            />
            {renderFieldError("ine_back_image")}
          </Stack>
        </Box>

        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: ".5rem",
            padding: "1rem",
            flexGrow: 1,
          }}
        >
          <Stack spacing={1.5}>
            <Stack>
              <InputLabel sx={{ fontWeight: "500", color: theme.palette.neutral[1000] }}>
                {t("cofepris_document")}
              </InputLabel>
              <Typography fontSize="10px" mt={0.25}>
                {t("JPG, JPEG, PNG, PDF. Max 2 MB")}
              </Typography>
            </Stack>
            <Box
              onClick={() => cofeprisInputRef.current?.click()}
              sx={{
                border: `1px dashed ${theme.palette.primary.main}`,
                borderRadius: "8px",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                p: 2,
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <DescriptionIcon sx={{ color: theme.palette.neutral[500] }} />
                <Typography fontSize="12px" textAlign="center">
                  {cofeprisFile?.name || t("cofepris_document")}
                </Typography>
              </Stack>
            </Box>
            <input
              ref={cofeprisInputRef}
              type="file"
              hidden
              accept="image/jpeg,image/png,image/jpg,application/pdf"
              onChange={handleCofeprisUpload}
            />
            {renderFieldError("cofepris_document_image")}
          </Stack>
        </Box>
      </CustomStackFullWidth>
    </CustomBoxFullWidth>
  );
};

export default IdentityDocuments;
