import style from "./Footer.module.css";
import facebookImg from "../assets/img/footer-facebook.png";
import periImg from "../assets/img/footer-periscope.png";
import pintImg from "../assets/img/footer-pinterest.png";
import twitImg from "../assets/img/footer-twitter.png";
import youtubeImg from "../assets/img/footer-youtube.png";
function AppFooter() {
    return (
        <footer>
            <div className={style.footerList}>
                <ul className={style.listFooter}>
                    <li><h2>DC COMICS</h2></li>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                    <li><h2>SHOP</h2></li>
                    <li>Shop DC</li>
                    <li>Shop DC collectibles</li>
                </ul>


                <ul className={style.listFooter}>
                    <li><h2>DC</h2></li>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscription</li>
                    <li>Talent workshop</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop help</li>
                    <li>Contact us</li>
                </ul>

                <ul className={style.listFooter}>
                    <li><h2 classNmae={style.bgWhite}>SITES</h2></li>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>
            <div className={style.socialList}>
                <button className={style.buttonSign}><span className={style.bgWhite}>SIGN UP NOW!</span></button>
                <div className={style.socialIcons}>
                    <ul>
                        <li><span className={style.bgBlue}>FOLLOW US</span></li>
                        <li><img src={facebookImg} /></li>
                        <li><img src={periImg} /></li>
                        <li><img src={pintImg} /></li>
                        <li><img src={twitImg} /></li>
                        <li><img src={youtubeImg} /></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default AppFooter;