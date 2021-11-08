import { Routes, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes>
        <Route path="books" element={<h1>Books</h1>} />
        <Route path="staffs" element={<h1>Staffs</h1>} />
        <Route path="action-history" element={<h1>History</h1>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
