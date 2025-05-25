import { 
  FaThLarge, FaHistory, FaCalendarAlt, FaStethoscope, FaChartPie, 
  FaVials, FaComments, FaCog, FaPhone
} from 'react-icons/fa';

const navigation = [
  {
    section: 'General',
    links: [
      { label: 'Dashboard', icon: <FaThLarge />, isActive: true },
      { label: 'History', icon: <FaHistory /> },
      { label: 'Calendar', icon: <FaCalendarAlt /> },
      { label: 'Appointments', icon: <FaStethoscope /> },
      { label: 'Statistics', icon: <FaChartPie /> },
      { label: 'Tests', icon: <FaVials /> },
    ],
  },
  {
    section: 'Tools',
    links: [
      { label: 'Chat', icon: <FaComments /> },
      { label: 'Support', icon: <FaPhone /> },
    ],
  },
  {
    section: 'Bottom',
    links: [
      { label: 'Setting', icon: <FaCog /> },
    ],
  },
];

export default navigation;
