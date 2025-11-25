import style from "./Header.module.css";
import logo from "../assets/img/dc-logo.png";
function AppHeader() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className="menu">
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </div>
        </header>
    );
}
export default AppHeader;