import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Aura Lounge Chair",
    type: "Furniture",
    price: 249,
    old: 310,
    color: "Sand",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Canyon Ceramic Set",
    type: "Homeware",
    price: 78,
    color: "Clay",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Solace Floor Lamp",
    type: "Lighting",
    price: 164,
    color: "Walnut",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Terra Woven Throw",
    type: "Textiles",
    price: 95,
    color: "Oat",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Miro Side Table",
    type: "Furniture",
    price: 189,
    color: "Oak",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Noon Linen Cushion",
    type: "Textiles",
    price: 42,
    color: "Ecru",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [active, setActive] = useState("All pieces");
  const [cart, setCart] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const categories = [
    "All pieces",
    "Furniture",
    "Lighting",
    "Homeware",
    "Textiles",
  ];
  const visibleProducts = useMemo(
    () =>
      products.filter(
        (p) =>
          (active === "All pieces" || p.type === active) &&
          p.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [active, query],
  );
  const addToCart = (product) => {
    setCart((items) => [...items, product]);
    setNotice(`${product.name} added to your bag`);
    setTimeout(() => setNotice(""), 2200);
  };

  return (
    <main>
      <div className="announcement">
        Complimentary shipping on orders over $150 <span>✦</span> Thoughtful
        objects, made to last
      </div>
      <nav>
        <button className="menu-btn" aria-label="Open menu">
          ☰
        </button>
        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#journal">Journal</a>
          <a href="#story">Our story</a>
        </div>
        <a href="#top" className="brand">
          O R I O N <i>—</i>
        </a>
        <div className="nav-actions">
          <button onClick={() => setSearchOpen((v) => !v)} aria-label="Search">
            ⌕
          </button>
          <button aria-label="Account">♙</button>
          <button
            className="bag"
            onClick={() =>
              setNotice(
                cart.length
                  ? `${cart.length} piece${cart.length > 1 ? "s" : ""} in your bag`
                  : "Your bag is waiting for something beautiful",
              )
            }
            aria-label="Shopping bag"
          >
            Bag <b>{cart.length}</b>
          </button>
        </div>
      </nav>
      {searchOpen && (
        <div className="searchbar">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the collection..."
          />
          <button
            onClick={() => {
              setQuery("");
              setSearchOpen(false);
            }}
          >
            Close
          </button>
        </div>
      )}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">New collection · 2025</p>
          <h1>
            Made for
            <br />
            <em>slow</em> living.
          </h1>
          <p className="hero-text">
            A considered collection of everyday objects that bring warmth,
            character, and ease to your spaces.
          </p>
          <a className="solid-link" href="#shop">
            Explore the collection <span>↗</span>
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90"
            alt="Warm neutral living room"
          />
          <div className="hero-label">
            <span>01 / 04</span>
            <p>
              Quiet forms
              <br />
              for everyday rituals
            </p>
          </div>
        </div>
      </section>
      <section className="service-bar" aria-label="Shopping benefits">
        <div>
          <span>✦</span>
          <p>
            <strong>Considered delivery</strong>Carbon-neutral shipping, always
          </p>
        </div>
        <div>
          <span>✦</span>
          <p>
            <strong>Made to stay</strong>30-day easy returns
          </p>
        </div>
        <div>
          <span>✦</span>
          <p>
            <strong>Thoughtful materials</strong>Made in small, intentional runs
          </p>
        </div>
      </section>
      <section className="statement" id="story">
        <p className="eyebrow">The Orion way</p>
        <h2>
          Good design should feel
          <br />
          like it <em>belongs.</em>
        </h2>
        <p>
          We source enduring materials and work with independent makers to
          create pieces that settle naturally into your home—and stay there.
        </p>
        <a href="#journal">
          Read our story <span>→</span>
        </a>
      </section>
      <section className="collection" id="shop">
        <div className="section-head">
          <div>
            <p className="eyebrow">The edit</p>
            <h2>Objects to live with</h2>
          </div>
          <a href="#shop">
            View all pieces <span>↗</span>
          </a>
        </div>
        <div className="filters">
          {categories.map((c) => (
            <button
              className={active === c ? "selected" : ""}
              onClick={() => setActive(c)}
              key={c}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {visibleProducts.map((p, i) => (
            <article className="product" key={p.id}>
              <div className="product-image">
                <img src={p.image} alt={p.name} />
                {i === 0 && <span className="tag">Just in</span>}
                <button className="wish" aria-label={`Save ${p.name}`}>
                  ♡
                </button>
                <button className="quick-add" onClick={() => addToCart(p)}>
                  Add to bag +
                </button>
              </div>
              <div className="product-info">
                <div>
                  <h3>{p.name}</h3>
                  <p>
                    {p.color} · {p.type}
                  </p>
                </div>
                <div className="price">
                  ${p.price}
                  {p.old && <del>${p.old}</del>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!visibleProducts.length && (
          <p className="empty">No pieces found. Try another search.</p>
        )}
      </section>
      <section className="feature">
        <div className="feature-image">
          <img
            src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=1200&q=85"
            alt="Textured throw and cushions"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Material study 01</p>
          <h2>
            Softness, with
            <br />
            <em>substance.</em>
          </h2>
          <p>
            Natural fibers, hand-finished details, and a palette shaped by the
            landscape. Meet the new textiles collection.
          </p>
          <a className="line-link" href="#shop">
            Discover textiles <span>→</span>
          </a>
        </div>
      </section>
      <section className="newsletter" id="journal">
        <p className="eyebrow">A slower letter</p>
        <h2>Notes for a well-lived home.</h2>
        <p>
          New arrivals, studio visits, and thoughts on making space for what
          matters.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNotice("You’re on the list — welcome to Orion.");
          }}
        >
          <input required type="email" placeholder="Your email address" />
          <button type="submit">
            Subscribe <span>→</span>
          </button>
        </form>
      </section>
      <footer>
        <a className="brand" href="#top">
          O R I O N <i>—</i>
        </a>
        <p>© 2025 Orion Studio. Made with intention.</p>
        <div>
          <a href="#top">Instagram</a>
          <a href="#top">Pinterest</a>
          <a href="#top">Contact</a>
        </div>
      </footer>
      {notice && <div className="toast">{notice}</div>}
    </main>
  );
}
export default App;
