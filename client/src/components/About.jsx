import TopNav from './TopNav'
import BottomNav from './BottomNav'

export default function About() {
    return (
        <>
            <TopNav />
            <main className="container-fluid">
                <div className="row justify-content-around text-center about">
                    <div className="col-md-9">
                        <img className="founder-img d-block w-100 img-fluid" src={require("../media/cajon-parade.jpg")} alt="handsome man playing cajon" />
                        <p className="founder-text">Herschel McGrady, Founder (1977 - 2014)</p>
                        <div className="jumbotron jumbotron-about">
                            <h1 className="about-header">ABOUT FLAM DRAGON</h1>
                            <p className="about-text">
                                Flam Dragon is a company born and bred in rhythm. From banging on pots and pans with wooden mixing spoons as a toddler to his untimely death when he was impaled on his own drumstick in a freak accident during a gig, our esteemed founder Hershel McGrady was committed to percussion and percussionists. We're proud to carry on his legacy. 
                            </p> 
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </>
    )
}