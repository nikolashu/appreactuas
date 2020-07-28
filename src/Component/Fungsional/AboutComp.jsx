import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp() {

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">WHY CATHOLICSHOP?</h1>
                <p className="lead">Our mission at CatholicShop.com is to share the beauty of our faith with the world.</p>
                <hr className="my-2" />
                <p>We like to think that every rosary, religious medal, book, movie, or Catholic gift sent out from one of our warehouses will serve as a means of evangelization for years to come.</p>
                <p>We also believe that God's love is transmitted through smiles! That's why CatholicShop.com is focused on providing the most amazing customer support possible.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Jewelry" tanggal="24 Juli 2020" text="Catholic Shop specializes in religious jewelry. In fact, we've been the leading online source for more than a decade. Choose from thousands of Catholic medals and religious pendants." /></Col>
                    <Col><CardComp id="2" judul="Books" tanggal="25 Juli 2020" text="Catholic Shop sells Books and a wide variety of religious jewelry and gifts. Catholic Shop sells Books and a wide variety of religious jewelry and gifts." /></Col>
                    <Col><CardComp id="3" judul="Rosaries" tanggal="26 Juli 2020" text="CatholicShop.com specializes in rosaries! We offer thousands of rosaries to choose from, as well as rosary bracelets, boxes, rings, car rosaries and rosary pouches." /></Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutComp