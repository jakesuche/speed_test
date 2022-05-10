import styled from "styled-components";

type Iprops = {
  backgroundColor?: string;
};

export const ChallangeWrapper = styled.div<Iprops>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;

  .timer-container {
    margin: 16px;
    /* margin-bottom: 0; */
  }
  .timer {
    font-size: 38px;
    font-weight: 600;
    margin: 0;
  }

  .timer-info {
    margin: 0;
    margin-top: -5px;
    color: #dd5044;
  }
`;

export const TextAreaContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 80%;

  .textarea-left {
  }
  .textarea-right {
  }
`;

export const TextareaContent = styled.div`
  display: flex;
  width: 50%;
  flex-grow: 1;
  textarea {
    text-align: left;
    flex-grow: 1;
    height: 400px;
    width: 100%;
    padding: 10px;
    line-height: 18px;
    flex-wrap: wrap;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: scroll;
  }
`;

export const Select = styled.select`
  position:absolute;
  top:10px;
  right:50px;
`
