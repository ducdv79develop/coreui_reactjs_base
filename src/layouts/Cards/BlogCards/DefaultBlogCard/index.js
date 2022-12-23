// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIAvatar from "components/CoreUIAvatar";

function DefaultBlogCard({ image, category, title, description, author, action }) {
  return (
    <Card>
      <CoreUIBox mt={2} mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <CoreUIBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <CoreUIBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MuiLink>
        )}
      </CoreUIBox>
      <CoreUIBox pb={3} px={3}>
        {category && (
          <CoreUITypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
          >
            {category.label}
          </CoreUITypography>
        )}
        <CoreUIBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <CoreUITypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </CoreUITypography>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <CoreUITypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </CoreUITypography>
            </MuiLink>
          )}
        </CoreUIBox>
        <CoreUITypography variant="body2" component="p" color="text">
          {description}
        </CoreUITypography>
        {author && (
          <CoreUIBox display="flex" alignItems="center" mt={3}>
            <CoreUIAvatar variant="rounded" src={author.image} alt={author.name} shadow="md" />
            <CoreUIBox pl={2} lineHeight={0}>
              <CoreUITypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </CoreUITypography>
              <CoreUITypography variant="caption" color="text">
                {author.date}
              </CoreUITypography>
            </CoreUIBox>
          </CoreUIBox>
        )}
      </CoreUIBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
