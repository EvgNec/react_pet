import css from './Event.module.css';
import PropTypes from 'prop-types';
import {formatEventStart} from '../../../Utils/FormatEventStart.js';
import {formatEventDuration} from '../../../Utils/FormatEventDuration.js';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

export const Event = ({ name, location, speaker, type, start, finish }) => {
    const formattedStart= formatEventStart(start);
    // const Duration = formatEventDuration(start,finish);
    console.log("🚀 ~ Event ~ start,finish:", start,finish)
  
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={16} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={16} />
        {finish}
      </p>
      <span className={css.chip}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.arrayOf(),
  start: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
};
