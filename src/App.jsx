import './index.css'

function index() {



  return (
    <>
      <header className='flex-container'>
        <img src="./img/dc-logo.png" alt="logo" />

        <nav>
          <ul className='flex-container'>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='bg-black flex-container'>
          <p className='text-white'> Content goes here </p>
        </div>
        <div className='bg-azure flex-container'>
          <div className='flex-container'>
            <img className='img-width' src="./img/buy-comics-digital-comics.png" alt="digital comics" />
            <a href="#">DIGITAL COMICS</a>
          </div>
          <div className='flex-container'>
            <img className='img-width' src="./img/buy-comics-merchandise.png" alt="dc merchandise" />
            <a href="#">DC MERCHANDISE</a>
          </div>
          <div className='flex-container'>
            <img className='img-width' src="./img/buy-comics-subscriptions.png" alt="subscription" />
            <a href="#">SUBSCRIPTION</a>
          </div>
          <div className='flex-container'>
            <img className='img-width' src="./img/buy-comics-shop-locator.png" alt="comics shop locator" />
            <a href="#">COMICS SHOP LOCATOR</a>
          </div>
          <div className='flex-container'>
            <img className='img-width' src="./img/buy-dc-power-visa.svg" alt="dc power visa" />
            <a href="#">DC POWER VISA</a>
          </div>
        </div>
      </main>

      <footer>
        <div className='img-bg-footer'>
          <div>
            <p>DC COMICS</p>
            <div>
              <a href="#">Characters</a> <br />
              <a href="#">Comics</a> <br />
              <a href="">Movies</a> <br />
              <a href="">TV</a> <br />
              <a href="">Games</a> <br />
              <a href="#">Videos</a> <br />
              <a href="#">News</a> <br />
            </div>
            <p>SHOP</p>
            <a href="#">Shop DC</a> <br />
            <a href="#">Shop DC Collectibles</a> <br />
          </div>

          <div>
            <p>DC</p>
            <a href="#">Terms of Use</a> <br />
            <a href="#">Privacy policy (New)</a> <br />
            <a href="#">Ad Choices</a> <br />
            <a href="#">Advertising</a> <br />
            <a href="#">Jobs</a> <br />
            <a href="#">Subscriptions</a> <br />
            <a href="#">Talent Workshops</a> <br />
            <a href="#">CPSC Certificates</a> <br />
            <a href="#">Ratings</a> <br />
            <a href="#">Shop Help</a> <br />
            <a href="#">Contact Us</a> <br />
          </div>

          <div>
            <p>SITES</p>
            <a href="#">DC</a> <br />
            <a href="#">MAD Magazine</a> <br />
            <a href="#">DC Kids</a> <br />
            <a href="#">DC Universe</a> <br />
            <a href="#">DC Power Visa</a> <br />
          </div>

        </div>
        <div className='bg-footer'>
          <button>SIGN-UP NOW!</button>
          <div>
            <p>FOLLOW US</p>
            <img src="./img/footer-facebook.png" alt="facebook" />
            <img src="./img/footer-twitter.png" alt="twitter" />
            <img src="./img/footer-youtube.png" alt="youtube" />
            <img src="./img/footer-pinterest.png" alt="pinterest" />
          </div>
        </div>
      </footer>

    </>
  )
}

export default index
