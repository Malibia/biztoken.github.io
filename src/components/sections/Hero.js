import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import ModalDialog from '../ModalDialog';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    // declare a new state variable for modal open
    const [open, setOpen]  = useState(false);

    // function to handle modal open
    const handleOpen = () => {
	setOpen(true);
    };

    // function to handle modal close
    const handleClose = () => {
	setOpen(false);
    };
    

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
	e.preventDefault();
	setVideomodalactive(true);
    }

    const closeModal = (e) => {
	e.preventDefault();
	setVideomodalactive(false);
    }

    const outerClasses = classNames(
	'hero section center-content',
	topOuterDivider && 'has-top-divider',
	bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Sliq is a one-stop platform to sell your business or startup\'s ownership <span className="text-color-primary">stake</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
          Whether you want to sell your business, perform an exit from your venture or sell a stake of your startup, our platform enables you to do so cheaply and hassle-free
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
          <ButtonGroup>
	  <div className="RegisterForm">
          <Button tag="a" color="primary" wideMobile href="" onClick={handleOpen}>
                    Get Started
      </Button>
	  // display the modal and pass props
	  <ModalDialog open={open} handleClose={handleClose} />
	  </div>
                  <Button tag="a" color="dark" wideMobile href="">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video=""
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
