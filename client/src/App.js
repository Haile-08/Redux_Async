import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Applayout from "./components/Applayout";
import Addpage from "./components/page/AddPage";
import Editpage from "./components/page/EditPage";
import Login from "./components/page/Login";
import Signup from "./components/page/Signup";

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
          <Routes>
            <Route path="/" element={<Applayout />} />
            <Route path="/Add" element={<Addpage />} />
            <Route path="/Edit" element={<Editpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Grid>
      </header>
    </div>
  );
}

export default App;
