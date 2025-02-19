import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount:{
        id:1,
        userName:"Hazal",
        fullName:"Hazal Yaşar Karaca",
        avatar:"https://pbs.twimg.com/profile_images/1891478645031546880/R9MEQLG7_bigger.png"

    },
    accounts: []
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        _addAccount(state, action) {
            state.accounts.push(action.payload);
        },
        _removeAccount(state, action) {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false);
            }
        },
        _setCurrentAccount(state, action) {
            state.currentAccount = action.payload;
        }
    }
});

export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions;
export default auth.reducer

