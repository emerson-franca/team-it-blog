import { fetchPosts } from "../services/posts";
import Posts from "../templates/Posts";

export default function PostsWrapper({ posts }) {
  return <Posts posts={posts} />;
}

export async function getStaticProps() {
  return fetchPosts();
}
