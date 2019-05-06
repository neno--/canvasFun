function DrawableObject()
{
    this.texture = null;

    this.InitDrawableObject = function(texture, x, y, z)
    {
        this.InitObject(x, y, z);
        this.texture = texture;
        return this;
    }
	
	this.Draw = function(deltaTime, context, deltaX, deltaY)
    {
        context.drawImage(this.texture, this.x - deltaX, this.y - deltaY);
    }

    this.DisposeDrawableObject = function()
    {
        this.DisposeObject();
    }
}

DrawableObject.prototype = new Object;