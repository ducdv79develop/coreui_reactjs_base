import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for CoreUIInput
import CoreUIInputRoot from "components/CoreUIInput/CoreUIInputRoot";

// CoreUI Dashboard 2 MUI context
import { useCoreUIController } from "cores/contexts";

const CoreUIInput = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  const [controller] = useCoreUIController();
  const { darkMode } = controller;

  return (
    <CoreUIInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
  );
});

// Setting default values for the props of CoreUIInput
CoreUIInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the CoreUIInput
CoreUIInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CoreUIInput;
