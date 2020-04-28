import { Button, withStyles } from '@material-ui/core';


const styledButton = withStyles(theme => ({
  root: {
    borderRadius: '45px',
    color: 'white',
    backgroundColor: '#5ED291',
    minHeight: '63px',
    paddingLeft: "20px",
    paddingRight: "20px",
    '&:hover': {
      backgroundColor: '#5ED291'
    }
  },
  startIcon: {
    "& > *:first-child": {
      fontSize: '50px'
    }
  },
  label: {
    fontSize: theme.typography.fontSizes.s20
  }
}))(Button);

export default styledButton;
