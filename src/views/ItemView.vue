<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`"> {{ item.user }} </router-link>
          <div class="time">{{item.time_ago}}</div>
        </div>
      </div>
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['item'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
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