import React from 'react';
import './app.scss';
import captcha from './img/captcha.png';
import img1 from './img/2.jpg';
import img2 from './img/leave2.png';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';
import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
import img17 from './img/17.jpg';



function App() {
  return (
    <div id="app">
  
        <nav>
          <ul>
            
            <li>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
              <span>Juan Perez, 20 Años</span>
            </li>
            
            <li><a href="#grilla">Cards</a></li> 
            <li><a href="#formulario">Form</a></li>
            <li><a href="#galeria">Galery</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
        <span>Go Big, or go home!</span>
        <main>
          <div id="intro">
              <div>
        
                <span>Eco-Lighting</span>
         
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis amet unde quisquam perferendis dignissimos excepturi dolores, architecto officia nemo doloremque assumenda expedita facilis rerum enim est recusandae veritatis. Iusto.<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sit. Facilis, ipsa dolore itaque tempora mollitia eum ducimus voluptate autem, illo vel temporibus ab eligendi eius explicabo ipsam voluptas perspiciatis?</span></p>
              </div>
          </div>

          <div id="grilla">
              <h1>eco-friendly</h1>
                <div>
                  <div>
                    <div>
                      <img src={img1} alt="image"/>
                      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem voluptatem iste placeat ab ex suscipit blanditiis quam. </p>
                  </div>
                  <div>
                    <input type="button" value="Buy"/>
                    <input type="button" value="More"/>
                  </div>
                  </div>
                  
                  <div>
                    <div>
                      <img src={img13} alt="image"/>
                      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem voluptatem iste placeat ab ex suscipit blanditiis quam. </p>
                  </div>
                  <div>
                    <input type="button" value="Buy"/>
                    <input type="button" value="More"/>
                  </div>
                  </div>

                  <div>
                    <div>
                      <img src={img16} alt="image"/>
                      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem voluptatem iste placeat ab ex suscipit blanditiis quam. </p>
                    </div>
                    <div>
                      <input type="button" value="Buy"/>
                      <input type="button" value="More"/>
                    </div>
                  </div>

                </div>
          </div>
          
          <div id="formulario">
              <div>
                <div>
                  <h1>Do you have an idea?</h1>
                  <h2>we listen</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, itaque dicta reiciendis sit saepe nulla reprehenderit possimus velit iste nisi sunt ullam dolores aspernatur, hic impedit quibusdam? </p>
                </div>
              </div>
              <form>
                <div>
                  <div>
                    <label>Name</label>
                    <input type="text" />
                  </div>
                    
                  <div>
                    <label>País<input type="text" name="formatoimagen" list="listaformatosimagen"/></label>
                    <datalist id="listaformatosimagen">
                          <option>Argentina</option>
                          <option>Brasil</option>
                          <option>Venezuela</option>
                          <option>Colombia</option>
                      </datalist>
                  </div>

                  <div>
                    <label>Sex</label>
                    <div>
                      <div><input type="radio" name="sex"/>F
                      </div>
                      <div><input type="radio" name="sex" />M</div>
                      <div><input type="radio" name="sex" />O</div>
                    </div>
                  </div> 
                <div>

                <textarea placeholder="Comments"></textarea>
                </div>
                
                <div>
                  <label>I'm not a Robot</label>
                  <img src={captcha} alt=""/>
                  <input type="radio" />
                </div>

                <div>
                <button>Send</button>
                </div>
              </div>
              </form>
          
          </div>

          <div id="galeria">
              <img src={img1} alt="grid1"/>
              <img src={img2} alt="grid2"/>
              <img src={img6} alt="grid3"/>
              <img src={img7} alt="grid4"/>
              <img src={img4} alt="grid5"/>
              <img src={img8} alt="grid6"/>
              <img src={img17} alt="grid7"/>
              <img src={img12} alt="grid8"/>
              <img src={img10} alt="grid9"/>
              <img src={img11} alt="grid10"/>
              <img src={img12} alt="grid11"/>
              <img src={img1} alt="grid12"/>
              <img src={img2} alt="grid13"/>
              <img src={img16} alt="grid14"/>
              <img src={img15} alt="grid15"/>
              <img src={img4} alt="grid16"/>
              <img src={img8} alt="grid17"/>
              <img src={img11} alt="grid18"/>
              <img src={img12} alt="grid19"/>
              <img src={img13} alt="grid20"/>
          </div>

          <footer id="footer">

            <div>
             
              <div>
             
                <input type="text" />     <button>Send</button>
              </div>
              <p>Join our Newsletter!</p>
              
            </div>

            <div></div>

            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
              </div>
            </div>

          </footer>
        </main>
      </div>
  );
}

export default App;
