import "./gmail_clone.scss"

export default function GmailClone() {
  return(
    <div className="gmail_clone" id="gmail_clone">
        <h1>Gmail Clone</h1>
        <img src="assets/gmail_clone.jpg" alt=""/>
      <div className="container">
        <p>
          What this application lacks in frontend beauty it makes up for in backend functionality and thorough testing. This Gmail clone has 
          complete end to end testing and 100% code coverage unit testing using Puppeteer, Swagger and Jest. It has a database 
          built with PostgresSQL, a backend built with Node and Express and a frontend built in React. This project taught me an enormous
          amount about planning larger scale projects that allow for clean communication between the frontend and backend of a web
          application.
        </p>
        <a href="https://github.com/ejensen1/cse186/tree/main/asgn8">Source Code</a>

      </div>


    </div>
  )
}