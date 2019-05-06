function DrawableObject()
{
    this.texture = null;
	
	this.InitDrawableObject = function(texture, x, y, z)
    {
        this.InitObject(x, y, z);
        this.texture = texture;
		
        return this;
    }
	
	this.BoundingBox = function()
	{
		return new Rectangle().InitRectangle(this.x, this. y, this.texture.width, this.texture.height);
	}
	
	this.DisposeDrawableObject = function()
    {
        this.DisposeObject();
    }
	
    this.Draw = function(deltaTime, context, deltaX, deltaY)
    {
        context.drawImage(this.texture, this.x - deltaX, this.y - deltaY);
    }
}

DrawableObject.prototype = new Object;