import { useSelector } from "react-redux"

const Error = () => {

    const { error } = useSelector(state => state.site);

    return (
        <div className='error'>
            <div className="error__alert">
                <div className="error__label">{error?.status}</div>
                <div className="error__text">{error?.message}</div>
            </div>
        </div>
    )
}

export default Error