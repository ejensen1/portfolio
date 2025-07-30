import "./portfolio.scss"

export default function Portfolio() {
  return(
    <div className="portfolio" id="portfolio">

        <h1>This Portfolio</h1>
        <img src="/portfolio/assets/portfolio.PNG" alt=""/>
      <div className="container">
        <p>
          I built this portfolio using React and Sass. It uses Sass to help structure
          the CSS and to format the site for mobile.
        </p>
        <a href="https://github.com/ejensen1/portfolio">Source Code</a>

      </div>


    </div>
  )
}