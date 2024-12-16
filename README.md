# Portfolio
[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=0B6115FF&size=40&center=true&vCenter=true&width=1000&lines=Welcome;My+name+is+Fares+Emad;I+am+from+Egypt;I'm+studying+Backend;I+am+using+Django+framework)](https://git.io/typing-svg)

```python
from django.http import HttpResponse
from time import sleep
from random import choice

def my_life(request):
    try:
        food = ["Meat", "Fish", "Chicken"]
        my_food = choice(food)
        fares = request.GET.get('fares')
        fares.wakeup()
        sleep(2500)
        fares.eat(eat=my_food)
        sleep(2500)
        coffee = "Brazilian_coffee with 3 sugars"
        if "sugar" in coffee:
            fares.moveToWorking()
            return HttpResponse("Moved to working")
        else:
            return HttpResponse("End of the day")
    except:
        return HttpResponse("An error occurred")

```

<div align="center">
<br><p align="centre"><b>Visitors Count</b></p>  
<p align="center"><img align="center" src="https://profile-counter.glitch.me/{faresemad}/count.svg" /></p> 
<br>
</div>
<hr>
