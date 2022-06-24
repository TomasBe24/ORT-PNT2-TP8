import Vue from "vue";
import VueRouter from "vue-router";

import FormComp from './components/FormComp.vue'
import UserComp from './components/UsersComp.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode : "history",
    routes : [
        {path : '/', redirect : '/form'},
        {path : '/form', component : FormComp},
        {path : '/usuarios', component : UserComp}
    ]
})
