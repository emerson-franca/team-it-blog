import styled from "styled-components";

type LabelProps = {
  mTop?: string;
};

export const Label = styled.label<LabelProps>`
  display: block;
  margin-top: ${(props) => props.mTop};
`;

export const InputTitle = styled.span`
  display: block;
`;

export const UserNameInput = styled.input`
  height: 40px;
  border-radius: 4px;
  padding-left: 8px;
`;

export const UserCommentTextarea = styled.textarea`
  padding: 8px;
  width: 100%;
  height: 80px;
  border-radius: 4px;
`;

export const SendButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 15px 30px;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3rem 0;

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGrey};
    cursor: not-allowed;
  }
`;

export const ErrorDisplayedMessage = styled.p`
  color: red;
`;
