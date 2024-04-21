import Header from '../../components/header/header.tsx';
import {OffersDetailed} from '../../types/offers/offer-detailed.ts';
import {useParams} from 'react-router-dom';
import PremiumSign from '../../components/premium-sign/premium-sign.tsx';
import Rating from '../../components/rating/rating.tsx';
import BookmarkButton from '../../components/bookmark-button/bookmark-button.tsx';
import OfferGallery from '../../components/offer/offer-gallery.tsx';
import OfferHost from '../../components/offer/offer-host.tsx';
import OfferReviews from '../../components/offer/offer-reviews.tsx';
import {mockReviews} from '../../moks/reviews.ts';
import OfferPrice from '../../components/offer/offer-price.tsx';
import Map from '../../components/map/map.tsx';
import {mockCities} from '../../moks/cities.ts';
import {AvailableCities} from '../../const.ts';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import {OffersShort} from '../../types/offers/offer-short.ts';
import OfferFeatures from '../../components/offer/offer-features.tsx';
import OfferInside from '../../components/offer/offer-inside.tsx';

type OfferPageProps = {
  offersDetailed: OffersDetailed;
  nearbyOffers: OffersShort;
}

function OfferPage({offersDetailed, nearbyOffers}: OfferPageProps): JSX.Element | null {
  const {id} = useParams();
  const nearbyPoints = nearbyOffers.map(({location}) => location);

  if (!id) {
    return null;
  }

  const currentOffer = offersDetailed.get(id);

  if (!currentOffer) {
    return null;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={currentOffer.images}/>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumSign show={currentOffer.isPremium} variant={'full'}/>

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <BookmarkButton variant={'full'}/>
              </div>

              <Rating value={currentOffer.rating} variant={'full'}>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </Rating>
              <OfferFeatures offer={currentOffer}/>
              <OfferPrice price={currentOffer.price} variant={'full'}/>
              <OfferInside offer={currentOffer}/>
              <OfferHost host={currentOffer.host} description={currentOffer.description}/>
              <OfferReviews reviews={mockReviews}/>

            </div>
          </div>
          <Map city={mockCities[AvailableCities.Paris]} points={nearbyPoints} variant={'offer'}/>
        </section>

        <div className="container">
          <OfferCardList cityName={'Paris'} offers={nearbyOffers} variant={'nearby'}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
