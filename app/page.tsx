import Image from 'next/image';

const ORDER_URL = '#order';
const DIRECTIONS_URL = 'https://www.google.com/maps/search/?api=1&query=6940+Automall+Pkwy+Gilroy+CA';
const PHONE_URL = 'tel:+14083371790';
const INSTAGRAM_URL = 'https://www.instagram.com/lahamburguezonaoficial/';

const combos = [
  { name: 'Treat Yourself', price: '$22', badge: 'Combo 1 · Customer Favorite', image: '/images/combo-treat-yourself.jpeg', desc: 'Hamburguezona · Papazotas · Cocorozona', line: 'You earned this. Don\'t waste it.' },
  { name: 'Play It Safe', price: '$19', badge: 'Combo 2', image: '/images/combo-play-it-safe.jpeg', desc: 'Hamburguezona · Papazotas · Mexican Coke', line: 'Responsible... enough.' },
  { name: 'Keep It Simple', price: '$17', badge: 'Combo 3', image: '/images/combo-keep-it-simple.jpeg', desc: 'Hamburguezona · Papazotas', line: 'Simple. Never boring.' },
  { name: 'No Regrets', price: '$25', badge: 'Combo 4', image: '/images/combo-no-regrets.jpeg', desc: 'Hamburguezona · Papazotas Atascadas · Mexican Coke', line: 'Too late to feel guilty.' },
  { name: 'Menos Regret', price: '$28', badge: 'Combo 5', image: '/images/combo-menos-regret.jpeg', desc: 'Hamburguezona · Papazotas Atascadas · Cocorozona', line: 'The healthier bad decision.' }
];

const signatures = [
  { name: 'La Hamburguezona', price: '$13', tag: 'Signature Burger', image: '/images/hamburguezona.jpeg', desc: 'Our Mexican Style Premium Burger stacked with signature meat, sausage, ham, avocado, American cheese, mozzarella, fresh veggies, Mexican mayo, ketchup, and a Mexican bun.', line: 'The reason you came.' },
  { name: 'Cocorozona', price: '', tag: 'Signature Drink', image: '/images/cocorozona.jpeg', desc: 'Our famous pink coconut drink.', line: 'Pink. Cold. Legendary.' },
  { name: 'Papazotas', price: '$5', tag: 'Crispy Side', image: '/images/papazotas.jpeg', desc: 'Golden fries made for serious cravings.', line: 'Impossible to share.' },
  { name: 'Alononas Buffalo', price: '$15', tag: 'Wings', image: '/images/alononas-buffalo.jpeg', desc: 'Buffalo wings with ranch on the side.', line: 'Messy hands. Happy life.' },
  { name: 'Alononas BBQ', price: '$15', tag: 'Wings', image: '/images/alononas-bbq.jpeg', desc: 'Sweet, smoky BBQ wings.', line: 'Sweet with bad intentions.' },
  { name: 'Saladona', price: '$12', tag: 'Fresh', image: '/images/saladona.jpeg', desc: 'Fresh greens, veggies, cotija, and cilantro dressing.', line: 'Healthy... with attitude.' },
  { name: 'Saladona with Meat', price: '$15', tag: 'Protein Upgrade', image: '/images/saladona-meat.jpeg', desc: 'Our Saladona loaded with Hamburguezona meat.', line: 'More protein. More flavor.' },
  { name: 'Papazotas Atascadas', price: '', tag: 'Loaded Favorite', image: '/images/papazotas-atascadas.jpeg', desc: 'Papazotas loaded with nacho cheese, pico, guacamole, crema, and Hamburguezona meat.', line: 'This is why diets fail.' },
  { name: 'Churros', price: '$5', tag: 'Dessert', image: '/images/churros.jpeg', desc: 'Classic cinnamon sugar, strawberry filled, or with melted chocolate on the side.', line: 'Because dessert is not optional.' }
];

