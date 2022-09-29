import styled from 'styled-components';


const HeaderNavWrapper = styled.nav`

.headerNav {
background-color: #FDD85D;
height: 4.1rem;
display: flex;
justify-content: space-between;
align-items: center;

a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    color: var(--gray);
    margin: 1rem;
    
    text-transform: uppercase;
    font-family: 'cabin', serif;
}
 
.navlinks {
    padding-left: 10rem;
}
.navIcons {
    padding-right: 10rem;
}
}




`





export default HeaderNavWrapper;