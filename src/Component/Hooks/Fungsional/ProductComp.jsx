import React from 'react'
import { Container, Row } from 'reactstrap'
import RowProduct from './RowProduct'

function ProductComp() {
    return (
        <div>
            <Container>
                <hr />
                <h2>Produk</h2>
                <Row>
                    <RowProduct id="1" judul="Madonna & Child Rosary Icon Pouch" tanggal="Rp 109.500" text=""/>
                    <RowProduct id="2" judul="Stations of the Cross Rosary - Brown Wood" tanggal="Rp 399.500" text=""/>
                    <RowProduct id="3" judul="Amazonite Rosary Bracelet" tanggal="Rp 429.500" text=""/>
                    <RowProduct id="4" judul="Marbled Blue and Green Rosary" tanggal="Rp 139.500" text=""/>
                </Row>
                <Row>
                    <RowProduct id="5" judul="Crucifix - Sterling Silver on 24 inch chain" tanggal="Rp 529.500" text=""/>
                    <RowProduct id="6" judul="Stainless Steel Marian Consecration Bracelet" tanggal="Rp 129.500" text=""/>
                    <RowProduct id="7" judul="St. Benedict Blue & Red Medal with Chain" tanggal="Rp 109.500" text=""/>
                    <RowProduct id="8" judul="Black St. Benedict Macrame Men's Bracelet" tanggal="Rp 399.500" text=""/>
                </Row>
            </Container>
        </div>
    )
}

export default ProductComp