function CTA({ children = 'Order Now', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`btn btn-primary ${className}`} href={ORDER_URL}>{children}</a>;
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand-mini">La HamburgueZona</a>
        <nav>
          <a href="#combos">Combos</a>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <CTA>Order</CTA>
        </nav>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy reveal">
          <Image src="/images/logo.png" width={460} height={260} alt="La HamburgueZona logo" priority className="hero-logo" />
          <p className="eyebrow">Mexican Style Premium Burger</p>
          <h1>The reason you came.</h1>
          <p className="hero-text">Big burgers. Loaded fries. Legendary drinks. Built in Gilroy with Mexican attitude.</p>
          <div className="actions">
            <CTA>Order Now</CTA>
            <a className="btn btn-dark" href="#menu">View Menu</a>
            <a className="btn btn-ghost" href={DIRECTIONS_URL}>Get Directions</a>
          </div>
        </div>
        <div className="hero-image reveal delay-1">
          <Image src="/images/combo-treat-yourself.jpeg" width={900} height={900} alt="Treat Yourself combo" priority />
        </div>
        <div className="floating-copy">Go Big or Go Home</div>
      </section>

      <section className="marquee" aria-label="brand slogans">
        <div>We don&apos;t count calories. We count memories. · Ya valió madre la dieta. · Ya sabías. · Hingue su... · </div>
      </section>

      <section id="combos" className="section-pad">
        <div className="section-heading reveal">
          <p className="eyebrow">House Favorites</p>
          <h2>Combos with zero apologies.</h2>
          <p>Pick your craving. We&apos;ll handle the rest.</p>
        </div>
        <div className="combo-grid">
          {combos.map((item, index) => (
            <article className={`product-card combo-card reveal ${index === 0 ? 'featured' : ''}`} key={item.name}>
              <div className="product-image"><Image src={item.image} width={800} height={650} alt={item.name} /></div>
              <div className="product-copy">
                <p className="badge">{item.badge}</p>
                <div className="title-row"><h3>{item.name}</h3><span>{item.price}</span></div>
                <p>{item.desc}</p>
                <strong>{item.line}</strong>
                <CTA>Order This</CTA>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p>Not a burger.</p>
        <h2>An experience.</h2>
      </section>

      <section id="about" className="section-pad about">
        <div className="about-card reveal">
          <p className="eyebrow">About Us</p>
          <h2>More than a burger. It&apos;s an obsession.</h2>
          <p>La HamburgueZona wasn&apos;t created to make just another burger. It was built for people who believe food should be an experience.</p>
          <p>Inspired by the bold flavors of Mexico and crafted with premium ingredients, every burger is made fresh, stacked high, and loaded with flavor.</p>
          <p>No shortcuts. No tiny portions. No boring burgers. Just real food, made with passion, for people who love to eat.</p>
          <h3>Welcome to La HamburgueZona.</h3>
        </div>
        <div className="why-grid reveal delay-1">
          <div><span>🥩</span><b>Premium Ingredients</b></div>
          <div><span>🍔</span><b>Made Fresh Every Order</b></div>
          <div><span>🇲🇽</span><b>Mexican Inspired</b></div>
          <div><span>📺</span><b>Game Day Headquarters</b></div>
          <div><span>🥥</span><b>Home of the Cocorozona</b></div>
          <div><span>🔥</span><b>Go Big or Go Home</b></div>
        </div>
      </section>

      <section id="menu" className="section-pad">
        <div className="section-heading reveal">
          <p className="eyebrow">Signature Menu</p>
          <h2>Cravings, but premium.</h2>
          <p>No sides list here. Order online for all extras and add-ons.</p>
        </div>
        <div className="signature-grid">
          {signatures.map((item) => (
            <article className="product-card signature-card reveal" key={item.name}>
              <div className="product-image"><Image src={item.image} width={800} height={650} alt={item.name} /></div>
              <div className="product-copy">
                <p className="badge">{item.tag}</p>
                <div className="title-row"><h3>{item.name}</h3>{item.price && <span>{item.price}</span>}</div>
                <p>{item.desc}</p>
                <strong>{item.line}</strong>
                <CTA>Order Now</CTA>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="review-band section-pad">
        <p className="stars">★★★★★</p>
        <h2>Loved by Gilroy.</h2>
        <p>5-star energy on Google, Apple Maps, and social media. Come hungry. Leave happy.</p>
        <div className="review-pills">
          <span>5-Star Reviews</span><span>Giant Screens</span><span>Fresh Every Order</span><span>Home of the Cocorozona</span>
        </div>
      </section>

      <section id="order" className="order section-pad">
        <div className="section-heading reveal">
          <p className="eyebrow">Give in to the craving</p>
          <h2>Ready when you are.</h2>
        </div>
        <div className="order-grid">
          <a className="order-panel" href="#">🍔<b>Order Online</b><span>Add your DoorDash/Uber Eats link here.</span></a>
          <a className="order-panel" href={PHONE_URL}>📞<b>Call Us</b><span>(408) 337-1790</span></a>
          <a className="order-panel" href={DIRECTIONS_URL}>📍<b>Visit Us</b><span>6940 Automall Pkwy, Gilroy</span></a>
        </div>
      </section>

      <section id="location" className="location section-pad">
        <div className="location-copy reveal">
          <p className="eyebrow">Find Us</p>
          <h2>Gilroy&apos;s new craving spot.</h2>
          <p>6940 Automall Pkwy<br/>Gilroy, CA 95020</p>
          <div className="actions"><a className="btn btn-primary" href={DIRECTIONS_URL}>Get Directions</a><a className="btn btn-dark" href={PHONE_URL}>Call Now</a></div>
        </div>
        <iframe title="La HamburgueZona map" loading="lazy" src="https://www.google.com/maps?q=6940%20Automall%20Pkwy%20Gilroy%20CA&output=embed"></iframe>
      </section>

      <footer>
        <Image src="/images/logo.png" width={260} height={140} alt="La HamburgueZona logo" />
        <p>Mexican Style Premium Burger · Gilroy, CA</p>
        <div className="footer-links"><a href={INSTAGRAM_URL}>Instagram</a><a href={PHONE_URL}>Call</a><a href={DIRECTIONS_URL}>Directions</a><a href="#top">Back to top</a></div>
      </footer>

      <div className="mobile-bar">
        <a href={PHONE_URL}>Call</a><a href={DIRECTIONS_URL}>Directions</a><a href={ORDER_URL}>Order</a>
      </div>
    </main>
  );
}
