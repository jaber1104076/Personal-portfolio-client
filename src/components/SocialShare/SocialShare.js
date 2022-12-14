import React from 'react';
import facebook from '../../assets/svg/facebook.svg'
import github from '../../assets/svg/github.svg'
import linkdin from '../../assets/svg/linkedin.svg'
import './SocialShare.css'

const SocialShare = () => {
    return (
        <div>
            <div class="social-share">
                <a href="https://www.facebook.com/jarajaber/" target="_blank"><img src={facebook} alt="share on facebook" /></a>
                <a href="https://github.com/jaber1104076" target="_blank"><img src={github} alt="share on github" /></a>
                <a href="https://www.linkedin.com/in/abdullah-al-jaber-529339a2/" target="_blank"><img src={linkdin} alt="share on linkedin" /></a>
            </div>
        </div>
    );
};

export default SocialShare;