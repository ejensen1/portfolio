import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#robot_ear">Robot Ear</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#gmail_clone">Gmail Clone</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

    </div>
  )
}