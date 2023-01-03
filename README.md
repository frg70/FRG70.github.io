# *Portfolio*
## **1. Trajectory planning**
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

## **2. Methane Reduction in cattle feed fermentation**
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
## **3. Graph Neural Cellular Automata**
Colorectal Cancer is one of the most agressive types of cancer known to human, causing [*52,580*](https://www.cancer.org/cancer/colon-rectal-cancer/about/key-statistics.html#:~:text=Deaths%20from%20colorectal%20cancer,about%2052%2C580%20deaths%20during%202022.) deaths for the year 2022 in the United States of America. 
One of the main characteristics of cancer development is that there are no general treatment since the illness development is strongly correlated to the initial state of the cell and controlled by a process of meosis and mitosis given by the replication and interactions with the environment. 
Given this characteristics is proposed to describe cancer systems as graph cellular automata, using celullar automata to determine the patterns of cells based on rules allows to find the patterns in a multiagent system adding graphs allows for flexibility by changing the classical grid for the weighted directed connections in allowing for a better representation of the interactions.   

**Methodology:** 
Images from colon cancer where obtained from the [*LC2500 dataset*](https://github.com/tampapath/lung_colon_image_set), replacing the point cloud proposed by [*Grattarola*](https://arxiv.org/pdf/2110.14237.pdf): 
<div align = "center">
  <img src= "https://github.com/frg70/Portfolio/blob/main/GraphNeuralCelullarAutomata/Resources/colonca5.jpeg" alt = "Footer" style ="display: inline-block; width: 350px; height: 350px;"/> 
</div>
<p align = "center"><i> Figure 3. Colon cancer cell</i></p>
The design of the NN is based in the work of [*Grattarola (2021)*](https://arxiv.org/abs/2110.14237), the following project proposes to use weight directed graph neural networks as graph cellular automata, in a process of morfogenesis to determine the growth process of colorectal cancer.
The defined objective cloud point, will be obtained from a diagnosed cancer cell, the graph weights will be obtained from the direction of grid colors and the image will be the target cloud point for the neural network, obtaining as plots the morphogenesis process for the deconstructed collorectal cell. 

**Results:** 






## **4. Deep Diffussion Models**
The following work proposes modifications to the usual operations for classical denoising diffusion probabilistic models, for generating text-to-video, as defined by [*Ho (2020)*](https://arxiv.org/abs/2006.11239), 
There it is defined: 
```math
1. 

```
ToDO: 
Train fully and extract weights,  
## **5. Unity robotics simulation**

## **6. Detection of Corn plague OpenCV**

## **7. Reinforcement learning games**


## **8. Stastical analysis and regression**
This work analyses data from 

## *9. Physically informed machine learning*


