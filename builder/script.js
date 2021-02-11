class Address {

    constructor(zip, street) {

        this.zip = zip;
        this.street = street;
    }
}

class User {

    constructor(name, { age, phone = '00000000', address } = {}) {

        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

// let user = new User('Matheus');
// let user = new User('Matheus', { age: 29, phone: '12345678', address: 'rua lima e silva 000' });
let user = new User('Matheus', { age: 29, address: 'rua lima e silva 000' });


console.log(user);


//or the old way
// class UserBuilder {

//     constructor(name) {

//         this.user = new User(name);
//     }

//     setAge(age) {

//         this.user.age = age;

//         //return the builder object
//         return this;
//     }

//     setPhone(phone) {

//         this.user.phone = phone;
//         return this;
//     }

//     setAddress(address) {

//         this.user.address = address;
//         return this;
//     }

//     build() {

//         return this.user;
//     }
// }

// let user = new UserBuilder('Matheus').setAge(29).setPhone('1234567').build();

// console.log(user);