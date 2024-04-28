export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content-box">
            <div className="hero--section-content">
                <p className="section--title">Hi, my name is</p>
                <h1 className="hero--section--title">
                    <span className="hero-section--title--color">Catană Rareș-Alexandru</span>{""}
                    <br />
                </h1>
                <p className="hero--section--description">
                    First year computer science student
                    <br /> at the Polytehnic University of Timisoara.
                </p>
            </div>
        </div>
        <div className="hero--section--img">
            <img src = "./img/hero_img3.jpg" alt="Hero section" />
        </div>
      </section>  
    );
}