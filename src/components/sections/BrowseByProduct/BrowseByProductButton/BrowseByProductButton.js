import { Button, withStyles } from '@material-ui/core';

const styledButton = withStyles(theme => ({
  root: {
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 700,
    color: theme.palette.text.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    padding: '17px 36px',
    boxShadow: '0 5px 10px 0 rgba(61,139,255,1)',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      backgroundColor: '#4586E4'
    },
    '&:active': {
      transform: 'scale(0.98)',
      boxShadow: 'none'
    }
  }
}))(Button);

export default styledButton;
