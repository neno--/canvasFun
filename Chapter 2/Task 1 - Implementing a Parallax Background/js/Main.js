var objectManager = null;

var player_idle_left = new Image();
player_idle_left.src = "textures/idle_right.png";

var background = new Image();
background.src = "textures/background.jpg";

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
        this.background = new ScrollingBackground().InitScrollingBackground(background, 0, 0, 1, 800, 600, 0.5);
        this.player = new Player().InitPlayer(this.level);
		
        return this;
    }
}