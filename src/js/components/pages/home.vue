<template>
    <div>
        <Header v-on:scrolltoel="scrolltoel" />
        <HomeSectionOne/>
        <HomeSectionTwo/>
        <Footer/>


    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods:{
            scrolltoel(el){
                this.$emit('scrolltoel', el)
            }
        }
    }
</script>