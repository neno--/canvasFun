function Player()
{
    this.velocity = 50;
	
    this.up = false;
	this.down = false;
	this.left = false;
	this.right = false;
	
    this.InitPlayer = function()
    {
        this.InitAnimationManager(player_idle_left, 300, 300, 1, 6, 20);
		
        return this;
    }

    this.keyDown = function(key)
    {
		if (key.keyCode == 38 || key.keyCode == 87)
        {
            this.up = true;
        }
		
		if (key.keyCode == 40 || key.keyCode == 83)
        {
            this.down = true;
        }
		
        if (key.keyCode == 37 || key.keyCode == 65)
        {
            this.left = true;
        }
		
        if (key.keyCode == 39 || key.keyCode == 68)
        {
            this.right = true;
        }
    }

    this.keyUp = function(key)
    {
		if (key.keyCode == 38 || key.keyCode == 87)
        {
            this.up = false;
        }
		
		if (key.keyCode == 40 || key.keyCode == 83)
        {
            this.down = false;
        }
	
        if (key.keyCode == 37 || key.keyCode == 65)
        {
            this.left = false;
        }
        if (key.keyCode == 39 || key.keyCode == 68)
        {
            this.right = false;
        }
    }

	this.Update = function (deltaTime, context, deltaX, deltaY)
    {
		if(this.up)
		{
			this.y -= this.velocity * deltaTime;
		}
		if(this.down)
		{
			this.y += this.velocity * deltaTime;
		}
        if (this.left)
		{
            this.x -= this.velocity * deltaTime;
		}
        if (this.right)
		{
            this.x += this.velocity * deltaTime;
		}
    }
}

Player.prototype = new AnimationManager;