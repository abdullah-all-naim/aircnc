import React from 'react';
import house1 from '../../../images/house-1.png'
import house2 from '../../../images/house-2.png'
import house3 from '../../../images/house-3.png'
import star from '../../../images/star.png'
const house = [
    {
        id: 0,
        title: 'NIGHTLIFE-NEW YORK',
        heading: "Unique Cob Cottage",
        price: '$128 per person',
        image: house1,
        rate: '284 - Superhost'
    },
    {
        id: 1,
        title: 'NIGHTLIFE-NEW YORK',
        heading: "The Joshua Tree House",
        price: '$250 per person',
        image: house2,
        rate: '269 - Superhost'
    },
    {
        id: 2,
        title: 'NIGHTLIFE-NEW YORK',
        heading: "A Pirate's Life For Me-Houseboat",
        price: '$209 per person',
        image: house3,
        rate: 140
    }
]

const Houses = () => {
    return (
        <>
            <h2 className='my-3'>Homes</h2>
            <div className='row d-flex flex-wrap'>
                {
                    house.map(x =>
                        <div className='col-8 col-lg-4'>
                            <div>
                                <img style={{ width: '295px' }} src={x.image} alt="" />
                                <small className='font-weight-bold'>{x.title}</small>
                            </div>
                            <div>
                                <h6 className='font-weight-bold'>{x.heading}</h6>
                                <p className='text-muted'>{x.price}</p>
                                <img style={{ width: '15px' }} src={star} alt="" />
                                <img style={{ width: '15px' }} src={star} alt="" />
                                <img style={{ width: '15px' }} src={star} alt="" />
                                <img style={{ width: '15px' }} src={star} alt="" />
                                <img style={{ width: '15px' }} src={star} alt="" />
                                <span>{x.rate}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Houses;