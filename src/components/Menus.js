import { MenuWrapper } from '../styles';
import FeaturedInfoBox from '../components/featuredInfoBox.js';
const Menus = () => {
	return (
		<>
			<MenuWrapper>
				<FeaturedInfoBox
					path='breakfast'
					title={
						<p>
							Breakfast
							<br />
							Sandwiches
						</p>
					}
					description='Check out our Breakfast Bowls!'
					src='/images/breakfastSand.jpeg'
				/>
				<FeaturedInfoBox
					path='lunch'
					title='Delicious Subs'
					description='We have gluten free bread!'
					src='/images/subs.jpeg'
				/>
				<FeaturedInfoBox
					path='aboutus'
					title='Party Platters'
					description='Get your meals delivered!'
					src='/images/partyPlatters.jpeg'
				/>
      </MenuWrapper>
      <div className="orderBtn">
			<button className='btn'>Order Now</button>
      </div>
		</>
	);
};
export default Menus;
