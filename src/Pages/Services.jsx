import React,{useState} from 'react'

const Services = () => {
    const [selectedId, setSelectedId] = useState(null);

    const data = [
        {
            title:'Web Design',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur sunt, ipsam cupiditate eaque nemo enim corrupti eveniet, vero vitae cum assumenda, sapiente at velit nobis placeat fugit ratione veniam!',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },
        {
            title:'Backend Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur sunt, ipsam cupiditate eaque nemo enim corrupti eveniet, vero vitae cum assumenda, sapiente at velit nobis placeat fugit ratione veniam!',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },
        {
            title:'Project Management',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur sunt, ipsam cupiditate eaque nemo enim corrupti eveniet, vero vitae cum assumenda, sapiente at velit nobis placeat fugit ratione veniam!',
            src:'https://th.bing.com/th/id/OIP.GJO4_oO1hvYNIJswPbY4twHaEK?pid=ImgDet&rs=1'
        },{
            title:'Web Development',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur sunt, ipsam cupiditate eaque nemo enim corrupti eveniet, vero vitae cum assumenda, sapiente at velit nobis placeat fugit ratione veniam!',
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
            <span>anil.wagle808@gmail.com</span>
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