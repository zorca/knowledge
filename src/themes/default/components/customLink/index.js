import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  textStyles: {
    textDecoration: "none"
  }
}));

function CustomLink({
  to,
  name,
  classes,
  link,
  callback,
  wrapperClasses,
  typoVariant
}) {
  const cssClasses = useStyles();
  const [isCurrent, setIsCurrent] = useState(false);

  if (!typoVariant) {
    typoVariant = "subtitle2";
  }

  return (
    <Link
      to={to}
      className={clsx(cssClasses.textStyles, {
        [wrapperClasses]: wrapperClasses
      })}
      getProps={({ isPartiallyCurrent }) => {
        return isPartiallyCurrent ? setIsCurrent(true) : setIsCurrent(false);
      }}
      onClick={callback}
    >
      {link ? (
        <Typography
          variant={typoVariant}
          className={isCurrent ? classes.menuItemActive : classes.menuItem}
        >
          <b>
            <FormattedMessage id={name} />
          </b>
        </Typography>
      ) : (
        <Typography variant={typoVariant}>
          <b>
            <FormattedMessage id={name} />
          </b>
        </Typography>
      )}
    </Link>
  );
}

CustomLink.defaultProps = {
  link: false
};

CustomLink.prototype = {
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.bool,
  classes: PropTypes.object
};

export default CustomLink;
