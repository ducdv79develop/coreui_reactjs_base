import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUIAvatar from "components/CoreUIAvatar";
import CoreUITypography from "components/CoreUITypography";

// CoreUI Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function Table({ columns, rows }) {
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <CoreUIBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        sx={({ palette: { light } }) => ({ borderBottom: `${borderWidth[1]} solid ${light.main}` })}
      >
        {name.toUpperCase()}
      </CoreUIBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <CoreUIBox
            key={uuidv4()}
            component="td"
            p={1}
            sx={({ palette: { light } }) => ({
              borderBottom: row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null,
            })}
          >
            <CoreUIBox display="flex" alignItems="center" py={0.5} px={1}>
              <CoreUIBox mr={2}>
                <CoreUIAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </CoreUIBox>
              <CoreUITypography variant="button" fontWeight="medium" sx={{ width: "max-content" }}>
                {row[name][1]}
              </CoreUITypography>
            </CoreUIBox>
          </CoreUIBox>
        );
      } else {
        template = (
          <CoreUIBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            verticalAlign="middle"
            lineHeight={0.65}
            sx={({ palette: { light } }) => ({
              borderBottom: row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null,
            })}
          >
            <CoreUITypography
              variant="button"
              fontWeight="regular"
              color="secondary"
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[name]}
            </CoreUITypography>
          </CoreUIBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MuiTable>
          <CoreUIBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </CoreUIBox>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </TableContainer>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
