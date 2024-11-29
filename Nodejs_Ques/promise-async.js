// 3. Write a function that fetches user data from the DB using API call. Use both Promises and async/await approaches.

//promise
const UserData = () => {
    return new Promise((resolve, reject) => {
            const users = [{ id: 1, name: 'Veeru' }, { id: 2, name: 'satish' }];
            resolve(users);
    });
};

UserData()
    .then(users => console.log(users))
    .catch(err => console.error(err));


    

// Async/Await function
const fetch= ()=>{
    return new Promise((resolve,reject)=>{
        const user1=[{id:1,name:"sai"},{id:2,name:"kiran"}]
        resolve(user1)
    })
}

const data= async ()=>{
    try{
        const userdata= await fetch()
        console.log(userdata)
    }catch (err){
        console.log(err)
    }
}
data()