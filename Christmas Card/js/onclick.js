var messageClick = document.getElementById('btnMessage');
var patternClick = document.getElementById('btnPattern');
var treeClick = document.getElementById('btnTree');
var giftsClick = document.getElementById('btnGifts');
var sendClick = document.getElementById('btnSend');

var patternChangeStyle = document.getElementById('pattern');
var treeChangeStyle = document.getElementById('tree');
var giftsChangeStyle = document.getElementById('gifts');

var log = function() { console.log.apply(console,[].slice.call(arguments,0)) };
var sly = {};

$(document).ready(function() {
    var m = localStorage.getItem('card_counter'); 
    //COUNTER
      if (m === null) {
          m = 0;
      }
      localStorage.setItem("card_counter", m);
      document.getElementById('counter').innerHTML = m;

    $('#btnGo').click(function() {
      var m = localStorage.getItem('card_counter');
      if (m === null) {
          m = 0;
      }
      m++;
      localStorage.setItem("card_counter", m);
      document.getElementById('counter').innerHTML = m;
    });

    sly.pattern = new Sly('#frame_pattern',{ 
    //CAROUSEL_PATTERN
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateOn: 'click',
      scrollBy: 1,
      mouseDragging: 1,
      swingSpeed: 0.2,
      dragHandle: 1,
      speed: 600,
      startAt: 2
    }).init();

    sly.tree = new Sly('#frame_tree',{ 
    //CAROUSEL_TREE
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateOn: 'click',
      scrollBy: 1,
      mouseDragging: 1,
      swingSpeed: 0.2,
      dragHandle: 1,
      speed: 600,
      startAt: 2
    }).init();

    sly.gifts = new Sly('#frame_gifts',{ 
    //CAROUSEL_GIFTS
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateOn: 'click',
      scrollBy: 1,
      mouseDragging: 1,
      swingSpeed: 0.2,
      dragHandle: 1,
      speed: 600,
      startAt: 2
    }).init();

    sly.pattern.on('change', pattern_changed);
    sly.tree.on('change', tree_changed);
    sly.gifts.on('change', gifts_changed);
    pattern_changed();
    tree_changed();
    gifts_changed();

    $('#pattern').show();
    $('#tree').hide();
    $('#gifts').hide();
    $('#back_b').show();
    $('#back_p').hide();
    $('#back_t').show();
    $('#back_g').show();
    $('#btnGo').on('click', function(){                          
    //CHECK_FORM
        if(document.getElementById('txtMail').value.length!=0) {
            if(document.getElementById('txtMail').value.indexOf('@')<1) { 
                document.getElementById('err_mail').style.display="block";
                event.preventDefault();
                return false;
            };
            if(document.getElementById('txtMail').value.indexOf<1) {
                document.getElementById('err_mail').style.display="block"; 
                event.preventDefault();
                return false;           
            }
        };
         if(!$("#accept").is(':checked')) {
            document.getElementById('err_acc').style.display="block";
            event.preventDefault();
            return false;
        }; 
        return true;
    });
});

function pattern_changed() {     
//PUT_ON_DIV_FOR_CARD
    sly.pattern_img = $('#frame_pattern .active img').attr('src');
    log(sly.pattern_img);
    document.getElementById('back_p').innerHTML='<img src="'+sly.pattern_img+'" alt="pattern">';
};

function tree_changed() {         
//PUT_ON_DIV_FOR_CARD
    sly.tree_img = $('#frame_tree .active img').attr('src');
    log(sly.tree_img);
    document.getElementById('back_t').innerHTML='<img src="'+sly.tree_img+'" alt="tree">';
};

function gifts_changed() {          
//PUT_ON_DIV_FOR_CARD
    sly.gifts_img = $('#frame_gifts .active img').attr('src');
    log(sly.gifts_img);
    document.getElementById('back_g').innerHTML='<img src="'+sly.gifts_img+'" alt="gifts">';
};

function funcClickIntro() {
    $('#intro').css('color','#fff');
    $('#card').css('textDecoration','none');
    $('#card').css('fontWeight','normal');
    $('#rowSend').css('display','none');
    $('#rowCarousel').hide();
    $('#rowBtn').hide();
    $('#back_b').hide();
    $('#back_p').hide();
    $('#back_t').hide();
    $('#back_g').hide();
    $('#row_intro').show();
};

