import Box from "@mui/material/Box";
import Directions from "../components/Directions/Directions";
import { useTranslation } from "react-i18next";

const DirectionsPage = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 className="card-heading">{t("directionTitle")}</h1>
      <Directions />
    </Box>
  );
};

export default DirectionsPage;
