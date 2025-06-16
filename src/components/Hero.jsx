import './Hero.css';
import { Link } from 'react-router-dom';


function Hero() {

   
  return (
    <div>
    
      <div className="hero-container">
        <h1 className="hero-title">Projects</h1>
      </div>

      <div className='d-flex hero-margin'>
        <div className='d-flex'>
          <img className='img-project' src="/banner-project.svg" alt="HTML Project" />
          <div className='hero-margin'>
            <h2>HTML</h2>
            <p className='p-projects'>
              No início da minha formação pela <br /> DNC, 
              estudei e me aprimorei em HTML. <br />  
              Confesso que tive um pouco de dificuldade 
              no começo, mas consegui finalizar com sucesso o primeiro desafio que me foi proposto.
            </p>
          </div>
        </div>

        <div className='d-flex'>
          <img className='img-project' src="/banner-project.svg" alt="HTML & CSS Project" />
          <div className='hero-margin'>
            <h2>HTML & CSS</h2>
            <p className='p-projects'>
              Após me aprimorar em HTML e <br /> 
              concluir o desafio, passei a estudar<br />
              CSS. Aprofundei meus conhecimentos e <br />
              aprendi a criar sites responsivos — algo em que
               eu ainda tinha certa dificuldade — e consegui concluir mais um desafio com sucesso.
            </p>
          </div>
        </div>
      </div>

      <div className='d-flex hero-margin'>
        <div className='d-flex'>
          <img className='img-project' src="/banner-project.svg" alt="JavaScript Project" />
          <div className='hero-margin'>
            <h2>JavaScript</h2>
            <p className='p-projects'>
              Agora chegou a hora de falar do<br /> tão
              famoso JavaScript. Confesso que<br /> foi a parte
               mais complicada ao longo da<br /> minha formação,
                mas, com o tempo,<br />
                 prática e dedicação, fui
                 entendendo como funcionavam as funções e 
                 como utilizá-las. Consegui finalizar mais um projeto com<br /> sucesso.
            </p>
          </div>
        </div>

        <div className='d-flex-react'>
          <img className='img-project' src="/banner-project.svg" alt="React Project" />
          <div className='hero-margin'>
            <h2>React</h2>
            <p className='p-projects'>
              E finalmente cheguei ao meu 4°<br />
              e último desafio sobre React que<br />
               é uma biblioteca JavaScript para<br />
                construir interfaces de usuário. Consegui fazer o desafio final
                utilizando React, Vite e usando useState e useEffect.
            </p>
          </div>
        </div>
      </div>

      
      <div className="hero-container-about">
        <h1 className="hero-title">Sobre Mim</h1>
      </div>

      <div className='info-about'>
        <h2 className='padding-about about-title'>Matheus Cavalcante</h2>
        <p className='padding-about about-p'>
          Olá! <br />
          Me chamo Matheus. Sou desenvolvedor front-end júnior, aluno da DNC, e estou buscando me aprimorar <br /> cada vez mais para me tornar um ótimo desenvolvedor.
          Atualmente, atuo como front-end, mas desejo aprender <br /> back-end também e me tornar um programador full-stack.
          No momento, trabalho como auxiliar de logística, <br /> mas desejo migrar para a área de programação.
        </p>
        
        <ul className='d-flex list-about'>
          <li><a className='social-media' href='https://www.instagram.com/matheus.cavalcante7/'>Instagram</a></li>
          <li><a className='social-media' href='https://github.com/matheusc17h'>GitHub</a></li>
          <li><a className='social-media' href='mailto:seuemail@example.com'>Email</a></li>
        </ul>
      </div>

     
      <div className='ul-margin'>
        <ul className='d-flex jc-space-between ul-about'>
          <li className='li-about d-flex'>
            <div><img className='img-about' src="/interface.svg" alt="Interface & Design"/></div>
            <div><img className='img-line' src="/line.svg" alt="line"/></div>
            <div>
              <h1 className='h1-about'>Interface & Design</h1>
              <p className='p-about'>Briefing, wireframe, UX, UI and branding.</p>
            </div>
          </li>

          <li className='li-about d-flex'>
            <div><img className='img-about' src="/html.svg" alt="HTML & CSS"/></div>
            <div><img className='img-line' src="/line.svg" alt="line"/></div>
            <div>
              <h1 className='h1-about'>HTML & CSS</h1>
              <p className='p-about'>Responsive websites with fast loading.</p>
            </div>
          </li>

          <li className='li-about d-flex'>
            <div><img className='img-about' src="/react.svg" alt="React.js"/></div>
            <div><img className='img-line' src="/line.svg" alt="line"/></div>
            <div>
              <h1 className='h1-about'>React.js</h1>
              <p className='p-about'>Build your system with node.js.</p>
            </div>
          </li>

          <li className='li-about d-flex'>
            <div><img className='img-about' src="/word.svg" alt="WordPress"/></div>
            <div><img className='img-line' src="/line.svg" alt="line"/></div>
            <div>
              <h1 className='h1-about'>WordPress</h1>
              <p className='p-about'>Create your e-commerce or blog with PHP.</p>
            </div>
          </li>
        </ul>
      </div>

     
      <div className='d-flex jc-center'>
        <div className='d-flex about-experiences-margin'>
          <div><img className='img-line2' src="/line2.svg" alt="line"/></div>
          <div>
            <h1 className='about-experiences-title'>I've had experiences with</h1>
            <p className='about-experiences-p'>
              Firebase Database <br />
              MySQL Database <br />
              GIT, GitHub, Bitbucket <br />
              Coding PHP <br />
              Figma, Adobe XD, Sketch <br />
              CSS Preprocessors <br />
              Digital Marketing <br />
              Coding Python (Django) <br />
            </p>
          </div>
        </div>

        <div className='d-flex about-experiences-margin'>
          <div><img className='img-line2' src="/line2.svg" alt="line"/></div>
          <div>
            <h1 className='about-experiences-title'>I have years of experience with</h1>
            <p className='about-experiences-p'>
              Coding HTML5 <br />
              Coding CSS3 <br />
              Coding WordPress <br />
              Coding JavaScript <br />
              Using Elementor <br />
              Using Adobe Package <br />
              Creating Brand and Logo <br />
              Creating User Interface <br />
            </p>
          </div>
        </div>

        <div className='d-flex about-experiences-margin'>
          <div><img className='img-line2' src="/line2.svg" alt="line"/></div>
          <div>
            <h1 className='about-experiences-title'>I work and study about</h1>
            <p className='about-experiences-p'>
              Coding React.js <br />
              Coding CSS3 <br />
              Coding JavaScript <br />
              Coding TypeScript <br />
              Studying Node.js basics <br />
              Studying API RESTful <br />
              Studying User Experience <br />
            </p>
          </div>
        </div>
      </div> 




    </div>

    

    
  );

  
}

export default Hero;
