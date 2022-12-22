/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// CoreUI Dashboard 2 MUI base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// CoreUI Dashboard 2 MUI helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;
const { grey } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(3),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: grey[400],
    },

    colorSecondary: {
      backgroundColor: grey[400],
    },

    bar: {
      height: "100%",
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};

export default linearProgress;
