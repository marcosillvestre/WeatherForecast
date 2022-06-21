import styled from "styled-components";

export const Container = styled.section`
display: flex;
border-radius: 2em ;
padding: 2em 1em 4em 1em ;
align-items: center;
flex-direction: column;
width: 75vw;
height: 70vh;
background: white;
overflow-y: scroll;
filter: drop-shadow(0px 0px 5px #000);
nav{
display: flex;
align-items: center;
flex-direction: column;

}
input{
    margin-top: 2em;
    width: 100%;
    height: 3em;
    padding-left: 15px;
    border-radius: 10px;
}
button{
    width: 100%;
    height: 3em;
    margin:  10px 0 30px 0;
    border-radius: 10px;

}
`

export const MainContainer = styled.main`
color: white;
width: 100%;
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
border-radius: 20px;
padding: 15px;
margin-bottom: 20px;
background: rgb(100,149,237);
`
export const SecContainer = styled.main`
color: white;
width: 100%;
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
border-radius: 20px;
padding: 15px;
margin-bottom: 20px;
background: rgb(100,149,237);
`
export const ThirdContainer = styled.main`
color: white;
width: 100%;
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
border-radius: 20px;
padding: 15px;
margin-bottom: 20px;
background: rgb(100,149,237);
`
export const Icon = styled.img`
width: 8em;
height: 8em
`