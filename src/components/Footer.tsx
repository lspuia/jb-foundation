export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-info">
      <div className="container">
        <div className="content">
          <div>&copy;{currentYear} JB Foundation. All Rights Reserved.</div>
          <div>
            Website sponsored by{' '}
            <a href="http://www.whitewalls.in/" target="_blank" rel="noopener noreferrer">
              White Walls Interior Design<span>, Aizawl, Mizoram</span>.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
