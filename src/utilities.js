 export const drawRect = (detection, ctx) =>{
     detection.forEach(prediction=>{
         // Get prediction results
         const [x,y,widht,height] = prediction['bbox'];
         const text = prediction['class'];

         // set styling
         const color = 'green'
         ctx.strokeStyle = color
         ctx.font = '18px Arial'
         ctx.fillstyle = color

         // Draw retangles and text
         ctx.beginPath()
         ctx.fillText(text, x, y)
         ctx.rect(x, y, widht, height)
         ctx.stroke()
     })
}  


     



 







                                                                                                                                                                                                                
                                                                                               