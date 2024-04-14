#! /usr/bin/env node

// Task # 32
// Checking User names: Do the following to create a program that simulates how websites ensure that everyone has a unique 
// username
// Make a list of five or more usernames called new users. Make sure one or two of the new usernames are also in the current 
//users.
// List.
// Loop through new users list to see if each new user name has already been used. if it has print a message that the person.
//Will need to enter a new username. If a username has not been used, print a message saying that the username is available. 


let current_users : string [] = ["admin","Eric","Aiza","fatima","Ali"]
let new_users: string [] = ["admin","fatima","Aliza","Haseeb","Noor"]
let current_users_lower : string [] = current_users.map(user=>user.toLowerCase())
for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`sorry ${new_user},that name is taken`)
    } else {
        console.log(`Yes ${new_user},is still in available list`)
    }
}