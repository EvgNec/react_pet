import css from './Event.module.css';
import PropTypes from 'prop-types';

export const Event = ({name, location, speaker, type, start, end}) => {
    return <div className={css.event}>
    <h2 className={css.title}>{name}</h2>
    <p className={css.info}>
        <i className={css.icon}>Location</i>
    </p>
    <p className={css.info}>
        <i className={css.icon}>Speaker</i>
    </p>
    <p className={css.info}>
        <i className={css.icon}>Start Date</i>
    </p>
    <p className={css.info}>
        <i className={css.icon}>Duration</i>
    </p>
   <span className={css.chip}>Event type</span>
    </div>;
}

Event.propTypes = {
    name:PropTypes.string.isRequired, 
    location:PropTypes.string.isRequired, 
    speaker:PropTypes.string.isRequired, 
    type:PropTypes.string.isRequired,
    start:PropTypes.string.isRequired, 
    end:PropTypes.string.isRequired}