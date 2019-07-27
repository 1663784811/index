<template>
    <div>
        <BaseTree></BaseTree>
    </div>
</template>

<script>
    import BaseTree from "./BaseTree";

    export default {
        name: "Index",
        components: {
            BaseTree
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .baseTree {
        margin: 100px auto auto;
        width: 300px;
    }
</style>
