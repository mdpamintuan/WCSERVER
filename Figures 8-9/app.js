// Name: Pamintuan Mylene D.
// App Name: app.js (Figure 9 The JS File)
// Description: new version of app.js that will interpolate the following title, author, and age from the html parameters.
    
const app = Vue.createApp({
    //Create functions, data
    data(){
        return {
        title: 'WebDev Student',
        author: 'Mylene Pamintuan',
        age: 21
        }
    }
});
    
app.mount('#app')