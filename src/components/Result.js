import React from 'react';

const Result = (props) => {
    return (
        <div>
        <h2>Final Score: {`${props.finalScore}/${props.totalQsns}`}</h2>
        <br/><br/>
        {props.questions.map(qsn => (
                Number(qsn.correctAns) === Number(qsn.userAns) ?
                    <div>
                        <b>Question {qsn.qsnNumber}:</b>
                        <p>{`${qsn.operand1} ${qsn.operator} ${qsn.operand2} = ${qsn.userAns}`}</p>
                    </div>
                    : <div>
                        <b>Question {qsn.qsnNumber}:</b>
                        <p style={{ background: 'red' }}>{`${qsn.operand1} ${qsn.operator} ${qsn.operand2} = ${qsn.userAns}`}</p>
                        <p>Correct Answer: {qsn.correctAns}</p>
                    </div>
        ))}
        </div>
    )
}

export default Result;