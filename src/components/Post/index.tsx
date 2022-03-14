import { PostProps } from "../../@types/Post";
import { Container, PostDate, PostDescription, PostTitle } from "./styles";
import Link from "next/link";

const Post: React.FC<PostProps> = ({
  slug,
  title,
  description,
  publish_date,
}) => {
  return (
    <Link href={`/${slug}`}>
      <Container>
        <PostDate>{publish_date}</PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </Container>
    </Link>
  );
};

export default Post;
