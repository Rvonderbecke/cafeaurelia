import styled from 'styled-components';

const MenuItemWrapper = styled.div`

    display: grid;
    grid-template-columns: 4rem 30rem 6rem 6rem 6rem;
    grid-column-gap: 1rem;
	font-family: 'cabin', serif;
    width: 30%;
    margin-top: 1rem;
    
    color: var(--gray);
    .burger{
        grid-column: 1;
        font-size: 2.5rem;
        display: flex;
        align-items: center;
        color: var(--purple);
    }
.col2 {
    grid-column: 2;
    display: flex;
    align-items: center;
	h4 {
		font-size: 2rem;
		padding: 0 1rem 0 1rem;
	}
	a {
		color: var(--pink);
        font-size: 1.1rem;
	}}

    p {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding: 0 1rem 0 1rem;
    }
    .price{
        grid-column: 3;
    }
    .qty {
        grid-column: 4;
    }

	.addBtn {
        grid-column: 5;
		width: 3rem;
		height: 3rem;
		border-radius: 20px;
		background-color: white;
		color: var(--gray);
		box-shadow: none;
		border: 1px solid var(--gray);
	}
`;
export default MenuItemWrapper;
