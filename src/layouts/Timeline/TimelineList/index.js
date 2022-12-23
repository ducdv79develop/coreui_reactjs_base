// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// Timeline context
import { TimelineProvider } from "layouts/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <CoreUIBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <CoreUIBox pt={3} px={3}>
            <CoreUITypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </CoreUITypography>
          </CoreUIBox>
          <CoreUIBox p={2}>{children}</CoreUIBox>
        </CoreUIBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
