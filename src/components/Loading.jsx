import PuffLoader from "react-spinners/PuffLoader";

const Loading = ({ loading }) => {
    return (
        <>
            <PuffLoader loading={loading} color='#4ade80' size={170} className="mx-auto" />
        </>
    )
}

export default Loading