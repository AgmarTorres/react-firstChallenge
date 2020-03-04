import React from 'react'
import './pull.styles.scss'

const Pull = ({item}) =>(
   <a href={`${item.html_url}`} target="t_blank">
   <div className = 'request'>
      <div className='user-data'>
         <img className = "user-image" alt="user" src= {item.user.avatar_url}></img>
         <p   className = "user-name"><span className='span-bold'>Username: </span>{item.user.login.toUpperCase()} </p>
      </div>

      <div className='pull-data'>
         <p   className = "pull-title"><span className='span-bold'>Title: </span>{item.title}</p>
         <p   className = "pull-date"><span className='span-bold'>Date:</span> {item.created_at}</p>
         <p   className = "pull-body">{item.body} </p>
      </div>
      
   <hr/>
   </div>
   </a>
)


export default Pull;