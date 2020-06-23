<template>
  <div class="home">
    <p class="control" style="text-align:left;" v-if="!isLoggedIn">
        <label>welcome to isohel</label>
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login']),
};
</script>
