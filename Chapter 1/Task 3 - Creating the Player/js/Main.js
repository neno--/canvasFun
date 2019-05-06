var frameTime = 0.0333;

var objectManager = null;

var player_idle = new Image();
player_idle.src = "textures/idle_right.png";

window.onload = function()
{
	new ObjectManager().InitObjectManager();
}

function Main()
{
    this.Initialise = function()
    {
        this.player = new Player().InitPlayer(player_idle);
		
        return this;
    }
}