<script>
    import Vue from 'vue';
    import Vuex from 'vuex';
    import Home from '../src/views/Home';
    import axios from 'axios';
    import { Layout } from 'ant-design-vue';

    Vue.use(Vuex);
    Vue.use(Layout);
    Vue.use(axios);

    export default {
        components: {
            Home
        }
    }
</script>
<template>
    <!-- <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div> -->

    <home></home>
</template>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
