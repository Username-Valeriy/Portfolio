<template>
    <header>
        <div class="container">
            <nav>
                <ul class="navigation-menu">
                    <li>
                        <a href="#Home" >Home</a>
                    </li>
                    <li>
                        <a href="#portfolio" v-smooth-scroll="{ duration: 1000 }"> portfolio</a>
                    </li>
                    <li>
                        <a href="#skills" v-smooth-scroll="{ duration: 1000 }">skills</a>
                    </li>
                    <li>
                        <a href="#contacts" v-smooth-scroll="{ duration: 1000 }"> contacts</a>
                    </li>
                    <li>
                    <el-select v-model="value" placeholder="Select">
                        <el-option
                                v-for="item in optionsLanguage"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
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
                body_scrollbar: null,
                optionsLanguage: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }, {
                    value: 'Option3',
                    label: 'Option3'
                }, {
                    value: 'Option4',
                    label: 'Option4'
                }, {
                    value: 'Option5',
                    label: 'Option5'
                }],
                value: ''
            }
        },
        methods:{
            scrollToEl(el){
                this.body_scrollbar.scroll({ el : el, scroll :{ x : "never" }, block : "start", margin : 0 },5000);
            },
            scrollToTop(){
                this.body_scrollbar.scroll({y:0},1000);
            }
        },
    }
</script>

<style scoped>

</style>