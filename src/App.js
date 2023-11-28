
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import DashboardPanel from './Component/DashboardPanel/DashboardPanel';
import Notification from './Component/Notification/Notification';
import {  Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import AddNotification from './Component/Notification/AddNotification';
import ApplicationPage from './Component/Application/ApplicationPage';
import UploadForm from './Component/Application/UploadForm';
import StatusForm from './Component/Application/StatusForm';
import NewApplicationForm from './Component/Application/NewApplication';
function App() {
   
  return (
    <>
    <Box className="app-container" 
    
    style={{backgroundImage: `linear-gradient(90deg,#2196F3 30%, #64B5F6 90%)`, height:"100%"}}>
      <Navbar />

     <Routes>
          <Route exact path="/" element={<DashboardPanel />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Notification/addNotification" element={<AddNotification />} />
          <Route path="/Application" element={<ApplicationPage />} />
          <Route path="/Application/NewApplication" element={<NewApplicationForm />} />
          <Route path="/Application/Upload" element={<UploadForm />} />
          <Route path="/Application/Status" element={<StatusForm />} />
          </Routes>
      </Box>
    </>
  );
}

export default App;
