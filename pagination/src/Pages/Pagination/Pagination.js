import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Pagination = () => {

    // 현재 페이지 state
    const [page, setPage] = useState(1);

    // page 당 표시할 데이터 수 state
    const [limit, setLimit] = useState(10);

    // API 저장 state
    const [responseData, setResponseData] = useState();

    // limit 설정
    const onChangeLimit = e => {

        setLimit(e.target.value);
    };

    // page 설정
    const onChangePage = value => {
       
        setPage(value);
    };
    
    const getPagination = () => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}$_limit=${limit}`
        )
            .then((response) => response.json())
            .then((data) => setResponseData(data));
    };

    useEffect(() => {
        getPagination();
    }, [page, limit]);


    return (
        <Main>
            <Header>POST</Header>
            <Select type="number" onChange={(e) => onChangeLimit(e)} value={limit} >
                <option value={'10'}>10</option>
                <option value={'20'}>20</option>
                <option value={'50'}>50</option>
                <option value={'100'}>100</option>
            </Select>

            {responseData &&
                responseData.map((data) => {
                    return (
                        <Section key={data.id}>
                            <Data>
                                {data.id}
                            </Data>
                            <DataTitle>
                                {data.title}
                            </DataTitle>
                        </Section>
                    );
                })
            }

            <ButtonContent>
                <Button onClick={() => onChangePage(1)}>1</Button>
                <Button onClick={() => onChangePage(2)}>2</Button>
                <Button onClick={() => onChangePage(3)}>3</Button>
                <Button onClick={() => onChangePage(4)}>4</Button>
                <Button onClick={() => onChangePage(5)}>5</Button>
                <Button onClick={() => onChangePage(6)}>6</Button>
                <Button onClick={() => onChangePage(7)}>7</Button>
                <Button onClick={() => onChangePage(8)}>8</Button>
                <Button onClick={() => onChangePage(9)}>9</Button>
                <Button onClick={() => onChangePage(10)}>10</Button>
            </ButtonContent>
        </Main>
    );

};


const Main = styled.main`
    margin: 50px auto 0;
    
    width: 60%;
`

const Header = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
`

const Select = styled.select`
    padding: 7px;

    width: 80px;
`

const Section = styled.section`
    display: flex;

    margin: 10px 0;
    padding: 0 20px;
    gap: 20px;

    border: 1px solid #666;
    box-shadow: 2px 2px 2px grey;
`

const Data = styled.h3`
    display:flex;
    justify-content: center;
    align-items: center;
`

const DataTitle = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
`

const Button = styled.button`
    margin: 50px 10px 150px;
    
    width: 40px;
    height: 40px;
    
    background: black;
    color: white;
    font-size: 16px;
    
    border: none;
    border-radius: 50%;
    
    cursor: pointer;
    transition: 0.4s;

        &:hover {
            background: #666;
            transition: 0.3s;
        }
`

const ButtonContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`


export default Pagination;