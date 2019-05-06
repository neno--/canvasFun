function Level()
{
    this.tiles = new Array();
    this.tileWidth = 0;
    this.tileHeight = 0;

    this.InitLevel = function()
    {
		this.tileWidth = tile.width;
		this.tileHeight = tile.height;
		
        this.tiles[0] = 3;
        this.tiles[1] = 2;
        this.tiles[2] = 1;
        this.tiles[3] = 1;
        this.tiles[4] = 1;
        this.tiles[5] = 1;
        this.tiles[6] = 1;
        this.tiles[7] = 1;
        this.tiles[8] = 2;
        this.tiles[9] = 3;
		this.tiles[10] = 2;
		this.tiles[11] = 1;
		this.tiles[12] = 1;

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