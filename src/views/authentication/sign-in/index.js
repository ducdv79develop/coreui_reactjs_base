import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIInput from "components/CoreUIInput";
import CoreUIButton from "components/CoreUIButton";

// Authentication layout components
import IllustrationLayout from "views/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/CoreUI-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <CoreUIBox component="form" role="form">
        <CoreUIBox mb={2}>
          <CoreUIInput type="email" placeholder="Email" size="large" />
        </CoreUIBox>
        <CoreUIBox mb={2}>
          <CoreUIInput type="password" placeholder="Password" size="large" />
        </CoreUIBox>
        <CoreUIBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <CoreUITypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </CoreUITypography>
        </CoreUIBox>
        <CoreUIBox mt={4} mb={1}>
          <CoreUIButton color="info" size="large" fullWidth>
            Sign In
          </CoreUIButton>
        </CoreUIBox>
        <CoreUIBox mt={3} textAlign="center">
          <CoreUITypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <CoreUITypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </CoreUITypography>
          </CoreUITypography>
        </CoreUIBox>
      </CoreUIBox>
    </IllustrationLayout>
  );
}

export default Illustration;
