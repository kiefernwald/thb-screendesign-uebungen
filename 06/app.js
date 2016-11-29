
var vm = new Vue({
    el: "#app",
    data: {
        showIntroduction: true,
        todo: [
            "JavaScript lernen",
            "VueJS lernen",
            "Brainstorming machen",
            "Etwas tolles entwickeln"
        ]
    },
    methods: {
        addEntry: function (numberOfEntries) {
            for (var i = 1; i <= numberOfEntries; i++) {
                this.todo.push('Eintrag ' + (this.todo.length + 1));
            }
        },
        removeLastEntry: function () {
            this.todo.pop();
        }
    }
})
