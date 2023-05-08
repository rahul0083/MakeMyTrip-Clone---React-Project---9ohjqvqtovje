import React from "react";
import Cards from "./Cards";
import OffersCard from "./OffersCard";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Content() {
  return (
    <div className="content">
  <h6> <ArrowDownwardIcon />  Explore More  <ArrowDownwardIcon /></h6>
<div className='content4'>
      <ul className="nav nav-underline">
    <li className="nav-item" style={{fontSize:"25px",fontWeight:"bold"}}>Offers</li>
     <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">All Offers</a>
    </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Bank Offers</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Flights</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Hotels</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Trains</a>
  </li>

</ul>
<div className="offer_card">   
     <OffersCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5iBLDVdZk-QG_CK3m_2q6PYX0GdR5G3xKmQ&usqp=CAU"
     title="HERE NOW:Suhana Safar Sale for Your Summer Trips!" description="Enjoy delightful deals on flights.Also grab 6-7 PM Jackpot deals"/>
     <OffersCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbOckC6FW22pGRloIO6wfzKGKTEJF76ZKZA&usqp=CAU"
     title="Grab upto 40% OFF*" description="on domestic & international flights+hotels for this season's EPIC trips" />
     <OffersCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PpG9Peqz9tVA1fmFWyZDG4RC3UDfBmWuXyLn3qm2JT2PADZB-Wf-JepqJRQusvQ1nco&usqp=CAU"
     title="Welcoming Drukair to the India Skies!" description="Book flights between Delhi/Kolkata and Paro @ upto Rs. 2,000 OFF" />
     <OffersCard image="https://www.tourplan2india.com/wp-content/uploads/2013/01/India_Goa_Arambol_Beach.jpg"
     title="Travel Plans Can Change.We Get it ! " description="Book hotels with no payment now and pay later"/>
     <OffersCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPJySZ8vrOQOtqfwL8Qbzfq0QXwsoTiVJww&usqp=CAU"
     title="Get Your Journey Asuured @ JUST Rs.79*" description="and get claim of up to Rs.3000"/>
     <OffersCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtKWqZeJQ3nYpvRMpt9cbKLufwihX1kBmgEFPIZztwQpTwrWFDeJEgd3UyjxADEEA_-4&usqp=CAU" 
     title="Spice Jet Just Launched" description="Its New Flights !"/>
     </div>

      </div>
      <div className="content1">
        <h2>Handpicked Collections for You</h2>
        <div className="content1_cards">
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLqb0WG34VVgEVEBXgDPIvSnmZbEuyKagP0h1awFptbXzctVu-JAXBq0tMjOp-eyo3LA&usqp=CAU"
            title="Stays in and around Jaipur for a Weekend Gateway"
            description=""
          />
          <Cards
            image="https://i.insider.com/5d38ca7d36e03c5dfa2ed4e3?width=750&format=jpeg&auto=webp"
            title="Stays in and around Delhi for a Weekend Gateway"
            description=""
          />
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OwP3FUI9zeTrdFqb2dz17hLqQjVPPzBeXeUidolrB1qvfpswhGgJR78XJe8PsvA0988&usqp=CAU"
            title="Stays in and around Udaipur for a Weekend Gateway"
            description=""
          />
          <Cards
            image="https://4.bp.blogspot.com/-EMEh1jk_s0Q/T0yfutqyFOI/AAAAAAAABLw/xz0MMVYMIUA/s320/images+%25281%2529.jpg"
            title="Stays in and around Mumbai for a Weekend Gateway"
            description=""
          />
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYdd_TLmsaJ3FmaQNfxJdxlYpPyN6icu_DA&usqp=CAU"
            title="Stays in and around Shimla for a Weekend Gateway"
            description=""
          />
        </div>
      </div>
      <div className="content2">
        <h2>Unlock Lesser-Known Wonders of India</h2>
        <div className="content2_cards">
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0hDyyVCfmI0WYs_p1Ks8cr9QUcOOVlhvazN8874PLgdqEilY3d0o7AfeIuDAwun8z04&usqp=CAU"
            title="Shimla's Best Kept Secret"
            description=""
          />
          <Cards
            image="https://w0.peakpx.com/wallpaper/159/463/HD-wallpaper-hill-station-road-road-nature.jpg"
            title="TamilNadu's Charming Hill Town"
            description=""
          />
          <Cards
            image="https://c4.wallpaperflare.com/wallpaper/676/747/742/village-mountain-village-italy-europe-wallpaper-thumb.jpg"
            title="Quaint Little Hill Station In Gujrat"
            description=""
          />
          <Cards
            image="https://wallpaperaccess.com/full/93178.jpg"
            title="Picturesque Gateway to Himalaya"
            description=""
          />
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLvuUjmmV7reRMsgrBwiX6nPVvwZ-JEx1xw&usqp=CAU"
            title="Hill Retreat in AndhraPradesh"
            description=""
          />
        </div>
      </div>
      <div className="content3">
        <div>
          <h3>Why MakeMy Trip?</h3>
          <p>
            Established in 2000, MakeMyTrip has since positioned itself as one
            of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers. The experience of booking your
            flight tickets, hotel stay, and holiday package through our desktop
            site or mobile app can be done with complete ease and no hassles at
            all. We also deliver amazing offers, such as Instant Discounts, Fare
            Calendar, MyRewardsProgram, MyWallet, and many more while updating
            them from time to time to better suit our customers’ evolving needs
            and demands.
          </p>
        </div>
        <div>
          <h3>Booking Flights with MakeMyTrip</h3>
          <p>
            At MakeMyTrip, you can find the best of deals and cheap air tickets
            to any place you want by booking your tickets on our website or app.
            Being India’s leading website for hotel, flight, and holiday
            bookings, MakeMyTrip helps you book flight tickets that are
            affordable and customized to your convenience. With customer
            satisfaction being our ultimate goal, we also have a 24/7 dedicated
            helpline to cater to our customer’s queries and concerns. Serving
            over 5 million happy customers, we at MakeMyTrip are glad to fulfill
            the dreams of folks who need a quick and easy means to find air
            tickets. You can get a hold of the cheapest flight of your choice
            today while also enjoying the other available options for your
            travel needs with us.
          </p>
        </div>
        <div>
          <h3>Domestic Flights with MakeMyTrip</h3>
          <p>
            MakeMyTrip is India's leading player for flight bookings. With the
            cheapest fare guarantee, experience great value at the lowest price.
            Instant notifications ensure current flight status, instant fare
            drops, amazing discounts, instant refunds and rebook options, price
            comparisons and many more interesting features.
          </p>
        </div>
      </div>
      
      {/* <div className='content5'>

afdd
      </div> */}
    </div>
  );
}

export default Content;
