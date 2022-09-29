import styled from 'styled-components';



const MenuWrapper = styled.section`
display: flex;
justify-content: space-around;
align-items: center;

.innerbox {
    h3 {
      
        transform: rotate(-25deg) translateY(10rem);
        font-size: 3rem;
        color: white;
        font-family: 'Lemonada', cursive;
        font-weight: 800;
        text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
        width: 20rem; 
    }
    img {
        height: 30rem;
        border-radius:15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .landingDesc {
       font-size: 2rem;
       font-weight: 600;
       font-family: 'Lemonada', cursive;
       color: var(--pink);
       text-align: center;
       margin-top: 2rem;
    }

}



`

export default MenuWrapper;