import React, { useState } from 'react';
import { HeartFilled } from '@ant-design/icons';
import styled from 'styled-components';
import LikeButton from './Like';

const CommentSection = () => {

    const [userComment, setUserComment] = useState([
        {
            id: "20D",
            comment: "너무 예뻐요!"
        },
        {
            id: "mimi",
            comment: "좋은 그림 감사합니다."
        }
    ]);

    const [inputComment, setInputComment] = useState("");

    const InputComment = (e) => {
        const { value } = e.target;

        setInputComment(value);
    };

    const CommentButton = () => {
        const commentObject = {
            id: "hyemin",
            comment: inputComment
        };

        setUserComment([...userComment, commentObject]);
        setInputComment("");
    };

    const [like, setLike] = useState(102);

    return (
        <CommentContents>
            <ImgLikeButton onClick={() => { setLike(like + 1); }}><HeartFilleds><HeartFilled /></HeartFilleds>{like}</ImgLikeButton>
            <Content>
                <Input onChange={(e) => InputComment(e)} value={inputComment} placeholder="Add a comment..." />
                <Button onClick={() => CommentButton()}>Post</Button>
            </Content>
            {userComment.map((data, index) => (
                <Contents key={index} style={{marginBottom:'8px'}}>
                    <UserName>{data.id}</UserName>
                    <Comment>{data.comment}</Comment>
                    <LikeButton />
                </Contents>
            ))}
        </CommentContents>
    )
};

const CommentContents = styled.div`
  margin-top: 30px;
`;

const HeartFilleds = styled.div`
  color: red;

  margin-right: 10px;

  font-size: 33px;

  transition: 0.2s;
    &:hover{
      transform: scale(1.2);
      transition: 0.2s;
    }
`

const ImgLikeButton = styled.button`
  display: flex;
  align-items: center;
  
  border: none;
  background: none;
  
  width: 100px;
  height: 60px;
  
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`

const Content = styled.div`
  margin: 40px auto;
`;

const Input = styled.input`
  box-sizing: border-box;
  
  margin: 0 20px 0 0;

  width: 300px;
  height: 35px;
  
  border: none;
  border-bottom: solid 2px grey;
`;

const Button = styled.button`
  padding: 9px 19px;
  
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  
  color: grey;
  background: none;
  border: 2px solid grey;

  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
      color: #000;
      transform: scale(1.05);
      transition: 0.2s;
  }
`;

const Contents = styled.div`
  display: flex;
`;

const UserName = styled.div`
  width: 90px;
`;

const Comment = styled.div`
  width:270px;
`

export default CommentSection;