import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// CoreUI Dashboard 2 MUI components
import CoreUITypography from "components/CoreUITypography";

// Custom styles for CoreUIProgress
import CoreUIProgressRoot from "components/CoreUIProgress/CoreUIProgressRoot";

const CoreUIProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <CoreUITypography variant="button" fontWeight="medium" color="text">
        {value}%
      </CoreUITypography>
    )}
    <CoreUIProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of CoreUIProgress
CoreUIProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the CoreUIProgress
CoreUIProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default CoreUIProgress;
