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
import CoreUIButton from "components/CoreUIButton";

function DefaultPricingCard({ title, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <CoreUIBox key={label} display="flex" alignItems="center" p={1}>
      <CoreUIBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <CoreUITypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
        </CoreUITypography>
      </CoreUIBox>
      <CoreUITypography variant="body2" color="text">
        {label}
      </CoreUITypography>
    </CoreUIBox>
  ));

  return (
    <Card>
      <CoreUIBox pt={3} pb={2} px={2} textAlign="center">
        <CoreUITypography variant="body2" color="dark" textTransform="uppercase" fontWeight="medium">
          {title}
        </CoreUITypography>
        <CoreUIBox my={1}>
          <CoreUITypography variant="h1">
            <CoreUITypography display="inline" component="small" variant="h2">
              {price.currency}
            </CoreUITypography>
            {price.value}
          </CoreUITypography>
        </CoreUIBox>
      </CoreUIBox>
      <CoreUIBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <CoreUIBox mt={3}>
            <CoreUIButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </CoreUIButton>
          </CoreUIBox>
        ) : (
          <CoreUIBox mt={3}>
            <CoreUIButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </CoreUIButton>
          </CoreUIBox>
        )}
      </CoreUIBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
};

export default DefaultPricingCard;
