// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIInput from "components/CoreUIInput";
import CoreUIButton from "components/CoreUIButton";

// Authentication layout components
import CoverLayout from "views/authentication/components/CoverLayout";
import Socials from "views/authentication/components/Socials";
import Separator from "views/authentication/components/Separator";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/CoreUI-dashboard-pro/assets/img/signup-cover.jpg";

function Cover() {
  return (
    <CoverLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        <CoreUIBox p={3} mb={1} textAlign="center">
          <CoreUITypography variant="h5" fontWeight="medium">
            Register with
          </CoreUITypography>
        </CoreUIBox>
        <CoreUIBox mb={2}>
          <Socials />
        </CoreUIBox>
        <CoreUIBox px={12}>
          <Separator />
        </CoreUIBox>
        <CoreUIBox pt={2} pb={3} px={3}>
          <CoreUIBox component="form" role="form">
            <CoreUIBox mb={2}>
              <CoreUIInput placeholder="Name" />
            </CoreUIBox>
            <CoreUIBox mb={2}>
              <CoreUIInput type="email" placeholder="Email" />
            </CoreUIBox>
            <CoreUIBox mb={2}>
              <CoreUIInput type="password" placeholder="Password" />
            </CoreUIBox>
            <CoreUIBox display="flex" alignItems="center">
              <Checkbox defaultChecked />
              <CoreUITypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </CoreUITypography>
              <CoreUITypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mt={4} mb={1}>
              <CoreUIButton variant="gradient" color="dark" fullWidth>
                sign up
              </CoreUIButton>
            </CoreUIBox>
            <CoreUIBox mt={2}>
              <CoreUITypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <CoreUITypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </CoreUITypography>
              </CoreUITypography>
            </CoreUIBox>
          </CoreUIBox>
        </CoreUIBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
