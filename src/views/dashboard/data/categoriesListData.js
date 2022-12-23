// CoreUI Dashboard 2 MUI components
import CoreUITypography from "components/CoreUITypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </CoreUITypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          15 open
        </CoreUITypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </CoreUITypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Happy Users",
    description: (
      <>
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;430
        </CoreUITypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
