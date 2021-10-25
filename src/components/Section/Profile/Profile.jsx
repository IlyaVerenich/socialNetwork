import backPh from './backgroundPh.jpg'
import profPh from './logoProf.jpg'
import s from './Profile.module.css'

const Profile=(props)=>{
    return(
        <div>
            <img className={s.backgroundPhoto} src={backPh}></img>
                <div className={s.profile}>
                    <img className={s.profilePhoto} src={profPh}></img>
                    <div className={s.profileInfo}>
                        <p className={s.profileName}>{props.name}</p>
                        <p className={s.profileDate}>Date of Birth:{props.date}</p>
                        <p className={s.profileCity}>City:{props.city}</p>
                    </div>
                </div>
        </div>
    )
}

export default Profile;