import { MUTATE_ADD_COINS } from "../../constants/mutations.type";

const mutations = {

    /**
     * Adds coins array to state
     * 
     * @param {*} state 
     * @param {*} arr 
     */
    [MUTATE_ADD_COINS](state, arr) {    
        state.coins.splice(0, state.coins.length);
        state.coins = arr;
     }
}

export default mutations;