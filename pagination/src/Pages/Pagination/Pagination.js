import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonContents from './component/ButtonContents';
import SelectBox from './component/Select';


const Pagination = () => {

    const [isModal, setIsModal] = useState(false);

    const onClickModal = (index) => {
        setIsModal(index);
    };

    const onClickButton = () => {
        setIsModal(false);
    };
    
    // 현재 페이지 state
    const [page, setPage] = useState(1);
    
    // page 당 표시할 데이터 수 state
    const [limit, setLimit] = useState(10);

    const [index, setIndex] = useState(0);

    // API 저장 state
    const [responseData, setResponseData] = useState();
  
    // limit 설정
    const onChangeLimit = e => {

        setLimit(e.currentTarget.value);
    };
   
    // page 설정
    const onChangePage = value => {

        setPage(value);
    };

    const getPagination = () => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => setResponseData(data));
    };

    useEffect(() => {
        getPagination();
    }, [page, limit]);

    console.log(responseData);
    return (
        <Main>
            <Header>POST</Header>
            <SelectBox onChangeLimit={onChangeLimit} />

            {/* 조건부 렌더링 */}
            {responseData &&
                responseData.map((data, index) => {
                    return (
                        <>
                            <Section key={data.id} onClick={() => onClickModal(true)} >
                                <Data >
                                    {data.id}
                                </Data>
                                <DataTitle>
                                    {data.title}
                                </DataTitle>
                            </Section>
                    
                            <ModalWrap key={data} isModal={isModal}>
                                <ModalContainer key={data[index]} isModal={isModal}>
                                    <ModalUserId> UserId : {data.userId}&nbsp;&nbsp;&nbsp;&nbsp;Id : {data.id}</ModalUserId>
                                    <ModalTitle> Title : {data.title}</ModalTitle>
                                    <ModalBody>{data.body}</ModalBody>
                                    <ModalButton onClick={onClickButton}>Close</ModalButton>
                                </ModalContainer>
                            </ModalWrap>
                        </>
                    );
                })
            }
            <ButtonContents onChangePage={onChangePage} page={page} />
        </Main>
    );

};

const Main = styled.main`
    margin: 50px auto 0;
    
    width: 50%;
`

const Header = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
`

const Section = styled.button`
    display: flex;
    align-items: center;

    width: 100%;

    margin: 10px 0;
    padding: 3px 23px;
    gap: 30px;

    background-color: #fff;

    border: 1px solid #666;
    box-shadow: 3px 3px 3px grey;
    
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #999;
        color: #fff;
        transition: 0.2s;
    }
`

const Data = styled.h3`
    display:flex;
    justify-content: center;
    align-items: center;
`

const DataTitle = styled.div`
    font-weight: bold;
    font-style: italic;
`

const ModalWrap = styled.div`
    display: ${(props) => (props.isModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.2);
`

const ModalContainer = styled.div`
    display: ${(props) => (props.isModal ? "block" : "none")};
   
    position: relative;

    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    text-align: center;
    font-size: 20px;    

    overflow: hidden;

    width: 650px;
    height: 360px;

    background: #fff;
    box-shadow: 3px 3px 3px #333;

    border-radius: 10px;
    
    animation: modal 0.5s ease;
    @keyframes modal {
        from {
          transform: translate(-50%, -62%);
        }
        to {
          transform: translate(-50%, -50%);
        }
      }
    
`

const ModalButton = styled.button`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);

    padding: 10px;

    width: 400px;
    
    color: #fff;
    background: #888;
    border: none;
    border-radius: 10px;
    
    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
    transition: 0.4s;

        &:hover {
            background: #000;
            transition: 0.3s;
        }

`

const ModalUserId = styled.h3`
    border-bottom: 2px solid #999;
    padding-bottom: 20px;
`

const ModalTitle = styled.h4`
    margin: 0 22px;
`

const ModalBody = styled.p`
    margin: 22px; 
`

export default Pagination;