import { PostType } from "../../@types/Post";
import Post from "../../components/Post";
import { Container, PostsWrapper } from "./styles";

type PostsProps = {
  posts: PostType[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <Container>
      <PostsWrapper>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </PostsWrapper>
    </Container>
  );
}
