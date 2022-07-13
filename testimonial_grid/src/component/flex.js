import React from "react";
import "./template.styles.scss";
import Daniel from "../assets/image-daniel.jpg";
import Jeanette from "../assets/image-jeanette.jpg";
import Kira from "../assets/image-kira.jpg";
import Patrick from "../assets/image-patrick.jpg";
import Jonathan from "../assets/image-jonathan.jpg";

class Flex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedIP: "empty",
    };
  }

  render() {
    return (
      <div style={{ width: "800px", height: "400px", margin: "auto auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
            }}
          >
            1
          </div>
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
            }}
          >
            2
          </div>
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
            }}
          >
            3
          </div>
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
            }}
          >
            4
          </div>
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
            }}
          >
            5
          </div>
        </div>
      </div>
    );
  }
}
export default Flex;
