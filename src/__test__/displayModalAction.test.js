import { displayModal } from '../actions';
import { DISPLAY_MODAL } from '../actions/actionTypes';

describe('display modal', () => {
    it('has the correct type', () => {
        const action = displayModal();

        expect(action.type).toEqual(DISPLAY_MODAL);
    });
    
    it('has the correct payload', () => {
        const action = displayModal(2);

        expect(action.payload).toEqual(2)
    })
})