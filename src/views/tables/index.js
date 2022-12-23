// @mui material components
import Card from "@mui/material/Card";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI examples
import DashboardLayout from "layouts/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layouts/Navbars/DashboardNavbar";
import Footer from "layouts/Footer";
import Table from "layouts/Tables/Table";

// Data
import authorsTableData from "views/tables/data/authorsTableData";
import projectsTableData from "views/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CoreUIBox py={3}>
        <CoreUIBox mb={3}>
          <Card>
            <CoreUIBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <CoreUITypography variant="h6">Authors table</CoreUITypography>
            </CoreUIBox>
            <CoreUIBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </CoreUIBox>
          </Card>
        </CoreUIBox>
        <Card>
          <CoreUIBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <CoreUITypography variant="h6">Projects table</CoreUITypography>
          </CoreUIBox>
          <CoreUIBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </CoreUIBox>
        </Card>
      </CoreUIBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
