import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import { Button } from 'reactstrap';
import './App.css';

const conversionOptions = [
  { label: "Dezimal     -> Binär", value: [10, 2] },
  { label: "Binär       -> Dezimal", value: [2, 10] },
  { label: "Dezimal     -> Oktal", value: [10, 8] },
  { label: "Oktal       -> Dezimal", value: [8, 10] },
  { label: "Dezimal     -> Hexadezimal", value: [10, 16] },
  { label: "Hexadezimal -> Dezimal", value: [16, 10] },
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

  divide_2 = () => {
    let newInput = this.state.input / 2;
    this.setState({ input: newInput, inputConverted: this.convert(newInput, this.state.conversionSettings[1]) });
    document.getElementById("number-input").value = this.convert(newInput, this.state.conversionSettings[0]);
  }

  divide_10 = () => {
    let newInput = this.state.input / 10;
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
                <Button color="info" className="button-with-space" onClick={this.increase}>+1</Button>
                <Button color="info" className="button-with-space" onClick={this.decrease}>-1</Button>
                <Button color="info" className="button-with-space" onClick={this.multiply_2}>*2</Button>
                <Button color="info" className="button-with-space" onClick={this.multiply_10}>*10</Button>
                <Button color="info" className="button-with-space" onClick={this.divide_2}>/2</Button>
                <Button color="info" className="button-with-space" onClick={this.divide_10}>/10</Button>
              </Col>
              <Col md={4}>
                <div className="title-container">
                  <h4>Resultat</h4>
                </div>
                <div className="text-centered big-text">
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
    let res = [];
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      let style = { color: "black", borderColor: "black", fontWeight: "bold" };
      if (value === 0) {
        style["color"] = "grey";
        style["borderColor"] = "lightgrey";
        style["fontWeight"] = "normal";
      }
      res.push(<div className="chiffre" style={style}>{value}</div>);
    }
    return res;
  }

  chiffreMultipliers = (number) => {
    let res = [];
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      let style = { color: "black", borderColor: "black", fontWeight: "bold" };
      if (value === 0) {
        style["color"] = "grey";
        style["borderColor"] = "lightgrey";
        style["fontWeight"] = "normal";
      }
      res.push(<div className="chiffre" style={style}>{multiplier}</div>);
    }
    return res;
  }

  totalValues = (number) => {
    let res = [];
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      let value = parseInt(number[i], 16);
      let style = { color: "black", fontWeight: "bold" };
      if (value === 0) {
        style["color"] = "grey";
        style["fontWeight"] = "normal";
      }
      res.push(<div className="sign" style={style}>{multiplier * value}</div>);
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

  multiplierSigns = (number) => {
    let res = [];
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      res.push(<div className="sign">*</div>);
    }
    return res;
  }

  equalSigns = (number) => {
    let res = [];
    for (let i = number.length - 1; i >= 0; i--) {
      let multiplier = Math.pow(this.props.radix, number.length - 1 - i);
      res.push(<div className="sign">=</div>);
    }
    return res;
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
              Umrechnung von <b>{this.props.number}<sub>{this.props.radix}</sub></b> in <b>{this.convert(this.props.number)}<sub>10</sub></b>
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              <b>Ziffernwerte</b> (Dezimal)
            </Col>
            <Col md={11}>
              {this.chiffreValues(this.props.number)}
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11}>
              {this.multiplierSigns(this.props.number)}
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              <b>Stellenwerte</b> (Dezimal)
            </Col>
            <Col md={11}>
              {this.chiffreMultipliers(this.props.number)}
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11}>
              {this.equalSigns(this.props.number)}
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11}>
              {this.totalValues(this.props.number)}
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              <div className="margin-top">
              <b>Resultat</b>
              </div>
            </Col>
            <Col md={11} className="text-center margin-top">
              {this.result(this.props.number)}
            </Col>
          </Row>

        </Col>
      );
    }

  }
}

export default App;
