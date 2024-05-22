import * as React from 'react';
import Section_heading from './Section_heading';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import ExtensionIcon from '@mui/icons-material/Extension';
import LanguageIcon from '@mui/icons-material/Language';
import InterestsIcon from '@mui/icons-material/Interests';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import CodeIcon from '@mui/icons-material/Code';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import BrushIcon from '@mui/icons-material/Brush';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import $ from 'jquery';


function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='tabbing bg-white gp'>
      <div className='container'>
        <Section_heading
          heading='My Resume'
          subHeading='My Details'
        />




        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Experiences" {...a11yProps(0)} />
            <Tab label="Education" {...a11yProps(1)} />
           
            <Tab label="Certificates" {...a11yProps(2)} />
            {/* <Tab label="Extensions" {...a11yProps(3)} /> */}
            <Tab label="Languages" {...a11yProps(4)} />
            <Tab label="Interests" {...a11yProps(5)} />
             {/* <Tab label="Awards" {...a11yProps(6)} /> */}
          </Tabs>
          <div class="bounce">
            <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
          </div>
          <TabPanel value={value} index={0}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <WorkIcon></WorkIcon>     Experiences </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between '>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content ex-content'>
                    <div className='d-flex align-item-center'>
                      <div className='t-content-title'>
                        <h4>Front-End Engineer</h4>
                        <h5><a href='#'> OpensourceXpert Infotech Pvt. Ltd. </a></h5>
                      </div>
                      <div className='t-btn ex-btn text-center'>
                        <span className='primary-btn'>Feb, 2022 - Mar, 2024</span>
                      </div>
                    </div>

                    <ul>
                      <li>Expand features, refine code, and improve processes, producing smoother operations and enhancing user engagement.</li>
                      <li>I've experience in responsive Design. </li>
                      <li>Design web applications according to client briefs and modify designs to meet changes in client specifications.</li>
                      <li>Designing dynamic and browser compatible pages using HTML5, CSS3, Tailwind, Bootstrap, Jquery and Javascript.</li>
                      <li>Collaborated with Developer to design, test and improve web products.</li>
                      <li>Assisted in the training of new developers.</li>
                      <li>Ensure efficient web development by supporting designers and app developers while resolving website performance issues.</li>
                      {/* <li>Designing the Web Application using HTML5, SCSS , Bootstrap , jQuery with WordPress, Angular and Laravel.</li> */}
                      <li>Ability to write Effectively, clean, minimalistic, reusable code.
</li>

                      {/* <li>Experience themes and builder in WordPress such as Avada, Elementor, DIVI, Visual Composer, Astra, Sydney and WPBakery etc.</li>
                      <li>Developing customizing website using CBD in WordPress.</li> */}
                      <li>Utilized Adobe Photoshop, XD and Figma for the production of web-optimized Images.</li>
                      <li>Maintained accuracy and attention to detail throughout the creative and development process.</li>
                      <li>Handled multiple projects simultaneously while ensuring all projects were completed within the deadline date.</li>
                      {/* <li>Worked collaboratively with developers and in-house team to develop and maintain websites for a variety of clients.</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content ex-content'>
                    <div className='d-flex align-item-center'>
                      <div className='t-content-title'>
                        <h4>Front-End Developer</h4>
                        <h5><a href="#">TOPS Technology</a></h5>
                      </div>
                      <div className='t-btn ex-btn text-center'>
                        <span className='primary-btn'>Mar, 2021 - Dec, 2021</span>
                      </div>
                    </div>

                    <ul>
                      <li>Designing new logos
                      </li>
                      <li>Developing different website pages with the help of
                        html5,css3,bootstrap and jQuery
                      </li>
                      <li>Responsive website using Media Jquery</li>
                    </ul>
                  </div>
                </div>
              </div>
              
             
            </section>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><svg fill="#61dafb" width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" /></svg>    Education </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>MA</h4>
                    <h5>Gujarat University</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2021</span>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content'>
                    <h4>BA</h4>
                    <h5>Gujarat University</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2020</span>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content'>
                    <h4>HSC</h4>
                    <h5>GHSEB</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2017</span>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>4</span>
                  </div>
                  <div className='t-content'>
                    <h4>SSC</h4>
                    <h5>GHSCE</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2015</span>
                  </div>
                </div>
              </div>

            </section>
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><WorkspacePremiumIcon></WorkspacePremiumIcon>   Awards</h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>Good Academic Grades Award</h4>
                    <h5>St. Xavier's College</h5>
                  </div>
                  <div className='t-btn'>
                    <span className='primary-btn'>2011</span>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel> */}
          <TabPanel value={value} index={2}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0H2H18H19V1V4.08296C21.8377 4.55904 24 7.027 24 10C24 11.777 23.2275 13.3736 22 14.4722V22V23.8685L20.4453 22.8321L18 21.2019L15.5547 22.8321L14 23.8685V22V20H2H1V19V1V0ZM14 18V14.4722C12.7725 13.3736 12 11.777 12 10C12 7.027 14.1623 4.55904 17 4.08296V2H3V18H14ZM16 15.6586V20.1315L17.4453 19.1679L18 18.7981L18.5547 19.1679L20 20.1315V15.6586C19.3744 15.8797 18.7013 16 18 16C17.2987 16 16.6256 15.8797 16 15.6586ZM18 6C15.7909 6 14 7.79086 14 10C14 12.2091 15.7909 14 18 14C20.2091 14 22 12.2091 22 10C22 7.79086 20.2091 6 18 6ZM11 9.00001H5V7.00001H11V9.00001ZM5 12H10V10H5V12ZM7 15H5V13H7V15ZM5 6.00001H7V4.00001H5V6.00001Z" fill="#61dafb" />
                </svg>    Certificates </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p-0'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content'>
                    <h4>Web Developer & Graphic Designer</h4>
                    <h5>TOPS Technologies</h5>
                    <p>09/2019-02/2021</p>
                  </div>
                  <div className='t-btn'>
                    {/* <span className='primary-btn'>09/2019-02/2021</span> */}
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          {/* <TabPanel value={value} index={3}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <ExtensionIcon></ExtensionIcon>    Extensions </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>PerfectPixel</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Width and Height Display</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>React Developer Tools</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>4</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>SetupVPN</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>5</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Lightshot</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>6</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Screencastify - Screen Video Recorder</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>7</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Nimbus</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>8</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Dimensions </h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>9</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Awesome ChatGPT  </h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel> */}
          <TabPanel value={value} index={3}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <LanguageIcon></LanguageIcon>    Languages </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>1</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Gujarati</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>2</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>English</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span>3</span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Hindi</h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <section className='tab-width'>
              <div className='tab-title '>
                <h3 className='d-flex align-item-center'> <InterestsIcon></InterestsIcon>  Interests </h3>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><CodeIcon></CodeIcon></span>

                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Programming</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><SportsCricketIcon></SportsCricketIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Cricket</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><LocalAirportIcon></LocalAirportIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Travelling</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><DesignServicesIcon></DesignServicesIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Designing</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><NetworkCheckIcon></NetworkCheckIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Internet surfing</h4>
                  </div>
                </div>
              </div>
              <div className='tab-body'>
                <div className='tab-one d-flex justify-space-between btn-p fd-un'>
                  <div className='t-icon'>
                    <span><BrushIcon></BrushIcon></span>
                  </div>
                  <div className='t-content witout-yr'>
                    <h4>Painting</h4>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

        </Box>

      </div>
    </section>
  );
}
