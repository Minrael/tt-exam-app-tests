import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

import InputFormSelect from './InputFormSelect';
import InputFormText from './InputFormText';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function getQuestionList(questions, answers) {
    const result = [];
    for (let i = 0; i < questions.length; i++) {
        const onChange = (event) => {
            answers[i] = event.target.value;
        }
        if (questions[i].type === "answer_options") {
            result.push(<InputFormSelect label={questions[i].task} onChange={onChange} options={questions[i].answer_options}/>);
        }
        if (questions[i].type === 'text_field') {
            result.push(<InputFormText label={questions[i].task} onChange={onChange}/>);
        }
    }
    return result;
}

function InputList(props) {

    const {
        questions,
        answers,
    } = props.state;

    return (
        <Container>
            {getQuestionList(questions, answers)}
        </Container>
    );
}

export default InputList;