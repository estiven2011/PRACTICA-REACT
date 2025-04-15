
const hello = () => {
    return 'holasss'
}

export const FirstApp = ({ num, title }) => {
    return (
        <>
            <h1>{hello()}</h1>
            <p>{num}</p>
            <p>{title}</p>
        </>
    )
}   