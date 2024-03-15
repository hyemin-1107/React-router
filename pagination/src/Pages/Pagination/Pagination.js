import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonContents from './component/ButtonContents';
import SelectBox from './component/Select';
import Modal from './component/Modal';

const Pagination = () => {

    // 현재 페이지 state
    const [page, setPage] = useState(1);

    // page 당 표시할 데이터 수 state
    const [limit, setLimit] = useState(5);

    const [index, setIndex] = useState(0);

    // API 저장 state
    const [responseData, setResponseData] = useState();

    const [isModal, setIsModal] = useState(false);

    const onClickModal = (Number) => {

        setIndex(Number);
        setIsModal(true);

    };

    const onClickButton = () => {
        setIsModal(false);
    };



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
                            <Section key={data.id} onClick={() => onClickModal(index)} >
                                <Data >
                                    {data.id}
                                </Data>
                                <DataTitle>
                                    {data.title}
                                </DataTitle>
                            </Section>
                        </>
                    );
                })
            }
            {(index || index === 0) && responseData && (
                <Modal
                    data={responseData}
                    index={index}
                    isModal={isModal}
                    onClickButton={onClickButton}
                />
            )}
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
        transform: scale(1.05);
        background: #999;
        color: #fff;
        transition: 0.3s;
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



export default Pagination;