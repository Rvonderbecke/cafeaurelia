import MenuItem from './MenuItem'
const exampleData = [{
    icon: 'faBurger',
    title: 'Bacon Egg and Cheese',
    price: 6.50,
    qty: 1,


}, {
    icon: 'faBurger',
    title: 'Sausage Egg and Cheese',
    price: 7.50,
    qty: 1,


}];

const MenuItems = () => {

  
    return (

    <div>

        {
            exampleData.map((item) => <MenuItem title={item.title} iconD={item.icon} price={item.price} qty={item.qty} />)
        }
            
    </div>
    )};


export default MenuItems