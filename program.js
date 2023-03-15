import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("grinch","GRINCH.png")
loadSprite("ludzik","ludzik.png")
loadSound("apm","apm.mp3")

add([
    sprite("grinch"),
    pos(0,0)
])

const ludzik = add([
    sprite("ludzik"),
    pos(0,0)
])

let lewo=true

onUpdate(()=>{

    if (ludzik.pos.x < 600 && lewo) ludzik.pos.x = ludzik.pos.x+1

    else if (!lewo && ludzik.pos.x > 300)

    {
        ludzik.pos.x=ludzik.pos.x-1
    }

    else if(!lewo && ludzik.pos.x <=300)

    {
        lewo=true
    }

    else
    {
        lewo=false
    }
    
})

onKeyRelease("space",()=>play("apm"))
