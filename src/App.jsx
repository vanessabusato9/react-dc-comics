import './index.css'

function index() {



  return (
    <>
      <header className='flex-container-header container'>
        <img className="logo-header" src="./img/dc-logo.png" alt="logo" />

        <nav>
          <ul className='gap-links'>
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
        <div className='container-img-jumbotron'>
          <div className='img-jumbotron'></div>
        </div>

        <div className='bg-azure'>
          <div className='container main-flex-container'>
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
        </div>

      </main>

      <footer>
        <div className='img-bg-footer'>
          <div className='container flex-container'>
            <div>
              <p className='text-white'>DC COMICS</p>
              <a href="#" className='text-gray'>Characters</a> <br />
              <a href="#" className='text-gray'>Comics</a> <br />
              <a href="#" className='text-gray'>Movies</a> <br />
              <a href="#" className='text-gray'>TV</a> <br />
              <a href="#" className='text-gray'>Games</a> <br />
              <a href="#" className='text-gray'>Videos</a> <br />
              <a href="#" className='text-gray'>News</a> <br />
              <p className='text-white'>SHOP</p>
              <a href="#" className='text-gray'>Shop DC</a> <br />
              <a href="#" className='text-gray'>Shop DC Collectibles</a> <br />
            </div>

            <div>
              <p className='text-white'>DC</p>
              <a href="#" className='text-gray'>Terms of Use</a> <br />
              <a href="#" className='text-gray'>Privacy policy (New)</a> <br />
              <a href="#" className='text-gray'>Ad Choices</a> <br />
              <a href="#" className='text-gray'>Advertising</a> <br />
              <a href="#" className='text-gray'>Jobs</a> <br />
              <a href="#" className='text-gray'>Subscriptions</a> <br />
              <a href="#" className='text-gray'>Talent Workshops</a> <br />
              <a href="#" className='text-gray'>CPSC Certificates</a> <br />
              <a href="#" className='text-gray'>Ratings</a> <br />
              <a href="#" className='text-gray'>Shop Help</a> <br />
              <a href="#" className='text-gray'>Contact Us</a> <br />
            </div>

            <div>
              <p className='text-white'>SITES</p>
              <a href="#" className='text-gray'>DC</a> <br />
              <a href="#" className='text-gray' >MAD Magazine</a> <br />
              <a href="#" className='text-gray' >DC Kids</a> <br />
              <a href="#" className='text-gray'>DC Universe</a> <br />
              <a href="#" className='text-gray'>DC Power Visa</a> <br />
            </div>

            <div>
              <img src="./img/dc-logo.png" alt="dc-logo" />
            </div>
          </div>
        </div>

        <div className='bg-footer'>
          <div className='container footer-bar'>
            <button className='text-white-botton'>SIGN-UP NOW!</button>
            <div className='footer-social'>
              <p className='text-azure'>FOLLOW US</p>
              <figure>
                <img src="./img/footer-facebook.png" alt="facebook" />
                <img src="./img/footer-twitter.png" alt="twitter" />
                <img src="./img/footer-youtube.png" alt="youtube" />
                <img src="./img/footer-pinterest.png" alt="pinterest" />
              </figure>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}

export default index
