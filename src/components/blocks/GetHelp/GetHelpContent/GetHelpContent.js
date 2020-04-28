import React from 'react';
import { Link } from 'gatsby';
import { Card, Box, makeStyles, Typography, Input, } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import GetHelpList from '../GetHelpList/GetHelpList';

const styles = makeStyles((theme) => ({
  Card: {
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    padding: '25px',
    backgroundColor: '#FAFBFC',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      maxHeight: '190px',
      backgroundColor: theme.palette.secondary.main
    }
  },
  CardInner: {
    position: 'relative'
  },
  Title: {
    color: theme.palette.text.white,
    fontFamily: 'Montserrat',
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 700,
    textAlign: 'center'
  },
  TitleGutter: {
    marginBottom: '25px'
  },
  CardContent: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    height: '600px',
    borderRadius: '10px',
    padding: '20px 10px',
    '&:not(:last-child)': {
      marginBottom: '20px'
    }
  },
  ContentTitle: {
    // color: theme.palette.text.default,
    fontFamily: 'Muli',
    fontSize: theme.typography.fontSizes.s15,
    fontWeight: 800
  },
  ContentTitleGutter: {
    marginBottom: '15px'
  },
  Search: {
    color: theme.palette.text.grey,
    height: '39px',
    fontFamily: 'Montserrat',
    fontSize: theme.typography.fontSizes.s15,
    backgroundColor: '#F4F4F4',
    border: '1px solid #F1F1F1',
    borderRadius: '5px',
    paddingLeft: '10px',
    marginBottom: "25px"
  },
  SearchInput: {
    fontSize: 'inherit'
  },
  SearchSvg: {
    fontSize: theme.typography.fontSizes.s28
  },
  Link: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSizes.s12,
    fontWeight: 700,
    textDecoration: 'none'
  }
}));

const getHelp = props => {
  const classes = styles();

  return (
    <Card elevation={ 8 } className={ classes.Card }>
      <Box className={ classes.CardInner }>
        <Typography
          gutterBottom
          classes={ {
            root: classes.Title,
            gutterBottom: classes.TitleGutter
          } }
        >
          TaxFox Support
        </Typography>
        <Box className={ classes.CardContent }>
          <Typography
            gutterBottom
            classes={ {
              root: classes.ContentTitle,
              gutterBottom: classes.ContentTitleGutter
            } }
          >
            Got questions?
          </Typography>
          <Input
            id="search"
            type="search"
            placeholder="Search for help"
            fullWidth
            disableUnderline={ true }
            classes={ {
              root: classes.Search,
              input: classes.SearchInput
            } }
            startAdornment={ <SearchIcon color="inherit" classes={ { root: classes.SearchSvg } }/> }
          />
          <GetHelpList list={ props.list }/>
        </Box>
        <Link to="/help" className={ classes.Link }>Still Need help?</Link>
      </Box>
    </Card>
  );
};

getHelp.defaultProps = {
  list: [
    'What is a Flexi SIP?',
    'What are the available mode of payments for SIP?',
    'Does the Fund House allotment show it as Flexi…',
    'What is a Flexi SIP?',
  ]
};

export default getHelp;