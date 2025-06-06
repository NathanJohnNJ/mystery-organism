const coll = document.getElementsByClassName("collapsible");
const plus = document.getElementsByClassName("right");
const content = document.getElementsByClassName("content");
const btnArray = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8'];
const moreArray = ['more1', 'more2', 'more3', 'more4'];
const comment = document.getElementById('comment');
const commentBtn =document.getElementById('commentBtn');
const toggle = document.getElementById('toggle');
const togLeft = document.getElementById('togLeft');
const togCenter = document.getElementById('togCenter');
const togRight = document.getElementById('togRight');
const implementation = document.getElementById("implementation");
const output = document.getElementById("output");
const resultsTerminal = document.getElementById("resultsTerminal")
const impLabel = document.getElementById("impLabel");
const bothLabel = document.getElementById("bothLabel");
const outLabel = document.getElementById("outLabel");
const factory = document.getElementById('factory');
const given = document.getElementById('given');
const elipses = document.getElementById('elipses');
const closeBracket = document.getElementById('closeBracket');
const fullResults = document.getElementById('fullResults');
const hideResults = document.getElementById('hideResults');
const complement = document.getElementById('complement');

elipses.addEventListener('click', function(){
  elipses.style.display = "none";
  closeBracket.style.display = "none";
  fullResults.style.display = "block";
})
hideResults.addEventListener('click', function(){
  elipses.style.display = "block";
  closeBracket.style.display = "block";
  fullResults.style.display = "none";
})

togLeft.addEventListener('click', function(){
    toggle.style.gridColumn = "1 / 1";
    implementation.style.display = "flex";
    implementation.style.width = "66%";
    output.style.display = "none";
    impLabel.style.opacity = 1;
    bothLabel.style.opacity = 0.5;
    outLabel.style.opacity = 0.5;
})
togCenter.addEventListener('click', function(){
    toggle.style.gridColumn = "2 / 2";
    implementation.style.display = "flex";
    implementation.style.width = "33%";
    output.style.display = "flex";
    output.style.flexDirection = "column";
    output.style.width = "33%";
    impLabel.style.opacity = 0.5;
    bothLabel.style.opacity = 1;
    outLabel.style.opacity = 0.5;
})
togRight.addEventListener('click', function(){
    toggle.style.gridColumn = "3 / 3";
    implementation.style.display = "none";
    output.style.display = "flex";
    output.style.flexDirection = "column";
    output.style.width = "66%";
    impLabel.style.opacity = 0.5;
    bothLabel.style.opacity = 0.5;
    outLabel.style.opacity = 1;
})

commentBtn.addEventListener('click',function(){
  if (comment.style.display === "none"){
    comment.style.display = "block";
    commentBtn.innerText = "Hide Alternative Method";
  } else {
    comment.style.display = "none";
    commentBtn.innerText = "Show Alternative Method";
  }
})

btnArray.map((btn, i) => {
  const button = document.getElementById(btn);
  button.addEventListener('click', function(){
    const plus = document.getElementById(`right${i+1}`);
    const section = document.getElementById(`section${i+1}`);
    const more = document.getElementById(`more${i-2}`);
    const out = document.getElementById(`output${i+1}`)
    switch (i) {
      case 1:
        // Btn2 - Should show starter code
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          given.style.display = 'block';
          factory.style.display = "none";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          given.style.display = 'none';
        }
        break;
      case 2:
        // Btn3 - Should show main factory
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          factory.style.display = 'block';
          out.style.display = "block";
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          out.style.display = "none";
          section.style.display = "none";
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = 'none';
          }
        }
        break;
      case 3:
      // Btn 4 - Should show mutate
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          more.style.display = 'block';
          factory.style.display = 'block';
          out.style.display="block";
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          more.style.display = 'none';
          out.style.display = "none";
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = 'none';
          }
        }
        break;
      case 4:
         //  Btn 5 - Should show compareDNA
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          more.style.display = 'block';
          factory.style.display = 'block';
          out.style.display="block";
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          out.style.display="none";
          more.style.display = 'none';
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = "none";
          }
        }
        break;
      case 5:
        // Btn6 - should show willLikelySurvive
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          out.style.display="block";
          commentBtn.style.display = 'block';
          more.style.display = 'block';
          factory.style.display = 'block';
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          out.style.display="none";
          more.style.display = 'none';
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = "none";
          }
        }
        break;
      case 6:
         // Btn7 - should show all of the above without the comment from willLikelySuvive
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
          factory.style.display = "block";
          out.style.display="block";
          moreArray.map((more)=> {
            document.getElementById(more).style.display = "block";
          })
          comment.style.display = "none";
          commentBtn.style.display = 'none';
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          out.style.display="none";
          more.style.display = 'none';
          moreArray.map((more, i)=> {
            if (document.getElementById(`right${i+4}`).innerText === "+"){
              document.getElementById(more).style.display = "none";
            }
          })
          commentBtn.style.display = 'block';
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = "none";
          }
        }
        break;
      case 7:
        // Extension button to show all of the existing functions without the comment from willLikelySurvive
        if (plus.innerText === "+"){
          complement.style.display = "block";
          plus.innerText = "-";
          section.style.display = "block";
          factory.style.display = "block";
          out.style.display="block";
          moreArray.map((more)=> {
            document.getElementById(more).style.display = "block";
          })
          comment.style.display = "none";
          commentBtn.style.display = 'none';
          resultsTerminal.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
          out.style.display="none";
          complement.style.display = "none";
          moreArray.map((more, i)=> {
            if (document.getElementById(`right${i+4}`).innerText === "+"){
              document.getElementById(more).style.display = "none";
            }
          })
          commentBtn.style.display = 'block';
          if (right3.innerText === "+" && right4.innerText === "+" && right5.innerText === "+" && right6.innerText === "+" && right7.innerText === "+" && right8.innerText === "+"){
            factory.style.display = 'none';
            resultsTerminal.style.display = "none";
          }
        }
        break;
      default:
        if (plus.innerText === "+"){
          plus.innerText = "-";
          section.style.display = "block";
        }else{
          plus.innerText = "+";
          section.style.display = "none";
        }
        break;
    }
  })
})