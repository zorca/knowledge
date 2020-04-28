import { makeStyles } from '@material-ui/core';

const Author = {
  fontFamily: 'Montserrat',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const Avatar = {
  marginRight: '20px'
};

const Icon = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fill: '#fff',
  backgroundColor: '#3D8BFF',
  borderRadius: '50%',
  '& svg': {
    width: '40%'
  }
};

const Content = {
  display: 'flex',
  flexDirection: 'column',
  color: '#4B4B4B',
  fontFamily: 'inherit'
};

const Name = {
  fontFamily: 'inherit',
  lineHeight: 1.2
};

const small = makeStyles(theme => ({
  Author,
  Avatar,
  Icon: {
    ...Icon,
    width: '30px',
    height: '30px'
  },
  Content,
  Name: {
    ...Name,
    fontSize: theme.typography.fontSizes.s14,
    fontWeight: 700,
    marginBottom: "6px"
  },
  Date: {
    ...Name,
    fontSize: theme.typography.fontSizes.s14,
    fontStyle: 'italic'
  }
}));


const large = makeStyles(theme => ({
  Author,
  Avatar,
  Icon: {
    ...Icon,
    width: '63px',
    height: '63px'
  },
  Content,
  Name: {
    ...Name,
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSizes.s20
  },
  Date: {
    ...Name,
    color: theme.palette.text.grey,
    fontSize: theme.typography.fontSizes.s15
  }
}));

export default { small, large };