<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li v-for="(item, index) in ask" :key="index" class="post">
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by {{ item.user }}
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
}
</script>

<style>
</style>