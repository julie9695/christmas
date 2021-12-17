let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그





// var angle = 0;
// setInterval(function(){
// angle+=3;
// $("#record").rotate(angle);


// },50);


$(document).ready(function(){
    $("#music_list").click(function(){
        $("#record").css("animation-play-state", "running");
        
        $('#pause').hide();
        $('#play').show();

        // $("#player").animate({"marginLeft":220}, 300).animate({"marginLeft":150}, 700);
        // $(".player-img").animate({"right":870}, 300).animate({"right":800}, 700);
        // $("#record").animate({"right":720}, 300).animate({"right":650}, 700);
        // $("#tt").animate({"right":620}, 300).animate({"right":550}, 700);

        $(".player-img").css("animation-play-state", "running");

        // $("#player-img").animate({"opacity":60}, 300).animate({"opacity":100},700);

       
    });


   

});

$(function(){
    // ===== List 생성하기 =====
    addItem('Ring Jingle Bells', './musics/bells.png', './musics/bells.mp3');
    addItem('Merry Christmas', './musics/wish.png', './musics/wish.mp3');
    addItem('Christmas - Noel', './musics/noel.png', './musics/noel.mp3');
    addItem('My Homecoming', './musics/homecoming.png', './musics/homecoming.mp3');
    addItem('Joy To The World', './musics/world.png', './musics/world.mp3');
    addItem('On Silent Night', './musics/silent.png', './musics/silent.mp3');
    addItem('O Christmas Tree', './musics/joy.png', './musics/tree.mp3');
    setPlayer(0); // 0번 곡으로 초기값 설정

    $('#music_list').hide();
    $('.item-img').hide();
    $('.ff').hide();
    // $('.player_back2').hide();

    // ===== 재생 이벤트 등록 =====
    // $('#prev').click(function(){
    //     playPrev();   
    //     $('#pause').hide();
    // });

    $('#aa').click(function(){
        playPrev();   
        $('#pause').hide();
        $('#play').show();
    });

    
    $('.vv').hide();
    $('.zz').click(function(){
        $('.black').hide();
        $('.zz').hide();
        $('.vv').show();
        $('#record').hide();
        $('.player-img').hide();

        $(".player-progress").animate({"left":630}, 500);
        $(".player-title").animate({"left":700}, 500).animate({"top":300}, 500);
        $("#play").animate({"left":730}, 500);
        $("#pause").animate({"left":730}, 500);
        $("#stop").animate({"left":810}, 500);



    });

    $('.vv').click(function(){
        $('.black').fadeIn();
        $('.zz').show();
        $('.vv').hide();
        $('#record').fadeIn();
        $('.player-img').fadeIn();

        $(".player-progress").animate({"left":400}, 500);
        $(".player-title").animate({"left":470}, 500).animate({"top":330}, 500);
        $("#play").animate({"left":500}, 500);
        $("#pause").animate({"left":500}, 500);
        $("#stop").animate({"left":580}, 500);

    });


    $('#stop').click(function(){
        Pause();   
        $('#pause').show();
        $('#play').hide();
        $("#record").css("animation-play-state", "paused");

    });

    $('#pause').click(function(){
        Play();
        $("#record").css("animation-play-state", "running");
        // $("#record").css("animation-play-state", "running");
        // $("#record").css("animation-play-state", "paused");
        $('#pause').hide();

        $('#play').show();
    });

    $("#position").css("animation-play-state", "running");

    $('#next').click(function(){
        playNext();
        $('#pause').hide();
    });   

    $('#bb').click(function(){
        playNext();
        $('#pause').hide();
        $('#play').show();
    });  
    
    $('#play').click(function(){
        Pause();   
        $("#record").css("animation-play-state", "paused");
        $('#pause').show();
        $('#play').hide();
        
    });

    // $('#music_list').click(function(){
    //     $('#record').hide();
    //     // $('.player_back2').show();
    // }); 
    $('.fa-times').hide();
    $('#play').hide();

    $('.fa-bars').click(function(){
       $('#music_list').slideDown(1000);
       $('.fa-bars').hide();
       $('.fa-times').fadeIn();
       $(".player-progress").animate({"left":230}, 500);
       $(".player-title").animate({"left":300}, 500);
       $("#play").animate({"left":330}, 500);
       $("#pause").animate({"left":330}, 500);
       $("#stop").animate({"left":410}, 500);
       $(".player-img").animate({"right":700}, 500);
       $("#record").animate({"right":550}, 500);
       $("#tt").animate({"right":450}, 500);
       $("#bb").animate({"right":390}, 400);
       $('.ff').fadeIn();
    });

    $('.fa-times').click(function(){
        $('#music_list').hide();
        $('.fa-times').hide();
        $(".player-progress").animate({"left":400}, 500);
        $(".player-title").animate({"left":470}, 500);
        $("#play").animate({"left":500}, 500);
        $("#pause").animate({"left":500}, 500);
        $("#stop").animate({"left":580}, 500);
        $('.fa-bars').show();
        $("#player").animate({"marginLeft":300}, 500);
        $(".player-img").animate({"right":530}, 500);
        $("#record").animate({"right":380}, 500);
        $("#tt").animate({"right":400}, 500);
        $("#bb").animate({"right":20}, 400);
        $('.ff').hide();
    }); 

    // ==== list 클릭후 ====
    // $('#music_list .item-title').click(function(){
    //     $(this).css('color', '#FF6B6B');
    //     console.log($(this))
    // });

    // ===== 프로그래스바 채우기 =====
    setInterval(function(){
        let progress = getProgress() * 100;
        $('.player-progress > div').css('width', progress + '%');
        let marginLeft = parseFloat( $('.player-progress > div').css('width') );
        $('#deer').css('margin-left', marginLeft);

    }, 100);

});







