import { useContext } from 'react';
import { useNavigate} from 'react-router-dom'; // metodo che ci consente di usare una navigate function in modo da accedere alle routes

import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, CartItems , EmptyMessage} from './cart-dropdown.style';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <CartDropdownContainer>
        <CartItems>
        
        { cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
            ))) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )}

        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )

}

export default CartDropdown;