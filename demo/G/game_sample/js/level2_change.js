var Level2_change = Framework.Class(Framework.Level , {

    load: function() {
      var c=1;
      this.background = new Framework.Sprite(define.imagePath + 'L1B.jpg');
      this.background.scale = 0.85;
      this.background.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
      this.rotation = 0 ;
      this.Sheep_3 = new Framework.Sprite(define.imagePath + 'Sheep_3.png');
      this.Sheep_3.position = {
        x:275,
        y:625
      }
      this.rootScene.attach(this.Sheep_3);

      this.Sheep_2 = new Framework.Sprite(define.imagePath + 'Sheep_2.png');
      this.Sheep_2.position = {
        x:180,
        y:620
      }
      this.rootScene.attach(this.Sheep_2);
      // this.Sheep_2 = new Framework.AnimationSprite({url:['Sheep_2.png', 'S2_walk.png']}); //多張圖片
      // this.Sheep_2.position = {x:1, y:600};
      // Sheep_2.start({from:1, to: 2});
      // this.rootScene.attach(this.Sheep_2);

      this.Sheep_1 = new Framework.Sprite(define.imagePath + 'Sheep_1.png');
      this.Sheep_1.position = {
        x:1,
        y:610
      }
      this.rootScene.attach(this.Sheep_1);

        // //0 空地  1牆壁  2空木箱  3增加炸彈木箱  4增加威力木箱  -1增加炸彈數  -2增加炸彈power
        // this.mapArray = [];
        // this.mapArray.push([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
        // this.mapArray.push([1,0,0,2,2,1,0,0,2,2,1,2,0,0,2,0,0,1,2,2,0,1]); //2
        // this.mapArray.push([1,0,1,0,1,0,1,2,1,0,1,0,1,0,1,0,1,0,1,0,1,1]); //3
        // this.mapArray.push([1,0,2,2,2,0,0,0,2,2,0,0,2,0,2,0,0,3,1,0,0,1]); //4
        // this.mapArray.push([1,2,1,0,1,2,1,0,1,0,1,5,1,2,1,1,1,0,1,2,1,1]); //5
        // this.mapArray.push([1,0,2,0,1,0,0,2,2,0,0,0,2,0,0,0,2,0,2,0,0,1]); //6
        // this.mapArray.push([1,2,1,0,1,2,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]); //7
        // this.mapArray.push([1,2,0,4,2,0,1,2,2,0,2,2,0,0,2,2,0,2,0,2,0,1]); //8
        // this.mapArray.push([1,2,1,0,1,0,1,1,1,0,1,0,1,2,1,0,1,0,1,0,1,1]); //9
        // this.mapArray.push([1,0,0,0,0,1,0,2,2,2,2,0,0,0,2,0,0,0,2,0,2,1]); //10
        // this.mapArray.push([1,0,1,0,1,2,1,0,1,0,1,0,1,2,1,0,1,0,1,2,0,1]); //11
        // this.mapArray.push([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]); //12
        //
        // this.map = new Map(this.mapArray);
        // this.map.load();
    },

    initialize: function() {

        // this.map.init();
        // this.map.setPlayerPosition({x:1,y:1});
        // this.map.addMonster({x:3, y:4});
        // this.map.addMonster({x:3, y:9});
        // this.map.addMonster({x:9, y:4});
        // this.map.addMonster({x:13, y:7});
        // this.map.addMonster({x:17, y:9});
        // this.map.addMonster({x:15, y:1});
    },

    update: function() {
        // this.map.update();
    },

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        // this.map.draw(parentCtx);
        this.background.draw();
        this.Sheep_3.draw();
        this.Sheep_2.draw();
        this.Sheep_1.draw();
    },

    keydown:function(e, list){
      if(e.key === "1"){
        c=1;
      }
      if(e.key === "2"){
        c=2;
      }
      if(e.key === "3"){
        c=3;
      }

      if(e.key === "Right"){

        if(c==1){
            this.Sheep_1.position.x +=5;
        }
        if(c==2){
          this.Sheep_2.position.x +=5;
        }
        if(c==3){
            this.Sheep_3.position.x +=5;
        }


      }else if(e.key === "Left"){
        this.pressWalk = true;
        if(c==1){
            this.Sheep_1.position.x -=5;

        }
        if(c==2){
          this.Sheep_2.position.x -=5;
        }
        if(c==3){
            this.Sheep_3.position.x -=5;
        }


      }
      // if(e.key === 'Left') {
      //     if(this.checkIsWalkAble(playerPosition.x-1,playerPosition.y)){
      //         //this.player1.walk({x:-1,y:0});
      //         this.playerWalkDirection = {x:-1,y:0};
      //         this.pressWalk = true;
      //         this.keyPress = "Left";
      //     }
      // }
      //
      // if(e.key === 'Right') {
      //     if(this.checkIsWalkAble(playerPosition.x+1,playerPosition.y)){
      //         //this.player1.walk({x:1,y:0});
      //         this.playerWalkDirection = {x:1,y:0};
      //         this.pressWalk = true;
      //         this.keyPress = "Right";
      //     }
      // }
        // Framework.DebugInfo.Log.warning(e.key);
        //
        // this.map.keydown(e, list);
        // if(e.key === 'F11') {
        //     if(!this.isFullScreen) {
        //         Framework.Game.fullScreen();
        //         this.isFullScreen = true;
        //     } else {
        //         Framework.Game.exitFullScreen();
        //         this.isFullScreen = false;
        //     }
        //
        // }
    },

    keyup:function(e, list){



        // this.map.keyup(e, list);
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        // this.click(e[0]);
    },

    click: function (e) {

    },
});
