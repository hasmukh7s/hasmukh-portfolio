import React from 'react';
import Section_heading from './Section_heading';
import CountUp from 'react-countup';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';



const Counter = () => {
   

    return (
        <section className='counter gp bg-white'>
            <div className='container'>

            

                <Section_heading
                    heading='statistics'
                    subHeading='work done'
                />

                <div className='counter-inner d-flex justify-space-between align-item-center text-center'>
                    <div className='count'>
                    <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
                        <h1><CountUp delay={2} end={22} />+</h1>
                        <p>Projects done</p>
                    </div>
                    <div className='count'>
                    <IntegrationInstructionsIcon></IntegrationInstructionsIcon>
                        <h1><CountUp delay={2} end={65620} />+</h1>
                        <p>Lines of code</p>
                    </div>
                    <div className='count'>
                    <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
                        <h1><CountUp delay={2} end={12} /></h1>
                        <p>Happy clients</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Counter;