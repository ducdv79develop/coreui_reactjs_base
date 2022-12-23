import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { PolarArea } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// PolarChart configurations
import configs from "layouts/Charts/PolarChart/configs";

function PolarChart({ title, description, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderChart = (
    <CoreUIBox p={2}>
      {title || description ? (
        <CoreUIBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <CoreUIBox mb={1}>
              <CoreUITypography variant="h6">{title}</CoreUITypography>
            </CoreUIBox>
          )}
          <CoreUIBox mb={2}>
            <CoreUITypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
      ) : null}
      {useMemo(
        () => (
          <CoreUIBox p={4}>
            <PolarArea data={data} options={options} />
          </CoreUIBox>
        ),
        [chart]
      )}
    </CoreUIBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PolarChart;
