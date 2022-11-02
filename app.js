const app = Vue.createApp({
    // data name NOT up to you you MUST have it
    // data() MUST ALWAYS return an OBJECT because data itself is a function
    data(){
        return {
            courseGoal: 'Finish the course and learn Vue!',
            courseGoalA: 'Refer to original courseGoal above!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    // is an object where you can define functions
    methods: {
        firstFunction(){
            const randomNum = Math.random();
            // return randomNum < 0.5 ? "Learn Vue" : "Master Vue" 
            // as weird as it seems Vue understand the variables inside data function so we can use the this. keyword
            return randomNum < 0.5 ? this.courseGoal : this.courseGoalB
        },
        // just so we can see the difference of what the v-html proerty does inside of a tag inside of HTML
        // notice how we added the <h2> tags above inside of the courseGoalB - the html file will not be able to read it without the property
        vhtmlFunction(){
            const randomNum = Math.random();
            return randomNum < 0.5 ? this.courseGoalA : this.courseGoalB
        },
    }
});

// this means that Vue will make the information above available to the selector (in this case ID) user-goal
// again only the area where the id name user-goal will be able to display the text from coureGoal variable
app.mount('#user-goal');
