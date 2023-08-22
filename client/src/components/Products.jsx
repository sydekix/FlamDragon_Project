import TopNav from './TopNav'
import Drumstick from './Drumstick'
import BottomNav from './BottomNav'


export default function Products() {

    return (
        <div>
            <TopNav />
            <br />
            <br />
            <br />
            {/* <div className="container">
                <div className="row">
                    <div className="text-center">

                        <h1 className="text-center products-heading">DRUMSTICKS</h1>
                    </div>
                </div> */}
            <div className="text-center products-heading-div">
                  <h1 className="products-heading">DRUMSTICKS</h1> 
            </div>
            {/* <h1 className="text-center products-heading">DRUMSTICKS</h1>  */}
            {/* </div> */}
            <p className="products-supporting-text">This month's FlamDragon partner is <a className="memphis-drum-shop" href="https://memphisdrumshop.com/">Memphis Drum Shop</a>. If you call yourself a drummer, no trip to Memphis is complete without a visit to this iconic shop, which has hosted more legends than you can shake a...well, you know the rest.</p>
            <p className="products-supporting-text">If you're not going to be in town anytime soon, no worries--that's what <i>we're</i> here for!</p>
            <Drumstick />
            {/* <Newsletter />  */}
            <BottomNav />
        </div>
    )
}
 
