import Applayout from "./components/Applayout";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: "#2f3542" }}
        >
          <Applayout />
        </Grid>
      </header>
    </div>
  );
}

export default App;
