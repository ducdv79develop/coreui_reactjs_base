// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI example components
import DefaultNavbar from "layouts/Navbars/DefaultNavbar";
import PageLayout from "layouts/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "views/authentication/components/Footer";

function CoverLayout({ title, description, image, imgPosition, button, children }) {
  return (
    <PageLayout>
      <CoreUIBox mt={1}>
        <DefaultNavbar
          action={{
            type: "external",
            route: "https://creative-tim.com/product/CoreUI-dashboard-material-ui",
            label: "Free Download",
            ...button,
          }}
          transparent
          light
        />
      </CoreUIBox>
      <CoreUIBox
        width="calc(100% - 2rem)"
        minHeight="50vh"
        borderRadius="lg"
        mx={2}
        mt={2}
        mb={8}
        pt={18}
        pb={20}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: imgPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={4}>
            <CoreUIBox mb={1}>
              <CoreUITypography variant="h1" color="white" fontWeight="bold">
                {title}
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox mb={2}>
              <CoreUITypography variant="body2" color="white" fontWeight="regular">
                {description}
              </CoreUITypography>
            </CoreUIBox>
          </Grid>
        </Grid>
      </CoreUIBox>
      <CoreUIBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </CoreUIBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  title: "",
  description: "",
  imgPosition: "center",
  button: { color: "white" },
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  imgPosition: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
