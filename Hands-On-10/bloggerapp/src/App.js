import logo from './logo.svg';
import './App.css';
import './Stylesheets/mystyle.css'
import { BookDetails, Books } from './Components/BookDetails.js';
import { BlogDetails, Blogs } from './Components/BlogDetails.js';
import { CourseDetails, Courses } from './Components/CourseDetails.js';

function App() {
  return (
    <div className="App">
      <div className='Course'>
        <h1>Course Details</h1>
        <CourseDetails courses={Courses}/>
      </div>
      <div className='Book'>
        <h1>Book Details</h1>
        <BookDetails books={Books}/>
      </div>
      <div className='Blog'>
        <h1>Blog Details</h1>
        <BlogDetails blogs={Blogs}/>
      </div>
    </div>
  );
}

export default App;
