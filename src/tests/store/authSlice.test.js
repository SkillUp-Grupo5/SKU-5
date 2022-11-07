import {
    authCheckingFinish,
    authLogin,
    authLogout,
    authSlice,
    getAllTransactions
} from "../../../src/store/slices/authSlice";

import {
    demoUser,
    initialState,
    unAuthenticatedState,
    transactions
} from "../fixtures/authStates";



describe('Tests on authSlice', () => {

    let state;

    beforeEach(() => {
        state = authSlice.getInitialState();
    });

    test('should be called "auth"', () => {

        expect(authSlice.name).toBe('auth');
    });

    test('should return the initial state', () => {

        expect(authSlice.getInitialState()).toEqual(initialState);
    });

    test('should log a user', () => {

        state = authSlice.reducer(state, authLogin(demoUser));

        expect(state).toEqual({
            checking: false,
            ...demoUser
        });
    });

    test('should mark the "checking" as finished', () => {

        state = authSlice.reducer(state, authCheckingFinish());

        expect(state).toEqual(unAuthenticatedState);
    });

    test('should do the user logout', () => {


        state = authSlice.reducer(state, authLogout());

        expect(state).toEqual(unAuthenticatedState);
    });

    test('should load the transactions', () => {

        state = authSlice.reducer(state, getAllTransactions(transactions));

        expect(state.transactions.length).toBe(transactions.length);

        expect(state.transactions[0]).toEqual(transactions[0]);
    });
});