const faker = require('faker');

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

    return {
        id : id,
        title : faker.lorem.words(titleLength),
        teaser : faker.lorem.paragraph()
    }
};

console.log(generateBook(1));
