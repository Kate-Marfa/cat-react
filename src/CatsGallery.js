import React from "react";
import ajaxGet from "./ajax-get";

const CatLink = ({ id, url, openLink }) => (
  <div className="Link" onClick={() => openLink(url)}>
    This is cat with special number {id}
  </div>
);

const PopUp = ({ catLink, closePopUp }) => (
  <div className="PopUp">
    <div onClick={closePopUp}>x</div>
    <img src={catLink} alt="Cat loading..." />
  </div>
);

export class CatsGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      selectedCat: null,
    };
    this.handleCat = this.handleCat.bind(this);
  }

  componentDidMount() {
    ajaxGet((cats) => this.setState({ cats }));
  }

  handleCat(selectedCat) {
    this.setState({ selectedCat });
  }

  render() {
    const { cats, selectedCat } = this.state;
    return (
      <div className="Gallery">
        <h1>CatsGallery</h1>
        {cats.map((cat) => (
          <CatLink key={cat.id} {...cat} openLink={this.handleCat} />
        ))}
        {selectedCat && <PopUp catLink={selectedCat} closePopUp={() => this.handleCat(null)}/>}
      </div>
    );
  }
}

export default CatsGallery;
