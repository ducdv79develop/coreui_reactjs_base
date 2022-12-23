import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <CoreUIBox pt={2} px={2}>
        <CoreUITypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </CoreUITypography>
      </CoreUIBox>
      <CoreUIBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <CoreUITypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </CoreUITypography>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox mt={3}>
          <CoreUITypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            application
          </CoreUITypography>
        </CoreUIBox>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
        <CoreUIBox display="flex" py={1} mb={0.25}>
          <CoreUIBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </CoreUIBox>
          <CoreUIBox width="80%" ml={2}>
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
      </CoreUIBox>
    </Card>
  );
}

export default PlatformSettings;
