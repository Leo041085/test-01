import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
 
  margin: 0 auto;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;

  thead{
    background-color: aquamarine;
  }
  th{
    width: 250px;
    padding: 15px 0;
    outline: 2px solid blue;
  }
  td {
    padding: 15px 0;
    border: 1px solid black;
    width: 250px;
    text-align:center;
  }
`
export const TableHeader = styled.tr`
background-color: aquamarine;`