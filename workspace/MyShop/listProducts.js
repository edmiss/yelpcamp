var faker = require('faker');

for(var i =0; i<10;i++){
    //console.log('test');
    var name = faker.name.findName();
    var price = faker.commerce.price();
    console.log(name +' $'+price );
}