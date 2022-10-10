import { forwardRef } from "react";
import "./ticket.css";

export const Ticket = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="--flex-column ticket">
      <div className="top --flex-column">
        <div className="bandname -bold">Ghost Mice</div>
        <div className="tourname">Home Tour</div>
        <img
          style={{ width: "255px" }}
          src="https://firebasestorage.googleapis.com/v0/b/good-fight-65d3d.appspot.com/o/homeBannerImage%2FKakaoTalk_Photo_2022-06-20-22-13-48.jpeg1656428570615?alt=media&token=088ad608-483b-433f-a8a3-84e7ef3c6c2d"
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
});
