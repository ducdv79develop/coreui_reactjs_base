// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableCell from "@mui/material/TableCell";

// CoreUI Dashboard 2 MUI components
import CoreUITypography from "components/CoreUITypography";
import CoreUIBox from "components/CoreUIBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <CoreUIBox display="flex" alignItems="center" width="max-content">
          <CoreUIBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <CoreUIBox display="flex" flexDirection="column" ml={3}>
            <CoreUITypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </CoreUITypography>
            <CoreUITypography variant="button" fontWeight="medium" textTransform="capitalize">
              {content}
            </CoreUITypography>
          </CoreUIBox>
        </CoreUIBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <CoreUIBox display="flex" flexDirection="column">
          <CoreUITypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </CoreUITypography>
          <CoreUITypography variant="button" fontWeight="medium" textTransform="capitalize">
            {content}
          </CoreUITypography>
        </CoreUIBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
