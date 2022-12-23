// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

function CategoriesList({ title, categories }) {
  const renderItems = categories.map(({ color, icon, name, description, route }, key) => (
    <CoreUIBox
      key={name}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={categories.length - 1 === key ? 0 : 1}
    >
      <CoreUIBox display="flex" alignItems="center">
        <CoreUIBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={color}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          variant="gradient"
        >
          <Icon
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {icon}
          </Icon>
        </CoreUIBox>
        <CoreUIBox display="flex" flexDirection="column">
          <CoreUITypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </CoreUITypography>
          <CoreUITypography variant="caption" color="text">
            {description}
          </CoreUITypography>
        </CoreUIBox>
      </CoreUIBox>
      <CoreUIBox display="flex">
        <CoreUITypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </CoreUITypography>
      </CoreUIBox>
    </CoreUIBox>
  ));

  return (
    <Card>
      <CoreUIBox pt={2} px={2}>
        <CoreUITypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CoreUITypography>
      </CoreUIBox>
      <CoreUIBox p={2}>
        <CoreUIBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </CoreUIBox>
      </CoreUIBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
