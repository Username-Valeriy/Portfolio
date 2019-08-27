<template>
    <header>
        <div class="container">
            <nav>
                <ul class="navigation-menu">
                    <li>
                        <a href="#Home" >Home</a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                        <a href="#portfolio" ref="portfolio"  @click.prevent="scrollToEl"> portfolio
                        </a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                        <a href="#skills" >skills
                        </a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                        <a href="#contacts"> contacts
                        </a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                    <el-select v-model="value" @change="changeCurrentLang" placeholder="Ru">
                        <el-option
                                v-for="item in optionsLanguage"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                optionsLanguage: [{
                    value: 'ru',
                    label: 'Ru',
                }, {
                    value: 'en',
                    label: 'En',
                }, {
                    value: 'fr',
                    label: 'Fr',
                    disabled: true
                }],
                value: '',
            }
        },
        methods:{
            scrollToEl(){
                this.$emit('scrolltoel', this.$refs.portfolio)
            },
            changeCurrentLang(key)
            {
                this.$emit('setlang', key)
            }
        },
    }
</script>

<style scoped>

</style>