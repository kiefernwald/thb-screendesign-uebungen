
var vm = new Vue({
    el: "#app",
    data: {
        currentEntry: 'Mittagessen gehen',
        editEntry: null,
        todo: [
            "JavaScript lernen",
            "VueJS lernen",
            "Brainstorming machen",
            "Etwas tolles entwickeln"
        ]
    },
    methods: {
        addEntry: function () {
            this.todo.push(this.currentEntry);
        },
        removeEntry: function (entryId) {
            this.todo.splice(entryId, 1);
        },
        startEditEntry: function (entryId) {
            this.editEntry = entryId;
        },
        finishEditEntry: function () {
            this.editEntry = null;
        }
    }
})
