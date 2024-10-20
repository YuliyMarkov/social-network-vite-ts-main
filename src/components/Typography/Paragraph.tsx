import styled from 'styled-components';
type TParagraphText = {
    headingText: string;
    linkHref?: string; 
    linkText?: string;
};
const StyledParagraph = styled.p`
  font-weight: 400;
  line-height: 24.2px;
  text-align: center;
  margin-bottom: 48px;
  color: #a0a0a0;
`;
export const Paragraph = ({ headingText, linkHref, linkText}: TParagraphText) => {
    return (
        <StyledParagraph >
          {headingText}{" "}
          <a href={linkHref}>{linkText}</a>
        </StyledParagraph >
      );
};
