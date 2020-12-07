import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState={
    dishes: DISHES,     //java script object
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
export function Reducer(state = initialState, action) {
    return state;
}
// const Reducer = (state = initialState, action) => {
//     return state;
// };