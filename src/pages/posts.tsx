import { fetchPosts } from "../services/posts";
import PostList from "../templates/PostList";

export default function PostsWrapper({ posts }) {
  return <PostList posts={posts} />;
}

export async function getStaticProps() {
  return fetchPosts();
}
