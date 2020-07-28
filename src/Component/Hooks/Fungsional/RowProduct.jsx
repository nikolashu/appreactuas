import React, { useContext } from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import { CartContext } from '../../../CartContext';


function RowProduct(props) {

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>{props.text}</CardText>
                    <Button>Tambah Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RowProduct