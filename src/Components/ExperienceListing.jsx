import { useState } from "react";

const ExperienceListing = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Web Developer",
      description:
        "Our journey in web development is a story of innovation and excellence. With a passion for crafting captivating online experiences, we've honed our skills to deliver websites that not only look stunning but also function seamlessly. We thrive on turning your ideas into dynamic, user-friendly, and high-performance digital solutions.",
      src: "https://th.bing.com/th/id/R.b3532fc42260a3bee28e30bf2e46715c?rik=PYAvlb51kKIMGw&pid=ImgRaw&r=0",
    },
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Digital Marketing",
      description:
        "In the ever-evolving digital landscape, our digital marketing experts are your guides to online visibility and success. With a deep understanding of SEO, social media, content strategy, and online advertising, we help your brand stand out in a crowded digital space. We're dedicated to driving growth and engagement for your business through targeted and data-driven marketing strategies.",
      src: "https://th.bing.com/th/id/OIP.9vx-pfncoq4QX-glAKpkEQHaE8?pid=ImgDet&rs=1",
    },
    {
      date: "-2021 - Present",
      company: "- No Work Yet",
      title: "Backend Developer",
      description:
        "Behind every great website is a robust backend, and that's where our expertise truly shines. Our backend developers are the architects who build the foundation for your online success. They work tirelessly to ensure your web applications run smoothly, securely, and efficiently, handling everything from database management to server-side scripting.",
      src: "https://th.bing.com/th/id/R.feffde8c801baef441ce68c7f1813a82?rik=NodVq3ccLiWiIA&pid=ImgRaw&r=0",
    },
  ];

  const handleClick = (id) => {
    setSelectedId(id);
  };
  const Opener = ({ item, onClose }) => {
    return (
      <div className="experience_detail_container">
        <div className="detail_container">
            <img src={item.src} alt="imgsrc" />
            <p className="title">
              <span>{item.date}</span> <span>{item.company}</span>
            </p>
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
    <div className="anil_aw_experience">
      <div className="size_manager">
        <div className="header">
          <p>-EXPERIENCE</p>
          <h1>Everything about me!</h1>
        </div>
        <div className="aw_experience_listing">
          <ul>
            {items.map((elem, index) => {
              return (
                <li key={index}>
                  <div className="list" onClick={() => handleClick(index)}>
                    <p className="title">
                      <span>{elem.date}</span> <span>{elem.company}</span>
                    </p>
                    <h3>{elem.title}</h3>
                    <p className="description">
                      {elem.description.slice(0, 100).concat("...")}
                    </p>
                    <span className="arrow">&rarr;</span>
                  </div>
                </li>
              );
            })}
          </ul>
          {selectedId !== null && (
            <Opener
              item={items[selectedId]}
              onClose={() => setSelectedId(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceListing;
