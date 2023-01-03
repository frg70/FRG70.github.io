# *Portfolio*
## **1. Trajectory planning**(Python)
Trajectory planning and delivery is one of the most common problems in logistics, going from point A to point B using the fastest route is a classical problem in Computer Science for which multiple algorithms have been developed, in this project a methaeuristic algorithm is proposed, creating a visualization tool using PyGame, the vertex generated by the trajectory are used for generating Voronoi Cells.  Each of the voronoi cells represent an area that needs to be covered by one of the delivery vehicles. 
<div align = "center">
  <img src= "https://github.com/frg70/Portfolio/blob/main/TrajectoryPlanning/Resources/Route.png" alt = "Footer" style ="display: inline-block; width: 350px; height: 350px;"/> 
</div>
<p align = "center"><i> Figure 1. Route found with methaeuristhic algorithm.</i></p>
<div align = "center">
  <img src= "https://github.com/frg70/Portfolio/blob/main/TrajectoryPlanning/Resources/Voronoi.png" alt = "Footer" style ="display: inline-block; width: 350px; height: 350px;"/> 
</div>
<p align = "center"><i> Figure 2. Voronoi Polynomial based on the route found</i></p>

ToDO: 
- Give more detailed information

## **2. Methane Reduction in cattle feed fermentation**(Python)
Methane is the second most polluting greenhouse gas produced by human activity representing 10.2% of the greenhouse gas emissions in the U.S. for the year 2017, the main source of this due the methane eructation produced by enteric fermetation. 
<div align = "center">
  <img src= "https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2020-03/Enteric_fermentation_process_in_cows.png?itok=IO4W4Fwz" alt = "Footer" style ="display: inline-block; width: 350px; height: 350px;"/> 
</div>
<p align = "center"><i> Figure 1. Enteric fermetation</i></p>

In a study by [*Roque (2021)*](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247820), shows how the introduction of the algae [*asparagopsis taxiformis*](https://es.wikipedia.org/wiki/Asparagopsis_taxiformis) can decrease methane emissions due to fermentation in 75% with a medium forrage diet. 

<div align = "center">
  <img src= "https://scx2.b-cdn.net/gfx/news/2019/1-seaweedfeeda.jpg" alt = "Footer" style ="display: inline-block; width: 350px; height: 350px;"/> 
</div>
<p align = "center"><i>Figure 2. Asparagpsis taxiformis for cattle feed </i></p>
This project proposes and equation that represent the diets given to cows, aiming to find the optimal parameters in diet of the animal to reduce methane production. 
This project implements the Simplex Method for finding the minimum points. 
The equation proposed: 

$$\frac{7.15h + 7338c + 1.5g + 55u + 17.2p + 26.3f + 0.88a + 0.42r + 307k + 0.15i}{52}$$

Where: 
h is the hydrogen produced, c is the CO<sub>2</sub> produced, g is the kilograms gained, u is the percentage of humid pasture in the diet, p is the percetange of protein, f is the percentage of fat, a is the percentage of ash, r is the percentage of carbohydrates, k is the amount of calories, 
i is the percetange of idione.
With the following restrictions for the case of the Simplex method:

1. $$55u + 17.2p + 26.3f + 0.88a + 0.42r + 0.15i = 100$$
2. $$1 < h < 2$$
3. $$0 < c < 0.7$$
4. $$1 <= u$$
5. $$1 <= p$$
6. $$1 <= f$$
7. $$1 <= a$$
8. $$1 <= r$$
9. $$1 <= r$$
10. $$1 <= k$$
11. $$1 <= i$$


*With the following results* 
| Method| h | c | g | u | p | f | a | r | k| i | **Point found** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |  
| Simplex| 666.6 | 1 | 0.7 | 1 | 1 | 1 | 1 | 1 | 1| 1 | **240.62** |

ToDo: 
- Create graph that allows to visualize the point.   

## **3. Deep Diffussion Models**
The following work proposes modifications to the usual operations for classical denoising diffusion probabilistic models, for generating text-to-video, as defined by [*Ho (2020)*](https://arxiv.org/abs/2006.11239), 
There it is defined: 
```math
1. 

```
ToDO: 
Train fully and extract weights,

## <p style="color:red;">Red paragraph text</p>

## **<p style = "color: magenta"> 4. Unity robotics simulation(Unity-C#)</p>**

## **6. Detection of Corn plague OpenCV**(OpenCV-C++)

## **7. Reinforcement learning games**(Tensorflow.Js)


## **8. Stastical analysis and regression**(R) 
[*Sympathetic nervous system*]()


This work analyses data from Sloan in an study that noted that cardiac sympathetic activation and parasympathetic withdrawal result in heart rate increases during psychological stress. 

## **9. Physically informed machine learning** (Pytorch) 