function funcClickCard() {    
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#pattern').show();
    $('#tree').hide();
    $('#gifts').hide();
    $('#back_b').show();
    $('#back_p').hide();
    $('#back_t').show();
    $('#back_g').show();    
    $('#rowFlip').css('display','none');
};

function funcClickSkip() {    
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#intro').css('fontWeight','normal');
    $('#rowFlip').css('display','none');
    $('#rowCarousel').css('display','block');
    $('#rowBtn').css('display','block');
    $('#card').css('fontWeight','bold');
    $('#row_intro').hide();
    $('#pattern').show();
    $('#tree').hide();
    $('#gifts').hide();
    $('#back_b').show();
    $('#back_p').hide();
    $('#back_t').show();
    $('#back_g').show();
};

function funcClickPattern() {
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#rowCarousel').css('display','block');
    $('#rowSend').css('display','none');
    $('#rowFlip').css('display','none');
    $('#rowBtn').css('display','block');
    $('#pattern').show();
    $('#tree').hide();
    $('#gifts').hide();    
    $('#back_b').show();
    $('#back_p').hide();
    $('#back_t').show();
    $('#back_g').show();
};

function funcClickTree() {
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#rowCarousel').css('display','block');
    $('#rowSend').css('display','none');
    $('#rowFlip').css('display','none');
    $('#rowBtn').css('display','block');
    $('#tree').show();
    $('#pattern').hide();
    $('#gifts').hide();
    $('#back_b').show();
    $('#back_p').show();
    $('#back_t').hide();
    $('#back_g').show();
};

function funcClickGifts() {
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#rowCarousel').css('display','block');
    $('#rowSend').css('display','none');
    $('#rowFlip').css('display','none');
    $('#rowBtn').css('display','block');
    $('#gifts').show();
    $('#pattern').hide();
    $('#tree').hide();
    $('#back_b').show();
    $('#back_p').show();
    $('#back_t').show();
    $('#back_g').hide();
};

function funcClickMessage() {
    document.getElementById('front_p').innerHTML='<img src="'+sly.pattern_img+'" alt="pattern">';
    document.getElementById('front_t').innerHTML='<img src="'+sly.tree_img+'" alt="tree">';
    document.getElementById('front_g').innerHTML='<img src="'+sly.gifts_img+'" alt="gifts">';
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','bold');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','normal');
    $('#rowCarousel').css('display','none');
    $('#rowSend').css('display','none');
    $('#rowFlip').css('display','block');
    $('#rowBtn').css('display','block');
    $(document).ready(function(){
    //HINT
        $('#btnMessage').tooltip({
            title : 'mouse over on your card',
            delay: { show: 500, hide: 500 }
        });
    });
    var elements = document.querySelectorAll('textarea');
    var cardP = document.getElementById('back_p')
    function checkValidity() {};

    for (i=0; i<elements.length; i++) {
     (function(element) {
       var id = element.getAttribute('id');
       element.value = sessionStorage.getItem(id);
    // SAVE_TEXTAREA
       element.oninput = function() {
         sessionStorage.setItem(id, element.value);
         checkValidity();
       };
     })(elements[i]);
    }
};

function funcClickSend() {
    $('#btnPattern .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnTree .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnGifts .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnMessage .row_progress__list___item____link').css('fontWeight','normal');
    $('#btnSend .row_progress__list___item____link').css('fontWeight','bold');
    $('#rowCarousel').css('display','none');
    $('#rowSend').css('display','block');
    $('#rowFlip').css('display','none');
    $('#rowBtn').css('display','block');
 
};
document.getElementById('btnPattern').addEventListener("click", funcClickPattern);
document.getElementById('btnTree').addEventListener("click", funcClickTree);
document.getElementById('btnGifts').addEventListener("click", funcClickGifts);
document.getElementById('btnMessage').addEventListener("click", funcClickMessage);
document.getElementById('btnSend').addEventListener("click", funcClickSend);









