import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Experiences from '../Experiences/Experiences';
import Houses from '../Houses/Houses';
import { ClientContext } from '../../../App';

const Home = () => {
    const history = useHistory();
    const [clientsNeed, setClientsNeed] = useContext(ClientContext)
    const [adultGuests, setAdultGuests] = useState(1)
    const [childGuests, setChildGuests] = useState(1)
    const [babyGuests, setBabyGuests] = useState(1)
    const [totalChild, setTotalChild] = useState(2)
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
            fontWeight: 'bold'
        },
    }));
    const classes = useStyles();
    const handleUpdate = (e) => {
        const styles = e.currentTarget.id;
        console.log(styles)
        if (styles === 'adult-increase') {
            setAdultGuests(adultGuests + 1)
        }
        if (styles === 'child-increase') {
            setChildGuests(childGuests + 1)
        }
        if (styles === 'baby-increase') {
            setBabyGuests(babyGuests + 1)
        }
        if (styles === 'adult-decrease') {
            setAdultGuests(adultGuests - 1)
        }
        if (styles === 'child-decrease') {
            setChildGuests(childGuests - 1)
        }
        if (styles === 'baby-decrease') {
            setBabyGuests(babyGuests - 1)
        }
        if (adultGuests <= 0) {
            setAdultGuests(0)
        }
        if (childGuests <= 0) {
            setChildGuests(0)
        }
        if (babyGuests <= 0) {
            setBabyGuests(0)
        }
    }
    const totalGuests = () => {
        setTotalChild(childGuests + babyGuests)
        document.getElementById('total-adult').innerHTML = adultGuests
    }

    class ClientDetails {
        constructor(location, arrival, departure, adult, child) {
            this.location = location
            this.arrival = arrival
            this.departure = departure
            this.adult = adult
            this.child = child
        }
    }
    const handleSearch = () => {
        const location = document.getElementById('location').value
        const departure = document.getElementById('departure').value
        const arrival = document.getElementById('arrival').value
        if (location === '') {
            alert('Please Enter Your Location')
        }
        else {
            const client = new ClientDetails(location, arrival, departure, adultGuests, totalChild)
            console.log(client)
            setClientsNeed(client)
            history.push('/hotelbooking')
            totalGuests()
        }
    }
    return (
        <div className='row px-5 mt-5 mx-3'>
            <div className='col-md-4'>
                <h4 className='font-weight-bold'>Where do you want to go?</h4>
                <div className="row">
                    <div className='shadow-sm p-3 mt-5 col-12' style={{ borderRadius: '15px' }}>
                        <h5 className='font-weight-bold pl-3'>LOCATION</h5>
                        <Form.Control style={{ border: 'none' }} type="text" id='location' placeholder=" Add city,Landmark or address" />
                    </div>
                    <div className='shadow-sm p-3 my-4 col-6' style={{ borderRadius: '15px' }}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="arrival"
                                label="Arrival"
                                type="date"
                                defaultValue="2020-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className='shadow-sm p-3 my-4 col-6' style={{ borderRadius: '15px' }}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="departure"
                                label="Departure"
                                type="date"
                                defaultValue="2020-05-27"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className="col-12 shadow-sm p-3">
                        <h6 style={{ color: 'lightGray' }}>Guests</h6>
                        <h5 className='font-weight-bold'><span id='total-adult'>1</span> Adults, <span>{totalChild}</span> CHILD</h5>
                    </div>
                    <div className="shadow-sm col-12 pt-4">
                        <div className='d-flex justify-content-between'>
                            <h5 className='font-weight-bold p-3'>ADULTS</h5>
                            <h5><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='adult-decrease' onClick={handleUpdate}>-</span><span style={{ fontSize: '25px' }}>{adultGuests}</span><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='adult-increase' onClick={handleUpdate}>+</span></h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5 className='font-weight-bold px-3 pt-3'>CHILD</h5>
                                <small className='pl-3 font-weight-bold' style={{ color: 'lightGray' }}>Age 2-12</small>
                            </div>
                            <h5><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='child-decrease' onClick={handleUpdate}>-</span><span style={{ fontSize: '25px' }}>{childGuests}</span><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='child-increase' onClick={handleUpdate}>+</span></h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5 className='font-weight-bold px-3 pt-3'>BABIES</h5>
                                <small className='pl-3 font-weight-bold' style={{ color: 'lightGray' }}>Younger than 2</small>
                            </div>
                            <h5><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='baby-decrease' onClick={handleUpdate}>-</span><span style={{ fontSize: '25px' }}>{babyGuests}</span><span style={{ fontSize: '35px', padding: '0 15px', cursor: 'pointer' }} id='baby-increase' onClick={handleUpdate}>+</span></h5>
                        </div>
                        <div className='d-flex justify-content-end my-4'>
                            <button className='btn btn-style' onClick={totalGuests}>Apply</button>
                        </div>
                    </div>
                    <button className='btn col-12 mt-3 mb-5 search-btn' onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className='col-md-8'>
                <Experiences></Experiences>
                <Houses></Houses>
            </div>
        </div>
    );
};

export default Home;