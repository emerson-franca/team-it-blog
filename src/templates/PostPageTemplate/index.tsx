import { PostType } from "../../@types/Post";
import { CommentType } from "../../@types/Comment";
import Comment from "../../components/Comment";
import {
  Container,
  PostPageAuthor,
  PostPageBackLink,
  PostPageComments,
  PostPageCommentsTitle,
  PostPageContent,
  PostPageDate,
  PostPageTitle,
} from "./styles";
import Form from "../../components/Form";
import Link from "next/link";

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
      <Link href="/posts">
        <PostPageBackLink>← Back</PostPageBackLink>
      </Link>
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
