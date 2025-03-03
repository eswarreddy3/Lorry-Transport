import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about');
  };
  return (
    <>

      <div className="App">

      <div className="container">
        <div className="container-topp"></div>
        <div className="column-left">
          <h1 className='headHome'>SRI SAI TEJASWI <br/> Lorry Transportation <br/> Partner For Safe Deliveries</h1>
          <p>Rely on our dependable lorry transportation to ensure that your goods are delivered safely and on time, no matter the distance.</p>
          
          <button onClick={goToAboutPage}>Explore Our Story</button>
        </div>
        <div className="column-right">
            <img src="assets/4.png" alt="Logo Image" className="main-img" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
