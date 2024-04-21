import {OffersShort} from '../../../types/offers/offer-short.ts';
import {OfferCardListVariants} from '../../../types/variants.ts';
import DropdownOffersFilter from '../../dropdown-offers-filter/dropdown-offers-filter.tsx';
import OfferCardListContainer from './offer-card-list-container.tsx';
import {useOfferCardList} from '../../../hooks/use-offer-card-list.ts';
import {useState} from 'react';
import {Nullable} from '../../../types/nullable.ts';

type OfferCardListProps = {
  cityName: string;
  offers: OffersShort;
  offersCount?: number;
  variant: OfferCardListVariants;
}

function OfferCardList({cityName, offers, variant, offersCount}: OfferCardListProps) {
  const [, setHoverCard] = useState<Nullable<string>>(null);
  const handleHoverCard = (id: Nullable<string>) => setHoverCard(id);
  const {
    sectionClassName,
    headerClassName,
    headerContent,
    isHeaderActive,
    isFoundActive,
    isFormActive,
    containerClassName,
  } = useOfferCardList({variant});
  return (
    <section className={sectionClassName}>
      {isHeaderActive && <h2 className={headerClassName}>{headerContent}</h2>}
      {isFoundActive && <b className="places__found">{offersCount} places to stay in {cityName}</b>}
      {isFormActive && <DropdownOffersFilter/>}
      <OfferCardListContainer offers={offers} className={containerClassName} onCardHover={handleHoverCard}/>
    </section>
  );
}

export default OfferCardList;
