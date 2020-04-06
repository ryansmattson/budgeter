<script>
    import Vue from 'vue';
    import { Icon } from 'ant-design-vue';
    import ExpenseRow from './ExpenseRow';
    import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

    Vue.use(Icon);
    Vue.use(NumericTextBoxPlugin);

    export default {
        name: 'CategoryColumn',

        components: {
            ExpenseRow
        },

        data() {
            return {
                newExpense: 0,
                localBudget: 0,
                localRollover: 0,
                localExpenses: []
            }
        },

        props: {
            budget: {
                type: Number,
                required: true
            },
            rollover: {
                type: Number,
                default: 0
            },
            expenses: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },

        methods: {
            addExpense() {
                this.localExpenses.push({ value: this.newExpense });
                this.newExpense = 0;
            },

            updateExpenseValue(value, id) {
                this.$emit('updateExpenseValue', {
                    value: value,
                    id: id
                })
            },

            updateExpenseDate(date, id) {
                this.$emit('updateExpenseDate', {
                    date: date,
                    id: id
                })
            }
        },

        mounted() {
            this.localBudget = this.budget;
            this.localRollover = this.rollover;
            this.localExpenses = this.expenses;
        }
    }
</script>

<style scoped>
    .expense-input {
        margin: 10px 10px 10px 0;
    }
</style>

<template>
    <div>
        <ejs-numerictextbox :showSpinButton="false" v-model="localBudget" format="c"></ejs-numerictextbox>
        <ejs-numerictextbox :showSpinButton="false" v-model="localRollover" format="c"></ejs-numerictextbox>
        <p>{{ budget + rollover }}</p>
        <expense-row
            v-for="expense in localExpenses"
            :key="expense.id"
            :value="expense.value"
            :date="expense.date"
            @updateValue="updateExpenseValue($event, expense.id)"
            @updateDate="updateExpenseDate($event, expense.id)"
        ></expense-row>
        <div class="d-flex justify-content-between align-items-center">
            <a-input-number v-model="newExpense" class="form-control expense-input"></a-input-number>
            <a-icon type="plus-circle" @click="addExpense" />
        </div>
    </div>
</template>