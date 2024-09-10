 # The Journey
 
 ## Key Learnings

 - >e.preventDefault() 
    
    When I was trying to press the add button, because it was in a form, the appended list item kept vanishing so I needed this to stop the default action oif the form from happening.

 - >.trim() 
    
    Gets rid of whitespace

 - > if (text !== "")
    
    if there is text in the field the do action. I needed this so that a blank list item cannot be appended.
    

 - >textBox.value = ""
    
    at the end of the function so that the textBox becomes empty after list item has been added

 - >listItemText.classList.toggle('lineThrough')
    
    .toggle adds and removes... very useful