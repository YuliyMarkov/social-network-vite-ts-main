type TLinkText = {
    text: string;
    href?: string;
  };
  
  export const Linktext = ({ text, href = "#" }: TLinkText) => {
    return <a href={href}>{text}</a>;
  };