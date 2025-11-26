import style from "./Main.module.css";
import dcimg from "../assets/img/buy-comics-digital-comics.png";
import merchimg from "../assets/img/buy-comics-merchandise.png";
import subimg from "../assets/img/buy-comics-subscriptions.png";
import posimg from "../assets/img/buy-comics-shop-locator.png";
import chargeimg from "../assets/img/buy-dc-power-visa.svg";
import { comics } from "../assets/comics.js";
function AppMain() {
    return (
        <main>
            <section className={style.sectionContent}>
                <h2 className={style.contentText}>Content goes here</h2>
            </section>

            <section className={style.container}>
                <div className={style.cardsWrapper}>
                    {comics.map((card) => (
                        <div key={card.id} className={style.card}>
                            <img src={card.thumb} alt={card.title} className={style.cardImage} />
                            {card.title.split(" ").slice(0, 2).join(" ")}
                        </div>
                    ))}
                </div>
            </section>

            <section className={style.sectionContentList}>
                <ul className={style.dFlexList}>
                    <li className={style.listItem}> <img src={dcimg} alt="logo" /><span className={style.whiteBg}>DIGITAL COMICS</span></li>
                    <li className={style.listItem}><img src={merchimg} alt="logo" /><span className={style.whiteBg}>DIGITAL COMICS</span></li>
                    <li className={style.listItem}><img src={subimg} alt="logo" /><span className={style.whiteBg}>DIGITAL COMICS</span></li>
                    <li className={style.listItem}><img src={posimg} alt="logo" /><span className={style.whiteBg}>DIGITAL COMICS</span></li>
                    <li className={style.listItem}><img src={chargeimg} alt="logo" width="100" height="100" /><span className={style.whiteBg}>DIGITAL COMICS</span></li>
                </ul>

            </section>
        </main >
    );
}
export default AppMain;