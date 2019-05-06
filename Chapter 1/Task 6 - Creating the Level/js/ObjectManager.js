function ObjectManager()
{
    this.objects = new Array();
	
    this.lastFrame = new Date().getTime();
	
    this.deltaX = 0;
    this.deltaY = 0;
	
    this.main = null;
	
    this.canvas = null;
    this.context = null;
	
    this.backBuffer = null;
    this.backBufferContext = null;

    this.InitObjectManager = function()
    {
        objectManager = this;

        document.onkeydown = function(event)
		{
			objectManager.keyDown(event);
		}
		
        document.onkeyup = function(event)
		{
			objectManager.keyUp(event);
		}

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
		
        this.backBuffer = document.createElement('canvas');
        this.backBuffer.width = this.canvas.width;
        this.backBuffer.height = this.canvas.height;
        this.backBufferContext = this.backBuffer.getContext('2d');

        this.main = new Main().Initialise();
        
        setInterval(function() {objectManager.Draw();}, frameTime);
        
        return this;        
    }
	
	this.AddObject = function(Object)
    {
        this.objects.push(Object);
        this.objects.sort(function(a,b){return a.z - b.z;})
    };

    this.RemoveObject = function(Object)
    {
        this.objects.removeObject(Object);
    }

    this.keyDown = function(event)
    {
        for (obj in this.objects)
        {
            if (this.objects[obj].keyDown)
            {
                this.objects[obj].keyDown(event);
            }
        }
    }

    this.keyUp = function(event)
    {
        for (obj in this.objects)
        {
            if (this.objects[obj].keyUp)
            {
                this.objects[obj].keyUp(event);
            }
        }
    }

    this.Draw = function ()
    {
        var frame = new Date().getTime();
        var deltaTime = (frame - this.lastFrame) / 1000;
        this.lastFrame = frame;

        this.backBufferContext.clearRect(0, 0, this.backBuffer.width, this.backBuffer.height);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (obj in this.objects)
        {
			if (this.objects[obj].Update)
            {
                this.objects[obj].Update(deltaTime, this.backBufferContext, this.deltaX, this.deltaY);
            }
			
            if (this.objects[obj].Draw)
            {
                this.objects[obj].Draw(deltaTime, this.backBufferContext, this.deltaX, this.deltaY);
            }
        }

        this.context.drawImage(this.backBuffer, 0, 0);      
    };
}

Array.prototype.remove = function (a, b)
{
    var rest = this.slice((b || a) + 1 || this.length);
    
    if(a < 0)
        this.length + a;
    else
        this.length = a;

    return this.push.apply(this, rest);
};

Array.prototype.removeObject = function (object)
{
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] === object)
        {
            this.remove(i);
            break;
        }
    }
}