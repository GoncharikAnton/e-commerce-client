import Container from "react-bootstrap/Container";
import {DataContext} from "../../../context/context";
import {useContext} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MyProfilePage = () => {

    const context = useContext(DataContext);
    return(
        <Container>
            <Row>
                <img src={context.user.img ? context.user.img : '/imgs/user.png'} alt="userImage"/>
            </Row>
            <Row>
                <Col>
                    <p>User nick-name: {context.user.nickname}</p>
                    <p>User name: {context.user.first_name} {context.user.last_name}</p>
                    <p>Date of registration: {context.user.date_of_registration}</p>
                    <p>Phone: {context.user.phone}</p>
                    <p>E-mail: {context.user.email}</p>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}