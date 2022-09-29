import styled from 'styled-components';

const FooterWrapper = styled.footer`
display: grid;
grid-row: 4;
background-color: var(--yellow);  

.footerContainer{
display: flex;
justify-content: space-around;
align-items: center;
font-family: 'lemonada', cursive;
text-align: center;
color: var(--gray);


h3 {
    font-size: 1.5rem;
    font-weight: 600;
}
h4 {
    font-size: 1.25rem;
    margin-top: .5rem;
}
p{
    font-size: 1.15rem;
    line-height: 1.75rem;
    margin-top: .5rem;
}
.footerLeft{
    p {
        text-align: left;
        margin: 0 0 1rem 1rem;
        
    }
}
}


`

export default FooterWrapper;