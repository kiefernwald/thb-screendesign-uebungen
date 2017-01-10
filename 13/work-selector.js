// Work selector
Vue.component('work-selector', {
    template: '\
        <div class="works">\
            <work-item v-for="work in works" v-bind:work="work" v-on:click.native="updateValue(work)">\
        </div>',
    props: {
        value: Object,
        works: {
            type: Array,
            required: true
        }
    },
    methods: {
        updateValue: function (value) {
            this.$emit('input', value)
        },
    }
})