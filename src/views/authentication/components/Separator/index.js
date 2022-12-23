// @mui material components
import Divider from "@mui/material/Divider";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

function Separator() {
  return (
    <CoreUIBox position="relative" py={0.25}>
      <Divider />
      <CoreUIBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <CoreUITypography variant="button" fontWeight="medium" color="secondary">
          or
        </CoreUITypography>
      </CoreUIBox>
    </CoreUIBox>
  );
}

export default Separator;
