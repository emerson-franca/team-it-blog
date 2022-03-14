import { PostType } from "../@types/Post";
import { api } from "./api";

type FetchPostsType = {
  props: {
    posts: PostType | [];
  };
};

export const fetchPosts = async (): Promise<FetchPostsType> => {
  try {
    const { data } = await api.get("/posts");
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};
