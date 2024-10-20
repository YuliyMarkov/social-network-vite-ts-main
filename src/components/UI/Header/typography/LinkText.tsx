type TLinkText = {
    text:string
}

export const LinkText = ({text}:TLinkText) => {
    return (
        <a>{text}</a>
    )
}