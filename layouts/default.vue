<template>
    <div>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <Header></Header>
        <Nuxt />
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {};
</script>
<style></style>
