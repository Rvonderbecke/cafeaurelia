import { MenuItemWrapper } from '../styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faUser,
	faBurger,
} from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({ iconD, title, price, qty }) => {
	return (
		<MenuItemWrapper>
			<div className='burger'>
				<FontAwesomeIcon icon={faBurger} />
			</div>
			<div className='col2'>
				<h4>{title}</h4>
				<Link to='/menuitem/:id'>customize</Link>
			</div>
			<p className='price'>{price}</p>
			<p className='qty'>{qty}</p>
			<button className='addBtn' type='button'>
				+
			</button>
		</MenuItemWrapper>
	);
};
export default MenuItem;
