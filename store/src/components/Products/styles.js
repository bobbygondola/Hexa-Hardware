import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  bg: {
    backgroundColor: "#353432",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  root: {
    flexGrow: 1,
  },
}));