<template>
    <header>
        <div class="container">
            <nav>
                <ul class="navigation-menu">
                    <li>
                        <a href="#Home" >Home
                        </a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                        <a href="#portfolio" @click="toelements"> portfolio
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
                        <a href="#contacts" v-smooth-scroll="{ duration: 1000 }"> contacts
                        </a>
                        <span class="left-top"></span>
                        <span class="right-bottom"></span>
                    </li>
                    <li>
                    <el-select v-model="value" placeholder="Ru">
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
                    value: 'Ru',
                    label: 'Ru',
                }, {
                    value: 'En',
                    label: 'En',
                    disabled: true
                }, {
                    value: 'Fr',
                    label: 'Fr',
                }],
                value: '',
            }
        },
        methods:{
            toelements(el){
                this.scroll({ el : el, scroll :{ x : "never" }, block : "start", margin : 0 },5000);
            },
            scrollToEl(el){
                this.scroll({ el : el, scroll :{ x : "never" }, block : "start", margin : 0 },5000);
            },
            scrollToTop(){
                this.body_scrollbar.scroll({y:0},1000);
            }
        },
    }
</script>

<style scoped>

</style>