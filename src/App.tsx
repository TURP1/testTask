import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<Home />} />
        <Route path={`${ROUTES.TASKS}/:id`} element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
