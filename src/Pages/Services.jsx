import React,{useState} from 'react'

const Services = () => {
    const [selectedId, setSelectedId] = useState(null);

    const data = [
        {
            title:'Web Design',
            description:'Our web design services are the creative heartbeat of your online presence. Our talented designers blend aesthetics with functionality to craft visually stunning websites that captivate your audience. From user-friendly navigation to responsive layouts, we ensure that your website not only looks fantastic but also delivers an exceptional user experience. Let us transform your ideas into a captivating digital reality.',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },
        {
            title:'Backend Development',
            description:'Behind every great website is a powerful backend, and thats where our expertise shines. Our backend development team engineers robust, efficient, and scalable systems that make your website work seamlessly. From database management to server-side scripting, we ensure that your web application runs smoothly, allowing you to focus on your business while we handle the technical heavy lifting.',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },
        {
            title:'Project Management',
            description:'Our project management services are the compass that guides your web development journey. We take your vision and turn it into a structured plan, coordinating all aspects of the project, from inception to delivery. With a keen eye on timelines, budgets, and quality, we ensure that your project progresses smoothly, keeping you informed every step of the way. Relax, knowing your project is in expert hands.',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },{
            title:'Web Development',
            description:'Building exceptional websites is our passion. Our web development services encompass a wide range of technologies and expertise to bring your online vision to life. Whether its an e-commerce platform, a content management system, or a custom web application, we\'ve got you covered. We take your ideas and turn them into fully functional, high-performance websites that drive results for your business. Your web success starts here.',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        }
    ]
    const handleClick = (id) => {
      setSelectedId(id);
    };
    const Opener = ({ item, onClose }) => {
      return (
        <div className="experience_detail_container services_detail_container">
          <div className="detail_container">
              <img src={item.src} alt="imgsrc" />
              <h3>{item.title}</h3>
              <span className="closebutton" onClick={onClose}>
                &#10006;
              </span>
              <p className="description">{item.description}</p>
            </div>
          </div>
      );
    };
  return (
    <div className="services_aw_container">
        <div className="size_manager" id='services'>
        <div className="header">
            <p>-SERVICES</p>
            <h1>My Services</h1>
            <span onClick={()=>window.location.href = 'mailto:anil.wagle808@gmail.com'}>anil.wagle808@gmail.com</span>
        </div>
        <div className="aw_experience_listing services_listing">
            <ul>
                {data.map((elem,index)=>{
                    return(
                        <li key={index}>
                        <div className="list" onClick={() => handleClick(index)}>
                          <h3>{elem.title}</h3>
                          <p className="description">
                            {elem.description.slice(0, 80).concat("...")}
                          </p>
                          <span className="arrow">Read More&rarr;</span>
                        </div>
                      </li>
                    )
                })}
            </ul>
            {selectedId !== null && (
            <Opener
              item={data[selectedId]}
              onClose={() => setSelectedId(null)}
            />
          )}
        </div>
        </div>
    </div>
  )
}

export default Services