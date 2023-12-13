import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content:center;
`
export const FormAddressContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10rem;
  gap: 2rem;
  div > h2 {
    margin-bottom: 1rem;
  }
`
export const DivAddressContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background-color: #f9fafb;
  color: #525252;
  background-color: #15803d;
  border-radius: 1rem;
  > p {
    padding-bottom: 2rem;
  }
  > h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
  }
  .w-100 {
    width: 100%;
  }
`

interface InputWidth {
  variantWidth: '25%' | '33%' | '50%' | '75%' | '100%'
}

export const DivInput = styled.div<InputWidth>`
  padding: 0.75rem;
  background-color: #d1fae5;
  border-radius: 4px;
  margin-top: 1rem;
  width: ${(props) => props.variantWidth};
  input {
    width: 100%;
    border: 0;
    font-size: 1rem;
    background-color: transparent;
  };
  input:focus {
    outline: none
  }
`

export const DivRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`