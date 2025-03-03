import '../Styles/Footer.css';

function Footer() {
    return (
      <>
          <footer className="text-muted pt-2 bg-light">
            <div className="container d-flex justify-content-between">
                <p className="Rights">© 2024 Sri Sai Tejaswi Lorry Transport - All Rights Reserved.</p>
                <p className="Eswar">
                    Developed and maintained by <br />
                    <a href="https://eswarreddy.in" target="_blank" rel="noopener noreferrer">
                        <img src="assets/erlogo.png" alt="Eswar Reddy" className="eswarimg" />
                    </a>
                </p>
            </div>
          </footer>
      </>
    );
  }

export default Footer