import React from "react";

const Contact = () => {
  return (
    <div >
      <div className="content">
        <div className="section group">
          <div className="col span_2_of_3">
            <div className="contact-form">
              <h2>Liên hệ với chúng tôi</h2>
              <form>
                <div>
                  <span>
                    <label>Tên</label>
                  </span>
                  <span>
                    <input type="text" className="textbox" />
                  </span>
                </div>
                <div>
                  <span>
                    <label>E-mail</label>
                  </span>
                  <span>
                    <input type="text" className="textbox" />
                  </span>
                </div>
                <div>
                  <span>
                    <label>Ý kiến của bạn</label>
                  </span>
                  <span>
                    <textarea defaultValue={" "} />
                  </span>
                </div>
                <div>
                  <span>
                    <input
                      type="submit"
                      defaultValue="Submit"
                      className="myButton"
                    />
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col span_1_of_3">
            <div className="contact_info">
              <h3>Bản đồ</h3>
              <div className="map">
                <iframe
                  width="100%"
                  height={175}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15336.706958271538!2d108.2374155!3d16.05631580000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbfc895195c523ed!2zTGFwdG9wIEPFqSDEkMOgIE7hurVuZyBVeSBUw61uIEdpw6EgUuG6uyAtIGxlbWluaFNUT1JF!5e0!3m2!1svi!2s!4v1627971262961!5m2!1svi!2s"
                />
                <br />
                <small>
                  <a
                    href="https://maps.google.co.in/maps?f=q&source=embed&hl=en&geocode=&q=Lighthouse+Point,+FL,+United+States&aq=4&oq=light&sll=26.275636,-80.087265&sspn=0.04941,0.104628&ie=UTF8&hq=&hnear=Lighthouse+Point,+Broward,+Florida,+United+States&t=m&z=14&ll=26.275636,-80.087265"
                    style={{ color: "#666", textAlign: "left", fontSize: 12 }}
                  >
                    View Larger Map
                  </a>
                </small>
              </div>
            </div>
            <div className="company_address">
              <h3>Company Information :</h3>
              <p>Website: leminhstore.vn</p>
              <p>Hotline: 0236.7777.999 | 0915.819.967 (Zalo, Hotline)</p>
              <p>Địa chỉ: 246A Phạm Cự Lượng, Sơn Trà, Đà Nẵng</p>
              <p>
                Email:{" "}
                <span>
                  <a href="leminhstore.vn@gmail.com">leminhstore.vn@gmail.com</a>
                </span>
              </p>
              <p>
                Follow on: <span>Facebook</span>, <span>Twitter</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
