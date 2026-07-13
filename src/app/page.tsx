import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JB Foundation | A Cause for Paws - Animal Rescue Mizoram',
  description: 'JB Foundation rescues, rehabilitates, and rehomes abused and abandoned animals in Aizawl, Mizoram. Founded in memory of Jerry Boy (JB). Join our mission.',
  keywords: 'JB Foundation, animal rescue Mizoram, pet rescue Aizawl, Jerry Boy, animal welfare, pet adoption, animal shelter Mizoram',
  openGraph: {
    title: 'JB Foundation | A Cause for Paws - Animal Rescue Mizoram',
    description: 'Rescuing, rehabilitating, and rehoming abused animals in Aizawl, Mizoram since 2016.',
    url: 'https://www.jbfoundation.co.in',
    siteName: 'JB Foundation',
    images: [
      {
        url: 'https://www.jbfoundation.co.in/jb-foundation.png',
        width: 1200,
        height: 630,
        alt: 'JB Foundation - A Cause for Paws',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="home">
      <section className="intro">
        <div className="container">
          <h1>
            <span>JB Foundation : A Cause for Paws - Animal Rescue Mizoram</span>
            <Image
              src="/jb-foundation.png"
              alt="JB Foundation : A Cause for Paws - Animal Rescue Mizoram"
              width={400}
              height={120}
              priority
            />
          </h1>
          <p className="xlarge">
            <strong>JB Foundation (JBF)</strong> was started in loving memory of our founder,
            Zirteii's beloved companion, <strong>JB&nbsp;(&nbsp;Jerry&nbsp;Boy&nbsp;)</strong>
          </p>
        </div>
      </section>

      <section className="jb">
        <div className="container">
          <p>
            <b>In her words …</b>
            <br />
            <span>
              &ldquo; Not even in my worst nightmares, did I ever think I would lose my beloved JB
              at such a tender age. I decided to start a pet care & rescue center so that other pet
              parents would have a place to turn to, and not go through what I went through when I
              lost my beloved companion. &rdquo;
            </span>
          </p>

          <div className="jerry-boy">
            <div className="photo">
              <div className="images">
                <Image
                  className="portrait"
                  src="/jerry-boy-jb-foundation.png"
                  alt="Jerry Boy : JB Foundation"
                  width={300}
                  height={400}
                />
                <Image className="twin-hearts" src="/twin-hearts.png" alt=" " width={80} height={80} />
              </div>
              <p>
                <strong>Jerry Boy (JB)</strong>
                <span>May 11th, 2013 - Jan 30th, 2015</span>
              </p>
            </div>
          </div>

          <p>
            <strong>JB Paws Veterinary Hospital</strong> was launched on 15th August 2016. Along
            with the hospital, a non-profit wing was started to rescue abused pets, foster strays &
            to provide financial aid to pet owners who are struggling to provide proper health care
            for their pets due to financial constraints. This non-profit wing was initially called{' '}
            <strong>JB Paws Rescue Team</strong> & has now been renamed{' '}
            <strong>JB Foundation ( JBF )</strong>. JB Foundation is registered under{' '}
            <strong>Mizoram Societies Registration Act, 2005 (&nbsp;MSR&nbsp;748&nbsp;OF&nbsp;2016&nbsp;)</strong>.
          </p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>
            <span>Mission of </span>JB Foundation
          </h2>
          <figure className="dinner-time">
            <Image
              src="/dinner-time.jpg"
              alt="Mission of JB Foundation : Rescue, Rehabilitate & Educate"
              width={800}
              height={600}
            />
            <figcaption>
              <strong>
                Rescue<span className="red">,</span> Rehabilitate <span className="red">&amp;</span>{' '}
                Educate
              </strong>
            </figcaption>
          </figure>

          <div className="sub-section">
            <h3>Rescue</h3>
            <p>
              Most of our rescue missions originate from reports of abuse & neglect we get from our
              patrons. Our approach to pet rescue is to always take a soft stance and try to
              convince the owners to let us care for their pets. In most cases, abused pets come
              from broken homes or homes who do not know better for lack of education. We do our
              best to educate them on not harming pets and explain to them that animal abuse is an
              offence. We have almost always been successful. Sadly, about 4% have required legal
              intervention. We have rescued 527 pets so far, at the time of writing this. 18 of them
              are still residing at our hospital, waiting for their forever homes.
            </p>
          </div>

          <div className="sub-section">
            <h3>Rehabilitate</h3>
            <p>
              All our rescues end up at our hospital where we do medical tests to ascertain their
              overall health. The healthy ones who find people willing to take them home go out as
              soon as possible to make room for others, once our doctors decide that they are
              healthy enough to leave . The ones who need medical attention stay at the hospital
              till they are well enough to go to their forever homes. But not all rescues find
              forever homes, some have been with us for a few years. But we do our best to find
              forever homes for our rescues. We are working to have a shelter for rescued pets, so
              as to be able to foster more rescues. We are currently restricted to our hospital's
              capacity.
            </p>
          </div>

          <div className="sub-section">
            <h3>Educate</h3>
            <p>
              We do our best to educate pet owners who come to our hospital on how to best care for
              their furry companions. We try to reduce irresponsible breeding of pets for quick
              profit as they often end up in bad homes or worse, are raised for their meat. We
              educate breeders on how to find good homes for their furry babies. We also have
              awareness campaigns on responsible pet ownership and animal abuse laws. Our goal is to
              raise awareness on animal abuse.
            </p>
          </div>
        </div>
      </section>

      <section className="thanks">
        <div className="container">
          <h3>To all our Donors &amp; Patrons</h3>
          <p className="xlarge">
            Your compassion, trust & generosity gives us strength & purpose ... limited only by your
            belief in us !
          </p>
        </div>
      </section>

      <section className="stories">
        <div className="container">
          <h3>
            <span className="red">P.S.</span> A few stories in pictures …{' '}
          </h3>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <li key={num}>
                <div>
                  <Image
                    src={`/stories/jb-foundation-pet-rescue-aizawl-mizoram-${num}.jpg`}
                    alt="jb foundation pet rescue aizawl mizoram"
                    width={400}
                    height={300}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
