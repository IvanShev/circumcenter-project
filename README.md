This is an interactive tool that plots the circumcenter of a specified triangle in an iterative manner. Every combination of three points in each new iteration is considered a triangle, and a new circumcenter for this triangle is plotted by the program. The default number of iterations is 3, and the default points for the initial triangle are (1,2),(5,3), and (0,7).

This project illustrates a previously unknown example of emergent chaotic behavior in yet another iterative system. The behavior of this system is chaotic because the illustration is very sensitive to initial conditions, and the patterns of points created by the program are extremely deterministic yet display seemingly random states of disorder and irregularity.

To run this program of your own computer, download all of the files in the GitHub repository. Then double-click the file named "index.html". It should run in your computer's default browser. It will take some time to load.

The graph provided by the program is interactive; click and drag with your cursor to create a highlighted area in the graph, and then let go to zoom in on this specified area. To zoom out, double click the mouse.

The parameters of the program can be changed in the "main_graph.js" file. Open this file in a text editor, and the top two lines of code are parameters that you can change. The first one, labeled "initial coordinates of the triangle", can be altered to change the coordinates of the first triangle that is plotted in the first iteration of the program. The second one, labeled "number of iterations", can be altered to change the number of iterations displayed on the graph by the program. Note: "number of iterations" values above 3 will take a very long time to load.
