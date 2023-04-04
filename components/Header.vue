<template>
    <div>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/mountains">Mountains</NuxtLink></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Header',
};
</script>
<style scoped>
ul {
    display: flex;
    list-style: none;
}
a {
    text-decoration: none;
    font-size: 20px;
    padding: 0 10px;
    color: blue;
}
</style>
