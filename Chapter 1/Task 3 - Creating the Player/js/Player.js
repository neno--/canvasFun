function Player()
{
    this.velocity = 50;

    this.InitPlayer = function()
    {
        this.InitDrawableObject(player_idle, 0, 0, 0);
		
        return this;
    }
}

Player.prototype = new DrawableObject;