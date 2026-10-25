const categories = [
  { name: 'Electronics', icon: '📱', color: 'orange' },
  { name: 'Fashion', icon: '👕', color: 'pink' },
  { name: 'Stationery', icon: '📚', color: 'blue' },
  { name: 'Groceries', icon: '🥑', color: 'green' },
  { name: 'Hostel', icon: '🛏️', color: 'purple' },
  { name: 'Beauty', icon: '💄', color: 'rose' },
];

const products = [
  { name: 'Wireless Earbuds', price: 2500, tag: 'Popular', rating: 4.8, image: '🎧' },
  { name: 'Campus Backpack', price: 3200, tag: 'New', rating: 4.9, image: '🎒' },
  { name: 'Student Notebook Set', price: 1200, tag: 'Best Seller', rating: 4.7, image: '📓' },
  { name: 'Rice & Groceries Pack', price: 1800, tag: 'Bundle', rating: 4.6, image: '🛍️' },
  { name: 'Portable Speaker', price: 4100, tag: 'Hot Deal', rating: 4.8, image: '🔊' },
  { name: 'Smart Watch', price: 6900, tag: 'Limited', rating: 4.9, image: '⌚' },
];

const steps = [
  'Create your student account',
  'Browse trending campus essentials',
  'Add products to your cart',
  'Pay securely and track delivery',
];

const stats = [
  { label: 'Daily Orders', value: '2.4k+' },
  { label: 'Student Sellers', value: '850+' },
  { label: 'Delivery Time', value: '24 min' },
  { label: 'Happy Buyers', value: '18k+' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <p className="brand-name">Atlanta Market</p>
            <span className="brand-tag">Student marketplace</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#categories">Categories</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost">Log in</button>
          <button className="btn btn-primary">Start shopping</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Campus essentials, delivered fast</span>
            <h1>Shop smart. Support your campus community.</h1>
            <p>
              Buy books, gadgets, groceries, fashion, and hostel essentials from local
              student sellers at affordable prices.
            </p>

            <div className="searchbar">
              <span>🔎</span>
              <input type="text" placeholder="Search for electronics, books, groceries..." />
              <button className="btn btn-primary">Search</button>
            </div>

            <div className="hero-badges">
              <span>✅ Trusted by students</span>
              <span>✅ Same-day campus delivery</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card card-main">
              <div className="mini-card mini-card-green">
                <p>Live orders</p>
                <strong>1,250</strong>
              </div>

              <div className="product-showcase">
                <div className="showcase-icon">🧥</div>
                <div>
                  <p className="showcase-label">This week’s pick</p>
                  <h3>Urban Campus Hoodie</h3>
                  <div className="showcase-meta">
                    <span>KSh 2,950</span>
                    <span>⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-card card-side">
              <p>Top categories</p>
              <ul>
                <li>Groceries</li>
                <li>Books</li>
                <li>Tech</li>
                <li>Fashion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="categories" id="categories">
          <div className="section-head">
            <div>
              <span className="eyebrow">Browse categories</span>
              <h2>What students are shopping for</h2>
            </div>
            <button className="btn btn-ghost">Shop all</button>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div key={category.name} className={`category-card ${category.color}`}>
                <div className="icon-wrap">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>Explore fresh deals and trusted local sellers</p>
              </div>
            ))}
          </div>
        </section>

        <section className="products" id="discover">
          <div className="section-head">
            <div>
              <span className="eyebrow">New arrivals</span>
              <h2>Popular picks this week</h2>
            </div>
            <button className="btn btn-ghost">View all</button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-image">{product.image}</div>
                <span className="product-tag">{product.tag}</span>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="rating-row">
                    <span>⭐ {product.rating}</span>
                    <span>Free delivery</span>
                  </div>
                  <div className="price-row">
                    <strong>KSh {product.price}</strong>
                    <button>Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-head center">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Shop in four easy steps</h2>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step} className="step-card">
                <div className="step-number">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
