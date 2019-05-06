function Enemy()
{
	this.velocity = 30;

	this.InitEnemy = function(texture, x, y, z, frameCount, frameRate)
	{
		this.InitAnimationManager(texture, x, y, z, frameCount, frameRate);
		
		return this;
	}
	
	this.DisposeEnemy = function()
	{
		this.DisposeAnimationManager();
	}
	
	this.Update = function(deltaTime, context, deltaX, deltaY)
	{
		this.x -= this.velocity * deltaTime;
		
		if(this.BoundingBox().Intersects(player.BoundingBox()))
		{
			this.DisposeEnemy();
		}
	}
}

Enemy.prototype = new AnimationManager;