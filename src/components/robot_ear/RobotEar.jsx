import "./robot_ear.scss"

export default function RobotEar() {
  return(
    <div className="robot_ear" id="robot_ear">
        <h1>Robot Ear</h1>
        <img src="/portfolio/assets/robot_ear.jpg" alt=""/>
      <div className="container">
        <p>
          I had always been interested in applying machine learning to the problem of generating sheet music and in the 
          Fall of 2023 I got the opportunity to do so. I led a group of 5 engineers to design an application where users could input 
          audio of a song, and a ML model would generate a PDF of the sheet music. Our program used vision transformers to analyze 
          spectrograms (visual representations of the audio) in order to classify notes. After training our model on over 10,000 
          spectrograms and many hours of research and training different models we were able to create a product that could accurately 
          generate sheet music from one of our engineer's guitars. The project taught me a lot about designing ML models and integrating 
          them into web applications.
        </p>
        <a href="https://github.com/ejensen1/robot_ear">Source Code</a>


      </div>

    </div>
  )
}