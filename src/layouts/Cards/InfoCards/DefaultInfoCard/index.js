// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <CoreUIBox p={2} mx={3} display="flex" justifyContent="center">
        <CoreUIBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </CoreUIBox>
      </CoreUIBox>
      <CoreUIBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <CoreUITypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CoreUITypography>
        {description && (
          <CoreUITypography variant="caption" color="text" fontWeight="regular">
            {description}
          </CoreUITypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <CoreUITypography variant="h5" fontWeight="medium">
            {value}
          </CoreUITypography>
        )}
      </CoreUIBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
