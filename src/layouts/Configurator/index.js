// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIButton from "components/CoreUIButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "layouts/Configurator/ConfiguratorRoot";

// CoreUI Dashboard 2 MUI context
import {
  useCoreUIController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "cores/contexts";

function Configurator() {
  const [controller, dispatch] = useCoreUIController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <CoreUIBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <CoreUIBox>
          <CoreUITypography variant="h5">CoreUI Configurator</CoreUITypography>
          <CoreUITypography variant="body2" color="text">
            See our dashboard options.
          </CoreUITypography>
        </CoreUIBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </CoreUIBox>

      <Divider />

      <CoreUIBox pt={1.25} pb={3} px={3}>
        <CoreUIBox>
          <CoreUITypography variant="h6">Sidenav Colors</CoreUITypography>

          <CoreUIBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColor === color && dark.main,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </CoreUIBox>
        </CoreUIBox>

        <CoreUIBox mt={3} lineHeight={1}>
          <CoreUITypography variant="h6">Sidenav Type</CoreUITypography>
          <CoreUITypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </CoreUITypography>

          <CoreUIBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
            <CoreUIButton
              color="info"
              variant={darkSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              fullWidth
            >
              White
            </CoreUIButton>
            <CoreUIButton
              color="info"
              variant={darkSidenav ? "gradient" : "outlined"}
              onClick={handledarkSidenav}
              fullWidth
              sx={{
                ml: 1,
              }}
            >
              Dark
            </CoreUIButton>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox display="flex" justifyContent="space-between" mt={3} lineHeight={1}>
          <CoreUITypography variant="h6">Navbar Fixed</CoreUITypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </CoreUIBox>

        <Divider />

        <CoreUIBox display="flex" justifyContent="space-between" lineHeight={1}>
          <CoreUITypography variant="h6">Sidenav Mini</CoreUITypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </CoreUIBox>

        <Divider />

        <CoreUIBox display="flex" justifyContent="space-between" lineHeight={1}>
          <CoreUITypography variant="h6">Light / Dark</CoreUITypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </CoreUIBox>

        <CoreUIBox mt={5} mb={2}>
          <CoreUIBox mb={2}>
            <CoreUIButton
              component={Link}
              href="https://www.creative-tim.com/product/CoreUI-dashboard-pro-material-ui"
              target="_blank"
              rel="noreferrer"
              color="info"
              fullWidth
            >
              Buy Now
            </CoreUIButton>
          </CoreUIBox>
          <CoreUIBox mb={2}>
            <CoreUIButton
              component={Link}
              href="https://www.creative-tim.com/product/CoreUI-dashboard-material-ui"
              target="_blank"
              rel="noreferrer"
              color="dark"
              fullWidth
            >
              Free Download
            </CoreUIButton>
          </CoreUIBox>
          <CoreUIButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/CoreUI-dashboard/"
            target="_blank"
            rel="noreferrer"
            color={darkMode ? "white" : "dark"}
            variant="outlined"
            fullWidth
          >
            View Documentation
          </CoreUIButton>
        </CoreUIBox>
        <CoreUIBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/CoreUI-dashboard-material-ui"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/CoreUI-dashboard-material-uit on GitHub"
          >
            Star
          </GitHubButton>
        </CoreUIBox>
        <CoreUIBox mt={3} textAlign="center">
          <CoreUIBox mb={0.5}>
            <CoreUITypography variant="h6">Thank you for sharing!</CoreUITypography>
          </CoreUIBox>

          <CoreUIBox display="flex" justifyContent="center">
            <CoreUIBox mr={1.5}>
              <CoreUIButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20CoreUI%20Dashboard%202%20PRO%20MUI%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2FCoreUI-dashboard-material-ui"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </CoreUIButton>
            </CoreUIBox>
            <CoreUIButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/CoreUI-dashboard-material-ui"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </CoreUIButton>
          </CoreUIBox>
        </CoreUIBox>
      </CoreUIBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
