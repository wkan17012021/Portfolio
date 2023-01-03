import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccordionAjar from "../AccordionAjar";

function ContainerFluid() {
  return (
    <Container fluid>
      <Row>
        <AccordionAjar />
        <Col>Another Thing</Col>
      </Row>
    </Container>
  );
}

export default ContainerFluid;
