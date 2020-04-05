<script>
import Vue from 'vue';
import { InputNumber, Icon } from 'ant-design-vue';
import ExpenseRow from './ExpenseRow';
// import moment from 'moment';

Vue.use(InputNumber);
Vue.use(Icon);

export default {
    name: 'CategoryColumn',

    components: {
        ExpenseRow
    },

    data() {
        return {
            newExpense: 0,
            expenses: [
                {
                    id: 1,
                    value: 13.38,
                    date: 10
                },
                {
                    id: 2,
                    value: 3.65,
                    date: 11
                },
                {
                    id: 3,
                    value: 25.23,
                    date: 12
                },
                {
                    id: 4,
                    value: 7.10,
                    date: 13
                }
            ]
        }
    },

    methods: {
        addExpense() {
            this.expenses.push({ value: this.newExpense });
            this.newExpense = 0;
        },

        updateExpenseValue(value, id) {
            const expenseIndex = this.getExpenseIndexById(id);

            if (expenseIndex != -1) {
                this.expenses[expenseIndex].value = value;
            }
        },

        updateExpenseDate(date, id) {
            const expenseIndex = this.getExpenseIndexById(id);

            if (expenseIndex != -1) {
                this.expenses[expenseIndex].date = date;
            }
        },

        getExpenseIndexById(id) {
            return this.expenses.findIndex(expense => {
                return expense.id == id;
            })
        }
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
        <expense-row
            v-for="expense in expenses"
            :key="expense.id"
            :value="expense.value"
            :date="expense.date"
            @updateValue="updateExpenseValue($event, expense.id)"
            @updateDate="updateExpenseDate($event, expense.id)">
        </expense-row>
        <div class="d-flex justify-content-between align-items-center">
            <a-input-number v-model="newExpense" class="form-control expense-input"></a-input-number> <a-icon type="plus-circle" @click="addExpense"/>
        </div>
    </div>
</template>