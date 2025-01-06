import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div>
      <header className="Home-header">
      </header>
      <div className='content'>
        <div className='Home-sider'>
          <div>
            <p>ประเภท</p>
            <button className='button'>เมนู1</button>
            <button className='button'>เมนู2</button>
            <button className='button'>เมนู3</button>
            <button className='button'>เมนู4</button>
            <button className='button'>เมนู5</button>
          </div>
        </div>
        <div className='Home-content'>
          <div>
            <div className='column-1'></div>
            <div className='column-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
