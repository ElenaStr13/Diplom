import './offer.scss';
import { useTranslation } from 'react-i18next';
import Items from '../../pagination/Pagination';

function Offer() {

    const [t] = useTranslation(["translation"]);

    return <>
        <h2>{t('descriptionCategory.titleOffer')}</h2>
        <section className='offers'>
            <div className='offer'>
                <img src="./image/category/Best-offers1.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerOne.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerOne.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers2.webp" alt="photo2" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerTwo.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerTwo.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers3.webp" alt="photo3" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerThree.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerThree.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers4.webp" alt="photo4" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerFour.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerFour.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers5.webp" alt="photo5" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerFife.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerFife.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers6.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerSix.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerSix.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers7.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerSeven.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerSeven.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers8.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerEight.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerEight.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers9.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerNine.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerNine.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers10.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerTen.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerTen.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers11.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerEleven.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerEleven.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>
            <div className='offer'>
                <img src="./image/category/Best-offers12.webp" alt="photo1" />
                <div className='offer-text'>
                    <p>{t('descriptionCategory.Offers.offerTwelve.category')}</p>
                    <p className='title-offer'>{t('descriptionCategory.Offers.offerTwelve.titleCategory')}</p>
                    <p className='text-offer'>{t('descriptionCategory.Offers.offerOne.textCategory')}</p>
                    <a href="#">{t('descriptionCategory.Offers.offerOne.learn')}</a>
                </div>
            </div>

        </section>        
        <Items/>
        {/* <div className='pages'>{t('descriptionBlog.blogNumber')}</div> */}

    </>
}

export default Offer;