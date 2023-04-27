import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Layout from './pages/Layout';
import TaskList from './pages/tasks/TaskList/TaskList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tasks" element={<TaskList />} />
          <Route path="calendar" element={<TaskList />} />
          <Route path="schedules">
            <Route index element={<TaskList />} />
            <Route path="build" element={<TaskList />} />
            <Route path="run" element={<TaskList />} />
          </Route>
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
