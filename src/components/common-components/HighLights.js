import Web_developement from '../../images/highlights/web-developement.png';
import Cross_browser from '../../images/highlights/cross-browser.png';
import Project_mnmg from '../../images/highlights/project-mnmt.png';
import Process from '../../images/highlights/process.png';
import Workflow from '../../images/highlights/workflow.png';
import User_req from '../../images/highlights/user-req.png';
import Section_heading from './Section_heading';

function HighLights() {
    return (
        <>
            <section className="highlights gp">
                <div className="container">
                    <Section_heading
                        heading=' expertise'
                        subHeading='skill highlights'
                    />
                    <div className="highlights-inner d-flex justify-space-between">
                        <div className="item bg-white text-center">
                            <img src={Web_developement} alt="" />
                            <h3>Web Development</h3>
                        </div>
                        <div className="item bg-white text-center">
                            <img src={Cross_browser} alt="" />
                            <h3>Cross Browser Operability</h3>
                        </div>
                        <div className="item bg-white text-center">
                            <img src={Project_mnmg} alt="" />
                            <h3>Project management  </h3>
                        </div>
                        <div className="item bg-white text-center">
                            <img src={Process} alt="" />
                            <h3>Process Improvement</h3>
                        </div>
                        <div className="item bg-white text-center">
                            <img src={Workflow} alt="" />
                            <h3>Workflow Optimization</h3>
                        </div>
                        <div className="item bg-white text-center">
                            <img src={User_req} alt="" />
                            <h3>User Requirements Gathering</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HighLights;