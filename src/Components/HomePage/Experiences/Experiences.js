import React from 'react';
import ex1 from '../../../images/ex-1.png'
import ex2 from '../../../images/ex-2.png'
import ex3 from '../../../images/ex-3.png'
import ex4 from '../../../images/ex-4.png'
import star from '../../../images/star.png'
const experience = [
    {
        id: 0,
        title: 'NIGHT-NEW YORK',
        heading: "Discover the city's party scene",
        price: '$35 per person',
        image: ex1,
        rate: 64
    },
    {
        id: 1,
        title: 'ENTERTAINMENT-VANCOUVER',
        heading: "Tour with an Enthusiatic Local",
        price: '$3 per person',
        image: ex2,
        rate: 1
    },
    {
        id: 2,
        title: 'PHOTO CLASS-LOS ANGLES',
        heading: "Must Have L.A Pictures",
        price: '$39 per person',
        image: ex3,
        rate: 179
    },
    {
        id: 3,
        title: 'PHOTOGRAPHY-NEW YORK',
        heading: "Retro Photoshoot in NYC",
        price: '$49 per person',
        image: ex4,
        rate: 72
    }
]

const Experiences = () => {
    console.log(experience)
    return (
        <>
            <h2 className='mb-4'>Experiences</h2>
            <div className='row d-flex flex-wrap mb-4'>

                {
                    experience.map(x =>
                        <div className='col-7 col-md-6 col-lg-3 mx-auto '>
                            <div>
                                <img style={{ width: '220px' }} src={x.image} alt="" />
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

export default Experiences;
