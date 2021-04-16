import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 50%;
  min-width: 50%;
  height: 50%;
  min-height: 50%;
  background-color: white;
  position: absolute;
  z-index: 99;
  left: 25%;
  top: 5%;
  display: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  ${props => props.isOpen && css`
    display: block;
  `}

  .flex-start{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .flex-end{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const Head = styled.div`
  display: flex;
  position: relative;
  padding: 15px;
  justify-content: space-between;
  height: 100px;
  color: #fff;
  font-weigth: 500;
  background: #5ba4cf;
  font-size: 18px;
  button{
    width:  30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.24);
    font-weigth: 500;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
  }
`;

export const Label = styled.span`
  color: #172b4d;
  display: flex;
  h3{
      margin-left: 5px;
  }
`;

export const Section = styled.div`
  display: block;
  width: 80%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: block;
  padding: 20px;
  background: #ecf1f8;
  color: #172b4d;

  textarea{
      width: 100%;
      height: 100px;
      background: #FFF;
      border-radius: 5px;
      border: solid 1px #FFF;
      padding: 10px;
      font-size: 16px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      outiline: 0
  }

  .btn-success{
    justify-content: end; 
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  } 
  
  .btn-success:hover {
      background-color: #2EE59D;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-2px);
  }
  
`;

export const Foot = styled.div`
  display: block;
`;

export const CheckboxContainer = styled.div`
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
`;
export const Text = styled.label`
`;
export const StyledCheckbox = styled.label`
`;
