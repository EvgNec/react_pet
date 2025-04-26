import css from './Event.module.css';

export const Event = ({events}) => {
    return <div className={css.eventBoard}>
    {events.map(event => <div key={event.name}>{event.name}</div>)}
    </div>;
}