// ===== List에 아이템을 추가하는 함수 =====
function addItem(title, image, audio){
    let newItem = $('#example_item').clone(true);
    newItem.removeProp('id');
    newItem.show();

    // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
    newItem.find('.item-title').text(title);
    newItem.find('.item-img').css('background-image', "url('" + image + "')");
    newItem.find('.item-audio > source').attr('src', audio);
    
    // 리스트 아이템 클릭시 이벤트 등록
    newItem.click(function(){
        currentAudio[0].pause(); // 재생중인 오디오 중지
        currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
        $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

        setPlayer( $(this).index() ); // setPlayer 함수 호출 (플레이어로 정보 전달)
    })

    // 리스트에 아이템 추가
    $('#music_list').append(newItem);
}

// ===== Player에 정보 넣는 함수 =====
function setPlayer(index){
    currentPlaying = index;
    currentAudio = $('#music_list > .item').eq(index).find('.item-audio');
    

    // 아이템에 들어가는 정보에 따라 변경
    let title = $('#music_list > .item').eq(index).find('.item-title').text();
    let image = $('#music_list > .item').eq(index).find('.item-img').css('background-image');
    

    $('.player-title').text(title)
    $('.player-img').css('background-image', image);

    $('#music_list > .item').removeClass('playing')
    $('#music_list > .item').eq(index).addClass('playing')

    $('.all > img').attr('src', './musics/0' + (index + 1) + '.gif')
}

// ===== 재생 컨트롤 함수 =====
function playPrev(){
    currentPlaying--;
    if(currentPlaying < 0 ) currentPlaying = $('#music_list > .item').length - 1;

    $('#music_list > .item').eq(currentPlaying).click();
}

function Play(){
    if(currentAudio[0].paused) currentAudio[0].play();
    
}
function Pause(){
    currentAudio[0].pause();
}
function playNext(){
    currentPlaying++;
    if(currentPlaying >= $('#music_list > .item').length ) currentPlaying = 0;

    $('#music_list > .item').eq(currentPlaying).click();
}

function getProgress(){
    return currentAudio[0].currentTime / currentAudio[0].duration;
}