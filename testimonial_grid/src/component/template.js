import React from "react";
import "./template.styles.scss";
import Daniel from "../assets/image-daniel.jpg";
import Jeanette from "../assets/image-jeanette.jpg";
import Kira from "../assets/image-kira.jpg";
import Patrick from "../assets/image-patrick.jpg";
import Jonathan from "../assets/image-jonathan.jpg";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedIP: "empty",
    };
  }

  render() {
    return (
      <div style={{ width: "800px", height: "400px", margin: "auto auto" }}>
        <div class="grid-container">
          <div
            style={{
              backgroundColor: "hsl(263, 55%, 52%)",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
            class="grid-item item1"
          >
            <div>
              <img
                src={Daniel}
                style={{
                  border: "1.5px solid hsl(0, 0%, 100%)",
                }}
              ></img>
            </div>
            <div>
              <div className="name">Daniel Clifford </div>
              <div className="designation"> Verified Graduate</div>
            </div>
            <div style={{}} className="first-para">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </div>
            <div style={{}} className="second-para">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </div>
          </div>
          <div
            style={{
              backgroundColor: " hsl(217, 19%, 35%)",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
            class="grid-item item2"
          >
            <div>
              <img
                src={Jonathan}
                style={{
                  border: "1.5px solid hsl(0, 0%, 100%)",
                }}
              ></img>
            </div>
            <div>
              <div className="name">Jonathan Walters</div>
              <div className="designation"> Verified Graduate</div>
            </div>
            <div style={{}} className="first-para">
              The team was very supportive and kept me motivated
            </div>
            <div style={{}} className="second-para">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </div>
          </div>
          <div
            style={{
              backgroundColor: "hsl(0, 0%, 100%)",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
            class="grid-item item3"
          >
            <div>
              <img
                src={Kira}
                style={{
                  border: "1.5px solid hsl(0, 0%, 100%)",
                }}
              ></img>
            </div>
            <div style={{ color: "hsl(219, 29%, 14%)" }}>
              <div className="name" style={{ color: "black" }}>
                Kira Whittle
              </div>
              <div className="designation" style={{ color: "black" }}>
                Verified Graduate
              </div>
            </div>
            <div style={{ color: "hsl(219, 29%, 14%)" }} className="first-para">
              Such a life-changing experience. Highly recommended!
            </div>
            <div
              style={{ color: "hsl(219, 29%, 14%)" }}
              className="second-para"
            >
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </div>
          </div>
          <div
            style={{
              backgroundColor: "hsl(0, 0%, 100%)",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
            class="grid-item item4"
          >
            <div>
              <img
                src={Jeanette}
                style={{
                  border: "1.5px solid hsl(0, 0%, 100%)",
                }}
              ></img>
            </div>
            <div>
              <div className="name" style={{ color: "black" }}>
                Jeanette Harmon
              </div>
              <div
                className="designation"
                style={{ color: "hsl(219, 29%, 14%)" }}
              >
                Verified Graduate
              </div>
            </div>
            <div style={{ color: "hsl(219, 29%, 14%)" }} className="first-para">
              An overall wonderful and rewarding experience
            </div>
            <div
              style={{ color: "hsl(219, 29%, 14%)" }}
              className="second-para"
            >
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </div>
          </div>
          <div
            style={{
              backgroundColor: "hsl(219, 29%, 14%)",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
            }}
            class="grid-item item5"
          >
            <div>
              <img
                src={Patrick}
                style={{
                  border: "1.5px solid black",
                }}
              ></img>
            </div>
            <div>
              <div className="name">Patrick Abrams</div>
              <div className="designation"> Verified Graduate</div>
            </div>
            <div className="first-para">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </div>
            <div style={{}} className="second-para">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
export default Template;
