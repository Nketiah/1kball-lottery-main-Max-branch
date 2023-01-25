import React from 'react'
import {Wrapper, Content} from './styles';



const SearchBar = () => {
  return (
    <Wrapper>
        <Content>
        {/* <img src={'searchIcon'} alt='search-icon' /> */}
          <input
            type='text'
            placeholder='Search Movie'
            onChange={event => this.setState({ value: event.currentTarget.value })}
            value={'value'}
          />
          search
        </Content>
    </Wrapper>
  )
}

export default SearchBar