import PropTypes from 'prop-types';
import {formatEventStart, formatEventDuration} from '../../../Utils';
import { iconSize } from '../../../constans'
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, finish }) => {
    const formattedStart= formatEventStart(start);
    const duration = formatEventDuration(start,finish);
    
    return (
      <Card>
        <EventName>{name}</EventName>
        <Info>
          <FaMapMarkerAlt size={iconSize.sm} />
          {location}
        </Info>
        <Info>
          <FaUserAlt size={iconSize.sm} />
          {speaker}
        </Info>
        <Info>
          <FaCalendarAlt size={iconSize.sm} />
          {formattedStart}
        </Info>
        <Info>
          <FaClock size={iconSize.sm} />
          {duration}
        </Info>
        <Chip eventType={type}>{type}</Chip>
      </Card>
    );
  };

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
};
