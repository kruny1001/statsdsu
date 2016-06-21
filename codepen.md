http://codepen.io/simoami/pen/zstvo




>mtcars            #mtcars is a dataset of cars, built-in data
                     mpg cyl  disp  hp drat    wt  qsec vs am gear carb
Mazda RX4           21.0   6 160.0 110 3.90 2.620 16.46  0  1    4    4
Mazda RX4 Wag       21.0   6 160.0 110 3.90 2.875 17.02  0  1    4    4
Datsun 710          22.8   4 108.0  93 3.85 2.320 18.61  1  1    4    1
>? mtcars      #what does “am” stands for?
Bubble plot uses an additional dimension of data to determine the size of the symbols.  Interesting video using bubble plot: http://youtu.be/jbkSRLYSojo 
> attach(mtcars)     #attach the motor trends dataset
> plot(wt,  mpg,  pch=16,        cex=hp/50,                                  col=rainbow(8)[cyl]  )    
Notes:  x       y      solid circle;  horse powersize of bubble;     color cylinder 4, 6, or 8

Optional: Visualizing state statistics (where is South Dakota?)
> data(state)
> attach(  as.data.frame(state.x77)    )
> plot(Illiteracy, Murder, pch =16, cex = Population/3000, col = rainbow(4)[state.region])
> legend("bottomright", levels(state.region), fill=rainbow(4) )   
>  text(Illiteracy, Murder, label=state.name)

Optional: Representing data using faces.   Serious scientific research only!
This is called Chernoff’s faces. The features parameters of this implementation are: 1-height of face ("mpg"), 2-width of face ("cyl")   3-shape of face (“disp”), 4-height of mouth (“hp”), 5-width of mouth (“drat”), 6-curve of smile (“wt”), 7-height of eyes (“qsec”), 8-width of eyes(“vs”), 9-height of hair(“am”), 10-width of hair (“gear”), 11-styling of hair (“carb”). 
> install.packages(“TeachingDemos”)
> library(TeachingDemos)
> faces(mtcars)      # See Figure 16B



Super challenge: Visualizing the state statistics data using heatmaps, bubble plot, parallel coordinate plot, faces, and stars.
 
Congratulations! You are now an R pro!  Have fun playing with data.
   
Still hungry? Try this interactive tutorial: http://tryr.codeschool.com/ 
