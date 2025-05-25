import lungsIcon from '../assets/lungs.png';
import toothIcon from '../assets/tooth.png';
import boneIcon from '../assets/bone.png';
import heartIcon from '../assets/heart.png';
import legIcon from '../assets/leg.png';

export const anatomyData = [
  {
    label: 'Healthy Heart',
    status: 'healthy',
    icon: heartIcon,
    type: 'heart',
    position: { top: '18%', left: '82%' }
  },
  {
    label: 'Healthy Leg',
    status: 'healthy',
    icon: legIcon,
    type: 'leg',
    position: { top: '63%', left: '18%' }
  }
];


export const healthCards = [
  {
    title: 'Lungs',
    status: 'Issue',
    date: '2021-10-05',
    icon: lungsIcon,
    progressColor: 'rgb(168, 3, 3)',
  },
  {
    title: 'Teeth',
    status: 'Healthy',
    date: '2021-10-03',
    icon: toothIcon,
    progressColor: 'rgb(11, 175, 175)',
  },
  {
    title: 'Bone',
    status: 'Issue',
    date: '2021-10-07',
    icon: boneIcon,
    progressColor: 'rgb(250, 103, 5)',
  },
];

