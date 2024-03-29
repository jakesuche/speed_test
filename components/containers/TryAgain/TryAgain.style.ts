import styled from "styled-components";

export const TryAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    text-decoration: underline;
    margin: 0;
    font-size: 36px;
    margin-bottom: 20px;
  }

  .result-container {
      p{
        font-size: 28px;
        margin: 7px;
      }
  }

  button{
    position: relative;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    padding: 2px 16px;
    min-width: 64px;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    background-color: #3e4248;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    cursor: pointer;
    transition: background-color 0.2s;
    :hover{
        background-color: rgb(128, 128, 128);
    }
    :focus{
        background-color: rgb(128, 128, 128);
    }
  }
`;



