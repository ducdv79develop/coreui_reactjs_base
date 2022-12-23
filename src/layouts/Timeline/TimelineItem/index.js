// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// CoreUI Dashboard 2 MUI components
import CoreUIBox from "components/CoreUIBox";
import CoreUITypography from "components/CoreUITypography";
import CoreUIBadge from "components/CoreUIBadge";

// Timeline context
import { useTimeline } from "layouts/Timeline/context";

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from "layouts/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <CoreUIBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <CoreUIBadge color={color} size="xs" badgeContent={badge} container />
            </CoreUIBox>
          );
        })
      : null;

  return (
    <CoreUIBox position="relative" sx={(theme) => timelineItem(theme, { lastItem })}>
      <CoreUIBox
        bgColor={isDark ? "dark" : "white"}
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
      </CoreUIBox>
      <CoreUIBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <CoreUITypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </CoreUITypography>
        <CoreUIBox mt={0.5}>
          <CoreUITypography
            variant="caption"
            fontWeight="medium"
            color={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </CoreUITypography>
        </CoreUIBox>
        <CoreUIBox mt={2} mb={1.5}>
          {description ? (
            <CoreUITypography variant="button" fontWeight="regular" color="text">
              {description}
            </CoreUITypography>
          ) : null}
        </CoreUIBox>
        {badges.length > 0 ? (
          <CoreUIBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </CoreUIBox>
        ) : null}
      </CoreUIBox>
    </CoreUIBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
