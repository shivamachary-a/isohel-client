<template>
  <div class="hello">
    <VueTradingView :options="{
      theme: 'dark',
      width: '640',
      height: '400',
    }" />
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view';


export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    VueTradingView,
  },
};
</script>
