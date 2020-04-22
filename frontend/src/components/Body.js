import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import InputForm from './InputForm';
import SubmitButton from './SubmitButton';
import UserInfo from './UserInfo';
import InputList from './InputList';
import InputFormText from './InputFormText';

const Header = styled.div`
    display: flex;
    font-size: 40px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-color: grey;
    margin: 20px;
    color: dimgrey;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const GET_SURVEY_URL = 'htpp://localhost:8000/';
const POST_SURVEY_URL = 'http://localhost:8000/';


function Body() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const state = {
        name,
        setName,
        surname,
        setSurname,
        answers,
        setAnswers,
        questions,
        setQuestions,
    }

    const { id } = useParams();

    const nameOnChange = (event) => {
        setName(event.target.value);
    } 

    const surnameOnChange = (event) => {
        setSurname(event.target.value);
    }

    const onSubmit = () => {
        const data = {
            'testID': id,
            'name': name,
            'surname': surname,
            'answers': answers,
        }
        fetch(POST_SURVEY_URL, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        // fetch(`${GET_SURVEY_URL}/${id}`)
        // .then(response => response.json())
        // .then(data => {
        //     for (let i = 0; i < data.test.questions.length; i++) {
        //         answers.push('');
        //     }
        //     setQuestions(data.test.questions);
        // })
    }, []);

    return (
        <Container>
            <Header>Опрос</Header>
            <InfoContainer>
                <UserInfo label='Имя' onChange={nameOnChange}/>
                <UserInfo label='Фамилия' onChange={surnameOnChange}/>
            </InfoContainer>
            <InputList state={state}>
            </InputList>
            <InputForm/>
            <InputForm/>
            <InputForm/>
            <InputForm/>
            <InputFormText label='Введите ответ на вопрос:' onChange={(event) => console.log(event.target.value)}/>
            <SubmitButton onSubmit={onSubmit}/>
        </Container>
    );
}

export default Body;