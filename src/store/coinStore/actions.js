import { MUTATE_ADD_COINS } from "../../constants/mutations.type";
import Services from '../../services/ApiList'


/**
* Fetchs coin list
 * 
 * @param {state} commit 
*/
export async function AssignCoinList ({ commit }) {
    try {
        let response = await Services.getCoinList();	   
        commit(MUTATE_ADD_COINS, response.data);
    } catch (e) {
        console.log('Data fetch failure:', e)
    }    
}

/**
* Fetchs coin list
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignCoin ({ commit }, payload) {
    try {
        let response = await Services.getCoin(payload);	
        commit(MUTATE_ADD_COINS, response.data.coins);
    } catch (e) {
        console.log('Data fetch failure:', e)
    }    
}