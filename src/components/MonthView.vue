<script>
    import CategoryColumn from '../components/CategoryColumn';
    import { mapState } from 'vuex';

    export default {
        name: 'MonthView',

        components: {
            CategoryColumn
        },

        data() {
            return {}
        },

        computed: {
            ...mapState([
                ''
            ])
        },

        methods: {
            updateExpenseValue(data) {
                const expenseIndex = this.getExpenseIndexById(data.id);

                if (expenseIndex != -1) {
                    this.expenses[expenseIndex].value = data.value;
                }
            },

            updateExpenseDate(data) {
                const expenseIndex = this.getExpenseIndexById(data.id);

                if (expenseIndex != -1) {
                    this.expenses[expenseIndex].date = data.date;
                }
            },

            getExpenseIndexById(id) {
                return this.localExpenses.findIndex(expense => {
                    return expense.id == id;
                })
            }
        }
    }
</script>

<style scoped>
    .category-column {
        width: 200px;
        display: inline-block;
        margin-right: 40px;
    }
</style>

<template>
    <div>
        <div class="category-column" v-for="(category, index) in categories" :key="index">
            <h4>{{ category.name }}</h4>
            <category-column
                style="height: 100%;"
                :budget="category.budget"
                :rollover="category.rollover"
                :expenses="category.expenses"
                @updateExpenseValue="updateExpenseValue"
                @updateExpenseDate="updateExpenseDate"
            ></category-column>
        </div>
    </div>
</template>