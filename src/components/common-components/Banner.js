import React from "react";
import Water_wave from './Water_wave';
import $ from "jquery";
import BannerImg from '../../images/logo.jpg';
import Video from './Video';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import resume from '../../docs/Hasmukh_Resume.pdf';

import { useSelector } from 'react-redux';
import { cartData } from '../../Redux-Saga/reducer/Reducer';

$(document).ready(function () {

    $(".banner-down-arrow").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 2000);
      });

      
    var span = document.querySelector(".typewriter span");
    var textArr = span.getAttribute("data-text").split(", ");
    var maxTextIndex = textArr.length;

    var sPerChar = 0.15;
    var sBetweenWord = 1.5;
    var textIndex = 0;

    typing(textIndex, textArr[textIndex]);

    function typing(textIndex, text) {
        var charIndex = 0;
        var maxCharIndex = text.length - 1;

        var typeInterval = setInterval(function () {
            span.innerHTML += text[charIndex];
            if (charIndex == maxCharIndex) {
                clearInterval(typeInterval);
                setTimeout(function () { deleting(textIndex, text) }, sBetweenWord * 1000);

            } else {
                charIndex += 1;
            }
        }, sPerChar * 1000);
    }

    function deleting(textIndex, text) {
        var minCharIndex = 0;
        var charIndex = text.length - 1;

        var typeInterval = setInterval(function () {
            span.innerHTML = text.substr(0, charIndex);
            if (charIndex == minCharIndex) {
                clearInterval(typeInterval);
                textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
                setTimeout(function () { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000);
            } else {
                charIndex -= 1;
            }
        }, sPerChar * 1000);
    }
});


function Banner() {

    const result = useSelector((state)=>state.cartData)
    console.warn("Redux Data",result)



    return (
        <>

            <section className="banner">
                <Video />
                <Water_wave />
                <div className="container d-flex justify-space-between align-item-center">
                    <div className="banner-left w-50 relative text-center">
                        <h1><SentimentSatisfiedAltIcon /> Hola <SentimentSatisfiedAltIcon /></h1>
                        <h2>I am Hasmukh</h2>
                        <p class="typewriter">
                            <span data-text="Front-End Engineer"></span>
                        </p>
                        <div className="btn-group">
                            <a className="primary-btn" href="tel:8200899614">Hire Me</a>
                            <a target="_blank" className="primary-btn two" href={resume}>Download CV</a>
                        </div>
                    </div>
                    <div className="banner-right w-50 d-flex justify-content-center align-item-center">
                        <img className="vert-move" src={BannerImg} alt="BannerImg" />
                    </div>

                    
                </div>
                <div class="bounce banner-down-arrow">
                 <ArrowDownwardIcon></ArrowDownwardIcon>
                </div>
            </section>

            
        </>
    )
}

export default Banner;