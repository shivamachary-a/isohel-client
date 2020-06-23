<template>
  <div>
    <h1>uhhhh</h1>
    <pre>{{ portfolio }} </pre>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Port',
  created() {
    this.bindPortfolios();
  },
  computed: mapState('port', ['portfolio']),
  methods: mapActions('port', ['bindPortfolios']),
};
</script>
