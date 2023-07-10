import styled from 'styled-components';

export const FriendListStyled = styled.ul`
width: 300px;
text-align: center;
margin: 0 auto;
margin-bottom: 70px;
padding: 0;
list-style: none;
display: flex;
flex-direction:column;
align-items: center;
gap: 20px;
li {
    border: 2px solid blue;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 25px;
    padding: 10px 0;
    border-radius: 5px;
}
span {
    padding-left: 20px;
}
p{
    margin: 0;
    font-size: 25px;
    font-weight: 500;
}`;