
var vm = new Vue({
    el: "#app",
    data: {
        greeting: "Hallo, Welt!",
        greetingTitle: "Ich bin hier schon seit: " + new Date(),
        luckyNumber: 23
    }
})

setTimeout(calculateLuckyNumber, 2000);

/**
 * Calculates a new lucky number
 */
function calculateLuckyNumber() {
    vm.luckyNumber = Math.floor((Math.random() * 100) + 1);
    window.setTimeout(calculateLuckyNumber, 2000);
}
