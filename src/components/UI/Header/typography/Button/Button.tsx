import { SButton } from "./Button.style"

type TButton = {buttonText:string}

export const Button = ({buttonText}:TButton)=>{
    return(
        <SButton>{buttonText}</SButton>

    )
}