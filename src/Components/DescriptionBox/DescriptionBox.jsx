import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Rewiews (122)</div>
        </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec sagittis, sapien quis auctor malesuada, quam enim semper metus,
             et placerat purus dui vitae lectus. Pellentesque nec ligula est. 
             Vivamus consequat tristique nunc sit amet malesuada. 
             Nulla diam lectus, eleifend nec odio ac, suscipit mattis erat.</p>
             <p>Nulla facilisi. Integer aliquet, lacus eu luctus imperdiet, quam metus dapibus orci, 
                quis tincidunt felis risus vel felis. Nunc ultricies ligula lacus, 
                ut pulvinar sem vestibulum porttitor. Proin tempor urna sit amet lorem sollicitudin, 
                et placerat massa congue. Phasellus vel ligula at magna scelerisque eleifend. </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
