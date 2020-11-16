import React, { useContext } from 'react';
import { ClientContext } from '../../App';
import hotel1 from '../../images/hotel-1.jpg'
import hotel2 from '../../images/hotel-2.jpg'
import hotel3 from '../../images/hotel-3.jpeg'
import star from '../../images/star.png'

const HotelList = () => {
    const [clientsNeed, setClientsNeed] = useContext(ClientContext)
    return (
        <div className="row  px-5 mt-5 mx-3">
            <div className="col-lg-6">
                <div className='mt-3' style={{ fontFamily: 'revert' }}>
                    <p className='text-muted font-weight-bold'>252 stays {clientsNeed.arrival}{clientsNeed.departure} {clientsNeed.adult + clientsNeed.child} guests</p>
                    <h4 className='mb-3 font-weight-bold'>Stay in {clientsNeed.location}</h4>
                    <div className='row d-flex my-4'>
                        <div className='col- my-2' style={{ border: '2px solid lightGray', borderRadius: '30px', marginRight: '8px' }}>
                            <p className='text-muted px-3 my-2'>Cancellation flexibility</p>
                        </div>
                        <div className='col- my-2' style={{ border: '2px solid lightGray', borderRadius: '30px', marginRight: '8px' }}>
                            <p className='text-muted px-3 my-2'>Type of place</p>
                        </div>
                        <div className='col- my-2' style={{ border: '2px solid lightGray', borderRadius: '30px', marginRight: '8px' }}>
                            <p className='text-muted px-3 my-2'>Price</p>
                        </div>
                        <div className='col- my-2' style={{ border: '2px solid lightGray', borderRadius: '30px', marginRight: '8px' }}>
                            <p className='text-muted px-3 my-2'>Instant Book</p>
                        </div>
                        <div className='col- my-2' style={{ border: '2px solid lightGray', borderRadius: '30px', marginRight: '8px' }}>
                            <p className='text-muted px-3 my-2'>More Filters</p>
                        </div>
                    </div>
                    <div className='mb-5 row '>
                        <div className='col-md-4'>
                            <img src={hotel1} style={{ height: '190px', weight: '300px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div className='col-md-7 mt-3 mt-md-0 ml-5'>
                            <h6 className='font-weight-bold'>Light bright airy stylish apt & safe peaceful stay</h6>
                            <p className='text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className='text-muted'>Wif Air conditioning Kitchen</p>
                            <p className='text-muted'>Cancellation fexibility availiable</p>
                            <div className='d-flex'>
                                <div className='d-flex'>
                                    <img src={star} style={{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                                    <p className='mr-2 font-weight-bold'>4.9(20)</p>
                                </div>
                                <div className='d-flex ml-5' >
                                    <p className='font-weight-bold'>$34/</p>
                                    <p className='mr-2'>night</p>
                                    <p className='text-muted'>$167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 row'>
                        <div className='col-md-4'>
                            <img src={hotel2} style={{ height: '170px', weight: '260px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div className='col-md-7 mt-3 mt-md-0 ml-5'>
                            <h6 className='font-weight-bold'>Apartment in Lost Panorama</h6>
                            <p className='text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className='text-muted'>Wif Air conditioning Kitchen</p>
                            <p className='text-muted'>Cancellation fexibility availiable</p>
                            <div className='d-flex'>
                                <div className="d-flex">
                                    <img src={star} style={{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                                    <p className='mr-2 font-weight-bold'>4.8(10)</p>
                                </div>
                                <div className="d-flex ml-5">
                                    <p className='font-weight-bold'>$52/</p>
                                    <p className='mr-2'>night</p>
                                    <p className='text-muted'>$167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 row'>
                        <div className='col-md-4'>
                            <img src={hotel3} style={{ height: '170px', weight: '260px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div className='col-md-7 mt-3 mt-md-0 ml-5'>
                            <h6 className='font-weight-bold'>AR Lounge & Pool (r&r + b&b)</h6>
                            <p className='text-muted'>4 guests 2 bedrooms 2 beds 2 baths</p>
                            <p className='text-muted'>Wif Air conditioning Kitchen</p>
                            <p className='text-muted'>Cancellation fexibility availiable</p>
                            <div className='d-flex'>
                                <div className="d-flex">
                                    <img src={star} style={{ width: '20px', height: '20px', marginTop: '3px', marginRight: '3px' }} alt="" />
                                    <p className='mr-2 font-weight-bold'>4.9(25)</p>
                                </div>
                                <div className="d-flex ml-5">
                                    <p className='font-weight-bold'>$44/</p>
                                    <p className='mr-2'>night</p>
                                    <p className='text-muted'>$167 total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-5'>
            {/* <ShowMap /> */}
            </div>
        </div>
    );
};

export default HotelList;