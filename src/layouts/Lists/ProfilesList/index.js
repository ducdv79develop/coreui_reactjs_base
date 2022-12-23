// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIAvatar from "components/CoreUIAvatar";
import CoreUIButton from "components/CoreUIButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <CoreUIBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <CoreUIBox mr={2}>
        <CoreUIAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </CoreUIBox>
      <CoreUIBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <CoreUITypography variant="button" fontWeight="medium">
          {name}
        </CoreUITypography>
        <CoreUITypography variant="caption" color="text">
          {description}
        </CoreUITypography>
      </CoreUIBox>
      <CoreUIBox ml="auto">
        {action.type === "internal" ? (
          <CoreUIButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </CoreUIButton>
        ) : (
          <CoreUIButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </CoreUIButton>
        )}
      </CoreUIBox>
    </CoreUIBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <CoreUIBox pt={2} px={2}>
        <CoreUITypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CoreUITypography>
      </CoreUIBox>
      <CoreUIBox p={2}>
        <CoreUIBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </CoreUIBox>
      </CoreUIBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
