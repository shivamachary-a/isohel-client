<template>
<div class="container">
    <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile" >
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-grey">
            <p class="title">Welcome,</p>
            <p class="subtitle">{{user.name}}</p>
          </article>
          <article class="tile is-child notification is-light">
            <p class="title"> Charts </p>
            <p class="subtitle"> Powered by TradingView </p>
            <Charts></Charts>
          </article>
          <article class="tile is-child notification is-light">
            <p class="title"> Analysis </p>
            <p class="subtitle"> Analyse a stock </p>
            <a class="button is-black myButton" @click="cunt()">Here</a>
          </article>
        </div>
        <div class="tile is-parent is-4">
          <article class="tile is-child notification is-black">
            <div class="content">
              <p class="title">Your watchlist</p>
              <p class="subtitle">You've got your eye on these:</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-dark">
            <p class="title">Portfolio</p>
            <p class="subtitle">Your stocks:</p>
            <div class="table=container">
              <table class="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th><abbr title="refresh">Refresh</abbr></th>
                    <th><abbr title="ticker">Ticker</abbr></th>
                    <th><abbr title="price">Price</abbr></th>
                    <th><abbr title="edit">Edit</abbr></th>
                  </tr>
                </thead>
                <tbody>
                    <StockRow ticker="AAPL"></StockRow>
                    <StockRow ticker="MSFT"></StockRow>
                    <StockRow ticker="TSLA"></StockRow>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import VueTradingView from 'vue-trading-view';
import router from '@/router';

import StockRow from '../components/StockRow.vue';
import Charts from '../components/Charts.vue';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: {
    cunt: function () {
      router.push('/analysis');
    },

  },
  components: {
    StockRow,
    Charts,
  },
};
</script>
