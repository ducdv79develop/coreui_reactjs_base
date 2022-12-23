/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIProgress from "components/CoreUIProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <CoreUIBox display="flex" alignItems="center">
      <CoreUITypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </CoreUITypography>
      <CoreUIBox width="8rem">
        <CoreUIProgress value={value} color={color} variant="gradient" label={false} />
      </CoreUIBox>
    </CoreUIBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $2,500
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          working
        </CoreUITypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $5,000
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          done
        </CoreUITypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $3,400
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          canceled
        </CoreUITypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $1,400
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          canceled
        </CoreUITypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $14,000
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          working
        </CoreUITypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <CoreUITypography variant="button" color="text" fontWeight="medium">
          $2,300
        </CoreUITypography>
      ),
      status: (
        <CoreUITypography variant="caption" color="text" fontWeight="medium">
          done
        </CoreUITypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
