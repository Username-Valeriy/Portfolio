<template>
    <div>
        <Home @scrolltoel="scrolltoel" />
    </div>
</template>

<script>
export default {
    name: 'App',
    methods:{
        scrolltoel(el){
            this.$emit('scrolltoel', el)
        }
    }
}
</script>