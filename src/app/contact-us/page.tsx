import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | JB Foundation',
  description: 'Get in touch with JB Foundation in Aizawl, Mizoram. Phone: +91 8259 989 871, Email: jbfoundation20@gmail.com. Visit us at Zemabawk Kawn Veng.',
  keywords: 'contact JB Foundation, Aizawl address, Mizoram animal rescue contact, pet rescue phone number',
  openGraph: {
    title: 'Contact Us | JB Foundation',
    description: 'Reach out to JB Foundation for animal rescue and welfare in Aizawl, Mizoram.',
    url: 'https://www.jbfoundation.co.in/contact-us',
    siteName: 'JB Foundation',
    locale: 'en_IN',
    type: 'website',
  },
};

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
                      <a href="https://maps.app.goo.gl/BeQmgmQeZY1aw8Xs9" target="_blank" rel="noopener noreferrer">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.473774859867!2d92.7435373!3d23.7386502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d95553ba5ab2f%3A0xf4d13e870880a469!2sJB%20Foundation%20(A%20CAUSE%20FOR%20PAWS)!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
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
