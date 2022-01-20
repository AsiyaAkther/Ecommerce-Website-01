$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Mean Menu
  jQuery(document).ready(function () {
    jQuery('header nav').meanmenu();
  });
  jQuery('nav').meanmenu({

    // target element
    meanMenuTarget: jQuery(this), 
  
    // where meanmenu will be placed within the HTML
    meanMenuContainer: 'body', 
  
    // close button
    meanMenuClose: "X",
  
    // close button size
    meanMenuCloseSize: "18px",
  
    // open button
    meanMenuOpen: "<span /><span /><span />",
  
    // or 'left'
    meanRevealPosition: "right", 
  
    // 
    meanRevealPositionDistance: "0", // Tweak the position of the menu
  
    // background color
    meanRevealColour: "", 
  
    // breakpoint
    meanScreenWidth: "600",
  
    // set a height here in px, em or %
    meanNavPush: "", 
  
    // show sub-menus
    meanShowChildren: true,
  
    // allow expand/collapse sub-menus
    meanExpandableChildren: true,
  
    // expand button
    meanExpand: "+",
  
    // collapse button
    meanContract: "-",
  
    // true to remove classes and IDs
    meanRemoveAttrs: false, 
  
    // set to true for one page sites
    onePage: false,
  
    // display attribute, e.g. table-cell
    meanDisplay: "block",
  
    // remove specific elements
    removeElements: "", 
  
    // expand sub-menus when you click parent
    parentClickExpands: true
  
  });