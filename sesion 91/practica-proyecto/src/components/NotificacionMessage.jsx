import React from 'react'
const  NotificacionMessage = ()=> {
  return (
    <div className="p-6 max-w-sm mx-auto bg bg-green-500 rounded-xl shadow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <img className="size-12" src="https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-11.png" alt="ChitChat Logo"/>
    </div>
    <div>
      <div className="text-xl font-medium text-black">ChitChat</div>
      <p className="text-slate-500">You have a new message!</p>
    </div>
  </div>
  
  )
}
export default NotificacionMessage
