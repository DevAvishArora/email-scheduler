import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import CustomTable from '../CustomTable/CustomTable';
import SearchBar from '../SearchBar/SearchBar';
import CustomButton from '../CustomButton/CustomButton';
import ScheduleForm from '../ScheduleForm/ScheduleForm'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from './EmailSchedulerApp.module.css';

const EmailSchedularApp = () => {
  const [isScheduleFormOpen, setIsScheduleFormOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsScheduleFormOpen(true);
  };

  const handleCloseScheduleForm = () => {
    setIsScheduleFormOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main>
        <Navbar />
        <div className={styles.header}>
          <SearchBar />
          <CustomButton label="Add" backgroundColor="#391E5A" icon={<AddCircleOutlineIcon />}  onClick={handleAddButtonClick} />
        </div>
        <CustomTable />
        <ScheduleForm isOpen={isScheduleFormOpen} onClose={handleCloseScheduleForm} />
      </main>
    </div>
  );
};

export default EmailSchedularApp;
