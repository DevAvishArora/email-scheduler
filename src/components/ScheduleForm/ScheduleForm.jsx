import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import styles from "./ScheduleForm.module.css";
import CustomButton from "../CustomButton/CustomButton";

const ScheduleForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    frequency: "Daily",
    repeat: "M",
    time: "12:00PM", 
  });
  const timeOptions = [
    "12:00AM",
    "12:15AM",
    "12:30AM",
    "12:45AM",
    "1:00AM",
    "1:15AM",
    "1:30AM",
    "1:45AM",
    "11:45PM",
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose();
  };

  const frequencyOptions = ["Daily", "Weekly", "Monthly"];

  const renderRepeatOptions = () => {
    if (formData.frequency === "Weekly") {
      const weekdays = ["S", "M", "T", "W", "Th", "F", "Sa"];

      return (
        <div className={`${styles.container} ${styles.checkboxRow}`}>
          <label htmlFor="repeat" className={styles.label}>
            Repeat
          </label>
          <div className={styles.checkboxRow}>
            {weekdays.map((day) => (
              <label key={day} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="repeat"
                  value={day}
                  checked={formData.repeat.includes(day)}
                  onChange={(e) => handleCheckboxChange(e, day)}
                  className={styles.checkbox}
                />
                <div
                  className={`${styles.checkboxCustom} ${
                    formData.repeat.includes(day) ? styles.checked : ""
                  }`}
                >
                  {day}
                </div>
              </label>
            ))}
          </div>
        </div>
      );
    } else if (formData.frequency === "Monthly") {
      return (
        <div className={styles.container}>
          <label htmlFor="repeat" className={styles.label}>
            Repeat
          </label>
          <select
            name="repeat"
            value={formData.repeat}
            onChange={handleInputChange}
            className={styles.input}
          >
            <option value="first-monday">First Monday</option>
            <option value="last-friday">Last Friday</option>
          </select>
        </div>
      );
    } else {
      return null;
    }
  };
  const handleCheckboxChange = (e, day) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      repeat: checked
        ? [...prevData.repeat, day]
        : prevData.repeat.filter((selectedDay) => selectedDay !== day),
    }));
  };

  return (
    <Popover
      open={isOpen}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      className={styles.popover}
    >
      <Paper
        style={{
          width: "336px",
          height: "388px",
          top: "112px",
          left: "1068px",
          borderRadius: "4px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={{ padding: "16px" }}>
          <h3
            style={{
              fontFamily: "Nunito Sans",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              marginTop: "0",
            }}
          >
            Add Schedule
          </h3>
          <div className={styles.container}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="frequency" className={styles.label}>
              Frequency
            </label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
              className={styles.input}
            >
              {frequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {renderRepeatOptions()}
          <div className={styles.container}>
            <label htmlFor="time" className={styles.label}>
              Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className={styles.input}
            >
              {timeOptions.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.buttonStyle}>
            <div>
              <CustomButton
                label="Cancel"
                backgroundColor="#EBE8EF"
                onClick={onClose}
                color="#333333"
              />
            </div>
            <div>
              <CustomButton
                label="Done"
                backgroundColor="#391E5A"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </Paper>
    </Popover>
  );
};

export default ScheduleForm;
