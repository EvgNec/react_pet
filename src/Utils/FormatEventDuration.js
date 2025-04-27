import { formatDistanceStrict } from 'date-fns';

export const formatEventDuration = ({start, finish}) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(finish))
};