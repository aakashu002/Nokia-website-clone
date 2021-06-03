import React from 'react'
import './Security.css'
import hackpik from "../asset/hacker.jpg"
import cardIcon from "../asset/Icon1.svg"
import cardIcon2 from "../asset/Icon2.svg"
import android from "../asset/android.svg"
import cardIcon3 from "../asset/Icon3.svg"
import counter from "../asset/counter-logo.svg"
import looking from "../asset/looknokia.jpg"
import bigmobile from "../asset/bigpik.jpg"
import phone from "../asset/phone.jpg"
import portraitphone from "../asset/phonePortrait.png"
import chip from "../asset/chip.svg"
import slide1 from "../asset/slide1.jpg"
import slide2 from "../asset/slide2.jpg"
import slide3 from "../asset/slide3.jpg"
import slide4 from "../asset/slide4.png"
import n34 from "../asset/n34.png"
import n53 from "../asset/n53.png"
import n24 from "../asset/n24.png"
import shadows from '@material-ui/core/styles/shadows'
import zIndex from '@material-ui/core/styles/zIndex'


function Security()
 {
     function show(){

         console.log("clicked")
     }
    
    
    return(
        
        <div style={{background:"#f2f2f2"}}>
        {/* main-picture */}
              <div class="uk-inline">
             <img src={hackpik}  class="main-pik" alt=""/>
             <div class="uk-overlay uk-padding-large uk-margin-large-left uk-position-top-left">
                 
                <h3 class="pik-text1">Mobile security</h3>
                <h1 class="pik-text2 uk-margin-remove-top ">Dear hackers, <br/> it’s over.</h1>
                <p class="pik-text3 uk-margin-remove-top">Security is a huge concern for every business, so we’ve <br/> made it our number one priority. That’s why every <br/> Android Enterprise Recommended Nokia smartphone <br/> comes with monthly security updates for three years1. <br/> Sorry, hackers. This is goodbye.</p>
            </div>
             </div>
        {/* data b4 cards */}
        <div class="uk-container uk-margin-large-left uk-padding uk-margin-top uk-column-2-3 uk-column-2-3@s">
            <h6 class="data1">ANDROID™ SECURITY</h6>
            <h2 class="data2">Stay ahead of the hackers</h2>
            <p class="data3 ">Digital threats are constantly evolving. So Nokia <br/> smartphones combat the latest malware before <br/> it can spread with security updates every <br/> month.</p>
        </div>

        {/* cards1 */}
             <div class="uk-container uk-margin-large-left  uk-column-2-3 uk-column-2-3@s">
             <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match " uk-grid="true">
    
    <div >
        <div class="uk-card uk-card-body  card-blue ">
           <img src={cardIcon} class="uk-align-center" alt=""/>
            
            
            <a href=""><h4 class="pik-text1 uk-text-center">Why Nokia <br/> Smartphones?</h4></a>
        </div>
    </div>
<br/>
    {/* card2 */}
  
  <div >
        <div class="uk-card uk-card-body  card-blue ">
           <img src={cardIcon2} class="uk-align-center" alt=""/>
            
            
            <a href=""><h4 class="pik-text1 uk-text-center">Why Secure ?</h4></a>
        </div>
    </div>

<br/>
    {/* card3 */}
    <div >
        <div class="uk-card uk-card-body  card-blue ">
           <img style={{width:"100px"}} src={cardIcon3} class="uk-align-center" alt=""/>
            
            
            <a href=""><h4 class="pik-text1 uk-text-center">Why Andriod ?</h4></a>
        </div>
    </div>
   
</div>
             </div>

             {/* security-mobile-looking */}
             <div class="sec-banner uk-inline">
                 <img class="look-pik" src={looking} alt=""/>
                 <div class="uk-overlay uk-padding-large uk-margin-large-left uk-position-top-left">
                        <h5 class="banner-data1">BROADEST RANGE</h5>
                        <h2 class="banner-data2">A more secure business choice</h2>
                        <h4 class="banner-data3">Why compermise?</h4>
                        <h4 class="banner-data3">Whichever Android Enterprise Recommended <br/> Nokia smartphone you choose, you get two <br/> years of Android™ software upgrades and three <br/> years of monthly security updates1.</h4>
                        <h4 class="banner-data3">And with the world’s broadest choice of Android <br/> Enterprise Recommended smartphones, you <br/> can choose the best device for every user’s <br/> needs.</h4>
                        <button class="uk-button uk-button-large banner-button">Help me choose</button>
                      <a href=""><h4 class="banner-data5">Read the IDC report <i class="fa fa-external-link" aria-hidden="true"></i></h4></a> 
                      <div id="line_r" class="line"></div>
                 </div>
             </div>
             {/* after-banner */}
                <div >
             <div class="uk-container uk-margin-large-left uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 <div>
                     <img class="big-mobile" src={bigmobile} alt=""/>
                 </div>

                 <div>
                <div class=" uk-margin-large-left uk-margin-large-top"> 
                    <h6 class="nokia-study">COUNTERPOINT STUDY</h6>
                    <h2 class="nokia-study2">#1 in trust rankings for a <br/> second year*</h2>
                    <h4><i class="nokia-study3">“Nokia lead the Trust Rankings Based on <br/> Software, Security Updates and Build Quality”</i></h4>
                    <h4 class="nokia-study4">Delivering monthly security updates for 3 years <br/> and software upgrades for 2 years means that <br/> once again, Nokia smartphones top the 2020 <br/> Counterpoint Research trust rankings. We also <br/> offer the widest selection Android® Enterprise <br/> Recommended smartphones compared to other <br/> smartphone brands. Check out the study to find <br/> out more.</h4>
                    <img src={counter} alt=""/>
                    <a href=""><h4 class="read-me">Read the study<i class="fa fa-external-link" aria-hidden="true"></i></h4></a> 
                      <div id="line_r" class="line-two"></div>
                      <br/>
                      <br/>
                      </div>
                </div>
             </div>
             </div>

             {/* css-banner */}
                 <div class="uk-inline">
                    <img class="phone-pik" src={phone} alt=""/>
                    <div class="uk-overlay uk-padding-large uk-margin-large-left uk-margin-large-top uk-position-top-left">
                        <h5 class="banner-data1">CCS INSIGHT STUDY</h5>
                        <h4 class="banner-data2">Android-Powered Nokia <br/> Smartphones: New contenders <br/> in the enterprise mobile device <br/> market</h4>
                        <h4 class="banner-data3">HMD Global, the company behind Nokia phones, <br/> is becoming a key player in enterprise mobility <br/> and workplace transformation</h4>
                        <img src={chip} alt=""/>
                      <a href=""><h4 class="banner-data5">Read the IDC report <i class="fa fa-external-link" aria-hidden="true"></i></h4></a> 
                      <div id="line_r" class="line"></div>
                 </div>
                    </div>
            {/* slideshow */}
            <div uk-slideshow="animation: push">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

    <ul class="uk-slideshow-items ">
        <li>
            <img class="slider-base" src={slide1} alt=""/>
            <div class="uk-overlay uk-padding-large uk-margin-large-left uk-margin-large-top uk-position-top-left">
                        <h5 class="pik-text1">MUKVA CASE STUDY</h5>
                        <h2 class="banner-data3">Security to protect <br/> your most sensitive</h2>
                        <button class="uk-button uk-button-large slider-button">Learn More</button>
                        </div>
        </li>
        <li>
            <img class="slider-base" src={slide2} alt=""/>
            <div class="uk-overlay uk-padding-large uk-margin-large-left uk-margin-large-top uk-position-top-left">
                        <h5 class="pik-text1">SAP CASE STUDY</h5>
                        <h2 class="banner-data3">Sap runs on Nokia <br/> smartphones</h2>
                        <button class="uk-button uk-button-large slider-button">Learn More</button>
                        </div>
                </li>
        <li>
            <img class="slider-base" src={slide3} alt=""/>
            <div class="uk-overlay uk-padding-large uk-margin-large-left uk-margin-large-top uk-position-top-left">
                        <h5 class="pik-text1">YBS CASE STUDY</h5>
                        <h2 class="banner-data3">YBS transform with <br/> nokia smartphones</h2>
                        <button class="uk-button uk-button-large slider-button">Learn More</button>
                        </div>
        </li>
        <li>
            <img class="slider-base" src={slide4} alt=""/>
            <div class="uk-overlay uk-padding-large uk-margin-large-left uk-margin-large-top uk-position-top-left">
                        <h5 class="pik-text1">ACCON AVM CASE STUDY</h5>
                        <h2 class="banner-data3">Accon avm uses <br/> Nokia smartphones </h2>
                        <button class="uk-button uk-button-large slider-button">Learn More</button>
                        </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


<div class="" > 
        <p  class="text3 uk-container uk-margin-xlarge-left  uk-column-2-3 uk-column-2-3@s" href="#"> All business phones </p>
        
        </div>
        


        {/* 1st phone */}
        <center>
        <div class="uk-width-1-1 uk-align-center">
        <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
            <b class="phone-header uk-text-large ">Nokia 9 PureView</b>
            <br/>
            <br/>
            
               <img src={n34}></img>
               <br/>
               <br/>
               <input class="radio-bttn" type="radio"/>
               <br/>
               <img class="android" src={android} alt=""/>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               <input class="radio-bttn" type="checkbox"/>
        </div>
            {/* 2nd phone */}
        <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
            <b class="phone-header uk-text-large ">Nokia 8 Sirocco</b>
            <br/>
            <br/>
            
               <img src={n53}></img>
               <br/>
               <br/>
               <input class="radio-bttn" type="radio"/>
               <br/>
               <img class="android" src={android} alt=""/>
               <br/>
                <b class="price">Rs. 49999 *</b>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               <input class="radio-bttn" type="checkbox"/>
        </div>

        {/* 3rd phone */}
        <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
        <ul class="uk-switcher switcher-container uk-margin">
        <li>
            <b class="phone-header uk-text-large ">Nokia 8.1</b>
            <br/>
            <br/>
           
     <img src={n24}></img>
     
    <br/>
    <br/></li>
    <li>
            <b class="phone-header uk-text-large ">Nokia 8.1</b>
            <br/>
            <br/>
           
     <img src={n53}></img>
    
    
    </li>
    
</ul>
              <ul class="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
    <li> <input  href="#" class="radio-bttn-last " type="radio"/></li>
    <li> <input  href="#" class="" type="radio"/></li>
      </ul>
             <img class="android" src={android} alt=""/>
             <br/>
             <b class="price">Rs. 26999 *</b>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               
               <input class="radio-bttn" type="checkbox"/>
        </div>
        


        {/* 2nd sLAB */}


           {/* 1st phone */}
           <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
            <b class="phone-header uk-text-large ">Nokia 9 PureView</b>
            <br/>
            <br/>
            
               <img src={n34}></img>
               <br/>
               <br/>
               <input class="radio-bttn" type="radio"/>
               <br/>
               <img class="android" src={android} alt=""/>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               <input class="radio-bttn" type="checkbox"/>
        </div>
            {/* 2nd phone */}
        <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
            <b class="phone-header uk-text-large ">Nokia 8 Sirocco</b>
            <br/>
            <br/>
            
               <img src={n53}></img>
               <br/>
               <br/>
               <input class="radio-bttn" type="radio"/>
               <br/>
               <img class="android" src={android} alt=""/>
               <br/>
                <b class="price">Rs. 49999 *</b>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               <input class="radio-bttn" type="checkbox"/>
        </div>

        {/* 3rd phone */}
        <div class="uk-inline n34  uk-width-1-2@m uk-1-1@s">
        <ul class="uk-switcher switcher-container uk-margin">
        <li>
            <b class="phone-header uk-text-large ">Nokia 8.1</b>
            <br/>
            <br/>
           
     <img src={n24}></img>
     
    <br/>
    <br/></li>
    <li>
            <b class="phone-header uk-text-large ">Nokia 8.1</b>
            <br/>
            <br/>
           
     <img src={n53}></img>
    
    
    </li>
    
</ul>
              <ul class="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
    <li> <input  href="#" class="radio-bttn-last " type="radio"/></li>
    <li> <input  href="#" class="" type="radio"/></li>
      </ul>
             <img class="android" src={android} alt=""/>
             <br/>
             <b class="price">Rs. 26999 *</b>
               <h6 class="uk-text-bolder compare">COMPARE</h6>
               
               <input class="radio-bttn" type="checkbox"/>
        </div>
        </div>
        </center>
            {/* contact-us    */}
            <div class="contact-us"> 
                <h5 class="contact-text uk-text-break uk-align-center uk-padding-small uk-text-center">CONTACT US</h5>
            </div>
              

              <div class="uk-container uk-text-center uk-text-break ">
                <h6>For consumer Nokia phone support, please visit nokia.com/phones/support</h6>
                <h4 class="final-text">Choose Android Enterprise Recommended Nokia smartphones for your <br/> employees and business, and enjoy better security, manageability and <br/> reliability from a European brand you can trust. Your personal data will be <br/> processed according to HMD Global's Privacy Policy.
                    </h4>
              </div>
                    <br/>
             

              <div class="uk-align-center uk-width-1-2@s uk-width-1-2@l">
            <form class=" uk-width-1-1">
    <fieldset class="uk-fieldset uk-width-1-1">

        

        <div class="uk-margin uk-width-1-1 uk-padding uk-padding-remove-vertical">
            <input class="uk-input uk-form-large uk-width-1-1 uk-align-center final-box" type="text" placeholder="Your Name"/>
        </div>
        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <input class="uk-input uk-form-large uk-form-width-large uk-align-center final-box" type="text" placeholder="Your business email address"/>
        </div>
        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <input class="uk-input uk-form-large uk-form-width-large uk-align-center final-box" type="text" placeholder="Your country"/>
        </div>
        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <input class="uk-input uk-form-large uk-form-width-large uk-align-center final-box" type="text" placeholder="Your job title"/>
        </div>
        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <input class="uk-input uk-form-large uk-form-width-large uk-align-center final-box" type="text" placeholder="Your company"/>
        </div>

        <div class="uk-margin uk-position-relative uk-padding uk-padding-remove-vertical">
            <center>
            <select class="uk-select uk-form-large uk-form-width-large uk-align-center final-box">
            <option value="" disabled selected>About Your company</option>
                <option >Iam intrested in buying Nokia devices </option>
                <option>other please specify</option>
            </select>
            </center>
        </div>

        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <center>
            <select class="uk-select uk-form-large uk-form-width-large uk-align-center final-box ">
                <option >What is your Industry </option>
                <option>E-commerce</option>
                <option>Government</option>
                <option>Marketing</option>
                <option>Retail</option>
                
            </select>
            </center>
        </div>

        <div class="uk-margin uk-padding uk-padding-remove-vertical">
            <textarea class="uk-textarea uk-form-large uk-form-width-large uk-align-center final-box" rows="5" placeholder="Your Enquiry"></textarea>
            
        </div>    
        <div class="uk-margin uk-container">
        <button class=" uk-button  uk-button-large uk-button-primary uk-align-right sub-bttn">Submit</button>
        </div>
</fieldset>
</form>
              </div>


 {/* last para */}
 <div class="uk-container uk-margin-medium-top">
                 <p class="last-para">
                 Android, Google and other related marks and logos are trademarks of Google LLC.
                  Variations on offering may apply. Check local availability. All specifications, 
                  features and other product information provided are subject to change without notice.
                   All images are for illustrative purposes only.
                 </p>
                 <p class="last-para">
                 1Two years of Android software upgrades and three years of monthly security updates is counted from the global sales start.
                 </p>
                 <p class="last-para2 uk-text-bold" style={{color:"#4d5766"}}>
                 2IDC WhitePaper Pillar 1, 2019
                 </p>
                 <p class="last-para2 uk-text-bold" style={{color:"#4d5766"}} >
                 3Gartner Study, When Android Is Secure Enough for the Enterprise, 2018
                 </p>
                 <p class="last-para">
                 * According to 2020 study by Counterpoint Research.
                 </p>
             </div>
             
             <div class="uk-container uk-margin-xlarge-top">
            <a href="#" uk-totop uk-scroll><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Back to top<span uk-icon="arrow-up"></span></h4></a>
            </div>
        </div>
    );
}
 export default Security;
