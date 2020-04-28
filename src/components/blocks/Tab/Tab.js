import { withStyles, Tab } from '@material-ui/core';

const StyledTab = withStyles(theme => ({
  root: {
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 800,
    minHeight: '70px'
  }
}))(Tab);

export default StyledTab;