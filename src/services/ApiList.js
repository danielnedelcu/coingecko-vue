import Api from './Api'

/**
 * API abstraction for the coingecko coin list service
 */
export default {
    /**
     * Fetch coin list data
     * 
     * @type GET
     */
    getCoinList() {
        return Api().get('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'); 
    },

    /**
     * Fetch individual coin
     * 
     * @type GET
     * @param {String} str 
     */
    getCoin(str) {
        return Api().get(`search?query=${str}`); 
    }
}