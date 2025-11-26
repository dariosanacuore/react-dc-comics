import style from "./Header.module.css";
import logo from "../assets/img/dc-logo.png";


function AppHeader() {
    const links = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />

            </div>
            <ul>
                {links.map((curLink, index) => (
                    <li key={index}>
                        {curLink}
                    </li>
                ))}

            </ul>
        </header>
    );
}
export default AppHeader;