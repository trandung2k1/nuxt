<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    //Not this
    async asyncData(context) {
        // console.log(context.$axios);
    },
    middleware({ store, redirect }) {
        const isAuthenticated = false;
        if (!isAuthenticated) {
            // redirect('/about');
        }
    },
    methods: {
        refresh() {
            this.$nuxt.refresh();
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        });
    },
};
</script>
