import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "../../assets/edit.png";
import DeleteIcon from "../../assets/delete.png";
import ScheduleForm from "../ScheduleForm/ScheduleForm";

const data = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt est, dictum convallis purus. Fusce eu est a lacus luctus sodales id vitae diam. Ut interdum tristique ....",
    subject: "Subject 1",
    schedule: "Schedule 1",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt est, dictum convallis purus. Fusce eu est a lacus luctus sodales id vitae diam. Ut interdum tristique ....",
    subject: "Subject 2",
    schedule: "Schedule 2",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt est, dictum convallis purus. Fusce eu est a lacus luctus sodales id vitae diam. Ut interdum tristique ....",
    subject: "Subject 2",
    schedule: "Schedule 2",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt est, dictum convallis purus. Fusce eu est a lacus luctus sodales id vitae diam. Ut interdum tristique ....",
    subject: "Subject 2",
    schedule: "Schedule 2",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt est, dictum convallis purus. Fusce eu est a lacus luctus sodales id vitae diam. Ut interdum tristique ....",
    subject: "Subject 2",
    schedule: "Schedule 2",
  },
];

const columns = [
  {
    key: "title",
    label: "Title",
    styles: {
      padding: "0 0 0 25px",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  {
    key: "description",
    label: "Description",
    styles: {
      maxWidth: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      padding: "0 0 0 25px",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  {
    key: "subject",
    label: "Subject",
    styles: {
      padding: "0 0 0 25px",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  {
    key: "schedule",
    label: "Schedule",
    styles: {
      padding: "0 0 0 25px",
      fontFamily: "Nunito Sans",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  // Add more columns as needed
];
const headers = ["Title", "Description", "Subject", "Schedule", "Actions"];
const CustomTable = () => {
  const [isScheduleFormOpen, setScheduleFormOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleEditClick = (row) => {
    setSelectedSchedule(row);
    setScheduleFormOpen(true);
  };

  const handleScheduleFormClose = () => {
    setSelectedSchedule(null);
    setScheduleFormOpen(false);
  };
  const handleDeleteClick = (row) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      console.log("Deleting:", row);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: "1360px",
          height: "281px",
          marginTop: "60px",
          left: "96px",
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead
            sx={{
              height: "40px",
              backgroundColor: "#D8D2DE",
              fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "19px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#333333",
              padding: "0",
            }}
          >
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index} sx={{ padding: "0 0 0 25px" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} sx={column.styles}>
                    {row[column.key]}
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={() => handleEditClick(row)}>
                    <img src={EditIcon} alt="Edit" />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(row)}>
                    <img src={DeleteIcon} alt="Delete" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isScheduleFormOpen && (
        <ScheduleForm
          isOpen={isScheduleFormOpen}
          onClose={handleScheduleFormClose}
          initialData={selectedSchedule}
        />
      )}
    </>
  );
};

export default CustomTable;
