import { api } from "./api";

type CommentObjType = {
  postId: number;
  name: string;
  comment: string;
};

const generateTodayStringDate = () => new Date().toISOString().slice(0, 10);

export const sendComment = async (commentObj: CommentObjType) => {
  const { postId, name, comment } = commentObj;

  try {
    api.post(`/posts/${postId}/comments`, {
      user: name,
      content: comment,
      parent_id: null,
      date: generateTodayStringDate(),
    });
  } catch (error) {}
};
