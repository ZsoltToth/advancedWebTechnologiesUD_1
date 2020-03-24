const faker = require('faker');
const fs = require('fs');

generateAurhor = () => {
    return {
        name : faker.name.firstName()+' ' + faker.name.lastName(),
        country : faker.address.country()
    };
};

var authors = [];
for(let i = 0; i < 100; i++){
    author = generateAurhor();
    author.id=i;
    authors.push(author);
}
generateBook = (id) =>{
    titleLength = Math.round(Math.random() *3) + 1;
    authorCount = Math.round(Math.random() *4) + 1;
    bookAuthors = [];
    for(let i = 0; i < authorCount; i++){
        bookAuthors[i] = faker.random.arrayElement(authors);
    }
    return {
        id : id,
        title : faker.lorem.words(titleLength),
        teaser : faker.lorem.paragraph(),
        authors : bookAuthors
    }
};
var books = [];
for(let i = 0; i < 1000; i++){
    books[i] = generateBook(i);
}

fs.writeFile(
    'database.fake.json',
    JSON.stringify({authors : authors, books : books}),
    (err) => {console.log(err)}
    );
