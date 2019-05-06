function ObjectManager()
{
    this.Objects = new Array();
    this.lastFrame = new Date().getTime();
	
	this.deltaX = 0;
    this.deltaY = 0;

    this.main = null;
	
    this.canvas = null;
    this.context = null;

    this.InitObjectManager = function()
    {
        objectManager = this;

        document.onkeydown = function(key)
		{
			objectManager.keyDown(key);
		}
		
        document.onkeyup = function(key)
		{
			objectManager.keyUp(key);
		}

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.main = new Main().Initialise(this.canvas.width, this.canvas.height);
        
        setInterval(function(){objectManager.Draw();}, (1 / 30));
        
        return this;        
    }
	
	this.AddObject = function(Object)
    {
        this.Objects.push(Object);
        this.Objects.sort(function(a,b){return a.z - b.z;})
    };
    
    this.RemoveObject = function(Object)
    {
        this.Objects.RemoveObject(Object);
    }

    this.keyDown = function(key)
    {
        for (obj in this.Objects)
        {
            if (this.Objects[obj].keyDown)
            {
                this.Objects[obj].keyDown(key);
            }
        }
    }

    this.keyUp = function(key)
    {
        for (obj in this.Objects)
        {
            if (this.Objects[obj].keyUp)
            {
                this.Objects[obj].keyUp(key);
            }
        }
    }
	
    this.Draw = function ()
    {
        var frame = new Date().getTime();
        var deltaTime = (frame - this.lastFrame)/1000;
        this.lastFrame = frame;
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (obj in this.Objects)
        {
			if (this.Objects[obj].update)
            {
                this.Objects[obj].update(deltaTime, this.context, this.deltaX, this.deltaY);
            }
				
            if (this.Objects[obj].Draw)
            {
                this.Objects[obj].Draw(deltaTime, this.context, this.deltaX, this.deltaY);
            }
        }

        this.context.drawImage(this.canvas, 0, 0);     
    };
}

Array.prototype.Remove = function(from, to)
{
	var rest = this.slice((b || a) + 1 || this.length);
    
    if(a < 0)
	{
        this.length + a;
	}
    else
	{
        this.length = a;
	}

    return this.push.apply(this, rest);
};

Array.prototype.RemoveObject = function(object)
{
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] === object)
        {
            this.Remove(i);
            break;
        }
    }
}