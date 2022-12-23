// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function OutlinedCounterCard({ color, count, title, prefix, suffix }) {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <CoreUIBox
      borderRadius="md"
      border={`${borderWidth[1]} dashed ${secondary.main}`}
      textAlign="center"
      py={2}
    >
      <CoreUITypography variant="h6" color={color} fontWeight="medium" textTransform="capitalize">
        {title}
      </CoreUITypography>
      <CoreUITypography variant="h4" fontWeight="bold">
        {prefix && (
          <CoreUITypography component="span" variant="h5" fontWeight="bold">
            {prefix}
          </CoreUITypography>
        )}
        <CoreUIBox display="inline-block" color="inherit" mx={0.5}>
          <CountUp end={count} duration={1} separator="," />
        </CoreUIBox>
        {suffix && (
          <CoreUITypography component="span" variant="h5" fontWeight="bold">
            {suffix}
          </CoreUITypography>
        )}
      </CoreUITypography>
    </CoreUIBox>
  );
}

// Setting default values for the props of OutlinedCounterCard
OutlinedCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
};

// Typechecking props for the BlogCard
OutlinedCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OutlinedCounterCard;
