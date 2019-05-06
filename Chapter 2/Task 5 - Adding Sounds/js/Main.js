var objectManager = null;

var player = null;
var score = 0;

var player_idle_left = new Image();
player_idle_left.src = "textures/idle_right.png";

var sky = new Image();
sky.src = "textures/sky.png";

var cloud = new Image();
cloud.src = "textures/cloud.png";

var mountain = new Image();
mountain.src = "textures/mountain.png";

var forest = new Image();
forest.src = "textures/forest.png";

var tile = new Image();
tile.src = "textures/tile.png";

var berry = new Image();
berry.src = "textures/berry.png";

var enemy_left = new Image();
enemy_left.src = "textures/enemy_left.png";

var effect = new Audio("audio/sound.wav");
effect.load();

window.onload = function()
{
	new ObjectManager().InitObjectManager();
}

function Main()
{
    this.Initialise = function(width, height)
    {
        this.forest = new ScrollingBackground().InitScrollingBackground(forest, 0, 0, 4, 800, 600, 0.9);
		this.mountain = new ScrollingBackground().InitScrollingBackground(mountain, 0, 0, 3, 800, 600, 0.75);
        this.cloud = new ScrollingBackground().InitScrollingBackground(cloud, 0, 0, 2, 800, 600, 0.5);
		this.sky = new ScrollingBackground().InitScrollingBackground(sky, 0, 0, 1, 800, 600, 0.5);
		this.level = new Level().InitLevel(width, height);
		player = new Player().InitPlayer(this.level);
		
        return this;
    }
}