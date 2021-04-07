import styled from 'styled-components'

export const Container = styled.div`
  background-color: #222;
  height: 100vh;
  padding-top: 10%;
`
export const Wrapper = styled.div`
  background-color: #292929;
  max-width: 320px;
  max-height: 460px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 2em;

  a {
    color: #888;
    text-decoration: none;
    font-size: 0.8em;

    &:hover {
      color: #777;
    }
  }
`
export const Brand = styled.div`
  // code brand
`
export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  input {
    background-color: #292929;
    color: white;
    height: 1.2em;
    margin: 1em 0;
    border: none;
    border-bottom: 1px solid #555;
    outline: none;
    font-size: 1.2em;
    padding: 3px;
  }

  button {
    background-color: #222;
    border: 1px solid #444;
    height: 2em;
    font-size: 1.2em;
    border-radius: 7px;
    color: #aaa;

    &:hover :visited :link {
      color: #ddd;
      background-color: #292929;
      border-color: #555;
    }

    &:active {
      background-color: #222;
      border-color: #555;
      outline: none;
    }
  }
`
