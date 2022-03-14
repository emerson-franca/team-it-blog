import { CommentProps } from "../../@types/Comment";
import { CommentContent, CommentDate, CommentName, Container } from "./styles";

const Comment: React.FC<CommentProps> = ({ user, date, content }) => {
  return (
    <Container>
      <CommentName>{user}</CommentName>
      <CommentDate>{date}</CommentDate>
      <CommentContent>{content}</CommentContent>
    </Container>
  );
};

export default Comment;
