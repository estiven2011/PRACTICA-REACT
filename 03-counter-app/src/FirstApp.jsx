
const hello = () => {
    return 'holasss'
}

export const FirstApp = ({ num }) => {
    return (
        <>
            <h1>{hello()}</h1>
            <p>{num}</p>
        </>
    )
}   