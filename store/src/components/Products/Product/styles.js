import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '90%',
    height: '400px',
    wordWrap: 'break-word',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  cardContent: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F5F4F1",
    color: "black",
    width: '100%'
  },
}));