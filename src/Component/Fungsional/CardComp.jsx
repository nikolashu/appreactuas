import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/480/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>{props.text}</CardText>
                    <Button>
                        <Link to={
                            {
                                pathname: `/detail/${props.id}`,
                                state: {
                                    judul: props.judul,
                                    tanggal: props.tanggal,
                                    text: props.text
                                }
                            }
                        }>View</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default CardComp