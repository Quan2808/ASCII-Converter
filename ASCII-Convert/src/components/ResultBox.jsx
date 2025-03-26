import { MDBTypography } from "mdb-react-ui-kit";
import { memo } from "react";

function ResultBox({ asciiOutput }) {
  return (
    <div className="result-box animate-result text-center">
      <MDBTypography
        tag="strong"
        className="d-block mb-2"
        style={{ color: "#34495e" }}
      >
        ASCII Results:
      </MDBTypography>
      <MDBTypography
        tag="span"
        className="p-3 d-inline-block"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          color: "#e74c3c",
          fontWeight: "600",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {asciiOutput}
      </MDBTypography>
    </div>
  );
}

export default memo(ResultBox);
