import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,

  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    </div>
  );
}
