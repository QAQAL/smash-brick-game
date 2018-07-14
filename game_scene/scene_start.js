var SceneStart = function(game) {
    var s = {
        game: game,
    }
    // 初始化
    s.draw = function() {
        // draw labels
        game.context.fillText('按 k 开始游戏', 100, 290)
    }
    s.update = function() {

    }

    game.registerAction('k', function(){
        scene = Scene(game)
        game.replaceScene(scene)
    })

    return s
}
