import muscleIcon from "../assets/muscle.png";
import toothIcon from "../assets/tooth.png";

export const calendarDays = [
  {
    day: "Mon",
    date: "25",
    slots: ["10:00", "11:00", "12:00"],
  },
  {
    day: "Tue",
    date: "26",
    slots: ["08:00", "09:00", "12:00"],
  },
  {
    day: "Wed",
    date: "27",
    slots: ["11:00", "......", "13:30"],
  },
  {
    day: "Thu",
    date: "28",
    slots: ["10:00", "11:00", "......."],
  },
  {
    day: "Fri",
    date: "29",
    slots: [".......", "14:00", "16:00"],
  },
  {
    day: "Sat",
    date: "30",
    slots: ["12:00", "15:00", "16:00"],
  },
  {
    day: "Sun",
    date: "31",
    slots: ["09:00", "12:00", "10:00"],
  },
];

export const appointmentCards = [
  {
    title: "Dentist",
    time: "09:00 - 11:00",
    doctor: "Dr. Cameron Williamson",
    bgColor: "#2f329b",
    textColor: "#fff",
    icon: toothIcon,
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00 - 12:00",
    doctor: "Dr. Kevin Djones",
    bgColor: "#d8def8",
    textColor: "#1e1e6e",
    icon: muscleIcon,
  },
];
