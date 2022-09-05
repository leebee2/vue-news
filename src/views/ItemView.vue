<template>
  <div>
    <section>
      <user-profile>
        <router-link slot="username" :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + item.time_ago }}</template>
      </user-profile>
      <h2>
        {{ item.title }}
      </h2>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['item'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
  components: {
    UserProfile
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>