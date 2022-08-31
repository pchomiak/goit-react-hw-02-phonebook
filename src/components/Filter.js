import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FancyFilterInput = styled.input({
  width: '100px',
  '&:focus': { outlineColor: 'blue' },
});

const FancyFilter = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

function Filter({ value, onChange }) {
  return (
    <FancyFilter>
      <span>Find contacts by name</span>
      <FancyFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></FancyFilterInput>
    </FancyFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
