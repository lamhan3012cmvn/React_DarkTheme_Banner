import './App.css';
import { FiSun } from 'react-icons/fi';
import { TiWeatherNight } from 'react-icons/ti';
import { useState } from 'react';

function App() {
	const [isDark, setIsDark] = useState(false);
	const handleChangeDark = () => setIsDark(!isDark);
	return (
		<div className={isDark ? 'App dark' : 'App'}>
			<nav className={isDark ? 'navbar dark' : 'navbar'}>
				<div className='navbar-container'>
					<div className='nav-logo'>o0oKenZyo0o </div>
					<ul className='nav-menu'>
						<li className='nav-items'>
							<a> HOME </a>
						</li>
						<li className='nav-items'>
							<a> ABOUT </a>
						</li>
						<li className='nav-items'>
							<a> PROTFOLIO </a>
						</li>
						<li className='nav-items'>
							<a> SERVICES </a>
						</li>
						<li className='nav-items'>
							<a> HIRE ME </a>
						</li>
						<li className='nav-items' onClick={handleChangeDark}>
							{isDark ? <FiSun /> : <TiWeatherNight />}
						</li>
					</ul>
				</div>
			</nav>
			<div className='info'>
				<div className='info-container'>
					<div className='content'>
						<h3>
							I'm <span>KenZy</span> Lam
						</h3>
						<p>
							This is official portfolio website to show case  my all works
							related to web  <br/>development and UI design
						</p>
            <a href="#" className="btn">Download CV</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
