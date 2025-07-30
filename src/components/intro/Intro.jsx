import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <h1>My Top Skills</h1>
      <ul>
        <li>
        <img src="/portfolio/assets/python.svg" alt=""/>
        <img src="/portfolio/assets/javascript.svg" alt=""/>
        <img src="/portfolio/assets/react.svg" alt=""/>

        </li>
        <li>
        <img src="/portfolio/assets/postgresql.svg" alt=""/>
        <img src="/portfolio/assets/c.svg" alt=""/>
        <img src="/portfolio/assets/cplusplus.svg" alt=""/>
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