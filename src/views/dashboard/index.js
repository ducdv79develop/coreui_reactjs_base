/* eslint-disable no-unused-vars */
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI example components
import DashboardLayout from "layouts/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/Navbars/DashboardNavbar";
import Footer from "layouts/Footer";
import DetailedStatisticsCard from "layouts/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "layouts/Tables/SalesTable";
import CategoriesList from "layouts/Lists/CategoriesList";
import GradientLineChart from "layouts/Charts/LineCharts/GradientLineChart";

// CoreUI Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "views/dashboard/components/Slider";

// Data
import gradientLineChartData from "views/dashboard/data/gradientLineChartData";
import salesTableData from "views/dashboard/data/salesTableData";
import categoriesListData from "views/dashboard/data/categoriesListData";

function Dashboard() {
  const { size } = typography;
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      {/* <CoreUIBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's money"
              count="$53,000"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's users"
              count="2,300"
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="new clients"
              count="+3,462"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="sales"
              count="$103,430"
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Sales Overview"
              description={
                <CoreUIBox display="flex" alignItems="center">
                  <CoreUIBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </CoreUIBox>
                  <CoreUITypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <CoreUITypography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </CoreUITypography>
                  </CoreUITypography>
                </CoreUIBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Sales by Country" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="categories" categories={categoriesListData} />
          </Grid>
        </Grid>
      </CoreUIBox> */}
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
