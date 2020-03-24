const axios = require('axios');

axios.get('http://localhost:3001/authors?country=Congo')
    .then((response)=>{console.log(response.data)})
    .catch((error)=>{console.log(error)});
/*
axios.post('http://localhost:3001/authors', {name : "Jane Doe", country : "Hungary"})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
*/
//Yemen-i irok konyvei?
//TODO: Modify to use 2 AJAX calls. 1st to Query authors, 2nd to filter books;
axios.get('http://localhost:3001/authors?country=Yemen')
    .then((res)=>{
        res.data.forEach((author)=>{
            axios.get('http://localhost:3001/books')
                .then((respBooks)=>{
                    books = respBooks.data.filter((book)=>{
                        let isAuthored = false;
                        book.authors.forEach((bookAuthor)=>{
                            if(author.id === bookAuthor.id){
                                isAuthored = true;
                            }
                        });
                        return isAuthored;
                    });
                    console.log({author : author, books : books});
                }).catch((err)=>{console.log(err)})
        });
        console.log(res.data);
    })
    .catch((err)=>{console.log(err)});
