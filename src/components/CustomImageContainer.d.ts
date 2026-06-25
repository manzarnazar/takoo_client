import { FC } from "react";

export interface CustomImageContainerProps {
  cursor?: string;
  mdHeight?: string;
  maxWidth?: string;
  height?: string;
  width?: string;
  objectfit?: string;
  minwidth?: string;
  src?: string;
  alt?: string;
  borderRadius?: string;
  marginBottom?: string;
  smHeight?: string;
  smMb?: string;
  smMaxWidth?: string;
  smWidth?: string;
  aspectRatio?: string;
  padding?: string;
  loading?: string;
  bg?: string;
  borderBottomRightRadius?: string;
  [key: string]: unknown;
}

declare const CustomImageContainer: FC<CustomImageContainerProps>;

export default CustomImageContainer;
