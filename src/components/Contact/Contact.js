import "./contact.css";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/* <img src={Phone} alt="" className="c-icon" /> */}
              +9374789754
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Email} alt="" /> */}
              madhushraba21@gmail.com
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Address} alt="" /> */}
              ITI More, Kalyani, West Bengal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>WHATS UP?</b> FEEL FREE TO DROP A MESSAGE WHENEVER YOU WANT TO
            SAY ANYTHING
          </p>

          <form>
            <input type="text" placeholder="Email" name="user_email" />

            <button className="btnc">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
