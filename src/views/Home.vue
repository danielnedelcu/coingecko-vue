<template>
  <div>
    <div>
      <h1>Coin list</h1>
      <div class="flex">
        <input v-on:keyup.enter="onSearch" type="text" v-model="search" placeholder="Search coin..."/>
        <button v-on:click="onSearch" type="button">Search</button>

        <div class="sortContainer">
          <span class="m-r-15">Sort by Market Cap</span>
          <select v-model="sortSelection">
            <option disabled value="">Please select one</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
      <div v-if="coinList.length">
        <coin-item v-for="(item, index) in updatedCoinList"
            :key="item.id" 
            :index="index"
            :data="item"
            class="card"
        />
      </div>
      <div v-else>
        <p v-if="!isFirstLoad">No coin match your seach criteria!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ASSIGN_COINS, ASSIGN_COIN }  from "../constants/actions.type";
import { GETTER_COIN_LIST}  from "../constants/getters.type";
import { mapActions, mapGetters } from 'vuex';
import Coin from '../components/Coin';

export default {
  name: 'CoinList',

  components : {
    'coin-item' : Coin
  },    


  data () {
    return {
      search: '',
      sortSelection: 'Ascending',
      isFirstLoad: true
    }
  },

  computed: {
      ...mapGetters ({
          coinList : 'coinStore/' + GETTER_COIN_LIST
      }),

      updatedCoinList() {
        let tempCoinList = this.coinList;

        return tempCoinList.sort((a,b) => {
            let x = a.market_cap_rank;
            let y = b.market_cap_rank;

            if(this.sortSelection === "Ascending") return x < y ? -1 : x > y ? 1 : 0
              else return x > y ? -1 : x < y ? 1 : 0;
        });
      }
  },   
  
  mounted() {
    this.coinList = this.coinList.length ? this.coinList : this.fetchCoinList();
  },
  
  methods : {
    ...mapActions( {
        fetchCoinList: 'coinStore/' + ASSIGN_COINS,
        fetchCoin: 'coinStore/' + ASSIGN_COIN
    }), 

    onSearch () {
       this.fetchCoin(this.search);
       this.isFirstLoad = false;
       this.search = '';
    }      
  }
}
</script>

<style scoped>
    .flex {
      display: flex;
      align-items: baseline;
    }
    .col-50 {
      width: 50%;
    }

    .m-r-15 {
      margin-right: 15px;
    }

    .sortContainer {
      margin-left: 30px;
    }

    .repo-container {
      display: flex;
      flex-flow: rows;
    }

    .repo-block {
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-between;
      padding: 0 20px;
    }

    .commit-block {
      padding: 0 20px;
    }

    .full-width {
      width: 100%;
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-between;
    }

    .input-container {
      padding: 50px 0;
    }

    input {
      border: 1px solid #c6c6c6;
      padding: 12px;
      width: 400px;
      margin-bottom: 18px;
      color: #888;
      font-size: 16px;
      font-weight: 300;
      margin-right: 10px;
    }

    input[type="text"]:focus {
      outline: none !important;
      border: 1px solid black;
    }

    button {
      border: 0;
      outline: 0;
      padding: 16px;
      border-radius: 5px;
      background-color: #ddd;
      -webkit-appearance: button;
      cursor: pointer;
      text-transform: uppercase;
    }

    select {
      color: #2b2b2b;
      border: 1px solid #2b2b2b;
      line-height: 1;
      outline: 0;
      padding: 1em 2.5em 1em 0.75em;
      border-radius: 5px;
      background-color: #fff;
    }
</style>