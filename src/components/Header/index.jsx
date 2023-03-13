import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FiShoppingCart} from 'react-icons/fi'
import {TiArrowBack} from 'react-icons/ti'
import { 
    StyledHeaderContainer,
    StyledIconContainer,
    StyledSearchInput
} from './style'

export const Header = () => {
    const {pathname} = useLocation();
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        const {value} = event.target;
        setSearch(value)
    }

    return (
        <StyledHeaderContainer>
            {
                pathname === '/cart' && (
                    <Link to="/">
                    <StyledIconContainer>
                    <TiArrowBack/>
                    </StyledIconContainer>
                    </Link>
                )
            }
            <h1>Ecommerce</h1>
            {
                pathname !== '/cart' && (
                    <StyledSearchInput
                        type='text'
                        value={search}
                        onChange={handleChange}
                    />
                )
            }
            <Link to="/cart">
            <StyledIconContainer>
                <FiShoppingCart />
            </StyledIconContainer>
            </Link>
        </StyledHeaderContainer>
    )
}



