import React from 'react';
import Message from '../../components/Message';
import './Home.scss';

function Home() {
  return (
    <section className="home">
      <Message
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        text="Hello"
        date="Tue Oct 3 2020 16:20:20"
        isMe={true}
        isReaded={false}
        attachments={[
           {
             filename: 'image.jpg',
             url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
           },
          
        ]}
      />
      <Message
        avatar="https://randomuser.me/api/portraits/women/43.jpg"
        text="Hello World Test"
        date="Tue Tue Oct 3 2020 16:26:20"
        isMe={false}
        isReaded={true}
        attachments={[
           {
             filename: 'image.jpg',
             url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
           },
          
        ]}
      />
    </section>
  );
}

export default Home;
