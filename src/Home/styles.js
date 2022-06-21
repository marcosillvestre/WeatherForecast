import styled from "styled-components";

export const Container = styled.section`
display: flex;
border: 1px solid black  ;
border-radius: 2em ;
padding: 2em 1em 4em 1em ;
justify-content: center;
align-items: center;
flex-direction: column;
width: 65vw;
background: rgb(228,228,295);
input{
    margin-top: 4em;
    width: 70%;
    height: 3em;
    padding-left: 15px;
    border-radius: 10px;
}
button{
    width: 70%;
    height: 3em;
    margin:  15px 0 15px 0;
    border-radius: 10px;

}
`

export const MainContainer = styled.main`
color: white;
width: 30em;
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
border-radius: 20px;
padding: 20px;
background: rgb(100,149,237);
`
export const Icon = styled.img`
width: 7em;
height: 7em
`