import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  /* widht: 600px; */
  text-align: center;
  margin: 0 auto;
  margin-bottom: 70px;
  border-radius: 5px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  li {
    border: 2px solid blue;
    font-weight: bold;
    color: black;
    display: flex;
    flex-direction: column;
    width: 100px;
    padding: 10px;
    font-size: 25px;
  }
`;

export const Title = styled.h2`
margin: 0;
padding-top: 25px;
font-size:35px;
font-weight:700;`

export const StatisticsLi = styled.li`
background-color: ${({ color}) => color}`
