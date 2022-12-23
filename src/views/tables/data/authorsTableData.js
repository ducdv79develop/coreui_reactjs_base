/* eslint-disable react/prop-types */
// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIAvatar from "components/CoreUIAvatar";
import CoreUIBadge from "components/CoreUIBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <CoreUIBox display="flex" alignItems="center" px={1} py={0.5}>
      <CoreUIBox mr={2}>
        <CoreUIAvatar src={image} alt={name} size="sm" variant="rounded" />
      </CoreUIBox>
      <CoreUIBox display="flex" flexDirection="column">
        <CoreUITypography variant="button" fontWeight="medium">
          {name}
        </CoreUITypography>
        <CoreUITypography variant="caption" color="secondary">
          {email}
        </CoreUITypography>
      </CoreUIBox>
    </CoreUIBox>
  );
}

function Function({ job, org }) {
  return (
    <CoreUIBox display="flex" flexDirection="column">
      <CoreUITypography variant="caption" fontWeight="medium" color="text">
        {job}
      </CoreUITypography>
      <CoreUITypography variant="caption" color="secondary">
        {org}
      </CoreUITypography>
    </CoreUIBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <CoreUIBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <CoreUITypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </CoreUITypography>
      ),
      action: (
        <CoreUITypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CoreUITypography>
      ),
    },
  ],
};

export default authorsTableData;
