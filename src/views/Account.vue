<template>
  <div>
    <h1 class="title">Your Account, {{user.name}} </h1>
    <h2 class="title is-4">Settings</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),

};
</script>
