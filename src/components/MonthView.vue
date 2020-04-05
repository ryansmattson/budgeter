<script>
// import Vue from 'vue';
// import { InputNumber } from 'ant-design-vue';
import CategoryColumn from '../components/CategoryColumn';

// Vue.use(InputNumber);
export default {
    name: 'MonthView',

    components: {
        CategoryColumn
    }
}
</script>

<style scoped>
    .month-column {
        width: 200px;
    }
</style>

<template>
    <div>
        <div class="month-column">
            <h4>Utilities</h4>
            <category-column></category-column>
        </div>
    </div>
</template>