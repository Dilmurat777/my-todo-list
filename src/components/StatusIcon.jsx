import CompletedStatus from '../assets/icons/CompletedStatus';
import UncompletedStatus from '../assets/icons/UncompletedStatus';
import NewStatus from '../assets/icons/NewStatus';

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'new':
      return <NewStatus />;
    case 'completed':
      return <CompletedStatus />;
    case 'uncompleted':
      return <UncompletedStatus />;
    default:
      return null;
  }
};

export default StatusIcon;