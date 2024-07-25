
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogNav from './commponents/Blognav';

import Posts from './commponents/Posts';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Post1 from './commponents/Post1';
import Post2 from './commponents/Post2';
import Post3 from './commponents/Post3';
import Post4 from './commponents/post4';



function App() {
    return (<div className="App">
        <Router>
           
                <BlogNav />
                <Routes> <Route path="/july23react" element={<Posts/>} />
                <Route path="/Java" element={<Post1/>} />
                    <Route path="/Data stuc" element={<Post2/>} />
                    <Route path="/Algoritham" element={<Post3/>} />
                    <Route path="/Net" element={<Post4/>} />
                   
                </Routes>
            
        </Router>
   

        
        </div>
    );
}

export default App;
// function App() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Java</Link>
//               </li>
//               <li>
//                 <Link to="/Data src">Data</Link>
//               </li>
//               <li>
//                 <Link to="/Algoritham">Algoritham</Link>
//               </li>
//               <li>
//                 <Link to="/Net">Net work</Link>
//               </li>
//             </ul>
//           </nav>
//    <Navbar />
    
//    <Routes>

//             <Route path="/" exact component={Post1} />
//             <Route path="/Data stuc" component={Post2} />
//             <Route path="/Algoritham" component={Post3} />
//             <Route path="/Net" component={Post4} />
//           </Routes>
//         </div> <Posts/>
//       </Router>
//     );
//   }
  
//   export default App;