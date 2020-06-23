<template>
  <tr key="componentKey">
    <td class="button is-black yeet" v-on:click = "calliex()">Refresh</td>
    <td>{{ticker}}</td>
    <td class="pricebox">{{this.stockdetails.price}}</td>
    <td class ="button is-black yeet" :click="deleteC()">Remove</td>
  </tr>
</template>
<script>
import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';

export default {
  name: 'StockRow',
  props: ['ticker'],
  data() {
    return {
      stockdetails: {
        price: null,
        time: null,
        date: null,
      },
      clicked: false,
      componentKey: 0,
    };
  },
  methods: {
    calliex: async function () {
      const base = 'https://sandbox.iexapis.com/stable/stock/';
      const stock = this.ticker;
      const end = '/quote/latestPrice?token=Tsk_12a652ebe24b4421a3401e1a649f418c';

      const url = base.concat(stock).concat(end);
      await fetch(url)
        .then((response) => response.json())
        // eslint-disable-next-line
        .then(data => {
          this.stockdetails.price = data;
          console.log(this.stockdetails);
        });
    },

    deleteC: function () {
      this.componentKey += 1;
    },
  },
};
</script>
<style scoped>
.yeet{

  margin-left:1em;
  margin-right:1em;
  margin-top:2mm;
  margin-top:2mm;
  margin-bottom:1mm;
}

.pricebox{
  margin-right:3em;
}
</style>
