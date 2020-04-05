<script>
import Vue from 'vue';
import { InputNumber, Icon } from 'ant-design-vue';
import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
// import moment from 'moment';

Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(NumericTextBoxPlugin);

export default {
    name: 'ExpenseRow',

    data() {
        return {
            editMode: false,
            localValue: '',
            localDate: ''
        }
    },

    props: {
        value: {
            type: [Number, String],
            required: true
        },
        date: {
            type: [Number, String],
            required: true
        }
    },

    methods: {
        // editExpense() {
        //     this.editMode = true;
        // },

        // updateExpense() {
        //     this.$emit('update', {
        //         id: this.expense.id,
        //         value: this.value
        //     });
        //     this.editMode = false;
        // },

        updateDate() {
            this.$emit('updateDate', this.localDate);
        },

        updateValue() {
            this.$emit('updateValue', this.localValue);
        }
    },

    mounted() {
        this.localValue = this.value;
        this.localDate = this.date;
    }
}
</script>

<style scoped>
    /* .expense-row {
        width: 300px;
    } */

    .date-input {
        width: 75px;
        margin-right: 15px;
    }

    .value-input {
        width: 250px;
    }
</style>

<template>
    <div class="expense-row d-flex justify-content-between">
        <div class="date-input">
            <ejs-numerictextbox v-model="localDate" :showSpinButton="false" @blur="updateDate"></ejs-numerictextbox>
        </div>
        <div class="value-input">
            <ejs-numerictextbox v-model="localValue" :showSpinButton="false" @blur="updateValue"></ejs-numerictextbox>
        </div>
        <!-- <a-input-number v-model="localDate"></a-input-number>
        <div v-if="!editMode" class="d-flex justify-content-between align-items-center">
            <p>{{ localValue }}</p>
            <a-icon type="form" @click="editExpense"/>
        </div>
        <div v-if="editMode" class="d-flex justify-content-between align-items-center">
            <a-input-number v-model="localValue" class="form-control expense-input"></a-input-number>
            <a-icon type="plus-circle" @click="updateExpense"/> 
        </div> -->
    </div>
</template>