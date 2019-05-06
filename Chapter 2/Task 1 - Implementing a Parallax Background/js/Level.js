function Level()
{
    this.tiles = new Array();
	
    this.tileWidth = 0;
    this.tileHeight = 0;

    this.InitLevel = function()
    {
		this.tileWidth = tile.width;
		this.tileHeight = tile.height;
		
		for(var i = 0; i < 50; i++)
		{
			this.tiles[i] = 1;
		}
		
        this.AddTiles();

        return this;
    }

    this.AddTiles = function()
    {
        for (var x = 0; x < this.tiles.length; ++x)
        {
            for (var y = 0; y < this.tiles[x]; ++y)
            {
                new DrawableObject().InitDrawableObject(tile, x * this.tileWidth, 600 - (y + 1) * this.tileHeight, 4);
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