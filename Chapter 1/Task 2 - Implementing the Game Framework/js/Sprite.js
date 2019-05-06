Sprite.prototype = new Object;

function Sprite()
{
    this.texture = null;
 
    this.InitSprite = function(texture, x, y, z)
    {
        this.InitObject(x, y, z);
        this.texture = texture;

        return this;
    }

    this.DisposeSprite = function()
    {
        this.DisposeObject();
    }

    this.Draw = function (deltaTIme, context, deltaX, deltaY)
    {
        context.drawImage(this.texture, this.x - deltaX, this.y - deltaY);
    }
}