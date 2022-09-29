import styled from 'styled-components';


const HeaderWrapper = styled.header`
display: grid;
grid-row: 1;
background-color: #ffafd2;
height: 15rem;
padding-top: 2rem;

h1{
    color: white;
    font-size: 6.5rem;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
}
.scallopedBorder {
    display: flex;
    justify-content: stretch;
    width: 100%;
    
    
}

`

export default HeaderWrapper;