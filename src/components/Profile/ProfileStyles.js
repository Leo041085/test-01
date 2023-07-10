import styled from 'styled-components'

export const ProfiledStyled = styled.div`
outline: 2px solid blue;
width: 600px;
margin: 10px auto;
margin-bottom: 60px;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 15px;
color: blue;
font-size: 35px;

img {
    outline: 1px solid grey;
    display: block;
    margin: 40px auto;
    width: auto;
    border-radius: 50%;
}`;

export const Stats = styled.ul`
  border-radius: 15px;
  list-style: none;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: yellowgreen;
  color: black;

  li {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    width: 100%;
  }
`;

export const StatsNumber = styled.span`
 font-weight: bold;`

export const NameStyled = styled.p`
  color: black;
  font-size: 40 px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 15px;`