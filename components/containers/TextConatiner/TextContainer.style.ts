import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  margin: 20px;
  margin-left: 10%;
  width: 80%;
  min-height: 700px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-content:center;
  border-radius: 10px;
  position:relative;
`;

export const Select = styled.select`
  position: absolute;
  right: 30px;
  top: 150px;
  z-index: 999999;
  

`
