import React from 'react';
import { Link } from '@inertiajs/react';

const HeaderLayout = ({ children }) => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <title>test</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
          crossOrigin="anonymous"
        />
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <header className="navbar bg-primary text-bg-primary" data-bs-theme="dark" id="header">
          <div className="container px-4">
            <div className="title">
              <h1>個人事業主の味方</h1>
            </div>
            <div>
              <ul className="nav">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" href={route('index')}>簿記記入</Link></li>
                <li className="nav-item"><Link className="nav-link active" href={route('deduction')}>控除入力</Link></li>
                <li className="nav-item"><Link className="nav-link active" href={route('kyuyo')}>給与所得入力</Link></li>
                <li className="nav-item"><Link className="nav-link active" href={route('tax')}>現在の所得を確認</Link></li>
                <li className="nav-item mx-2"><Link href={route('logout')}><button className="btn btn-light">ログアウト</button></Link></li>
              </ul>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer">
        </footer>
      </body>
    </>
  );
};

export default HeaderLayout;

