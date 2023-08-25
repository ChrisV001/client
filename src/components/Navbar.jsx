import { Search, ShoppingCartSharp } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components';
import {mobile} from "../responsive"

const Container = styled.div`
    margin-top: 130px;
    background-color: lightgray;
    justify-content: space-between;
    display: flex;
    padding: 10px;
    margin-bottom: 15px;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
    justify-content: space-between;
    cursor: pointer;
    ${mobile({padding: "10px 0px"})}
`
const SearchContainer = styled.div`
 border: 1px solid black;
 align-items: center;
 ${mobile({height: "50px"})}
`
const Align = styled.div`
    float: right;
    margin-bottom: 30px;
    display: flex;
    ${mobile({height: "50px"})}
`
const Input = styled.input`
    ${mobile({height: "50px"})}
`
const Right = styled.div`
    cursor: pointer;
    float: right;
    border: 1px solid black;
    margin-right: 400px;
    ${mobile({height: "50px"})}
`
const ShoppingCart = styled.div`
    cursor: pointer;
    float: right;
    margin-right: 50px;
    ${mobile({height: "50px"})}
`
const Logo = styled.img`
    float: left;
    border: 1px solid black;
    display: flex;
    /* justify-content: left;
    align-items: center; */
    height: 100px;

    padding: 5px;
    ${mobile({height: "50px"})}
`
const navbar = () => {
  return (
    <div>
    <Logo src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF8I1SnFRgS1968WHCrEC39RaQ7Cwm7jQzOi5cmuuyhD4p8a8O'/>
    <SearchContainer>
        <Align>
        <Search/>
        <Input type='text'/>
        </Align>
    </SearchContainer>
    <Right>
        Sign in
    </Right>
    <ShoppingCart>
    <ShoppingCartSharp></ShoppingCartSharp>
    </ShoppingCart>
    <Container>
      <Wrapper>Laptops</Wrapper>
      <Wrapper>Keyboards</Wrapper>
      <Wrapper>Mouses</Wrapper>
      <Wrapper>Monitors</Wrapper>
      <Wrapper>Phones</Wrapper>
      <Wrapper>Watches</Wrapper>
    </Container>
    </div>
  )
}

export default navbar
