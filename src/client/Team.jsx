import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SidebarAttribute from "./teamSidebar";
import tedImg from "../public/profile-photos/ted.webp";
import RachelImg from "../public/profile-photos/rachel.webp";
import SarahImg from "../public/profile-photos/sarah.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamSortBy = (sortAttrList) => {
    return (
        <div>
            <Dropdown style={{width: "100%"}}>
                <Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">
                    Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" active>Name</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Care Role</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

const TeamListDisplay = (teamListObj) => {
    let teamList = teamListObj.teamList;
    return (
        <div>
            <div className="d-flex flex-wrap flex-row-reverse" style={{padding: "2rem 2rem 0 2rem"}}>
                <TeamSortBy />
            </div>
            <div className="d-flex flex-wrap justify-content-evenly" style={{padding: "2rem"}}>
                {teamList.map((member, index) => (
                    <div className="align-items-center col-md-4 mb-4" key={index} style={{width:"25%"}}>
                        <div className="card">
                            <img src={member.imageUrl} alt={member.name} className="card-img-top" />
                            <div className="card-body">
                                <h2>{member.name}</h2>
                                <h5>{member.jobTitle}</h5>
                                <p>{member.location}</p>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Team({ setPageTitle }) {
    const _FULL_LIST = [
    {
        id: 1,
        name: "Ted Teller",
        jobTitle: "Founder",
        location: "Belmont",
        careRole: "Lead",
        imageUrl: tedImg,
        bio: "Ted is the founder and owner of Above & Beyond Pet Services, a company he launched in 2012 to combine his passion for animals with his background in healthcare client service management. His journey into animal care began in 2005, fostering homeless pets through the MSPCA, and evolved into a mission to create a pet care service rooted in reliability, compassion, and community connection. Ted is dedicated to delivering exceptional customer service, building lasting relationships with both clients and their pets, and staying actively involved in the local communities he serves. His commitment to doing what’s right and going the extra mile is at the heart of everything Above & Beyond represents.",
        },
    {
        id: 2,
        name: "Rachel",
        jobTitle: "General Manager, Belmont",
        location: "Belmont",
        careRole: "Lead",
        imageUrl: RachelImg,
        bio: "Rachel has loved animals her entire life and shares her home with her adorable cats. What began as a personal passion turned into a professional calling—Rachel spent years working as a Veterinary Technician and has now been a dedicated member of Above & Beyond Pet Services for over a decade. As the leader of our Belmont chapter, Rachel brings not only experience and knowledge but also warmth and unwavering support to every pet, client and caregiver she works with. Her caring nature and deep love for animals shine through in everything she does.",
    },
    {
        id: 3,
        name: "Sarah",
        jobTitle: "General Manager, Arlington",
        careRole: "Lead",
        location: "Arlington",
        imageUrl: SarahImg,
        bio: "Sarah has had a lifelong passion for animals—starting with taking over her brother’s pets, from cats and mice to catfish and even sharks! In high school, she began pet sitting for friends and quickly realized that working with animals was her true calling. Sarah earned her Bachelor's degree in Veterinary Technology from Mount Ida College. Sarah found her stride in daycare management and dog training, discovering a deep passion for helping behaviorally challenged dogs thrive. Today, Sarah leads the Arlington Chapter of Above & Beyond Pet Services, where her compassion, leadership, and love of helping animals (and their people!) shine through in all she does. While she doesn’t currently have a dog of her own, she shares her home with the big personality of her cat Cosmo.",
    }
    ]
    const [teamList, setTeamList] = useState(_FULL_LIST);
    const filterParams = ['location', 'name'];
    
    useEffect(() => {
        setPageTitle("Team");
    }, []);
    
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{padding: "2rem 2rem 0 2rem"}}>
                <h1 className="page-heading">Meet our compassionate &</h1>
                <h1 className="page-heading">Responsible pet care staff</h1>
            </div>
            <div className="d-flex" style={{padding: "2rem"}}>
                <div style={{width: "100%", paddingTop: "2rem"}}>
                    <SidebarAttribute attribObj={filterParams} fullList={_FULL_LIST} filterList={teamList} setFilterList={setTeamList} style={{width: "50%"}}/>
                </div>
                <div>
                    <TeamListDisplay teamList={teamList} />
                </div>
            </div>
        </div>
    )
}

export default Team;