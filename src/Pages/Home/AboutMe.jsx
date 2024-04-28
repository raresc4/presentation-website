export default function AboutMe() {
    return (
        <section id="aboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/rarescatana_resized.jpg" alt="AboutMe"></img>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section-description">Passionate and driven first-year student at the Faculty of Automation and Computers, Timisoara, with a strong foundation in programming languages such as C and Python. Eager to leverage academic knowledge and practical skills to contribute effectively to innovative projects and challenges in the field of computer science.</p>
                </div>
                <a href="./img/clean28aprilie.pdf" download="clean25aprilie.pdf">
                    <div className="magic-button">
                    <button className="btn btn-primary">Download CV</button>
                    </div>
                </a>
            </div>
        </section>
    )
}