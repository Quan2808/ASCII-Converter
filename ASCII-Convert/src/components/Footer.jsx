import { MDBTypography } from "mdb-react-ui-kit";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <MDBTypography tag="small">
        © 2025 ASCII Converter. Developed by{" "}
        <a
          href="https://github.com/Quan2808"
          target="_blank"
          className="fw-bold text-info"
          rel="noopener noreferrer"
        >
          Quan2808
        </a>
        . All rights reserved.
      </MDBTypography>
    </footer>
  );
}

export default Footer;
