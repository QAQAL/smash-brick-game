var __main = function() {
    var images = {
        ball: 'game_image/ball.png',
        block: 'game_image/block.png',
        paddle: 'game_image/paddle.png',
    }
    var game = Game(30, images, function(g){
        var s = SceneStart(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
