import React from "react";
import "./Styles/UserPage.scss";

class CalendlyEmbed extends React.Component {
  calendlyScriptSrc = "https://assets.calendly.com/assets/external/widget.js";
  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}?background_color=212121&text_color=ffffff&primary_color=f5cb5c`;

  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", this.calendlyScriptSrc);
    head.appendChild(script);
  }

  componentWillUnmount() {
    const head = document.querySelector("head");
    const script = document.querySelector("script");
    head.removeChild(script);
  }
  render() {
    const { account, eventName } = this.props;
    return (
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url={this.buildCalendlyUrl(account, eventName)}
          style={{ minWidth: "480px" }}
        />
      </div>
    );
  }
}

export default CalendlyEmbed;
