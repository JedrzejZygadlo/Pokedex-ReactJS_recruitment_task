import { hideModal } from '../actions';
import { HIDE_MODAL } from '../actions/actionTypes';

describe('display modal', () => {
    it('has the correct type', () => {
        const action = hideModal();

        expect(action.type).toEqual(HIDE_MODAL);
    });
})