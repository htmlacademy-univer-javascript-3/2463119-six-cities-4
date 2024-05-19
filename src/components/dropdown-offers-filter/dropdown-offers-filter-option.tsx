import {SortingOrder} from '../../types/sorting-order.ts';
import classNames from 'classnames';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setSortingOrder} from '../../store/acions.ts';

type DropdownOffersFilterOptionProps = {
  sortingOption: SortingOrder;
  isActive: boolean;
  dropdownStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropdownOffersFilterOption({sortingOption, isActive, dropdownStateSetter} : DropdownOffersFilterOptionProps) : JSX.Element {
  const dispatch = useDispatch();
  const className = classNames('places__option', {'places__option--active' : isActive});
  const handleSortingOptionOnClick = () => {
    dropdownStateSetter((state) => !state);
    dispatch(setSortingOrder(sortingOption));
  };

  return (
    <li className={className} tabIndex={0} onClick={handleSortingOptionOnClick}>{sortingOption}</li>
  );
}

export default DropdownOffersFilterOption;
