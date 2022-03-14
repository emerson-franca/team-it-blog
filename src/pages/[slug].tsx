import { api } from "../services/api";
import PostPageTemplate from "../templates/PostPageTemplate";

const PostPage = ({ post, comments }) => {
  return <PostPageTemplate post={post} commentList={comments} />;
};

const getIdFromSlug = (slug: string) => {
  return Number(slug.split("-")[2]);
};

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug;
    const { data } = await api.get(
      `http://localhost:9000/posts/${getIdFromSlug(slug)}`
    );

    const reponse = await api(
      `http://localhost:9000/post/${getIdFromSlug(slug)}/comments`
    );

    const comments = reponse?.data;

    return {
      props: {
        post: data,
        comments,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const { data } = await api.get("http://localhost:9000/posts");
    const paths = data.map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {}
}

export default PostPage;
