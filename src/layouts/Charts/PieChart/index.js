import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Pie } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// PieChart configurations
import configs from "layouts/Charts/PieChart/configs";

function PieChart({ title, description, height, chart }) {
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
          <CoreUIBox height={height}>
            <Pie data={data} options={options} />
          </CoreUIBox>
        ),
        [chart, height]
      )}
    </CoreUIBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PieChart
PieChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the PieChart
PieChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PieChart;
