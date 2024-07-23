

import React from 'react';
import '/home/uki-student/blogg/src/App.css';
import photo8 from'./download (2).png';

const Post4 = () => {
  return (
    <div className="container">
      <p className="paragraph">
      A network refers to a system of interconnected entities that communicate with each other to share resources and
       information. In computing, networks connect devices such as computers, servers, and printers, allowing them to exchange data and access shared resources.
        These networks can be local (LAN), covering a small area like a single building, or wide (WAN), spanning large geographical areas. Networks use various technologies and protocols
         to ensure reliable communication, such as Ethernet, Wi-Fi, and TCP/IP. They are fundamental to modern IT infrastructure, enabling functions from simple file sharing to complex cloud computing and global internet connectivity. 
      Security measures are crucial to protect networks from unauthorized access and ensure data integrity.
</p>

      <img
        src={photo8}
        alt="Placeholder"
        className="photo"
      /><br/><br/>
      <button className='kumar'>readmore </button>
    </div>
  );
};

export default Post4;


