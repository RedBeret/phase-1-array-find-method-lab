function superbowlWin(array) {
    let win = array.find(function (game) {
        return game.result === "W";
    });
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
