var frameTime = 0.0333;

var objectManager = null;

var player_idle_left = new Image();
player_idle_left.src = "textures/idle_right.png";

var tile = new Image();
tile.src = "textures/tile.png";

window.onload = function()
{
	new ObjectManager().InitObjectManager();
}

function Main()
{
    this.Initialise = function()
    {
		this.level = new Level().InitLevel();
        this.player = new Player().InitPlayer(this.level);
        return this;
    }
}