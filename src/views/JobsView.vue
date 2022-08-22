<template>
  <div>
    <p v-for="(item, index) in jobs" :key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small> {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['jobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>
</style>