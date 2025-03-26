import { useState, useRef } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import ResultBox from "./ResultBox";

function MainContent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("charToAscii");
  const prevInputRef = useRef(""); // Store previous input

  // Handle tab switching
  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setInput("");
      setOutput("");
      prevInputRef.current = "";
    }
  };

  // Convert character to ASCII
  const convertToASCII = () => {
    if (!input.trim()) {
      toast.error("Please enter a character or string!", {
        position: "top-right",
        autoClose: 3000,
      });
      setOutput("");
      return;
    }

    const ascii = input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(", ");

    if (input !== prevInputRef.current) {
      setOutput(ascii);
      toast.success("Conversion successful!", {
        position: "top-right",
        autoClose: 2000,
      });
      prevInputRef.current = input;
    } else {
      setOutput(ascii);
    }
  };

  // Convert ASCII to character
  const convertToChar = () => {
    if (!input.trim()) {
      toast.error("Please enter ASCII code(s)!", {
        position: "top-right",
        autoClose: 3000,
      });
      setOutput("");
      return;
    }

    try {
      const asciiCodes = input.split(",").map((code) => parseInt(code.trim()));
      const isValid = asciiCodes.every((code) => !isNaN(code) && code >= 0);

      if (!isValid) {
        toast.error("Please enter valid ASCII codes separated by commas!", {
          position: "top-right",
          autoClose: 3000,
        });
        setOutput("");
        return;
      }

      const chars = asciiCodes
        .map((code) => String.fromCharCode(code))
        .join("");

      if (input !== prevInputRef.current) {
        setOutput(chars);
        toast.success("Conversion successful!", {
          position: "top-right",
          autoClose: 2000,
        });
        prevInputRef.current = input;
      } else {
        setOutput(chars);
      }
    } catch (error) {
      toast.error("Invalid input format!", {
        position: "top-right",
        autoClose: 3000,
      });
      setOutput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      activeTab === "charToAscii" ? convertToASCII() : convertToChar();
    }
  };

  return (
    <MDBContainer
      fluid
      className="py-5 flex-grow-1"
      style={{ backgroundColor: "#f4f7fa" }}
    >
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-3-strong"
            style={{ borderRadius: "20px", overflow: "hidden" }}
          >
            <MDBCardBody className="p-5">
              <MDBTypography
                tag="h1"
                className="text-center mb-4 fw-bold"
                style={{ color: "#2c3e50" }}
              >
                ASCII Converter
              </MDBTypography>

              <MDBTabs className="mb-5" justify>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleTabClick("charToAscii")}
                    active={activeTab === "charToAscii"}
                  >
                    Char to ASCII
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleTabClick("asciiToChar")}
                    active={activeTab === "asciiToChar"}
                  >
                    ASCII to Char
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={activeTab === "charToAscii"}>
                  <MDBTypography
                    tag="p"
                    className="text-center text-muted mb-5"
                  >
                    Enter any character to get its ASCII code
                  </MDBTypography>
                </MDBTabsPane>
                <MDBTabsPane show={activeTab === "asciiToChar"}>
                  <MDBTypography
                    tag="p"
                    className="text-center text-muted mb-5"
                  >
                    Enter ASCII codes separated by commas
                  </MDBTypography>
                </MDBTabsPane>
              </MDBTabsContent>

              <MDBInput
                label={
                  activeTab === "charToAscii"
                    ? "Enter character or string"
                    : "Enter ASCII codes (e.g., 65, 66, 67)"
                }
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="mb-4"
                size="lg"
                contrast={false}
                style={{ borderRadius: "10px" }}
              />

              <MDBBtn
                color="primary"
                size="lg"
                block
                onClick={
                  activeTab === "charToAscii" ? convertToASCII : convertToChar
                }
                className="mb-4"
                style={{
                  borderRadius: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Convert
                <i className="fas fa-exchange-alt ms-2"></i>
              </MDBBtn>

              {output && <ResultBox asciiOutput={output} />}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MainContent;
