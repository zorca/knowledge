import { Button, withStyles } from '@material-ui/core';

const styledButton = withStyles({
  root: {
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3D8BFF',
    borderRadius: '10px',
    padding: '17px 36px',
    boxShadow: '0 5px 10px 0 rgba(61,139,255,1)',
    transition: 'all .3s ease-in-out',
    minWidth: '295px',
    '&:hover': {
      backgroundColor: '#4586E4'
    },
    '&:active': {
      transform: 'scale(0.95)',
      boxShadow: 'none'
    }
  },
  label: {
    // textTransform: "capitalize",
  }
})(Button);

export default styledButton;
