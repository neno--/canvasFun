function ScrollingBackground()
{
	this.width = 0;
    this.height = 0;

    this.deltaScroll = 1;

    this.InitScrollingBackground = function(texture, x, y, z, width, height, deltaScroll)
    {
        this.InitDrawableObject(texture, x, y, z);
		
        this.width = width;
        this.height = height;
        this.deltaScroll = deltaScroll;
		
        return this;
    }
	
    this.DisposeScrollingBackground = function()
    {
        this.DisposeDrawableObject();
    }
	
	this.UpdateBackground = function(canvas, newPosition, newFillArea, newScrollPosition)
    {
        var xOffset = Math.abs(newScrollPosition[0]) % this.texture.width;
        var yOffset = Math.abs(newScrollPosition[1]) % this.texture.height;
        var left = newScrollPosition[0] < 0 ? this.texture.width - xOffset : xOffset;
        var top = newScrollPosition[1] < 0 ? this.texture.height - yOffset : yOffset;
        var width = newFillArea[0] < this.texture.width - left ? newFillArea[0] : this.texture.width - left;
        var height = newFillArea[1] < this.texture.height - top ? newFillArea[1] : this.texture.height - top;
        
        canvas.drawImage(this.texture, left, top, width, height, newPosition[0], newPosition[1], width, height);
        
        return [width, height];
    }

    this.Draw = function(deltaTime, canvas, deltaX, deltaY)
    {
        var background = [0, 0];
        
        for (var y = 0; y < this.height; y += background[1])
        {
            for (var x = 0; x < this.width; x += background[0])
            {
				var newPosition = [this.x + x, this.y + y];
                var newFillArea = [this.width - x, this.height - y];
                var newScrollPosition = [0, 0];
				
                if (x == 0) 
				{
					newScrollPosition[0] = deltaX * this.deltaScroll;
				}
				
                if (y == 0) 
				{
					newScrollPosition[1] = deltaY * this.deltaScroll;
				}
				
                background = this.UpdateBackground(canvas, newPosition, newFillArea, newScrollPosition);
            }
        }
    }
}

ScrollingBackground.prototype = new DrawableObject();