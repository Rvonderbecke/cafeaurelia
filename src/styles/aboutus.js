import styled from 'styled-components';


const AboutWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
h1 {
    font-family: 'cabin', serif;
    font-size: 5rem;
    color: var(--gray);
    text-shadow: 3px 4px 7px var(--lightGray);
    margin-bottom: 5rem;
}
p{
    width: 60%;
    text-align: center;
    font-size: 2rem;
    font-family: 'lemonada', cursive;
    line-height: 3.5rem;
    color: var(--gray);
}

`

export default AboutWrapper;
