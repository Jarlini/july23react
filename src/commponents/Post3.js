

import React from 'react';
import '/home/uki-student/blogg/src/App.css';
import photo0 from'./download (4).jpeg';

const Post3 = () => {
  return (
    <div className="container">
      <p className="paragraph">va is an object-oriented programming language where classes define blueprints for 
objects, and methods specify behaviors within these classes. Variables in Java, such as int, double, and String, store data values. Control statements like
 if, else, switch, for, while, and do-while manage the flow of execution. Inheritance 
 allows classes to inherit properties and methods from other classes using the extends keyword, 
 while interfaces, defined with the interface keyword, mandate the implementation of specified methods in classes. 
 Exception handling in Java involves try, catch, finally, and throw to manage runtime errors. Finally, packages, declared with the package keyword, 
 help organize classes and interfaces, promoting modular and maintainable code.




</p>
      <img
        src={photo0}
        alt="Placeholder"
        className="photo"
      /><br/><br/>
      <button className='kumar'> readmore</button>
    </div>
  );
};

export default Post3;


