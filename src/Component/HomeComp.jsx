import React, { Fragment, useContext } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { AuthContext } from '../App';

function HomeComp() {
    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, {state.user} !</h1>
                <p className="lead">We specialize in religious gifts that will be cherished for a lifetime and handed down for generations. Many of our items can be personalized, including patron saint medals, deluxe Sterling Silver and gemstone rosaries, and more.</p>
                <hr className="my-2" />
                <p>We aim to provide exceptional customer service with all the personal touches of a neighborhood Catholic store. If you need help finding a particular product, our friendly support team is available by phone, email, and live chat. Contact us.</p>
                <p>CatholicShop.com spares no expense to provide a safe SSL-certified shopping experience, and our website is optimized for your computer, smartphone, or tablet. Be sure to like our Facebook page for free giveaways and offers, and watch our Sale page for the latest discounts and deals.</p>
                <p>Thank you for shopping at CatholicShop.com!</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default HomeComp
