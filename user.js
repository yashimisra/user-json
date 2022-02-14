const userData=require("./userData");
let userName;
const findFriends=(userName) =>{
    let isUserPresent=1;
    if(typeof(userName)!="string")
    {
        console.log("invalid user name");
        return;
    }
    userData.forEach(user=>{
        if(user.name==userName)
        {
            console.log(user.friends);
            isUserPresent=0;
        }
    })
    if(isUserPresent)
        console.log("no such user present");  
}
console.log(findFriends("Tisha Ryan"));
module.exports =findFriends;