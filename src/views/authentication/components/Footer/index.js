// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

function Footer() {
  return (
    <CoreUIBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <CoreUIBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <CoreUIBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                Company
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                Team
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                Product
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox>
              <CoreUITypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </CoreUITypography>
            </CoreUIBox>
          </CoreUIBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CoreUIBox display="flex" justifyContent="center" mt={1} mb={3}>
            <CoreUIBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </CoreUIBox>
            <CoreUIBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </CoreUIBox>
            <CoreUIBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </CoreUIBox>
            <CoreUIBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </CoreUIBox>
            <CoreUIBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </CoreUIBox>
          </CoreUIBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <CoreUITypography variant="body2" color="secondary">
            Copyright &copy; 2022 CoreUI by Creative Tim.
          </CoreUITypography>
        </Grid>
      </Grid>
    </CoreUIBox>
  );
}

export default Footer;
