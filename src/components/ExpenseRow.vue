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
    .date-input {
        width: 75px;
        margin-right: 15px;
    }

    .value-input {
        width: 250px;
    }
</style>

<template>
    <div class="d-flex justify-content-between">
        <div class="date-input">
            <ejs-numerictextbox
                v-model="localDate"
                format="n"
                :showSpinButton="false"
                @blur="updateDate"
            ></ejs-numerictextbox>
        </div>
        <div class="value-input">
            <ejs-numerictextbox
                v-model="localValue"
                format="c"
                :showSpinButton="false"
                @blur="updateValue"
            ></ejs-numerictextbox>
        </div>
    </div>
</template>