<template>
    <div>
        <banner :title="title"></banner>
    </div>
</template>

<script>
import banner from './components/banner.vue';
export default {
    data: function () {
        return {
        }
    },
    components: {
        banner: banner
    }
}
</script>

<style lang="css">

</style>

