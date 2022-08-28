import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portal from "./Component/Portal";
import Student from "./Component/Student";
import { UserProvider } from "./Context/UseContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Portal />}>
              <Route index element={<Student />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
