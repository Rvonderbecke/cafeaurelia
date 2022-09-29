import { MenuBoardWrapper } from '../styles';
import MenuItems from './MenuItems';
const MenuBoard = ({ title, description }) => {
	return (
		<MenuBoardWrapper>
			<h3>{title}</h3>
			<p className='menuDesc'>{description}</p>
			
				<MenuItems />
				
		</MenuBoardWrapper>
	);
};
export default MenuBoard;
