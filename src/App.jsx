
import './App.css'

const products = [
  {
    name: 'Reusable Pet Hair Remover',
    category: 'PET ESSENTIALS',
    price: '$19.99',
    description: 'A simple little helper for keeping your home fresh and fur-free.',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cozy Home Essentials',
    category: 'HOME COMFORTS',
    price: '$24.99',
    description: 'Thoughtful everyday finds to make your space feel like home.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Little Everyday Comforts',
    category: 'LITTLE FAVOURITES',
    price: '$14.99',
    description: 'Small touches chosen to bring a little more comfort to your day.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  return (
    <div className="store">
      <div className="announcement">
        Little comforts. Lots of love. ♡
      </div>

      <header className="header">
        <a className="logo" href="#">
          Elle<span>Nest</span>
        </a>

        <nav>
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#newsletter">Stay in Touch</a>
        </nav>

        <a className="header-link" href="#shop">Explore the shop ↗</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A LITTLE MORE COMFORT, EVERY DAY</p>
            <h1>Make yourself<br />at <em>home.</em></h1>
            <p className="hero-text">
              Thoughtful finds for the spaces you love and the little
              moments that make life feel special.
            </p>
            <a className="button" href="#shop">Discover our finds <span>→</span></a>
            <p className="hero-note">Made for everyday living, chosen with love.</p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
              alt="Warm, cozy living room with natural textures"
            />
            <div className="image-note">
              <span>♡</span>
              <div>
                <strong>Feel-good living</strong>
                <small>Little things, lovely spaces.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <div><span>✳</span><p>Thoughtful finds</p></div>
          <div><span>♡</span><p>Comfort in the little things</p></div>
          <div><span>⌂</span><p>Made for everyday life</p></div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE ELLE NEST EDIT</p>
              <h2>Little things to <em>love.</em></h2>
            </div>
            <p>Simple comforts for you, your home, and your favourite companions.</p>
          </div>

          <div className="products">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.category}</span>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <strong>{product.price} USD</strong>
                </div>
                <a className="product-link" href="#newsletter">
                  Learn more <span>↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="preview-note">
            Preview prices and product examples only. Products and prices
            will be confirmed before the shop opens.
          </p>
        </section>

        <section className="story" id="story">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1000&q=85"
              alt="Calm, naturally styled home interior"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">A NOTE FROM ELLE NEST</p>
            <h2>A home is built<br />from little <em>moments.</em></h2>
            <p>
              We believe comfort doesn't have to be complicated. It's the
              small things that make a space yours and the thoughtful
              touches that turn everyday routines into something special.
            </p>
            <p>
              ElleNest is a growing little shop inspired by cozy spaces,
              practical finds, and living with a little more love.
            </p>
            <a href="#shop" className="text-link">Explore our collection →</a>
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <p className="eyebrow">A LITTLE LOVE IN YOUR INBOX</p>
          <h2>Let's keep in <em>touch.</em></h2>
          <p>Our shop is still growing. Check back soon for updates.</p>
          <a className="button light-button" href="#shop">Browse the preview <span>→</span></a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#">Elle<span>Nest</span></a>
        <p>Little comforts. Lots of love.</p>
        <small>© {new Date().getFullYear()} ElleNest · Store preview</small>
      </footer>
    </div>
  )
}

export default App
