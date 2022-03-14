import { PostType } from "../../@types/Post";
import Post from "../../components/Post";
import { Container, PostsWrapper } from "./styles";

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
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
