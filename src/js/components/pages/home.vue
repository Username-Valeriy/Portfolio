<template>
    <div>
        <Header v-on:scrolltoel="scrolltoel" @setlang="setlang"/>
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
            },
            setlang(lang){
                this.$emit('setlang', lang)
            }
        }
    }
</script>