import style from "./Main.module.css";
function ComicCard({ title, thumb }) {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img src={thumb} alt={title} className={style.cardImage} />
                <h3 className={style.cardTitle}>
                    {title.split(" ").slice(0, 2).join(" ")}
                </h3>
            </div>
        </div>
    );
}
export default ComicCard;
