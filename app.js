const app = Vue.createApp({
    // data name NOT up to you you MUST have it
    // data() MUST ALWAYS return an OBJECT
    data(){
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        }
    }
});

// this means that Vue will make the information above available to the selector (in this case ID) user-goal
// again only the area where the id name user-goal will be able to display the text from coureGoal variable
app.mount('#user-goal');
