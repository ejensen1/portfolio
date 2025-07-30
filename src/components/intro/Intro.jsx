import "./intro.scss"
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import COriginal from 'devicons-react/icons/COriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import CplusplusOriginal from 'devicons-react/icons/CplusplusOriginal';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <h1>My Top Skills</h1>
      <ul>
        <li>
        <img src="assets/python.svg" alt=""/>
        <img src="assets/javascript.svg" alt=""/>
        <img src="assets/react.svg" alt=""/>
      {/* <PythonOriginal />
      <JavascriptOriginal />
      <ReactOriginal /> */}

        </li>
        <li>
        <img src="assets/postgresql.svg" alt=""/>
        <img src="assets/c.svg" alt=""/>
        <img src="assets/cplusplus.svg" alt=""/>
      {/* <PostgresqlOriginal />
      <COriginal />
      <CplusplusOriginal /> */}
      </li>
      </ul>
      <div className="container">
        <h2>Summary</h2>

      <p>
       Software developer with professional experience developing business applications. Graduate of University of California Santa Cruz with experience in full stack web development and machine learning. 
      </p>
      </div>

    </div>
  )
}