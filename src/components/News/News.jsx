import n from './News.module.css';

const News=()=>{
    return(
        <div className={n.wrapper}>
            <p className={n.name}>News:</p>
            <ul className={n.content}>
                <li className={n.item}><a href="#">Сегодня умер дядя Вася</a></li>
                <li className={n.item}><a href="#">Построили новую больницу</a></li>
                <li className={n.item}><a href="#">Синоптики обещают морозы</a></li>
            </ul>
        </div>
    )
}

export default News;