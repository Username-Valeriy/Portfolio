<template>
    <div>
        <Header v-on:scrolltoel="scrolltoel" />
            <HomeSectionOne ref="one"   v-observe-visibility="visibilityChanged" :class="{'color-bg':this.inVisible}"/>
            <HomeSectionTwo ref="two" v-observe-visibility="visibilityChanged"/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return{
                inVisible:null,
            }
        },
        methods:{
            scrolltoel(el){
                this.$emit('scrolltoel', el)
            },
            visibilityChanged(isVisible, entry){

                console.log(isVisible)
                console.log( entry.target.id)
            }
        }
    }
</script>