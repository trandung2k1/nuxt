<template>
    <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <div v-else>
            <h1>Nuxt Mountains</h1>
            <ul>
                <li v-for="mountain of mountains">{{ mountain.title }}</li>
            </ul>
            <button @click="$fetch">Refresh</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mountains: [],
        };
    },
    fetchDelay() {
        return 4000;
    },
    //call api get data => store, mounted < fetch, fetch use again (this.$fetch()), context, this, call server-side first, again client-side
    async fetch() {
        console.log('async');
        this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then((res) => res.json());
    },
};
</script>
