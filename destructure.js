const person = {name:'Fahad', age: 17, job:'Facebooker',gfName:'Jtr', phone: '01756001013'}
const {gfName,phone,name} = person


const friends = ['sakib alhasan', 'Tamim Iqbal', 'Mahmudullah', 'Musjfiqur']
const [chotoFriend, ...restFriends]=friends;
console.log(restFriends)

const complexObject = {
    name:'abc',
    info:{
        address:'kola Bagan',
        leader:'Tiger Leader'
    }
}
const {leader}=complexObject.info;
console.log(leader)