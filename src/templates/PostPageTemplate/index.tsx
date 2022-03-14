import { PostType } from "../../@types/Post";
import { CommentType } from "../../@types/Comment";
import Comment from "../../components/Comment";
import {
  Container,
  PostPageAuthor,
  PostPageComments,
  PostPageCommentsTitle,
  PostPageContent,
  PostPageDate,
  PostPageTitle,
} from "./styles";
import Form from "../../components/Form";

type PostPageTemplateProps = {
  post: PostType;
  commentList: CommentType[];
};

const PostPageTemplate: React.VFC<PostPageTemplateProps> = ({
  post,
  commentList,
}) => {
  const { id, content, title, publish_date, author } = post;

  return (
    <Container>
      <PostPageTitle>{title}</PostPageTitle>
      <PostPageDate>{publish_date}</PostPageDate>
      <PostPageAuthor>By: {author}</PostPageAuthor>
      <PostPageContent dangerouslySetInnerHTML={{ __html: content }} />

      <PostPageComments>
        <PostPageCommentsTitle>Comments:</PostPageCommentsTitle>
        <Form postId={id} />
        {commentList.map((comment) => (
          <Comment {...comment} key={comment.id} />
        ))}
      </PostPageComments>
    </Container>
  );
};

export default PostPageTemplate;
