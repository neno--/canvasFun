function Pickup()
{
	this.InitPickup = function(texture, x, y, z, frameCount, frameRate)
	{
		this.InitAnimationManager(texture, x, y, z, frameCount, frameRate);
		
		return this;
	}
	
	this.DisposePickup = function()
	{
		this.DisposeAnimationManager();
	}
	
	this.Update = function(deltaTime, context, deltaX, deltaY)
	{
		if(this.BoundingBox().Intersects(player.BoundingBox()))
		{
			this.DisposePickup();
		}
	}
}

Pickup.prototype = new AnimationManager;