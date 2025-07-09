import storyImg from '../public/our-story/dog-photo.png';
import bkgImg from '../public/our-story/bkg-photo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
  backgroundImage: `url(${bkgImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '5%',
};

const GenericCardTable = (sellingPoints) => {
  let sellingPointsMap = sellingPoints['sellingPoints'];

  return (
    <div className="d-flex flex-row justify-content-evenly">
    {Object.entries(sellingPointsMap).map(([title, description]) => (
      <div className="col-md-4 mb-4" style={{width: "25%"}}>
        <div className="card">
          <div className="card-body">
            <h3>{title}</h3>
            <div>
              <p>{description[0]}</p>
              <p>{description[1]}</p>
              {description.length > 2 && (
                <a href={`/${description[2].pgLink}`} className="phone-call-button" style={{paddingLeft: "1rem"}}>
                  {description[2].text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

const sellingPointsObj = {
  'Passionate Walkers': [
    'We only hire employees who have a passion for working with animals to support our mission of providing the highest quality pet care services. Our walkers have a history of working with pets, and many are planning future careers in the animal field.',
    'All of our employees are bonded, insured, vaccinated, and have passed a background check. We take great pride in our work and do everything it takes to ensure that your pets have an amazing time with us.',
    {
      pgLink: 'Team',
      text: 'More about us'}
  ],

  'Flexibility & Convenience': [
    'Here at Above & Beyond Pet Services, we offer flexible scheduling to provide you with a convenient and hassle-free experience every time you choose us for your pet care needs.',
    'We won’t charge extra for the little things, such as weekend visits, medication administration, etc. In addition, we use an online invoice and payment to make things quicker and simpler.',
  ],

  'Schedule an Appointment': [
    'Whether you are going bark to work and need weekly service, or whether you are planning for a family vacation, we are here to help. Please give us a call if you feel our pet sitting company could be a good fit for your family.',
    'We will set up an appointment to meet your pets and you in person and discuss how we can meet your requirements.',
    {
      pgLink: 'Contact',
      text: 'Reach out to us'}
  ],
};

const App = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-evenly" style={{padding: '5%'}}>
        <div className='story-img' style={{padding: '3rem'}}>
          <img src={storyImg} alt='Our Story' />
        </div>
        <div className='display-text'>
          <p>Hello,</p>
          <p>
            My name is Ted Teller, and I founded Above & Beyond Pet Services in
            2012 with one simple belief: pets are family. We’re a dog walking
            and pet sitting company that goes the extra mile to provide
            five-star, professional, and trustworthy care—so you can feel
            completely at ease knowing your pets are in loving hands.
          </p>
          <p style={{ fontWeight: 900 }}>Why choose us?</p>
          <ul>
            <li>
              <b>Trusted in the community</b>: See our reviews! See why our
              clients love us.
            </li>
            <ul>
              <li>
                <a href='https://www.facebook.com/AboveAndBeyondPetServices/reviews/'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://www.google.com/search?b-1-d&q=above+and+beyond+pet+services#lrd=0x89e377f1f7d847ff:0xdf4c65f799fb9296,1,,,,'>
                  Google
                </a>
              </li>
              <li>
                <a href='https://nextdoor.com/pages/above-beyond-pet-services/'>
                  Nextdoor
                </a>
              </li>
              <li>
                <a href='https://www.yelp.com/biz/above-and-beyond-pet-services-belmont'>
                  Yelp
                </a>
              </li>
            </ul>
            <li>
              <b>Passionate, qualified team</b>:
            </li>
            <p className='display-text'>
              Our walkers are carefully selected individuals with proven
              experience and a deep love for animals. Many are even pursuing
              careers in the animal care field. Every team member is bonded,
              insured, and background-checked for your peace of mind. You can
              learn more about them on our Our Team page.
            </p>
            <li>
              <b>Hassle-free experience</b>:
            </li>
            <p className='display-text'>
              We make your life easier by offering flexible scheduling, no extra
              charges for weekend visits or medication administration, and a
              simple online payment system.
            </p>
          </ul>

          <p>
            If you’re looking for a reliable, caring, and professional team to
            take care of your pets, we’d love to meet you!
          </p>
          <p>
            Contact us today to schedule a meet-and-greet and discover how we
            can best serve your family.
          </p>

          <p>Warmly,</p>
          <p>
            Ted Teller
            <br />
            Founder, Above & Beyond Pet Services
          </p>
        </div>
      </div>
      <div style={divStyle}>
        <GenericCardTable sellingPoints={sellingPointsObj} style={{width: "10%"}}/>
      </div>
      {/* <div style={divStyle}>
        <div className='container mt-5'>
          <div className='row'></div>
          <SellingPointCardTable sellingPoints={sellingPointsObj} />
        </div>
      </div> */}
    </div>
  );
};

export default App;
