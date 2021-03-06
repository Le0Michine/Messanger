import { ActionReducer, Action } from '@ngrx/store';
import { login, logoff } from './authorization.actions';
import { AuthorizationActions } from '../reducers';

describe('Authorization actions', () => {

    it('should return LOGIN action', () => {
        // arrange
        // act
        const result = login();

        // assert
        expect(result).toEqual({ type: AuthorizationActions.LOGIN, payload: null });
    });

    it('should return LOGOFF action', () => {
        // arrange
        // act
        const result = logoff();

        // assert
        expect(result).toEqual({ type: AuthorizationActions.LOGOFF, payload: null });
    });
});
