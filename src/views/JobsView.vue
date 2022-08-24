<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="job-list">
      <li v-for="(item, index) in jobs" :key="index" class="post">
        <div>
          <p>
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small>
            {{ item.time_ago }}, 
            {{ item.domain }}
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