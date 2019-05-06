function Player()
{
    this.velocity = 50;
	
    this.right = false;
	this.left = false;
	
    this.level = null;
	
    this.InitPlayer = function(level)
    {
        this.InitAnimationManager(player_idle_left, 300, 600 - 48 - 48, 4, 6, 20);
        this.level = level;
		
        return this;
    }

    this.keyDown = function(event)
    {
        if ((event.keyCode == 37 || event.keyCode == 65) && !this.left)
        {
            this.left = true;
        }
		
        if ((event.keyCode == 39 || event.keyCode == 68) && !this.right)
        {
            this.right = true;
        }
    }

    this.keyUp = function(event)
    {
        if (event.keyCode == 37 || event.keyCode == 65)
        {
            this.left = false;
        }
        if (event.keyCode == 39 || event.keyCode == 68)
        {
            this.right = false;
        }
    }

	this.Update = function (deltaTime, context, deltaX, deltaY)
    {
        if (this.left)
		{
            this.x -= this.velocity * deltaTime;
		}
        if (this.right)
		{
            this.x += this.velocity * deltaTime;
		}

        if ((this.right || this.left) && !(this.left && this.right))
        {
            var collision = false;
			
            do
            {
                var position = this.left ? this.x : this.x + this.frameWidth;
                var curTile = this.level.CurrentTile(position);
                var terrainHeight = this.level.TerrainHeight(curTile);
                var playerHeight = context.canvas.height - (this.y + this.texture.height);

                if (playerHeight  < terrainHeight)
                {
                    collision = true;
					
                    if (this.right)
					{
                        this.x = this.level.tileWidth * curTile - this.frameWidth - 1;
                    }
					else
					{
                        this.x = this.level.tileWidth * (curTile + 1);
					}
				}
                else
                {
                    collision = false;
                }
            }  
			while (collision)
        }

        if (this.x > this.level.tiles.length * this.level.tileWidth - this.frameWidth - 1)
		{
            this.x = this.level.tiles.length * this.level.tileWidth - this.frameWidth - 1;
		}
		
        if (this.x > context.canvas.width - this.frameWidth + deltaX)
		{
            objectManager.deltaX = this.x - (context.canvas.width - this.frameWidth);
		}
		
        if (this.x < 0)
		{
            this.x = 0;
		}
		
        if (this.x < deltaX)
		{
            objectManager.deltaX = this.x;
		}

        if (this.x > context.canvas.width - this.frameWidth + deltaX)
		{
            objectManager.deltaX = this.x - (context.canvas.width - this.frameWidth);
		}
        if (this.x < deltaX)
		{
            objectManager.deltaX = this.x;
		}
    }
}

Player.prototype = new AnimationManager;