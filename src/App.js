import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const activities = [
    {
      id: 1,
      name: "Forest hiking route",
      description: "Explore the local forests at your own pace and discover nature and wildlife.",
      price: 5,
      media: {
        video: {
          src: "/media/VideoPromo.mp4",
          description: "Video showing what you can find over the routes.",
        },
        audio: {
          src: "/media/Enviorment.mp3",
          description: "Audio of what you can hear while hiking.",
        },
      },
    },
    {
      id: 2,
      name: "Visit the local church",
      description: "Explore the historical church and learn about its architecture and history. This church was dedicated to Santa Maria.",
      price: 20,
      media: {
        image: {
          src: "/media/esglesiaDavant.jpeg",
        },
      },
    },
    {
      id: 3,
      name: "Observation of rabbits",
      description: "You can observe wild rabbits in the different rabbit shelters around the village.",
      price: 9,
      media: {
        image: {
          src: "/media/Conills.jpg",
        },
      },
    },
    {
      id: 4,
      name: "Overnight Stay and Activities at Can Maiol",
      description: "Can Maiol is a family-friendly residential centre where you can stay overnight and take part in a variety of activities.",
      price: 50,
      media: {
        image: {
          src: "/media/canMaiol.jpg",
        },
      },
    },
    {
      id: 5,
      name: "Observation of foxes",
      description: "You can observe wild foxes at a specific landmark.",
      price: 20,
      media: {
        image: {
          src: "/media/Guilla.jpg",
        },
      },
    },
    {
      id: 6,
      name: "Observation of Tawny owl",
      description: "You can observe tawny owls around the town.",
      price: 12,
      media: {
        image: {
          src: "/media/Mussol.jpg",
        },
      },
    },
    {
      id: 7,
      name: "Saty in Mas Garriga",
      description: "Mas Garriga is a medieval farmhouse set among cultivated fields and forests of holm oaks and oaks.",
      price: 45,
      media: {
        image: {
          src: "/media/MasGarriga.jpg",
        },
      },
    },
  ];

  const addToCart = (activity) => {
    if (!cart.find((item) => item.id === activity.id)) {
      setCart([...cart, activity]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="page-background" style={{ backgroundImage: "url(/media/header.jpg)" }}>
      <div className="overlay">

        {/*Navigation bar*/}
        <nav className="navbar">
          <span className="site-title">Sant Andreu Salou</span>
          <div className="navbar-right">
            <a href="#inici">Home</a>
            <a href="#imatge">Town&apos;s History</a>
            <a href="#activitats">Activities</a>
          </div>
        </nav>

        <div className="container">

          <header className="header" id="inici">
            <h1>Sant Andreu Salou</h1>
          </header>

          {/*History section*/}
          <section className="section" id="imatge">
            <h2>Town&apos;s History</h2>

            <div className="history-content">
              <img src="/media/Presentacio.png" alt="Sant Andreu Salou" className="history-image"/>

              <div className="history-text">
                <p>
                  Sant Andreu Salou is a village in the province of Girona in the
                  autonomous community of Catalonia, Spain. The municipality covers 
                  an area of <b>5.98 square kilometres</b>.
                </p>

                <p>
                  In Sant Andreu Salou, remains from the <b>Middle</b> and <b>Upper Paleolithic</b> periods have been found, 
                  although no major archaeological sites have been discovered. During Roman times, there were 
                  two <b>Roman villas</b>: one known as <i><b>Vilauba</b></i>, located in what is now the neighborhood of <i><b>Les Bosques</b></i>, 
                  and another situated in the <i><b>Lower Neighborhood</b></i>.
                </p>

                <p>
                  Sant Andreu Salou experienced significant growth during the Middle Ages. At that time, it was 
                  an <a href="https://en.wikipedia.org/wiki/Allodial_title">allodial estate</a> dependent on the monastery of <i><b>Sant Pere de Galligants</b></i>. A group of houses grew up 
                  around the church, forming a <i>cellera</i> (a medieval enclosed area), which has since disappeared. The 
                  village once had around 700 inhabitants, but population decline began due to outbreaks of plague 
                  and later the effects of the Industrial Revolution. 
                </p>

                <p>
                  There was also a <b>convent</b> and a <b>fortified farmhouse with a tower</b>, whose existence is known thanks to 
                  foundations uncovered during renovation works. <i><b>Can Maiol</b></i>, where activities can be carried out today, 
                  originally served as a <b>military barracks</b>. In a field above <i><b>Can Maiol</b></i>, evidence of 
                  the <a href="https://en.wikipedia.org/wiki/War_of_the_Pyrenees">War of the Pyrenees</a> 
                  (<a href="https://en.wikipedia.org/wiki/Napoleonic_Wars">Napoleonic War</a>) has been found, including remains of cannon projectiles.
                </p>

                <p>
                  Documents from the <b>10th century</b> mention the village church, indicating that it predates that century. 
                  In the <b>15th century</b>, a series of earthquakes caused the church to collapse, and it was later rebuilt 
                  in the <b>early 18th century</b>. During the <a href="https://en.wikipedia.org/wiki/Spanish_Civil_War">Spanish Civil War</a>, 
                  the church was filled with gasoline barrels and used as an ammunition depot; marks from this period are still visible today.
                </p>
                  
                <p>
                  Originally, the village was built around a <b>rainwater pond</b>, located where <b>the main village square</b> now stands.
                </p>
              </div>
            </div>
          </section>


          {/*Activities section*/}
          <section className="section" id="activitats">
            <h2>Tourist Activities</h2>

            <div className="activities-holder">

              <div className="activities">
                {activities.map((activity) => (
                  <div key={activity.id} className="activity-card">
                    <h3>{activity.name}</h3>

                    <p className="activity-description">
                      {activity.description}
                    </p>

                    {activity.media?.video && (
                      <>
                        <video controls>
                          <source src={activity.media.video.src} type="video/mp4"/>
                        </video>
                        <p className="media-description">
                          {activity.media.video.description}
                        </p>
                      </>
                    )}

                    {activity.media?.audio && (
                      <>
                        <audio controls>
                          <source src={activity.media.audio.src} type="audio/mpeg"/>
                        </audio>
                        <p className="media-description">
                          {activity.media.audio.description}
                        </p>
                      </>
                    )}

                    {activity.media?.image && ( <img src={activity.media.image.src} alt={activity.name}/> )}

                    <p className="price">{activity.price} €</p>

                    <button onClick={() => addToCart(activity)}>Add</button>
                  </div>
                ))}
              </div>

              <aside className="cart-sidebar">
                <h3>Cart</h3>

                {cart.length === 0 ? (
                  <p>No activities selected</p>
                ) : (
                  <>
                    <ul className="cart-list">
                      {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                          <span>
                            {item.name} – {item.price} €
                          </span>
                          <button onClick={() => removeFromCart(item.id)}>
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="cart-total">
                      <strong>Total:</strong> {totalPrice} €
                    </div>
                  </>
                )}
              </aside>

            </div>
          </section>

          <footer className="footer">
            <p>Tourism Promotion Web Page Project</p>
            <p>Èric Luzón Pujol - u1994929</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
