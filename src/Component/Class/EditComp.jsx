import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

const api = "http://localhost:3001"

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahMahasiswa = (idmahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        });
        axios.put(api + '/ubah', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.value,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        response: json.data.value,
                        display: 'block'
                    })
                }
            })
    }

    render() {
        return (
            <Container>
                <h4>Edit Item</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className='form'>
                    <Col>
                        <Label>Item Code</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="Input Item Code" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Item Name</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Input Item Name" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Item Price</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="Input Item Price" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}
export default EditComp