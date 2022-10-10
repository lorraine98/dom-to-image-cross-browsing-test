import "./ticket.css";

export default function Ticket() {
  return (
    <div className="--flex-column ticket">
      <div className="top --flex-column">
        <div className="bandname -bold">Ghost Mice</div>
        <div className="tourname">Home Tour</div>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/concert.png"
          alt=""
        />
        <div className="deetz --flex-sb">
          <div className="event --flex-column">
            <div className="date">3rd March 2017</div>
            <div className="location -bold">Bloomington, Indiana</div>
          </div>
          <div className="price --flex-column">
            <div className="label">Price</div>
            <div className="cost -bold">$30</div>
          </div>
        </div>
      </div>
      <div className="rip"></div>
      <div className="bottom --flex-sb">
        <div className="barcode"></div>
        <a className="buy" href="#">
          BUY TICKET
        </a>
      </div>
    </div>
  );
}
