<template>
    <div>
        <h1>Posts Item</h1>
        <h2 v-if="post?.title">{{ post.title }}</h2>
        <h2 v-else>Not Found</h2>
    </div>
</template>
<script>
export default {
    //Render server
    async asyncData({ params, $http }) {
        const id = params['id'];
        try {
            const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`);
            return { post };
        } catch (error) {
            console.log(error);
            return {
                post: undefined,
            };
        }
    },
};
</script>
<style></style>
