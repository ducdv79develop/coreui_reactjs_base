import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";

// Custom styles for the CoreUIAlert
import CoreUIAlertRoot from "components/CoreUIAlert/CoreUIAlertRoot";
import CoreUIAlertCloseIcon from "components/CoreUIAlert/CoreUIAlertCloseIcon";

function CoreUIAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <CoreUIAlertRoot ownerState={{ color }} {...rest}>
        <CoreUIBox display="flex" alignItems="center" color="white">
          {children}
        </CoreUIBox>
        {dismissible ? (
          <CoreUIAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </CoreUIAlertCloseIcon>
        ) : null}
      </CoreUIAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of CoreUIAlert
CoreUIAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the CoreUIAlert
CoreUIAlert.propTypes = {
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
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CoreUIAlert;
