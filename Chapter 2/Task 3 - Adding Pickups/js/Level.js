function Level()
{
    this.tiles = new Array();
	this.pickup = new Object();
	
    this.tileWidth = 0;
    this.tileHeight = 0;

    this.InitLevel = function(width, height)
    {
		this.tileWidth = tile.width;
		this.tileHeight = tile.height;
		
		for(var i = 0; i < 50; i++)
		{
			this.tiles[i] = 1;
		}

		this.pickup['1'] = 'Gem';
		
        this.AddTile(width, height);
		this.AddPickup(width, height);

        return this;
    }

    this.AddTile = function(width, height)
    {
        for (var x = 0; x < this.tiles.length; ++x)
        {
            for (var y = 0; y < this.tiles[x]; ++y)
            {
                new DrawableObject().InitDrawableObject(tile, x * this.tileWidth, height - (y + 1) * this.tileHeight, 4);
            }
        }
    }
	
	this.AddPickup = function(width, height)
	{
		for(var i = 0; i < this.tiles.length; ++i)
		{
			if(this.pickup[i])
			{
				var x = i * this.tileWidth + this.tileWidth / 2;
				var y = height - this.TerrainHeight(i);
				
				if(this.pickup[i] == 'Berry')
				{
					new Pickup().InitPickup(berry, x - berry.width / 2, y - berry.height, 6, 1, 1);
				}
			}
		}
	}

    this.CurrentTile = function(x)
    {
        return parseInt( x / this.tileWidth);
    }

    this.TerrainHeight = function(index)
    {
        if (index < 0 || index > this.tiles.length) 
		{
			return 0;
		}

        return this.tiles[index] *  this.tileHeight;
    }
}