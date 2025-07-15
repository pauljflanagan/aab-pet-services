import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarAttribute from './teamSidebar';
import Dropdown from 'react-bootstrap/Dropdown';

const OptionDropdown = ({ options }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose Option
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {options.map((option, index) => (
                <Dropdown.Item key={index} href={`#/option-${index}`}>
                    {option}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

const ServicesDisplay = ({ serviceListObj }) => {
    let serviceList = serviceListObj;
    return (
        <div style={{padding: "2rem"}}>
            {Array.from({length: Math.ceil(serviceList.length / 3)}, (_, rowIndex) => (
            <div key={rowIndex} className="d-flex justify-content-evenly" style={{marginBottom: "2rem"}}>
                {serviceList.slice(rowIndex * 3, rowIndex * 3 + 3).map((service, index) => (
                    <div key={rowIndex * 3 + index} style={{width: "30%", margin: "0 1.5%"}}>
                        <div className="card">
                            <div className="card-body" style={{height: "100%"}}>
                                <h2>{service.service}</h2>
                                <h5>{service.animal}</h5>
                                <p>{service.description}</p>
                                {service.bulletPts && service.bulletPts.length > 0 && (
                                    <ul>
                                        {service.bulletPts.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {service.careOptions && service.careOptions.length > 0 && (
                                    <OptionDropdown options={service.careOptions} />
                                )}
                                <p><b>{service.price}</b></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            ))}
        </div>
    )
}

const serviceFilterParams = ['category']
const _FULL_SERVICE_LIST = [
    {
        id: 1,
        category: "Dog",
        service: "Dog Walking",
        description: "Daily dog walking services to keep your furry friend active and happy.",
        careOptions: ['Puppy/Senior Package (2 15 minute visits)', '20 minutes', '40 minutes', '1 hour'],
        bulletPts: ['Add $8 for each additional dog in the household per visit', 'Puppy/Senior Package is for dogs 6 months old and younger, or senior dogs with medical conditions'],
        price: "Priced per visit"
    },
    {
        id: 2,
        category: "Cat",
        service: "Cat Sitting",
        description: "Professional cat sitting services to ensure your feline friend is well cared for.",
        bulletPts: ['Overnight Caregiver Sleepovers available on a limited basis for additional fee',
            'Pricing does not change based on number of cats in the household',
            'If a cat is not interactive (and a special request is not made), visits will end after tasking is complete for the comfort of the cat.'
        ],
        price: "Priced per visit"
    },
    {
        id: 3,
        category: "Dog",
        service: "Dog Sitting",
        description: "Expert dog training services to help your dog learn good behavior.",
        bulletPts: ['Priced as four 20 minute visits per day',
            ' Add $32/day for each additional dog per visit, and $10/day for each additional pet (non-dog) per visit',
            'Overnight Caregiver Sleepovers are also available!'
        ],
        price: "Priced per visit"
    },
    {
        id: 4,
        category: "Other",
        service: "Exotic Pet Sitting/Boarding",
        description: "We are happy to provide pet sitting services to many different exotic species. Due to the variety of their needs, we ask that you contact us to obtain an individualized quote.",
        price: "Contact us for pricing"
    },
    {
        id: 5,
        category: "Gift Certificate",
        service: "Gift Certificate",
        description: "Gift certificates are a great way to avoid the hassle of paying for pet services every week, and they make a great gift for friends and neighbors with pets! Gift certificates can be purchased in any denomination, and they never expire!",
        price: "Contact us for pricing"
    },
    {
        id: 6,
        category: "House",
        service: "House Sitting",
        description: "Our house sitting visits include bringing in the mail, watering plants, checking heat and hot water, and checking that the house is secured.",
        price: "Priced per visit"
    },
    {
        id: 7,
        category: "House",
        service: "Litter Box Maintenance",
        description: "Keep your cat's space clean and safe with our litter box maintenance services. Visits include pickup and removal of all waste in your cat's litter box.",
        price: "Priced per visit"
    },
    {
        id: 8,
        category: "House",
        service: "Yard Waste Cleanup",
        description: "Nobody wants to handle pet waste. Thankfully, that's where we come in. Visits include pickup and disposal of all pet waste in your yard.",
        price: "Priced per visit"
    }

]

const Services = ({ setPageTitle }) => {
    const [serviceList, setServiceList] = React.useState(_FULL_SERVICE_LIST);
    
    useEffect(() => {
        setPageTitle("Services");
    }, []);
    
    return (
        <div>
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{padding: "2rem 2rem 0 2rem"}}>
                    <h1 className="page-heading">Keeping your furry friends</h1>
                    <h1 className="page-heading" style={{paddingBottom: '1rem'}}>happy and healthy</h1>
                    <h3>Note: ABPS adds an additional $10 fee for each visit on bank holidays</h3>
                    <h3 style={{color: "red"}}>Same day cancellation fee is 50% of the full fee</h3>
                </div>
                <div className="d-flex" style={{padding: "2rem 0 0 2rem "}}>
                    <div style={{width: "30%"}}>
                        <SidebarAttribute attribObj={serviceFilterParams} fullList={_FULL_SERVICE_LIST} filterList={serviceList} setFilterList={setServiceList} />
                    </div>
                    <div style={{height: "100%", width: '100%', boxSizing: 'border-box', backgroundColor: '#eaebec'}}>
                        <ServicesDisplay serviceListObj={serviceList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;