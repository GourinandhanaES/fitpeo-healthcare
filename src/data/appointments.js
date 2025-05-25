import eyeIcon from '../assets/eye.png';
import syringeIcon from '../assets/syringe.png';
import heartIcon from '../assets/heart.png';
import doctorIcon from '../assets/doctor.png';


const upcomingAppointments = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "11:00 AM", icon: syringeIcon },
      { title: "Ophthalmologist", time: "14:00 PM", icon: eyeIcon }
    ]
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "12:00 AM", icon: heartIcon },
      { title: "Neurologist", time: "16:00 PM", icon: doctorIcon }
    ]
  }
];

export default upcomingAppointments;
