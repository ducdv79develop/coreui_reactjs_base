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

function IllustrationLayout({ color, header, title, description, button, illustration, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        action={{
          type: "external",
          route: "https://creative-tim.com/product/CoreUI-dashboard-material-ui",
          label: "Free Download",
          ...button,
        }}
      />
      <Grid container>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <CoreUIBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <CoreUIBox pt={3} px={3}>
              {!header ? (
                <>
                  <CoreUIBox mb={1}>
                    <CoreUITypography variant="h4" fontWeight="bold">
                      {title}
                    </CoreUITypography>
                  </CoreUIBox>
                  <CoreUITypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </CoreUITypography>
                </>
              ) : (
                header
              )}
            </CoreUIBox>
            <CoreUIBox p={3}>{children}</CoreUIBox>
          </CoreUIBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CoreUIBox
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={2}
            px={13}
            sx={{ overflow: "hidden" }}
          >
            <CoreUIBox
              component="img"
              src={illustration.image}
              alt="background"
              width="100%"
              position="absolute"
              top={0}
              left={0}
            />
            <CoreUIBox
              bgColor={color}
              variant="gradient"
              width="100%"
              height="100%"
              position="absolute"
              topl={0}
              left={0}
              opacity={0.7}
            />
            <CoreUIBox position="relative">
              {illustration.title && (
                <CoreUIBox mt={6} mb={1}>
                  <CoreUITypography variant="h4" color="white" fontWeight="bold">
                    {illustration.title}
                  </CoreUITypography>
                </CoreUIBox>
              )}
              {illustration.description && (
                <CoreUIBox mb={1}>
                  <CoreUITypography variant="body2" color="white">
                    {illustration.description}
                  </CoreUITypography>
                </CoreUIBox>
              )}
            </CoreUIBox>
          </CoreUIBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  button: { color: "info" },
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
