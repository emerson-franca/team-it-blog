import { CommentType } from "../../@types/Comment";
import {
  CommentAvatar,
  CommentContent,
  CommentDate,
  CommentInfosWrapper,
  CommentName,
  Container,
} from "./styles";

const Comment: React.FC<CommentType> = ({ user, date, content }) => {
  return (
    <Container>
      <CommentAvatar>{user.slice(0, 2).toUpperCase()}</CommentAvatar>
      <CommentInfosWrapper>
        <CommentName>{user}</CommentName>
        <CommentDate>{date}</CommentDate>
        <CommentContent>{content}</CommentContent>
      </CommentInfosWrapper>
    </Container>
  );
};

export default Comment;
