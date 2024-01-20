import React from 'react';
import AppBar from '@mui/material/AppBar';


const Navbar = () => {
  return (
    <AppBar position="fixed" color="default" sx={{
        backgroundColor: "#D8D2DE",
        width: "1464px",
        height: "40px",
        border: "1px, 0px, 1px, 0px",
        marginLeft:"72px",
        marginTop:"48px",
        boxShadow: 'none',
      }}>
    </AppBar>
  );
};

export default Navbar;
