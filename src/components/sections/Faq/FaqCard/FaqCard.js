import styles from "./FaqCardStyles"
import React from "react"
import { Typography } from "@material-ui/core"

export default props => {
  const classes = styles()
  return (
    <div className={classes.Card}>
      <div className={classes.Icon}>{props.children}</div>
      <div className={classes.Content}>
        <Typography variant="h5" component="h4" className={classes.Title}>
          {props.title}
        </Typography>
        <Typography component="p" className={classes.Text}>
          {props.text}
        </Typography>
      </div>
    </div>
  )
}
