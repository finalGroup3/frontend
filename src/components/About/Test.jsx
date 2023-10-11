import React, { useState, useEffect } from 'react';
import './test.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
function About() {
    const reviews = [
        {
            id: 1,
            name: 'Shihab eshtaiwi',
            job: 'Senior Instructor',
            img:
                'https://ca.slack-edge.com/TNGRRLUMA-UPRCC16QP-c23a216df82e-512',
            text:
                " I booked a table at this restaurant for a special anniversary dinner, and it exceeded all expectations. The ambiance was romantic, the food was exquisite, and the service was top-notch. A truly memorable experience ",
        },
        {
            id: 2,
            name: 'Lama Ali',
            job: 'Sales Representative',
            img:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
                " I took a guided tour of the city's historic landmarks through this website, and it was fantastic. Our guide was knowledgeable, and we got to see all the must-visit places. I'll definitely book more activities through this platform. ",
        },
        {
            id: 3,
            name: 'Hayyan Isam',
            job: 'Tour Guide',
            img:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
                ' We stayed at this charming bed and breakfast during our weekend getaway. The cozy atmosphere and homemade breakfast made our stay delightful. The innkeeper was warm and welcoming. Cant wait to return! ',
        },
        {
            id: 4,
            name: 'Isam Faraj',
            job: 'Business Owner',
            img:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
                ' We dined at this restaurant for a business meeting, and it was a hit with our clients. The private dining area was ideal for our needs, and the menu had something for everyone. Exceptional service and a great atmosphere. ',
        },
    ];

    const [currentItem, setCurrentItem] = useState(0);
    const [img, setImg] = useState('');
    const [author, setAuthor] = useState('');
    const [job, setJob] = useState('');
    const [info, setInfo] = useState('');

    useEffect(() => {
        showPerson();
    }, [currentItem]);

    const showPerson = () => {
        const item = reviews[currentItem];
        setImg(item.img);
        setAuthor(item.name);
        setJob(item.job);
        setInfo(item.text);
    };

    const prevPerson = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? reviews.length - 1 : prevItem - 1));
    };

    const nextPerson = () => {
        setCurrentItem((prevItem) => (prevItem === reviews.length - 1 ? 0 : prevItem + 1));
    };

    const randomPerson = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setCurrentItem(randomIndex);
    };

    return (
        <div className='shihabrev'>


        <div className='revvv'>


        <div className="conntainer">
            <div className="title">
            </div>

            <article className="review">
                <div className="img-container">
                    <img src={img} id="person-img" alt="" />
                </div>
                <h4 id="author">{author}</h4>
                <p id="job">{job}</p>
                <p id="info"><FontAwesomeIcon icon={faQuoteRight} />{info}<FontAwesomeIcon icon={faQuoteLeft} /></p>

                <div className="button-container">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FontAwesomeIcon icon={faSortUp} rotation={270} />          </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FontAwesomeIcon icon={faSortUp} rotation={90} />
                    </button>
                </div>
            
            </article>
        </div>
        </div>
        </div>

    );
}

export default About;
