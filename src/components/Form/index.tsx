import React, { useCallback } from "react";
import * as yup from "yup";
import router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ErrorDisplayedMessage,
  Label,
  SendButton,
  UserCommentTextarea,
  UserNameInput,
} from "./styles";
import { sendComment } from "../../services/comments";

type FormProps = {
  postId: number;
};

type SubmitDataType = {
  name: string;
  comment: string;
};

const Form: React.VFC<FormProps> = ({ postId }) => {
  const schema = yup.object().shape({
    name: yup.string().min(3).trim().required(),
    comment: yup.string().min(3).trim().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SubmitDataType) => {
    const { name, comment } = data;
    handleSendNewComment(name, comment, postId);
    reset();
    router.replace(router.asPath);
  };

  const handleSendNewComment = useCallback(
    (name: string, comment: string, postId: number) => {
      const commentObj = {
        name,
        comment,
        postId,
      };
      sendComment(commentObj);
    },
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Name*</Label>
      <UserNameInput
        id="name"
        {...register("name")}
        placeholder="You name here"
      />
      <ErrorDisplayedMessage> {errors.name?.message}</ErrorDisplayedMessage>

      <Label htmlFor="comment" mTop="20px">
        Comment*
      </Label>
      <UserCommentTextarea
        id="comment"
        {...register("comment")}
        placeholder="Leave a message"
      />

      <ErrorDisplayedMessage> {errors.comment?.message}</ErrorDisplayedMessage>

      <SendButton type="submit" disabled={errors.comment || errors.name}>
        Send comment
      </SendButton>
    </form>
  );
};

export default Form;
