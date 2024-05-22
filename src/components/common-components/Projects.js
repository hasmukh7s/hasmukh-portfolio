import Section_heading from "./Section_heading";
import Web_developement from '../../images/highlights/web-developement.png';
import hasWebsite from '../../images/projects/has-website.png';
import hasWebsiteReact from '../../images/projects/has-website-react.png';
import Cross_browser from '../../images/highlights/cross-browser.png';
import reactsignupflow from '../../images/projects/react-signupflow.png';
import browserstore from '../../images/projects/browserstore.png';
import employee from '../../images/projects/employee.png';
import weather from '../../images/projects/weather.png';
import lifestore from '../../images/projects/life-store.png';



function Projects() {
    return (
        <>
            <section className="projects gp bg-white">
                <div className="container">
                    <Section_heading
                        heading='My works'
                        subHeading='All Projects'
                    />
                    <div className="highlights-inner d-flex justify-space-between">

                        <div className="item bg-white text-center d-flex justify-space-between">

                            <a target="_blank" href="https://pekskumar.github.io/cart-react/" class="screen">
                                <img className="pro-react" src={lifestore} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Life Store</h3>
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <a className="primary-btn" target="_blank" href="https://pekskumar.github.io/cart-react/">Visit App</a>
                                </ul>
                            </div>

                        </div>

                        {/* <div className="item bg-white text-center d-flex justify-space-between">

                            <a target="_blank" href="https://pekskumar.github.io/hasmukh-LoginFlow/" class="screen">
                                <img className="pro-react" src={reactsignupflow} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Login Flow</h3>
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>Tailwind</li>
                                    <li>JavaScript</li>
                                    <a className="primary-btn" target="_blank" href="https://pekskumar.github.io/hasmukh-LoginFlow/">Visit App</a>
                                </ul>
                            </div>

                        </div> */}

                        {/* <div className="item bg-white text-center d-flex justify-space-between flex-raw-reverse">

                            <a target="_blank" href="https://pekskumar.github.io/Hasmukh_Browser_Datastore/" class="screen">
                                <img className="pro-react" src={browserstore} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Browser Datastore</h3> 
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>React Bootstrap</li>
                                    <li>JavaScript</li>
                                    <a className="primary-btn" target="_blank" href="https://pekskumar.github.io/Hasmukh_Browser_Datastore/">Visit App</a>
                                </ul>
                            </div>

                        </div> */}

                        {/* <div className="item bg-white text-center d-flex justify-space-between">

                            <a target="_blank" href="https://pekskumar.github.io/Hasmukh_Manage_Employees/" class="screen">
                                <img className="pro-react" src={employee} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Manage_Employees</h3> 
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>React Bootstrap</li>
                                    <li>JavaScript</li>
                                    <a className="primary-btn" target="_blank" href="https://pekskumar.github.io/Hasmukh_Manage_Employees/">Visit App</a>
                                </ul>
                            </div>

                        </div> */}

                        {/* <div className="item bg-white text-center d-flex justify-space-between flex-raw-reverse">

                            <a target="_blank" href="https://pekskumar.github.io/Hasmukh_Weather/" class="screen">
                                <img className="pro-react" src={weather} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Weather</h3> 
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <a className="primary-btn" target="_blank" href="https://pekskumar.github.io/Hasmukh_Weather/">Visit App</a>
                                </ul>
                            </div>

                        </div> */}

                        {/* <div className="item bg-white text-center d-flex justify-space-between flex-raw-reverse">
                            <a target="_blank" href="https://pekskumar.github.io/Has-Websites/" class="screen">
                                <img  src={hasWebsite} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Project 2</h3> 
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}
export default Projects;

// import Section_heading from "./Section_heading"
// function Projects() {
//     return (
//         <>
//             <section className="highlights gp">
//                 <div className="container">
//                     <Section_heading
//                         heading='our expertise'
//                         subHeading='Lorem ipsum'
//                     />
//       </>
//     )
// }

// export default Projects;