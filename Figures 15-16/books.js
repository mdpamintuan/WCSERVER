// Name: Pamintuan Mylene D.
// App Name: books.js (Figure 16. The JS code embedded in the books.js file.)
// Description: books.js that will interpolate the message from the html parameters.
    
const books = Vue.createApp ({
    //Create functions, data
    data(){
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Mylene Pamintuan',
            year: 2008
        }
    },
methods:{
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
}
});
    
books.mount('#books')