import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import ScaleText from "react-scale-text";
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import './App.css';

const conversionOptions = [
  { label: "Dezimal     → Dezimal", value: [10, 10] },
  { label: "Dezimal     → Binär", value: [10, 2] },
  { label: "Binär       → Dezimal", value: [2, 10] },
  { label: "Dezimal     → Oktal", value: [10, 8] },
  { label: "Oktal       → Dezimal", value: [8, 10] },
  { label: "Dezimal     → Hexadezimal", value: [10, 16] },
  { label: "Hexadezimal → Dezimal", value: [16, 10] },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversionSettings: "",
      input: "",
      inputConverted: "",
      inputDisabled: true
    };
  }

  changeConversionHandler = (event) => {
    let input = this.state.input;
    this.setState({ conversionSettings: event.value, inputDisabled: false, inputConverted: 0, input: 0 });
    document.getElementById("number-input").value = 0;

  }

  changeInputHandler = (event) => {
    this.setState(
      {
        input: this.readAsDec(event.target.value, this.state.conversionSettings[0]),
        inputConverted: this.convert(this.readAsDec(event.target.value, this.state.conversionSettings[0]), this.state.conversionSettings[1])
      }
    );
  }

  readAsDec = (input, radix) => {
    let conversion = parseInt(input, radix);

    if (conversion.toString(radix).replace(/^0+/, '') === input.replace(/^0+/, '')) {
      return conversion;
    } else {
      return NaN;
    }
  }

  convert = (input, radix) => {
    if (input === input) {
      return input.toString(radix);;
    } else {
      return "";
    }
  }

  increase = () => {
    let newInput = this.state.input + 1;
    this.setState({ input: newInput, inputConverted: this.convert(newInput, this.state.conversionSettings[1]) });
    document.getElementById("number-input").value = this.convert(newInput, this.state.conversionSettings[0]);
  }

  decrease = () => {
    let newInput = this.state.input - 1;
    this.setState({ input: newInput, inputConverted: this.convert(newInput, this.state.conversionSettings[1]) });
    document.getElementById("number-input").value = this.convert(newInput, this.state.conversionSettings[0]);
  }

  multiply_2 = () => {
    let newInput = this.state.input * 2;
    this.setState({ input: newInput, inputConverted: this.convert(newInput, this.state.conversionSettings[1]) });
    document.getElementById("number-input").value = this.convert(newInput, this.state.conversionSettings[0]);
  }

  multiply_10 = () => {
    let newInput = this.state.input * 10;
    this.setState({ input: newInput, inputConverted: this.convert(newInput, this.state.conversionSettings[1]) });
    document.getElementById("number-input").value = this.convert(newInput, this.state.conversionSettings[0]);
  }

  getNonDecimalNumber = () => {
    if (this.state.conversionSettings[0] === 10) {
      return [this.state.inputConverted, this.state.conversionSettings[1]];
    } else {
      return [this.convert(parseInt(this.state.inputConverted), this.state.conversionSettings[0]), this.state.conversionSettings[0]];
    }
  }


  render() {
    return (
      <Container>
        <Row>
          <Col lg={12} className="center-bar">
            <div className="text-right">Contact: <a href="mailto:hooljohannes@gmail.com">Johannes Hool</a></div>
            <div className="title-container">
              <h1>Zahlensysteme</h1>
            </div>
            <Row>
              <Col md={4}>
                <div className="title-container">
                  <h4>Umrechnung von ... zu ...</h4>
                </div>
                <Select options={conversionOptions} placeholder="Wähle Zahlensysteme" onChange={this.changeConversionHandler} />
              </Col>
              <Col md={4}>
                <div className="title-container">
                  <h4>Eingabe</h4>
                </div>
                <input id="number-input" className="form-control text-center big-text" type="text" disabled={this.state.inputDisabled} onChange={this.changeInputHandler} />
                <Button color="outline-success" className="button-with-space" onClick={this.multiply_10}>*10</Button>
                <Button color="outline-success" className="button-with-space" onClick={this.multiply_2}>*2</Button>
                <Button color="outline-success" className="button-with-space" onClick={this.decrease}>-1</Button>
                <Button color="outline-success" className="button-with-space" onClick={this.increase}>+1</Button>
              </Col>
              <Col md={4}>
                <div className="title-container">
                  <h4>Resultat</h4>
                </div>
                <div id="result-box" className="text-centered big-text">
                  <b>{this.state.inputConverted}</b>
                </div>
              </Col>
            </Row>
            <Explanation number={this.getNonDecimalNumber()[0]} radix={this.getNonDecimalNumber()[1]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class Explanation extends React.Component {
  constructor(props) {
    super(props);
  }

  chiffreValues = (number) => {
    let radixName = "Binär";
    if (this.props.radix == 8) {
      radixName = "Oktal"
    }
    if (this.props.radix == 16) {
      radixName = "Hexadezimal"
    }
    let res = [];
    let result = 0;
    let explainer = [];
    for (let i = 0; i < number.length; i++) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      let style = { color: "black", borderColor: "black", fontWeight: "bold" };
      result = result + value * multiplier;
      if((value*multiplier) > 0){
        explainer.push(value*multiplier);
      }
      if (value === 0) {
        style["color"] = "grey";
        style["borderColor"] = "lightgrey";
        style["fontWeight"] = "normal";
      }
      if (this.props.radix === 16) {
        res.push(
          <div>
            <div className="chiffre-white" style={{ fontWeight: "bold" }}>{number[i]}</div>
            <div className="chiffre-dec">{value}</div>
            <div className="sign">*</div>
            <div className="chiffre" style={style} data-tip data-for={"tooltip_" + i}><ScaleText maxFontSize={20} widthOnly={true} >{multiplier}
            </ScaleText>
              <ReactTooltip id={"tooltip_" + i} place="bottom" type="success" effect="solid">
                <p>{multiplier} = {this.props.radix}<sup>{number.length - i - 1}</sup></p>
              </ReactTooltip>
            </div>
            <div className="sign">=</div>
            <div className="chiffre" style={style} data-tip data-for={"total_" + i}><ScaleText maxFontSize={20} widthOnly={true}>{multiplier * value}</ScaleText>
              <ReactTooltip id={"total_" + i} place="bottom" type="success" effect="solid">
                <p>{multiplier * value} = {value}*{multiplier}</p>
              </ReactTooltip>
            </div>

          </div>
        );
        if (number.length > 1 && i < number.length - 1) {
          res.push(
            <div>
              <div className="chiffre-white" style={style}></div>
              <div className="chiffre-dec" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder">+</div>
            </div>
          );
        }
        if (i == number.length - 1) {
          res.push(
            <div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-dec" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-white">=</div>
            </div>
          );
        }
      } else {
        res.push(
          <div>
            <div className="chiffre-white" style={{ fontWeight: "bold" }}>{number[i]}</div>
            <div className="sign">*</div>
            <div className="chiffre" style={style} data-tip data-for={"tooltip_" + i}><ScaleText maxFontSize={20} widthOnly={true} >{multiplier}
            </ScaleText>
              <ReactTooltip id={"tooltip_" + i} place="bottom" type="success" effect="solid">
                <p>{multiplier} = {this.props.radix}<sup>{number.length - i - 1}</sup></p>
              </ReactTooltip>
            </div>
            <div className="sign">=</div>
            <div className="chiffre" style={style} data-tip data-for={"total_" + i}><ScaleText maxFontSize={20} widthOnly={true}>{multiplier * value}</ScaleText>
              <ReactTooltip id={"total_" + i} place="bottom" type="success" effect="solid">
                <p>{multiplier * value} = {value}*{multiplier}</p>
              </ReactTooltip>
            </div>

          </div>
        );
        if (number.length > 1 && i < number.length - 1) {
          res.push(
            <div>
              <div className="chiffre-white" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder">+</div>
            </div>
          );
        }
        if (i == number.length - 1) {
          res.push(
            <div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-placeholder" style={style}></div>
              <div className="chiffre-placeholder"></div>
              <div className="chiffre-white">=</div>
            </div>
          );
        }
      }
    }
    if (this.props.radix === 16) {
      res.unshift(
        <div>
          <div className="row-name"><b>Ziffernwerte ({radixName})</b></div>
          <div className="row-name" style={{ marginTop: "40px", color: "lightgrey" }}><b>Ziffernwerte (Dezimal)</b></div>
          <div className="row-name"></div>
          <div className="row-name"><b>Stellenwerte (Dezimal)</b></div>
          <div className="row-name"></div>
          <div className="row-name"><b>Resultat (Dezimal)</b></div>
        </div>
      )
      res.push(
        <div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-dec"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-white" style={{ width: "150px" }} data-tip data-for={"explanation"}><ScaleText maxFontSize={20} widthOnly={true}><b>{result}</b></ScaleText>
            <ReactTooltip id={"explanation"} place="bottom" type="success" effect="solid">
              <p>{result} = {explainer.join(" + ")}</p>
            </ReactTooltip>
          </div>
        </div>
      )
    } else {
      res.unshift(
        <div>
          <div className="row-name"><b>Ziffernwerte ({radixName})</b></div>
          <div className="row-name"></div>
          <div className="row-name"><b>Stellenwerte (Dezimal)</b></div>
          <div className="row-name"></div>
          <div className="row-name"><b>Resultat (Dezimal)</b></div>
        </div>
      )
      res.push(
        <div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-placeholder"></div>
          <div className="chiffre-white" style={{ width: "150px" }} data-tip data-for={"explanation"}><ScaleText maxFontSize={20} widthOnly={true}><b>{result}</b></ScaleText>
            <ReactTooltip id={"explanation"} place="bottom" type="success" effect="solid">
              <p>{result} = {explainer.join(" + ")}</p>
            </ReactTooltip>
          </div>
        </div>
      )
    }



    return res;
  }

  result = (number) => {
    let res = [];
    let total = 0;
    for (let i = 0; i < number.length; i++) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      res.push(<span>{multiplier * value}</span>);
      res.push(<span>+</span>);
      total = total + (multiplier * value);
    }

    res.pop();
    res.push(<span>=</span>);
    res.push(<span style={{ fontWeight: "bold" }}>{total}</span>)
    return (res);
  }

  convert = (number) => {
    let total = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      total = total + (multiplier * value);
    }
    return (total);
  }

  render() {
    console.log(this.props.number, this.props.radix);
    if (this.props.number === "" || this.props.number == undefined) {
      return (<Col md={12}></Col>);

    } else {
      return (
        <Col md={12}>
          <Row>
            <Col md={12}>
              <div className="title-container-faded"><h3>Herleitung</h3></div>
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="text-center margin-bottom">
              <div data-tip data-for={"radixe"}>
                <p >Umrechnung von <b>{this.props.number}<sub>{this.props.radix}</sub></b> in <b>{this.convert(this.props.number)}<sub>10</sub></b></p>
                <ReactTooltip id={"radixe"} place="bottom" type="success" effect="solid">
              <p>Die tiefergestellte <b><sub>{this.props.radix}</sub></b> bedeutet, die Zahl ist im <b>{this.props.radix}er System</b></p>
              <p>Die tiefergestellte <b><sub>10</sub> </b> bedeutet, die Zahl ist im <b>10er System</b></p>
            </ReactTooltip>
                </div>
            </Col>
          </Row>
          <Row>
            <div className="no-stack">
              {this.chiffreValues(this.props.number)}
            </div>
          </Row>
        </Col>
      );
    }

  }
}

export default App;
