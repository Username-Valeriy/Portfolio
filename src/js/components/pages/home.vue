<template>
    <div>
        <Header v-on:scrolltoel="scrolltoel" />
            <HomeSectionOne ref="one" v-observe-visibility="visibilityChanged"/>
            <HomeSectionTwo ref="two" v-observe-visibility="visibilityChanged"/>
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
            visibilityChanged(isVisible, entry){
                console.log(entry.target.id)
            }
        }
    }
</script>