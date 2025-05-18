import { FadeLoader } from "react-spinners";
import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loaderWrap}>
            <FadeLoader color="#3470FF" loading={true} />
        </div>
        
    )
}
