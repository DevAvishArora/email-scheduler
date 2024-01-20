import React from 'react';
import Button from '@mui/material/Button';
import styles from './CustomButton.module.css';

const CustomButton = ({ label, icon, backgroundColor ,color, onClick  }) => {
  return (
    <Button
      variant="contained"
      className={styles.customButton}
      style={{ backgroundColor: backgroundColor , color:color||"white"}}
      startIcon={icon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
