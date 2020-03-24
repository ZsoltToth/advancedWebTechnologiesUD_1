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

console.log(authors);
