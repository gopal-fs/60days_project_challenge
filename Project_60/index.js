const { log } = require('console')
const EventEmitter=require('events')
const chatRoom= new EventEmitter()
/*
-show joined message 
-show person sent a message
-show person 1 raised hand
-show person left the chat
*/

chatRoom.once('joined',()=>{
    console.log('Hello My Boy Welcome')
})


chatRoom.once('joined',()=>{
    console.log('Hello My Boy Welcome here')
})

chatRoom.prependOnceListener('joined',(name)=>{
    console.log(`Hello ${name} Welcome to Vs Code!`)
})

chatRoom.on('onSentMessage',(message,name)=>{
    console.log(`${name} sent you ${message}`)
})

chatRoom.on('onRaisedHand',(name)=>{
    console.log(`${name} Raised Hand!`)
})

chatRoom.on('onLeftChat',(name)=>{
    console.log(`${name} Left the Chat!`)
})




chatRoom.emit('joined','Gopal')
chatRoom.emit('onSentMessage','Bro Pichikki Poindi Bro Message.','Gopal')
chatRoom.emit('onRaisedHand','Gopal')
chatRoom.emit('onLeftChat','Gopal')
chatRoom.emit('onLeftChat','Gopal')


