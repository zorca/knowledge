import { Button, withStyles } from '@material-ui/core';

const styledButton = withStyles({
  root: {
    fontFamily: 'inherit',
    fontSize: '1.25rem',
    fontWeight: 700,
    backgroundColor: '#fff',
    border: '1px solid transparent',
    borderRadius: '10px',
    margin: 0,
    padding: '16px 41px',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      color: '#fff',
      border: `1px solid #fff`
    },
    '&:active': {
      transform: 'scale(0.98)'
    }
  }
})(Button);

export default styledButton;
