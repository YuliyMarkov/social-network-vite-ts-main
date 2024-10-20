export const InputComponent = ({
    type,
    placeholder,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <StyleInput InputComponent type={type} placeholder={placeholder} />
    );
};
