// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/CoreUI-dashboard-pro/assets/img/card-visa.jpg";

function MasterCard({ color, number, holder, expires }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card
      sx={({
        palette: { gradients },
        functions: { linearGradient, rgba },
        boxShadows: { xl },
      }) => ({
        background: gradients[color]
          ? `${linearGradient(
              rgba(gradients[color].main, 0.8),
              rgba(gradients[color].state, 0.8)
            )}, url(${bgImage})`
          : `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
        boxShadow: xl,
      })}
    >
      <CoreUIBox p={2}>
        <CoreUIBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon fontSize="default">wifi</Icon>
        </CoreUIBox>
        <CoreUITypography
          variant="h5"
          color="white"
          fontWeight="medium"
          sx={{ mt: 3, mb: 5, pb: 1 }}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </CoreUITypography>
        <CoreUIBox display="flex" justifyContent="space-between" alignItems="center">
          <CoreUIBox display="flex" alignItems="center">
            <CoreUIBox mr={3} lineHeight={1}>
              <CoreUITypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Card Holder
              </CoreUITypography>
              <CoreUITypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {holder}
              </CoreUITypography>
            </CoreUIBox>
            <CoreUIBox lineHeight={1}>
              <CoreUITypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Expires
              </CoreUITypography>
              <CoreUITypography variant="h6" color="white" fontWeight="medium">
                {expires}
              </CoreUITypography>
            </CoreUIBox>
          </CoreUIBox>
          <CoreUIBox display="flex" justifyContent="flex-end" width="20%">
            <CoreUIBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={1} />
          </CoreUIBox>
        </CoreUIBox>
      </CoreUIBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
