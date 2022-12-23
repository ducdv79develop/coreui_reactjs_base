// @mui material components
import Link from "@mui/material/Link";

// CoreUI Dashboard 2 MUI components
import CoreUIButton from "components/CoreUIButton";
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI context
import { useCoreUIController } from "cores/contexts";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useCoreUIController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <CoreUIBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      <CoreUIBox position="relative" textAlign="center">
        <CoreUIBox component="img" src={icon} alt="sidebar_illustration" width="60%" />
        <CoreUIBox
          width="100%"
          pb={2}
          px={2}
          color={darkSidenav ? "white" : "dark"}
          textAlign="center"
          lineHeight={0}
        >
          <CoreUITypography color="inherit" variant="h6">
            Need help?
          </CoreUITypography>
          <CoreUITypography color="inherit" variant="caption">
            Please check our docs
          </CoreUITypography>
        </CoreUIBox>
      </CoreUIBox>
      <CoreUIBox display="flex" flexDirection="column">
        <CoreUIButton
          component={Link}
          href="https://www.creative-tim.com/learning-lab/react/overview/CoreUI-dashboard/"
          target="_blank"
          rel="noreferrer"
          color="dark"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        >
          Documentation
        </CoreUIButton>
        <CoreUIButton
          component={Link}
          href="https://www.creative-tim.com/product/CoreUI-dashboard-material-ui"
          target="_blank"
          rel="noreferrer"
          color="info"
          size="small"
          fullWidth
          mb={2}
        >
          Upgrade to PRO
        </CoreUIButton>
      </CoreUIBox>
    </CoreUIBox>
  );
}

export default SidenavFooter;
