//Write an asynchronous function that accepts a message string
// and a delay time in milliseconds. The function should log the
// message to the console after the specified delay time.

 async function logMessage(message,delayTime){
    await delayTime(delayTime);
    console.log(message);
 }
setTimeout(logMessage,2000)
logMessage("Wishes",2000)










//You have an array of user IDs and a function getUserData(id) that returns a
// Promise with user data when given a user ID. Write an asynchronous function 
//that fetches and logs the data for each user ID one by one, in sequence
function getUserData(id){
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`${id}`);},1000)
    });
}
async function logUserIds(Ids){
for(const id of ids){
    try{
        const data=await getUserData(id)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
}
const ids=[3,8,9,10];
logUserIds(ids);





//You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error. 
//Write a function that calls performTask() and logs a custom success message if 
//the task is successful, and a custom error message if there's an error

async function performTask(){

    return new Promise((resolve,reject)=>{
        if(taskcompletion=successful){
            resolve("task completed")
        }
        else{
            reject("task not completed")
        }
    })
}
async function logcustom(){
    try{
        console,log("keep trying")
        await newPromise
    }catch(error){
    console.log("task not completed")
    }
}
logcustom()
//Question 4
function unstableTask(taskName,failureProbability){
    return newPromise((resolve,reject)=>{
        const randomValue=Math.random();
        if(randomValue>failure){
            resolve("successful")
        }else{
            reject("failed")
        }
    })
}
async function executeWithRetry(taskName,retries,failureProbability){

}
