<template>
  <div>
    <div class="coin-item">
      <img v-if="image" :src="image" />
      <div class="column">
        <span>Symbol: {{ data.symbol }}</span>
        <span>Name: {{ data.name }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import  store from '../store/index'

export default {
    name: 'coin-item',
    store,
    props : {
        data : { type : Object, required : true }
    },

    data () {
      return {
        item: this.data,
        obj: {}
      }
    },
    
    computed: {
      image () {
        return this.data.thumb ? this.data.thumb : this.data.image
      }
    },

    methods : {   
    }
}
</script>

<style scoped>
  .card {
    background-color: #f0f0f0;
    padding: 20px 20px;
    margin: 3px 0;
    width: 100%;

  }

  .coin-item {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    text-align: left;
  }

  img {
    object-fit: contain;
    width: 40px;
  }

  .column {
    display: flex;
    flex-flow: column;
    margin-left: 30px;
  }
</style>