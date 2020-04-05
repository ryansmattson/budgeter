<script>
    // @ is an alias to /src
    import Vue from 'vue';
    import { InputNumber, Button, Slider } from 'ant-design-vue'
    import numeral from 'numeral';
    import api from '../api/api';
    import {ButtonPlugin} from '@syncfusion/ej2-vue-buttons';
    import MonthView from '../components/MonthView';

    Vue.use(InputNumber);
    Vue.use(Button);
    Vue.use(Slider);
    Vue.use(ButtonPlugin);

    export default {
        name: 'home',

        components: {
            MonthView
            // ButtonPlugin
        },

        data() {
            return {
                amount: 10,
                returnPercent: 7,
                years: 10,
                total: 0
            }
        },

        computed: {
            // totalSpent() {
            //     return '$'+numeral(this.total).format('0,0.00');
            // },

            computedTotal() {
                let amount = this.amount;
                for (let index = 0; index < this.years; index++) {

                    amount += (amount * this.returnPercent/100);
                }
                return '$'+numeral(amount).format('0,0.00');
            }
        },

        methods: {
            submit() {
                console.log('submitted');
                api.get().then(data => {
                    console.log(data);
                })
            }
        }
    }
</script>

<style scoped>
    .center-form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>

<template>
    <div class="container">
        <month-view></month-view>
        <!-- <div class="row justify-content-center">
            <h1 class="m-4">What Does It Cost?</h1>
        </div>

        <div class="center-form">
            <form>
                <div class="row">
                    <div class="form-group col-12">
                        <label>Amount: </label>
                        <a-input-number class="form-control" v-model="amount"></a-input-number>
                    </div>
                    <div class="form-group col-12">
                        <label>Return: </label>
                        <a-input-number
                            class="form-control"
                            v-model="returnPercent"
                            :min="1"
                        ></a-input-number>
                    </div>
                    <div class="form-group col-12">
                        <label>Years: </label>
                        <a-input-number class="form-control" v-model="years"></a-input-number>
                        <a-slider :min="1" :max="99" v-model="years" />
                    </div>
                    <div class="form-group col-12">
                        <ejs-button @click="submit">Submit</ejs-button>
                    </div>
                </div>
            </form>
            <h4>Total: {{ computedTotal }}</h4>
        </div> -->
    </div>
</template>