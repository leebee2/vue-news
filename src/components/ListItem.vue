<template>
    <div>
        <ul class="list">
            <li v-for="(item, index) in listItem" :key="index" :class="[{ 'addpost': $route.name !== 'news' },'post']">
                <div v-show="$route.name === 'news'" class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        listItem() {
            const name = this.$route.name;
            return this.$store.state[name]
        }
    },
    created() {
        const name = this.$route.name;
        const patchName = name === 'news' ? 'FETCH_NEWS' : name === 'ask' ? 'FETCH_ASKS' : 'FETCH_JOBS';

        this.$store.dispatch(patchName);
    }
}
</script>

<style scoped>
.list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.title {
    margin: 0;
}

.link-text {
    color: #828282;
}
.addpost{
    padding: 8px;
}
</style>