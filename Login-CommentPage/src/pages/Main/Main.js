import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../../img/img_main.png'

const Main = () => {

    // 댓글을 저장할 State 생성하기!
    const [userComment, setUserComment] = useState([
        {
            id: "DD",
            comment: "퍼가요~♡"
        },
        {
            id: "react123",
            comment: "퍼가요~♡"
        },
        {
            id: "glassy",
            comment: "좋은 정보 감사합니다. 퍼가요~♡"
        }
    ]);


    // 댓글 저장하는 State 작성하기!
    const [inputComment, setInputComment] = useState("");

    // 댓글, e.target.value를 state에 저장하는 onChange 함수 작성하기!
    const InputComment = (e) => {
        const { value } = e.target;

        setInputComment(value);
    };

    // Button을 클릭 시, input 내용을 저장하기!
    const CommentButton = () => {
        const commentObject = {
            id: "hyemin",
            comment: inputComment
        };

        setUserComment([...userComment, commentObject]);
        setInputComment("");
    };

    return (
        <Section>
            <Image src={image} alt='image' />
            <CommentContents>
                {userComment.map((data, index) => (
                    <Contents key={index}>
                        <UserName>{data.id}</UserName>
                        <div>{data.comment}</div>
                    </Contents>
                ))}
            </CommentContents>
            <Content>
                {/* onChange 함수를 댓글 입력 input tag에 적용하기! */}
                <Input onChange={(e) => InputComment(e)} value={inputComment} />
                <Button onClick={() => CommentButton()}>추가</Button>
            </Content>
        </Section>
    )
};

const Section = styled.div`
    margin: 70px auto;
    padding: 50px 0;
    
    width: 800px;    
    
    border-radius: 20px;
    background: #eee;
`;

const Image = styled.img`
    display: block;

    margin: 0 auto;
    
    width: 400px;
    height: 370px;
`;

const Content = styled.div`
    margin: 40px auto 0;
    
    width: 600px;
`;

const Input = styled.input`
    box-sizing: border-box;
    
    margin: 0 20px 0 0;
    padding: 0 14px;
    
    width: 84%;
    height: 35px;
    
    border: none;
    border-bottom: solid 2px grey;
    background: #eee;
`;

const Button = styled.button`
    padding: 9px 19px;
    
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    
    border: solid 2px grey;
    border-radius: 10px;
    color: #fff;
    background: #95bad6;
    
    cursor: pointer;
    
    &:hover {
        background: skyblue;
        transition: 0.3s;
    }
`;

const CommentContents = styled.div`
    margin-top: 30px;
    padding-top: 20px;
    
    border-top: solid 3px #fff;
`;

const Contents = styled.div`
    display: flex;
    
    margin: 20px auto 0;
    
    width: 600px;
`;

const UserName = styled.div`
    width: 100px;
`;


export default Main;