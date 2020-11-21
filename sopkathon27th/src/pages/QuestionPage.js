import React from 'react'

function QuestionPage({match}) {
    console.log(match.params.idx);
    switch (Number(match.params.idx)){
        case 1:
            return (
                <>
                    QuestionPage1
                </>
            )
        case 2:
            return (
                <>
                    QuestionPage2
                </>
            )
        case 3:
            return (
                <>
                    QuestionPage3
                </>
            )
        case 4:
            return (
                <>
                    QuestionPage4
                </>
            )
        case 5:
            return (
                <>
                    QuestionPage5
                </>
            )
        case 6:
            return (
                <>
                    QuestionPage6
                </>
            )
        case 7:
            return (
                <>
                    QuestionPage7
                </>
            )
        case 8:
            return (
                <>
                    QuestionPage8
                </>
            )
        default:
            return(
                <>
                    defaultPage
                </>
            )
    }
}

export default QuestionPage
