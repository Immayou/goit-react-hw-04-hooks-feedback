import styled from '@emotion/styled'


export const FeedbackBox = styled.div`
width: 500px;
margin: 0 auto 30px auto;
padding: 30px;
text-align: center;
border-radius: 5px;
border: 0.1px solid rgb(250, 221, 240); 
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`

export const ButtonValue = styled.button`
width: 80px;
min-height: 30px;
font-size: 16px;
line-height: 1.17;
text-transform: capitalize;
border-radius: 4px;
background-color: lightcoral;
color: #fff;
border: 0.1px solid rgb(250, 221, 240); 
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:not(:last-child) {
    margin-right: 30px;
}

:hover, :focus {
    transform: scale(1.1);
}
`

