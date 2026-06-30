import TCBlogo from './assets/NewTCBLogo.png'
import instagramLogo from './assets/Instagramlogo.png'
import facebookLogo from './assets/Facebooklogo.png'
import tiktokLogo from './assets/tiktoklogo.avif'
import pinterestLogo from './assets/Pinterestlogo.png'
import youtubeLogo from './assets/youtubelogo.avif'
import './App.css'

function App() {
  return (
    <>
      <div className="section1">
        <div className="Heading">
          <h1>The Texas Crowdfunded Blockbuster</h1>
        </div>
        <div className="hero">
          <img src={TCBlogo} className="tcb" alt="TCB logo" />
        </div>
        <div className="video">
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/lsR9c0QzneU"
              title="The Texas Crowdfunded Blockbuster trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="section2-textbox">
          <p className="section2-text">
            For the next 90 days I am on a journey to write my first full length movie script. I will be documenting my process and my progress to gain a social media following for my murder mystery spy thriller. My goal is to either get crowdfunded or have a professional studio fund the film. If successful I want to make a film everyone can enjoy and use this opportunity to help launch my career as a filmmaker.
          </p>
        </div>
        <div className="Socials">
          <h1 className="h1">Follow our journey</h1>
          <div className="social-icons">
            <a className="social-link instagram" href="https://www.instagram.com/texascrowdfundedblockbuster/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instagramLogo} className="social-icon" alt="Instagram" />
            </a>
            <a className="social-link facebook" href="https://www.facebook.com/profile.php?id=61590923512918" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookLogo} className="social-icon" alt="Facebook" />
            </a>
            <a className="social-link tiktok" href="https://www.tiktok.com/@user5654204380724?lang=en" target="_blank" rel="noreferrer" aria-label="TikTok">
              <img src={tiktokLogo} className="social-icon" alt="TikTok" />
            </a>
            <a className="social-link pinterest" href="https://www.pinterest.com/texascrowdfundedblockbuster/" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <img src={pinterestLogo} className="social-icon" alt="Pinterest" />
            </a>
            <a className="social-link youtube" href="https://www.youtube.com/@TheTexasCrowdfundedBlockbuster" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src={youtubeLogo} className="social-icon" alt="YouTube" />
            </a>
          </div>
          <p className="social-contact-label">Contact us:</p>
          <a className="social-contact-email" href="mailto:texascrowdfundedblockbuster@gmail.com">
            texascrowdfundedblockbuster@gmail.com
          </a>
        </div>


      </div>
        
        
    </>
  )
}

export default App
