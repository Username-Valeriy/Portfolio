<template>
    <div>
        <Home @scrolltoel="scrolltoel" @setlang="setlang"/>
    </div>
</template>

<script>
export default {
    name: 'App',
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