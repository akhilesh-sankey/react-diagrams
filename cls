[1mdiff --git a/src/sass/defaults/_DefaultLinkWidget.scss b/src/sass/defaults/_DefaultLinkWidget.scss[m
[1mindex ba37cb4..5d3462d 100644[m
[1m--- a/src/sass/defaults/_DefaultLinkWidget.scss[m
[1m+++ b/src/sass/defaults/_DefaultLinkWidget.scss[m
[36m@@ -15,9 +15,9 @@[m
   }[m
 [m
   &--path-selected{[m
[31m-    stroke: rgb(0,192,255) !important;[m
[31m-    stroke-dasharray: 10,2;[m
[31m-    animation: dash 1s linear infinite;[m
[32m+[m[32m    stroke:rgb(50,50,50) !important;[m
[32m+[m[32m    // stroke-dasharray: 10,2;[m
[32m+[m[32m    // animation: dash 1s linear infinite;[m
   }[m
 [m
   &__label {[m
[36m@@ -30,10 +30,10 @@[m
   }[m
 [m
   &__point{[m
[31m-    fill: rgba(white,0.5);[m
[32m+[m[32m    fill: rgba(165,165,165,0.5);[m
   }[m
 [m
   &--point-selected{[m
[31m-    fill: rgb(0,192,255);[m
[32m+[m[32m    fill: rgb(50,50,50);[m
   }[m
 }[m
\ No newline at end of file[m
