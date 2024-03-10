// RandomMobiles.js
import React from 'react';
import mobiles from './data/mobiles';

const RandomMobiles = () => {
  // Get two random mobiles
  const getRandomMobiles = () => {
    const randomMobiles = [];
    while (randomMobiles.length < 4) {
      const randomIndex = Math.floor(Math.random() * mobiles.length);
      const randomMobile = mobiles[randomIndex];
      if (!randomMobiles.includes(randomMobile)) {
        randomMobiles.push(randomMobile);
      }
    }
    return randomMobiles;
  };

  const [mobile1, mobile2, mobile3,mobile4] = getRandomMobiles();

  return (
    <div>
      {/* <h2>Random Mobiles</h2> */}
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'280px'}}>
          <h6 >{`${mobile1.brand} ${mobile1.model}`}</h6>
          <img src={mobile1.image} alt={`${mobile1.brand} ${mobile1.model}`} style={{ width: '220px', height: '250px',borderRadius:'20px', border:'1px solid black'}}/>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'280px'}}>
          <h6>{`${mobile2.brand} ${mobile2.model}`}</h6>
          <img src={mobile2.image} alt={`${mobile2.brand} ${mobile2.model}`} style={{ width: '220px', height: '250px' ,borderRadius:'20px', border:'1px solid black'}}/>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'280px'}}>
          <h6>{`${mobile3.brand} ${mobile3.model}`}</h6>
          <img src={mobile3.image} alt={`${mobile3.brand} ${mobile3.model}`} style={{ width: '220px', height: '250px' ,borderRadius:'20px', border:'1px solid black'}}/>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'280px'}}>
          <h6>{`${mobile4.brand} ${mobile4.model}`}</h6>
          <img src={mobile4.image} alt={`${mobile4.brand} ${mobile4.model}`} style={{ width: '220px', height: '250px' ,borderRadius:'20px', border:'1px solid black'}}/>
        </div>
      </div>
    </div>
  );
};

export default RandomMobiles;
