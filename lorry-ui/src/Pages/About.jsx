import '../Styles/About.css'


function About(){
    return(
        <>
            <p>1</p> 
            {/* <div className="container-top"></div> */}
            <div className="aboutPage">
                <div className="container py-5">
                    <div className="text-center">
                        <h1 className="headabout display-4 fw-bold">About Us</h1>
                        <p className="pabout lead mt-3">
                            Since 2012, SSTLS (Sri Sai Transport Lorry Services) has been dedicated to providing efficient and reliable goods transportation across Andhra Pradesh. Our fleet of 20 well-maintained lorries, coupled with a professional and experienced team, ensures that your goods are delivered safely and on time.
                        </p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 mb-4">
                            <div className="card text-white shadow-sm h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Our Mission</h3>
                                    <p className="card-text">
                                    At SSTLS, our mission is to deliver excellence in transportation services by prioritizing customer satisfaction, operational efficiency, and environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card text-white shadow-sm h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Our Vision</h3>
                                    <p className="card-text">
                                    To become the most trusted lorry transportation service in Andhra Pradesh by embracing innovation and maintaining high standards of service quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h2 className="headabout fw-bold">Why Choose Us?</h2>
                            <p className="pabout mt-3">
                            With over 13 years of experience, a modern fleet of lorries, and a team committed to timely delivery, SSTLS ensures the highest level of service for our customers. Let us handle your logistics while you focus on your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About