<template>
    <section  class="banner-section" id="section_1">
       <div class="container">
<!--           <span>{{TranslateText.spanText}} </span>-->
<!--           <h2>{{TranslateText.name}}</h2>-->
<!--           <p>{{TranslateText.Developer}}</p>-->
       </div>
    </section>
</template>

<script>
    export default {
        name: "HomeSectionOne",
        data() {
            return {

            }
        },
        methods:{

        },
        computed: {
           TranslateText () {
                return this.$store.getters.doneTranslations
            }
        }
    }
</script>

<style scoped>

</style>