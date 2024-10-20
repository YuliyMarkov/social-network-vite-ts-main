
type TheadingText={
    headingText: string
}

export const Heading = ({headingText}:TheadingText)=> {
    return (
        <h1>{headingText}</h1>
    )
}