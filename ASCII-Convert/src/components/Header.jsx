import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBTypography,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

function Header() {
  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="white"
      className="shadow-1-strong"
      style={{ zIndex: 1000 }}
    >
      <MDBContainer>
        <MDBNavbarBrand
          className="fw-bold d-flex align-items-center text-primary"
          style={{
            transition: "color 0.3s ease",
          }}
        >
          <MDBIcon fas icon="code-compare" className="me-2" />
          <span className="brand-text">CharToASCII</span>
        </MDBNavbarBrand>
        <MDBTypography
          tag="small"
          className="text-muted ms-3 fw-bold"
          style={{ fontStyle: "italic", letterSpacing: "0.5px" }}
        >
          Fast & Simple ASCII Converter
        </MDBTypography>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
