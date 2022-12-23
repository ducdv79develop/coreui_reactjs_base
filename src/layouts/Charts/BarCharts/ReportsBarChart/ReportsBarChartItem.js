// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIProgress from "components/CoreUIProgress";

function ReportsBarChartItem({ color, icon, label, progress }) {
  const { size } = typography;

  return (
    <CoreUIBox width="100%">
      <CoreUIBox display="flex" alignItems="center" mb={2}>
        <CoreUIBox
          bgColor={icon.color}
          width="1.25rem"
          height="1.25rem"
          borderRadius="sm"
          color="white"
          fontSize={size.xs}
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="md"
          mr={1}
          variant="gradient"
        >
          <Icon>{icon.component}</Icon>
        </CoreUIBox>
        <CoreUITypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          color="text"
        >
          {label}
        </CoreUITypography>
      </CoreUIBox>
      <CoreUIBox mt={1}>
        <CoreUITypography variant="h4" fontWeight="bold" color={color}>
          {progress.content}
        </CoreUITypography>
        <CoreUIBox width="75%" mt={0.5}>
          <CoreUIProgress value={progress.percentage} color={color} />
        </CoreUIBox>
      </CoreUIBox>
    </CoreUIBox>
  );
}

// Setting default values for the props of ReportsBarChartItem
ReportsBarChartItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ReportsBarChartItem
ReportsBarChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.shape({
    content: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportsBarChartItem;
