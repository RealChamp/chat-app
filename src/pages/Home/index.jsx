import React from 'react'
import Message from '../../components/Message/Message'
import './Home.scss'

function Home() {
    return (
      <section className="home">
       <Message avatar='https://randomuser.me/api/portraits/women/44.jpg' text='Hello' date='Tue Sep 22 2020 19:58:20' isMe={true}/>
       <Message avatar='https://randomuser.me/api/portraits/women/43.jpg' text='Hello World Test' date='Tue Sep 22 2020 19:58:20' isMe={false}/>
      </section>
    );
}

export default Home    
