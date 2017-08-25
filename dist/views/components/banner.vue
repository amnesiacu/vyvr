<template lang="html">
    <div class="banner is-loading">
        <h1> {{ title }} </h1>
        <div class="banner__links">
            <span>
                <a href='https://www.linkedin.com/in/jonasvandevyver' target='_blank'>LinkedIn</a>
            </span>
            <span>
                <a href='https://github.com/amnesiacu' target='_blank'>GitHub</a>
            </span>
            <span>
                <a href='mailto:jonas.vandevyver@gmail.com'>Email</a>
            </span>
            <span>
                <a href='https://twitter.com/amnesiacu' target='_blank'>Twitter</a>
            </span>
        </div>
        <div class="banner__resume">
            <p><small><a href='/docs/cv.pdf' target='_blank'> download resume </a></small></p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function(){
            setTimeout( () => {
                document.querySelector('.banner').classList.remove('is-loading');
            }, 100);
        },
        props: ['title']
    }
</script>

<style lang="css">
    /* express-vue doesnt seem to be rendering these --> sass/components */
</style>

