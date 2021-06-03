import React from 'react'
import "../Enterprise/Enterprise.css"
import call from "../asset/calling.jpg"
import Ladyonphone from "../asset/LadyOnPhone.webp"
import LargePhone from "../asset/largeMobile.webp"
import bigDisplay from "../asset/bigDisplay.webp"
import Manphone from "../asset/PhoneMan.webp"
import ManyPhone from "../asset/ManyPhone.webp"
import greenphone from "../asset/greenphone.webp"
import counter from "../asset/counter-logo.svg"
import bigmobile from "../asset/bigpik.jpg"
import lastBanner from "../asset/lastBanner.jpg"

function Enterprise(){
    return(
        <div>
            {/* enterprise text */}
        <div class="uk-container uk-margin-xlarge-left uk-margin-large-top uk-width-1-2 ">
            <h5 class="uk-text-bold text1">For enterprises</h5>
            <p class="uk-text-bold  text2 uk-margin-remove-top uk-text-left" >Enterprise smartphones with security from Finland</p>
            <p class="text4 uk-text-bold uk-text-left">The world’s broadest Android Enterprise Recommended range. Security that stops hackers in their tracks. The latest Android™ user experience. 
                And the legendary dependability of Europe’s leading smartphone brand
                </p>
                </div>
                {/* img of calling */}
                <div class="uk-container uk-margin-large-top">
                    <img src={call}  alt=""/>
                </div>
              {/* lady on call img and data */}
                     <div class="uk-container uk-margin-large-top ">
             <div class="  uk-margin-large-top  uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class=" uk-margin-large-top "> 
                <h2 class="text5 uk-text-bold">Nokia phone insurance and warranty plans</h2>
                    <p class="text6 ">Nokia phone insurance provides worldwide coverage against accidental damage including liquid damage, 
                         while Nokia phone screen protection covers against accidental screen damage. 
                        There's also Nokia phone extended warranty, extending the manufacturer's
                        warranty and covering against mechanical faults for an additional year.
                </p>
                <p class="text6 ">
                Get in touch using the contact form below for a tailored 
                offer on covering your fleet of Nokia enterprise devices.
                </p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Contact us<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
                <div class="">
                <img src={Ladyonphone} style={{width:"80%"}} alt=""/>
                 </div>
             </div>
             </div>








                {/* copieied from home page */}

                <div class="uk-container uk-margin-xlarge-top ">
             <div class="uk-container  uk-margin-large-top  uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 <div>
                     <img class="big-mobile" src={LargePhone} alt=""/>
                 </div>

                 <div >
                <div class=" uk-margin-xlarge-top uk-align-left "> 
                    <h1 class="text7 ">Trade-in service for enterprises</h1>
                    <p class="text6 ">We'll give you credit toward your next phones when you trade in your old ones for secure recycling.
                     That's because we believe that lowering our environmental impact should benefit businesses as well as the planet.
                </p>
                <p class="text6 ">
                Get in touch using the form below for more details.
                </p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Contact us<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
             </div>
             </div>


             {/* Stay ahead of the hackers */}

             <div class="uk-container uk-margin-xlarge-top ">
             <div class="  uk-margin-large-top  uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class="  "> 
                <h5 class="uk-text-bold text1">Mobile security</h5>
                <h2 class="text8 uk-text-bold uk-margin-remove-top">Stay ahead of the hackers</h2>
                      </div>
                </div>
                <div class="">
                <p class="text6">Android Enterprise Recommended Nokia smartphones defend your data with comprehensive multi-layer
                 security. And three years of monthly updates1 keep your business safe from the latest threats. 
                 Whatever the hackers throw at you.
                </p>
                <p class="text6">
                Security is a huge concern for every business, so we’ve made it our number one priority.
                 That’s why every Android Enterprise Recommended Nokia smartphone comes with monthly security
                  updates for three years1. Sorry, hackers. This is goodbye
                </p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>See the latest security updates<span uk-icon="arrow-right"></span></h4></a>
                 </div>
             </div>
             </div>
{/* bigdisplay img */}
        <div class=" uk-margin-xlarge-top " style={{backgroundColor:"#f2f2f2"}}>
            <img src={bigDisplay} class="uk-align-center" style={{width:"35%"}} alt=""/>
        </div>

 {/* 3 cards of why*/}

 <div class="uk-container uk-margin-xlarge-top ">
             <div class="  uk-margin-large-top  uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class="  "> 
               
                <h2 class="text5 uk-text-bold">Why secure?</h2>
                <p class="text6">If you’re relaxed about hacking, you haven’t been hacked. The average data breach costs businesses $3.8 million and,
                     according to IDC, 40% of businesses have had one in the last 18 months2. Endpoint security for mobile devices can be a major headache.
                     Nokia smartphones protect your business with comprehensive, multi-layered security.
                     </p>
                     <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Read the IDC report<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
                <div class="">
                <h2 class="text5 uk-text-bold">Why Android?</h2>
                <p class="text6">Android’s multi-layer security structure is designed to give hackers the cold shoulder. 
                In fact, Gartner research found that Android is the highest-scoring mobile operating system, with top marks
                 for 26 out of 30 key security criteria3.
                     </p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Read the study<span uk-icon="arrow-right"></span></h4></a>
                 </div>

                 <div >
                <div class="  "> 
               
               
                      </div>
                </div>
                <div class="">
                <h2 class="text5 uk-text-bold">Why Nokia smartphones?</h2>
                <p class="text6">Pure, secure and always up-to-date – our Android Enterprise Recommended smartphones come with three years 
                of security updates and two years of Android OS upgrades. They’re also free of unnecessary apps or
                 bloatware that slow you down.
                     </p>
               
                 </div>
             </div>
             </div>
             {/* big banner of man holding phone */}
             <div className="uk-margin-xlarge-top">
                 <img src={Manphone} alt="" />
             </div>
             <div class="uk-container uk-margin-xlarge-top ">
             <div class=" uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                  <div >
                <div class="  "> 
               
                <h2 class="text1 uk-text-bold">The broadest range</h2>
               <p class="text8 uk-margin-remove-top"> Secure at every price point</p>
            
            </div>
                </div>
                <div class="">
                <p class="text6 ">Why compromise?</p>
                <p class="text6">Android’s multi-layer security structure is designed to give 
                hackers the cold shoulderIn fact, Gartner research foundthat Android is the 
                highest-scoring mobile operating system,with top marks for 26 out of 30 key security criteria3.
                     </p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Explore the range<span uk-icon="arrow-right"></span></h4></a>
                 </div>

                 
                
             </div>
             </div>

             <div className="uk-margin-xlarge-top">
                 <img src={ManyPhone} alt="" />
             </div>

             {/* counter study */}
             <div >
             <div style={{backgroundColor:"#f4f4f4"}} class=" uk-margin-xlarge-top uk-margin-large-left uk-margin-large-right uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
                 <div class="uk-container">
                <div class="uk-margin-large-left uk-margin-large-top"> 
                    <p class="text1">COUNTERPOINT STUDY</p>
                    <p class="text7">#1 in trust rankings for a <br/> second year*</p>
                    <p><i class="text6">“Nokia lead the Trust Rankings Based on <br/> Software, Security Updates and Build Quality”</i></p>
                    <p class="text6">Delivering monthly security updates for 3 years <br/> and software upgrades for 2 years means that <br/> once again, Nokia smartphones top the 2020 <br/> Counterpoint Research trust rankings. We also <br/> offer the widest selection Android® Enterprise <br/> Recommended smartphones compared to other <br/> smartphone brands. Check out the study to find <br/> out more.</p>
                    <img src={counter} alt=""/>
                    <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Read the study<span uk-icon="arrow-right"></span></h4></a>
                      
                      <br/>
                      <br/>
                      </div>
                </div>
                <div>
                     <img class="big-mobile" src={bigmobile} alt=""/>
                 </div>
             </div>
             </div>

             <div >
             <div style={{backgroundColor:"#e5eeee"}} class=" uk-margin-xlarge-top uk-margin-large-left uk-margin-large-right uk-grid uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-1@s" uk-grid="true"  >
             <div>
                 <img class="big-mobile" src={greenphone} alt=""/>
            </div>

                 <div class="uk-container">
                <div class="uk-margin-large-left uk-margin-large-top"> 
                    <p class="text1">CCS insight study</p>
                    <p class="text7">Android-Powered Nokia Smartphones: 
                    New contenders in the enterprise mobile device market
                    </p>
                   
                    <p class="text6">HMD Global, the company behind Nokia phones, 
                    is becoming a key player in enterprise mobility and workplace transformation</p>
                    
                    <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Read the study<span uk-icon="arrow-right"></span></h4></a>
                      <br/>
                      <br/>
                      </div>
                </div>
               
             </div>
             </div>


             <div class="uk-container uk-margin-xlarge-top ">
             <div class=" uk-margin-large-left uk-margin-large-right uk-margin-large-top  uk-grid uk-child-width-1-3@m uk-child-width-1-3@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class="  "> 
               
                <p class="text1 uk-text-bold">In-tech GmbH case study</p>
                <p class="text9">Wi-Fi Calling on Nokia 4.2 and Nokia 5.1 Plus improves connectivity at in-tech
                     </p>
                     <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
                <div class="">
                <p class="text1 uk-text-bold">Vessel case study</p>
                <p class="text9">Vessel engages HMD Connect Pro to revolutionise Patient Data Management</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>

                 
                <div class="">
                <p class="text1 uk-text-bold">Isle of Wight Council case study</p>
                <p class="text9">The Isle of Wight Council secures 650 Nokia 5.3 smartphones</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>
             </div>
             </div>

             <div class="uk-container  uk-margin-xlarge-top">
             <div class=" uk-margin-large-left uk-margin-large-right   uk-grid uk-child-width-1-3@m uk-child-width-1-3@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class="  "> 
               
                <p class="text1 uk-text-bold uk-text-left">CCS insight study</p>
                <p class="text7 uk-text-left">Android-Powered Nokia Smartphones New contenders in the enterprise mobile device market
                     </p>
                     <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
                <div class="">
                <p class="text1 uk-text-bold">SAP</p>
                <p class="text9">SAP runs on Nokia smartphones</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>

                 
                <div class="">
                <p class="text1 uk-text-bold">Mukava</p>
                <p class="text9">Security to protect your most sensitive data</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>
             </div>
             </div>
             <div class="uk-container uk-margin-xlarge-top ">
             <div class=" uk-margin-large-left uk-margin-large-right   uk-grid uk-child-width-1-3@m uk-child-width-1-3@l  uk-child-width-1-1@s" uk-grid="true"  >
                 

                 <div >
                <div class="  "> 
               
                <p class="text1 uk-text-bold">Nokia</p>
                <p class="text9">Nokia smartphones exceed Nokia’s own exacting standards
                     </p>
                     <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                      </div>
                </div>
                <div class="">
                <p class="text1 uk-text-bold">YBS</p>
                <p class="text9">YBS transforms with Nokia smartphones</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>

                 
                <div class="">
                <p class="text1 uk-text-bold">Accon avm</p>
                <p class="text9">Accon avm uses Nokia smartphones for secure FMI enterprise communications</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>
                 <div class="">
                <p class="text1 uk-text-bold">EnBW</p>
                <p class="text9 uk-margin-remove">How Nokia phones became the  preferred smartphones of EnBW</p>
                <a href=""><h4 class="uk-text-bold" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
                 </div>
             </div>
             </div>
        
             {/* last banner */}
             <div class="uk-margin-xlarge-top">
             <div class="uk-inline">
             <img src={lastBanner}  class="last-banner" alt=""/>
             <div class="uk-overlay  uk-position-left ">
             <div class="uk-child-width-expand@s uk-text-center-left " uk-grid="true">
    <div className="">
    <p class="text1 uk-text-left">HMD Connect Pro</p>
                <h1 class="title1 uk-margin-remove-top uk-text-left">Everything connected, everything under  control</h1>
                <p class="text6 uk-margin-remove-top uk-text-left">Keep your IoT devices and personal use smartphones securely
                connected and your workforce online, all while managing  
                connections and controlling costs from a single central management console.</p>
                <a href=""><h4 class="uk-text-bold uk-text-left uk-margin-remove-top" style={{color:"#0065ed"}}>Learn More<span uk-icon="arrow-right"></span></h4></a>
    </div>
    <div>
        
    </div>
    
</div>
               
            </div>
             </div>
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
                 <p class="last-para2 uk-text-normal">
                 2IDC WhitePaper Pillar 1, 2019
                 </p>
                 <p class="last-para2 uk-text-normal">
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
    )
}
export default Enterprise;