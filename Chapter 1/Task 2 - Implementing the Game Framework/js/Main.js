var frameTime = 0.0333;

var objectManager = null;

window.onload = function()
{
	new ObjectManager().InitObjectManager();
}

function Main()
{
    this.Initialise = function()
    {
        return this;
    }
}