import Image from 'next/image';

export default function AnimalShelter() {
  return (
    <main className="animal-shelter-page">
      <div className="container">
        <h1>JB Foundation Animal Shelter</h1>
      </div>
      <section>
        <div className="container">
          <figure>
            <Image
              src="/jb-foundation-animal-shelter.jpg"
              alt="JB Foundation Animal Shelter"
              width={800}
              height={600}
            />
          </figure>
          <p>
            Work on the construction of an animal shelter (near Bungbangla) was started on the{' '}
            <strong>27 Feb 2021</strong>.
          </p>

          <p>
            We are still a long way from having a fully functional Animal Shelter, primarily due to
            lack of funds.{' '}
          </p>
          <h4>We need your help !!!</h4>
        </div>
      </section>
      <div className="donate-now">
        <a href="#donateNow">Donate Now</a>
        <p>And join us in our mission of rescuing as many abused/abandoned animals as possible.</p>
      </div>
      <section className="rescue-center">
        <div className="container">
          <h2>
            <span>The need for An Animal Shelter</span>
          </h2>
          <p>
            It is our dream & mission to rescue every single abused & abandoned pet that reaches our
            ears. But, due to constraints in finances, space & man-power, we have to turn a deaf
            ear, more often than we would like to, as our capacity in terms of the aforementioned
            constraints has been stretched to its limit since the beginning.
          </p>
          <p>
            This was the reason behind starting JB Foundation as a Non-Profit organisation, a
            separate entity from JB Paws Veterinary Hospital. This was done so as to allow JB Paws
            to function as a for-profit business to generate income for the pet rescue &
            rehabilitation activities of JB Foundation. In our current situation, rescues/fosters of
            JB Foundation have to share hospital space with patients(paying patients) of JB Paws
            which leaves us in a situation which restricts the number of paying patients we can
            admit, which further reduces the amount of funds available to us for us to care for the
            rescues / fosters in our hospital. This is a vicious cycle which has been detrimental to
            the efficient functioning of both JB Foundation & JB Paws since the beginning. If not
            for our patrons & supporters who have either donated or helped raised funds for JB
            Foundation since the beginning, JB Foundation would have died as an idea at its
            inception.
          </p>
          <p>
            Hence the need for a pet rescue center with proper facilities, staff & funding -
            dedicated only to the treatment, rehabilitation & rehoming of abandoned & rescued pets.
            That is the dream …
          </p>
        </div>
      </section>
      <section className="ways-to-donate" id="donateNow">
        <div className="container">
          <h2>
            <span>How to Donate</span>
          </h2>
          <div className="donation-options">
            <div className="upi-payments">
              <h4>UPI Payments</h4>
              <ul>
                <li>
                  <span>6009157185@upi</span>
                </li>
                <li>
                  <span>jbfoundation@sbi</span>
                </li>
                <li>
                  <span>Scan &amp; Pay</span>
                  <figure>
                    <Image src="/scan-pay.png" alt="" width={300} height={300} />
                  </figure>
                </li>
              </ul>
            </div>
            <div className="account-transfer">
              <h4>Account Transfer</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Beneficiary Name</td>
                    <td>:</td>
                    <td>JB Foundation</td>
                  </tr>
                  <tr>
                    <td>Account No</td>
                    <td>:</td>
                    <td>399 4055 3661</td>
                  </tr>
                  <tr>
                    <td>Bank Name</td>
                    <td>:</td>
                    <td>State Bank of India</td>
                  </tr>
                  <tr>
                    <td>IFSC</td>
                    <td>:</td>
                    <td>SBIN0017400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
