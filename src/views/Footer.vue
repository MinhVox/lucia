<template lang="">
    <footer class="footer">
  <!-- <div class="footer__addr">
    <h1 class="footer__logo">Something</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div>
  </div> -->

  <h2 class='title'>Let's work together.</h2>
  <div class='contact'>
    <div> 
      <h2 class='studio'> TRINIX STUDIO </h2>
      <p class='phone'>(+84) 365 759 235 - Mr. Tony Nguyen</p>
      <p class='mail'>trinixagency@gmail.com</p>
      <p class='address'>135A Nguyen Dinh Chinh St.</p>
      <p class='address'>Ward 8, Phu Nhuan District</p>
      <p class='address'>Ho Chi Minh City, Vietnamp</p>
    </div>
    <div> 
      <h2 class='studio'> LOCTHANH TSA CO.LTD </h2>
      <p class='phone'>(+84) 365 759 235 - Mr. Tony Nguyen</p>
      <p class='mail'>info@locthanh-tsa.com </p>
      <p class='address'>135A Nguyen Dinh Chinh St.</p>
      <p class='address'>Ward 8, Phu Nhuan District</p>
      <p class='address'>Ho Chi Minh City, Vietnamp</p>
    </div>
  </div>

  
</footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.title {
  color: white;
  margin-bottom: 5rem;
}
.contact{
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 5rem;
}
.contact > div {
  margin-right: 10vh;
}
.studio {
  color: #ff8900;
  font-weight: 500;
}
.address {
  line-height: 0;
  font-size: 12px;
  color: white;
  font-weight: 100;
}
.phone {
  font-size: 17px;
  line-height: 1;
  color: white;
  font-weight: 300;
}
.mail {
  font-size: 12px;
  line-height: 1;
  color: white;
  font-weight: 300;
}
</style>