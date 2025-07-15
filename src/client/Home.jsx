import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import goldenImg from '../public/home-photos/Hero-3-1.png';
import orangeCatImg from '../public/home-photos/cat-bkgd.webp';
import tiltedHeadImg from '../public/home-photos/dog-side-head-tilt.webp';
import awardsList from './awardsIndex.jsx';
import reviewImg from '../public/home-photos/dog-review.webp';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function Home({ setPageTitle, setLogin, setUsername, isLogin, username }) {
  
  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  const divStyle = {
    backgroundImage: `url(${orangeCatImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '10%',
    width: '100%',
  };
  const _ALL_LOCATIONS = [
    'Arlington',
    'Auburndale',
    'Belmont',
    'Cambridge (Alewife)',
    'Lexington',
    'Medford',
    'Newton Corner',
    'Newtonville (Com Av towards Watertown only)',
    'Nonantum',
    'Waltham',
    'Watertown',
    'West Newton',
    'Winchester',
  ]
  const _ALL_CHOICE_REASONS = [
    {
        id: 1,
        reason: "Award Winning 5-Star Service",
        description: "We uphold a strong reputation for customer service and are always ready to go that extra mile to meet and exceed your expectations."
    },
    {
        id: 2,
        reason: "Personalized Care",
        description: "We focus on individualized care and attention during visits rather than impersonal pack walks."
    },
    {
        id: 3,
        reason: "Bonded & Insured",
        description: "All our employees are bonded, insured and have passed a full background check."
    }
  ]
  const _CLIENT_TESTIMONIALS = [
    {
        id: 1,
        name: "Gary C.",
        source: "Yelp",
        review: "Do you have a dog? Do you love your dog? You should have already called up A&BPS because they are the best in the walking business."
    },
    {
        id: 2,
        name: "Patrick B.",
        source: "Google",
        review: "Getting a puppy, particularly as someone who works during the day and has to travel some, can be very stressful. A&BPS took all of that stress away. It was so nice knowing he is well cared after by people who love dogs and treat caring for him as more than just a business transaction."
    },
    {
        id: 3,
        name: "Deb W.",
        source: "Facebook",
        review: "I called A&BPS, got an appointment the next day for an interview and they started walking my 2 dogs the next day. They are reliable, and well organized, and I thank them greatly for the ability to deal with last-minute emergencies I may have."
    },
    {
        id: 4,
        name: "Danielle R.",
        source: "Yelp",
        review: "Whether [we're gone] for two weeks or two nights, the team always makes sure to send a daily email update with photos and consistently follows our care instructions."
    }
  ]
  
  const ReviewCarousel = ({ testimonials }) => {
    return (
        <Carousel style={{ paddingBottom: '5%' }}>
            {testimonials.map((reason, index) => (
                <Carousel.Item key={reason.id}>
                    <div className="text-slide" style={{ padding: '2rem', textAlign: 'center' }}>
                        <p className="display-text" style={{ fontSize: 20 }}>{reason.review}</p>
                        <p className="display-text" style={{ fontSize: 20 }}>{`~ ${reason.name} from ${reason.source}`}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
  }

  const ChoiceReasonCards = ({ reasons }) => {
    return (
      <div className="d-flex flex-wrap justify-content-evenly">
        {reasons.map((reason) => (
          <div key={reason.id} className="card m-2" style={{ width: '25rem' }}>
            <div className="card-body">
              <h1 className="card-title" style={{ fontSize: '7em', color: '#eaebec' }}>
                <b>0{reason.id}</b>
              </h1>
              <h3 className="card-title">{reason.reason}</h3>
              <p className="card-text">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  const AwardsCards = ({ awards }) => {
    return (
      <div className="d-flex flex-wrap justify-content-evenly">
        {awards.map((award, index) => (
          <div key={index} className="card m-2" style={{ width: '13rem' }}>
            <div className="card-body">
              <img src={award.imageUrl} alt={award.altText} style={{width: "100%"}}/>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex flex-wrap justify-content-evenly'>
        <div style={{ width: '50%', padding: '2rem' }}>
          <p className='display-text' style={{ fontSize: 20 }}>
            Since 2012, Above & Beyond Pet Services has proudly provided
            trusted, year-round care for pets and homes—365 days a year. From
            dog walking and cat sitting to pet waste cleanup, litter box care,
            and house sitting, we’re here to help make life easier for you and
            happier for your pets.
          </p>
          <p className='display-text' style={{ fontSize: 20 }}>
            Our dedicated team treats every pet like family, delivering
            dependable, compassionate care that gives you true peace of mind—no
            matter the season.
          </p>
          <p className='display-text' style={{ fontSize: 20 }}>
            <b>What Can We Do To Help?</b>
          </p>
          <Link
            to='/Contact'
            className='phone-call-button '
            style={{ width: '30%', height: '4rem', textDecoration: 'none' }}
          >
            <p
              className='display-text justify-content-center align-items-center'
              style={{ fontSize: 20, color: 'white', paddingTop: '1rem' }}
            >
              <b>Get in touch</b>
            </p>
          </Link>
          <p
            className='display-text'
            style={{ fontSize: 20, paddingTop: '20%' }}
          >
            <b>
                <i>
                    Now accepting Clients In Arlington, Auburndale, Belmont, Cambridge
                    (Alewife), Lexington, Medford, Newton, Newton Corner, Newtonville,
                    Nonantum, Waltham, Watertown, West Newton & Winchester
                </i>
            </b>
          </p>
        </div>
        <div style={{ width: '50%' }}>
          <img
            src={goldenImg}
            alt='Golden Retriever'
            className='img-fluid'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <div
        className='d-flex flex-wrap align-items-center justify-content-evenly'
        style={divStyle}
      >
        <div className='d-flex flex-column align-items-center justify-content-center' style={{paddingLeft: '40%'}}>
            <h1 style={{ fontSize: '3em'}}>
              <b>Reliable Pet Care Services in Middlesex County, MA</b>
            </h1>
            <p className='display-text' style={{ fontSize: 20 }}>Need high-quality, compassionate care for your pet while you are away? Look no further! Trust the trained and dedicated pet care professionals at Above & Beyond Pet Services to pamper your four-legged friend.</p>
            <p className='display-text' style={{ fontSize: 20 }}>Established in 2012, we are a local pet care business specializing in pet sitting and dog walking services in Middlesex County, Massachusetts. We help the families with their daily pet care needs in the following areas:</p>
            <div className="d-flex flex-wrap justify-content-evenly" style={{width: "100%", paddingTop: '2rem'}}>
                <ul style={{listStyle: 'none', paddingLeft: '0.5rem'}}>
                    {_ALL_LOCATIONS.splice(0, ((_ALL_LOCATIONS.length / 2) - 1)).map((location, index) => (
                        <li key={index} className='display-text' style={{ fontSize: 20, paddingBottom: "1rem" }}>
                          <i className="bi bi-geo-alt-fill" style={{paddingRight: "0.5rem"}}/>
                          {location}
                        </li>
                    ))}
                </ul>
                <ul style={{listStyle: 'none', paddingLeft: '0.5rem'}}>
                    {_ALL_LOCATIONS.splice((_ALL_LOCATIONS.length / 2)).map((location, index) => (
                        <li key={index} className='display-text' style={{ fontSize: 20, paddingBottom: "1rem" }}>
                          <i className="bi bi-geo-alt-fill" style={{paddingRight: "0.5rem"}}/>
                          {location}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly" style={{padding: '5%'}}>
            <div className='d-flex flex-column justify-content-center' style={{width: '50%'}}>
                <h1 style={{ fontSize: '3em', paddingBottom: '2rem' }}>
                    <b>What We Offer</b>
                </h1>
                <p className='display-text' style={{ fontSize: 20 }}>
                    If you need help with your pet's care, let us lend a hand and have the peace of mind to focus on your daily schedule. Our comprehensive pet care service packages include walking, exercise, feeding, medications, litter cleaning, and more.
                </p>
                <p className='display-text' style={{ fontSize: 20, paddingBottom: "2rem" }}>
                    We understand that each pet’s needs are unique and have the know-how to handle all dog and cat breeds, including exotic ones. Our goal is to keep your furry companion safe, healthy, and happy.
                </p>
                <div className="d-flex align-items-center phone-call-button" style={{flexDirection: 'row', paddingLeft: "1rem"}}>
                    <Link to={`/Services`}>
                        <p className='display-text justify-content-center align-items-center' style={{ fontSize: 20, color: 'white' }}>
                            <b>Explore Our Services</b>
                        </p>
                    </Link>
                </div>
            </div>
            <img
                src={tiltedHeadImg}
                alt='Golden Retriever'
                className='img-fluid'
                style={{paddingLeft: '5rem'}}
            />
        </div>
        <div style={{backgroundColor: '#eaebec', width: '100%', padding: '5%'}}>
            <h1 style={{ fontSize: '3em', textAlign: 'center', padding: '5%' }}>Why Choose Us</h1>
            <ChoiceReasonCards reasons={_ALL_CHOICE_REASONS} />
            <AwardsCards awards={awardsList} />
        </div>
        <div className="d-flex flex-wrap align-items-center" style={{padding: '5%'}}>
            <img
                src={reviewImg}
                alt="Dog in the woods"
                className='img-fluid'
                style={{ paddingLeft: '5rem'}}
            />
            <div className='d-flex flex-column align-items-center justify-content-center' style={{width: '50%', paddingLeft: '5%'}}>
                <h1 style={{ fontSize: '3em', textAlign: 'center', padding: '5%' }}>Client Testimonials</h1>
                <ReviewCarousel testimonials={_CLIENT_TESTIMONIALS} />
            </div>
            
        </div>
        <div style={{paddingBottom: '5%'}}>
            <div className="d-flex flex-row align-items-center phone-call-button" style={{padding: '1rem'}}>
                <Link to={`/Story`} style={{textAlign: 'center'}}>
                    <p className='display-text justify-content-center align-items-center' style={{ fontSize: 20, color: 'white'}}>
                        <b>How We Evolved</b>
                    </p>
                </Link>
            </div>
        </div>
    </div>
  );
}
