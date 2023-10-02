import React from 'react'
import {useEffect } from "react";
import './numbers.scss'
export default function Numbers() {
    useEffect(() => {
        const countingElements = document.querySelectorAll('.counting');
    
        const options = {
          threshold: 0.5 // Adjust this threshold value as needed
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCountAnimation(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, options);
    
        countingElements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
      function startCountAnimation(element) {
        const countTo = parseInt(element.getAttribute('data-count'));
        const countNum = parseInt(element.textContent);
    
        const duration = 3000;
        let startTime = null;
    
        function animateCount(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const increment = Math.floor((countTo - countNum) * (progress / duration));
    
          element.textContent = countNum + increment;
    
          if (progress < duration) {
            requestAnimationFrame(animateCount);
          } else {
            element.textContent = countTo;
            
          }
        }
    
        requestAnimationFrame(animateCount);
      }
      
    
    
      return (
        <>
          <section>
            <div className="nums-container">
              <article className="nums-title">
                <h2>Our special groups</h2>
                <p>We provide you with many distinctive and famous options in the region</p>
              </article>
    
              <section className="rowNums">
                <section className="number">
                  <div className="col-lg-3 stats">
                    {/* <img src={img1} alt="icon" /> */}
               
                  </div>
                
                  <section>
                     <div className="counting" data-count="132">0</div>
    
                  <p>Hotel</p>
                  </section>
                </section>
    
                <section className="number">
                  <div className="col-lg-3 stats">
                    {/* <img src={img2} alt="icon" /> */}
                    
                  </div>
                 
                  <section>
                     <div className="counting" data-count="99">0</div>
    
                  <p>Restaurant</p>
                  </section>
                </section>
    
                <section className="number">
                  <div className="col-lg-3 stats">
                    
                    {/* <img src={img3} alt="icon" /> */}
                  </div>
    
                  <section>
                     <div className="counting" data-count="114">0</div>
    
                  <p>Activity</p>
                  </section>
                 
    
    
    
                </section>
              </section>
            </div>
          </section>
        </>
      );
    }