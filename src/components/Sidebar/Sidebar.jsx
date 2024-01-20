import React from 'react';
import Drawer from '@mui/material/Drawer';


const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        backgroundColor: "#391E5A",
        width: "72px",
        height: "934px",
        marginTop:"48px",
      }}
    >
    </Drawer>
  );
};

export default Sidebar;
