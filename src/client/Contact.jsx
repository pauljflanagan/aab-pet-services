import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const allLocations = [
  '',
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
];
function Contact({ setPageTitle }) {
  useEffect(() => {
    setPageTitle('Contact Us');
  }, []); // Empty dependency array - runs only once on mount
  return (
    <div className='container justify-content-evenly'>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or would like to schedule an appointment,
        please reach out to us.
      </p>
      <form style={{ paddingBottom: '2rem' }}>
        <input
          type='text'
          className='form-control mb-3'
          placeholder='Your Name'
          required
        />
        <input
          type='email'
          className='form-control mb-3'
          placeholder='Your Email'
          required
        />
        <input
          type='phone'
          className='form-control mb-3'
          placeholder='Your Phone Number'
          required
        />
        <select className='form-control mb-3'>
          {allLocations.map((location, index) => {
            return (
              <option key={index} value={location}>
                {location}
              </option>
            );
          })}
        </select>
        <textarea
          className='form-control mb-3'
          placeholder='Your Message'
          rows='4'
          required
        ></textarea>
        <button
          type='submit'
          className='btn btn-primary justify-content-center'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;
