export default function ContactUs() {
  return (
    <main className="contact-us">
      <div className="container">
        <h1>Contact Us</h1>
      </div>
      <section className="contact">
        <div className="container">
          <div className="flex">
            <div className="text">
              <ul>
                <li className="landline">
                  <div>
                    <h4>Landline</h4>
                    <p>
                      <a href="tel:+913892352656">+91 389 235 2656</a>
                    </p>
                  </div>
                </li>
                <li className="mobile">
                  <div>
                    <h4>Mobile / Whatsapp</h4>
                    <p>
                      <a href="tel:+918259989871">+91 8259 989 871</a>
                    </p>
                  </div>
                </li>
                <li className="email">
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:jbfoundation20@gmail.com">jbfoundation20@gmail.com</a>
                    </p>
                  </div>
                </li>
                <li className="facebook">
                  <span className="icon"></span>
                  <div>
                    <h4>Facebook</h4>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/JBfoundationMizoram/"
                      >
                        /jbfoundationMizoram
                      </a>
                    </p>
                  </div>
                </li>
                <li className="address">
                  <div>
                    <h4>Address</h4>
                    <address>
                      <b>JB Foundation,</b>
                      <br />
                      Zemabawk Kawn Veng,
                      <br />
                      Aizawl - 796017,
                      <br />
                      Mizoram, India.
                    </address>

                    <span className="directions">
                      (
                      <a href="https://www.google.com/maps/dir/23.7133906,92.7194151/jbpaws/@23.7234153,92.7148519,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x374d952d2e792657:0x5b42d4012b7f956d!2m2!1d92.7461187!2d23.7386288">
                        Get Directions
                      </a>
                      )
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="map">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608.981386994441!2d92.7461187!3d23.7386288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b42d4012b7f956d!2sJB%20PAWS!5e0!3m2!1sen!2sin!4v1599505656085!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
