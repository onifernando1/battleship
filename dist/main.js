(()=>{"use strict";const o=function(o){let s=0,t=!1;return{shipLength:o,numberOfHits:s,isSunk:function(){if(s>=o)return t=!0,!0},hit:function(){s+=1},coords:[],length:o,sunk:t}},s=function(){let o=[];const s=[];let t=[],r=[[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]]];const e=function(o,s){let t=!1;return o.forEach((o=>{o[0]==s[0]&&o[1]==s[1]&&(t=!0)})),1==t};function n(o,s){for(let t=o.length;t--;)o[t][0]==s[0]&&o[t][1]==s[1]&&o.splice(t,1)}const d=function(d,a){let u=r[d[1]][d[0]];if(console.log(`coords = ${d}`),0==e(t,d))console.log("Retry bro"),console.log(t);else{if(" "==u)s.push(d),console.log("miss");else{let s=[];s.push(d[1]),s.push(d[0]),e(u.coords,s)&&(u.hit(),function(o){o.classList.add("hit")}(a),u.isSunk(),u.isSunk()&&(function(o){for(let s=0;s<o.coords.length;s++)o.coords[s][0],o.coords[s][1]}(u),o.push(u)),c(),console.log("hit"),s=[])}e(t,d)&&n(t,d)}},c=function(){return 5==o.length&&(alert("DONE!"),!0)},a=function(o){let s=o.classList,t=s[1],r="oops";return parseInt(s[2]),r=parseInt(s[2])>=0?s[2]:s[1],[t,r]};return{board:r,horizontal:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[s,r+t];o.coords.push(e)}},vertical:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[r+s,t];o.coords.push(e)}},receiveAttack:d,missedCoords:s,currentShips:[],allSunk:c,getPotentialMoves:function(){for(let o=0;o<10;o++)for(let s=0;s<10;s++)t.push([s,o])},potentialMoves:t,matchMove:e,removeAllInstances:n,drawBoard:function(){const o=document.getElementsByClassName("container")[0];let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let e=document.createElement("div");e.classList.add("individual-square"),e.classList.add(t),e.classList.add(o),s.appendChild(e)," "!=r[o][t]&&e.classList.add("ship")}},setUpClickToHit:function(){let o=document.getElementsByClassName("individual-square");for(let s=0;s<o.length;s++)o[s].addEventListener("click",(()=>{d(a(o[s]),o[s])}))},drawComputerBoard:function(){const o=document.getElementsByClassName("container")[0];let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let r=document.createElement("div");r.classList.add("individual-square"),r.classList.add(t),r.classList.add(o),s.appendChild(r)}},sunkShips:o}},t=function(){let o=[],s=[];const t=function(o){let s=(t=o.potentialMoves.length-1,Math.floor(Math.random()*t));var t;return o.potentialMoves[s]};return{name:"",randomAttack:t,getLegalMoves:function(s){o=[];for(let t=0;t<s.board.length;t++)for(let r=0;r<10;r++)" "==s.board[t][r]&&o.push([t,r])},randomAttack:t,checkMissedCoordsForMatch:function(o,t){let r=!1;s=[];for(let e=0;e<t.length;e++)o[0]==t[e][0]&&o[1]==t[e][1]?r=!0:s.push([o[0],o[1]]);return 1==r}}},r=function(){let r="",e="",n=r,d=s(),c=s();return d.getPotentialMoves(),c.getPotentialMoves(),{swapPlayer:function(){n=n==r?e:r},setUpGame:function(){r=t();const s=o(2);s.coords.push([0,0]),s.coords.push([0,1]),d.board[0][0]=s,d.board[0][1]=s;const n=o(3);n.coords.push([1,0]),n.coords.push([1,1]),n.coords.push([1,2]),d.board[1][0]=n,d.board[1][1]=n,d.board[1][2]=n;const a=o(3);a.coords.push([2,0]),a.coords.push([2,1]),a.coords.push([2,2]),d.board[2][0]=a,d.board[2][1]=a,d.board[2][2]=a;const u=o(4);u.coords.push([3,0]),u.coords.push([3,1]),u.coords.push([3,2]),u.coords.push([3,3]),d.board[3][0]=u,d.board[3][1]=u,d.board[3][2]=u,d.board[3][3]=u;const i=o(5);i.coords.push([4,0]),i.coords.push([4,1]),i.coords.push([4,2]),i.coords.push([4,3]),i.coords.push([4,4]),d.board[4][0]=i,d.board[4][1]=i,d.board[4][2]=i,d.board[4][3]=i,d.board[4][4]=i,d.currentShips.push(s),d.currentShips.push(n),d.currentShips.push(a),d.currentShips.push(u),d.currentShips.push(i),e=t();const l=o(2);l.coords.push([0,0]),l.coords.push([0,1]),c.board[0][0]=l,c.board[0][1]=l;const h=o(3);h.coords.push([1,0]),h.coords.push([1,1]),h.coords.push([1,2]),c.board[1][0]=h,c.board[1][1]=h,c.board[1][2]=h;const p=o(3);p.coords.push([2,0]),p.coords.push([2,1]),p.coords.push([2,2]),c.board[2][0]=p,c.board[2][1]=p,c.board[2][2]=p;const b=o(4);b.coords.push([3,0]),b.coords.push([3,1]),b.coords.push([3,2]),b.coords.push([3,3]),c.board[3][0]=b,c.board[3][1]=b,c.board[3][2]=b,c.board[3][3]=b;const f=o(5);f.coords.push([4,0]),f.coords.push([4,1]),f.coords.push([4,2]),f.coords.push([4,3]),f.coords.push([4,4]),c.board[4][0]=f,c.board[4][1]=f,c.board[4][2]=f,c.board[4][3]=f,c.board[4][4]=f,c.currentShips.push(l),c.currentShips.push(h),c.currentShips.push(p),c.currentShips.push(b),c.currentShips.push(f)},p1Gameboard:d,p2Gameboard:c}}();r.setUpGame(),r.p1Gameboard.drawBoard(),r.p2Gameboard.drawComputerBoard(),r.p1Gameboard.setUpClickToHit(),r.p2Gameboard.setUpClickToHit()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T3FCLEtBQUssQ0FBQyxFQUFHLElBQ3hCb0QsRUFBWXBFLE1BQU0sR0FBRyxHQUFLK0UsRUFDMUJYLEVBQVlwRSxNQUFNLEdBQUcsR0FBSytFLEVBQzFCWCxFQUFZcEUsTUFBTSxHQUFHLEdBQUsrRSxFQUMxQlgsRUFBWXBFLE1BQU0sR0FBRyxHQUFLK0UsRUFDMUIsTUFBTUMsRUFBVTVGLEVBQUssR0FDckI0RixFQUFRckYsT0FBT3FCLEtBQUssQ0FBQyxFQUFHLElBQ3hCZ0UsRUFBUXJGLE9BQU9xQixLQUFLLENBQUMsRUFBRyxJQUN4QmdFLEVBQVFyRixPQUFPcUIsS0FBSyxDQUFDLEVBQUcsSUFDeEJnRSxFQUFRckYsT0FBT3FCLEtBQUssQ0FBQyxFQUFHLElBQ3hCZ0UsRUFBUXJGLE9BQU9xQixLQUFLLENBQUMsRUFBRyxJQUN4Qm9ELEVBQVlwRSxNQUFNLEdBQUcsR0FBS2dGLEVBQzFCWixFQUFZcEUsTUFBTSxHQUFHLEdBQUtnRixFQUMxQlosRUFBWXBFLE1BQU0sR0FBRyxHQUFLZ0YsRUFDMUJaLEVBQVlwRSxNQUFNLEdBQUcsR0FBS2dGLEVBQzFCWixFQUFZcEUsTUFBTSxHQUFHLEdBQUtnRixFQUUxQlosRUFBWWpDLGFBQWFuQixLQUFLNEQsR0FDOUJSLEVBQVlqQyxhQUFhbkIsS0FBSzZELEdBQzlCVCxFQUFZakMsYUFBYW5CLEtBQUs4RCxHQUM5QlYsRUFBWWpDLGFBQWFuQixLQUFLK0QsR0FDOUJYLEVBQVlqQyxhQUFhbkIsS0FBS2dFLEVBQ2hDLEVBRWdDYixjQUFhQyxjQUMvQyxDRHRHYWEsR0FDYmxCLEVBQUtPLFlBQ0xQLEVBQUtJLFlBQVk3QixZQUNqQnlCLEVBQUtLLFlBQVlwQixvQkFDakJlLEVBQUtJLFlBQVl0QixrQkFDakJrQixFQUFLSyxZQUFZdkIsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IG51bWJlck9mSGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBjb29yZHMgPSBbXTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2cobnVtYmVyT2ZIaXRzKTtcblxuICAgIGlmIChudW1iZXJPZkhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBzaGlwLnN1bmsgaW4gb3JpZ2luYWwgJHtzdW5rfWApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNoaXBMZW5ndGgsIG51bWJlck9mSGl0cywgaXNTdW5rLCBoaXQsIGNvb3JkcywgbGVuZ3RoLCBzdW5rIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvL2NoZWNrIGZvciBsZWdhbCBtb3Zlc1xuXG5jb25zdCBHYW1lQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBzaGlwUGxhY2VtZW50TW9kZSA9IFwiaG9yaXpvbnRhbFwiO1xuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBzdW5rU2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkQ29vcmRzID0gW107XG4gIGxldCBwb3RlbnRpYWxNb3ZlcyA9IFtdO1xuXG4gIGxldCBib2FyZCA9IFtcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gIF07XG5cbiAgY29uc3QgZ2V0UG90ZW50aWFsTW92ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEwOyBhKyspIHtcbiAgICAgICAgcG90ZW50aWFsTW92ZXMucHVzaChbYSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRVcENsaWNrVG9IaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNxdWFyZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzcXVhcmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlY2VpdmVBdHRhY2soY2xhc3NUb0Nvb3JkcyhzcXVhcmVzW2ldKSwgc3F1YXJlc1tpXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudENvb3JkID0gW3N0YXJ0Um93Q29vcmRzLCBpICsgc3RhcnRDb2x1bW5Db29yZHNdO1xuICAgICAgc2hpcC5jb29yZHMucHVzaChjdXJyZW50Q29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2ZXJ0aWNhbCA9IGZ1bmN0aW9uIChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudENvb3JkID0gW2kgKyBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHNdO1xuICAgICAgc2hpcC5jb29yZHMucHVzaChjdXJyZW50Q29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoc2hpcCkge1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBsZXQgb3V0ZXIgPSBjb29yZFswXTtcbiAgICAgIGxldCBpbm5lciA9IGNvb3JkWzFdO1xuICAgICAgYm9hcmRbb3V0ZXJdW2lubmVyXSA9IHNoaXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0U2hpcFBvc2l0aW9uID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGlmIChzaGlwUGxhY2VtZW50TW9kZSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaG9yaXpvbnRhbChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpO1xuICAgIH0gZWxzZSBpZiAoc2hpcFBsYWNlbWVudE1vZGUgPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICB2ZXJ0aWNhbChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja05lc3RlZEFycmF5ID0gZnVuY3Rpb24gKGFycmF5LCBjb29yZHMpIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0uaW5jbHVkZXMoY29vcmRzWzBdKSAmJiBhcnJheVtpXS5pbmNsdWRlcyhjb29yZHNbMV0pKSB7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIGNvbnN0IG1hdGNoTW92ZSA9IGZ1bmN0aW9uIChhcnJheVRvRmluZE1hdGNoLCBjb29yZHMpIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBhcnJheVRvRmluZE1hdGNoLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGlmIChtb3ZlWzBdID09IGNvb3Jkc1swXSAmJiBtb3ZlWzFdID09IGNvb3Jkc1sxXSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVBbGxJbnN0YW5jZXMoYXJyLCBpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGg7IGktLTsgKSB7XG4gICAgICBpZiAoYXJyW2ldWzBdID09IGl0ZW1bMF0gJiYgYXJyW2ldWzFdID09IGl0ZW1bMV0pIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzcGxheUhpdCA9IGZ1bmN0aW9uIChzcXVhcmUpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgfTtcblxuICBjb25zdCBzaGlwU3VuayA9IGZ1bmN0aW9uIChzaGlwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSBzaGlwLmNvb3Jkc1tpXVswXTtcbiAgICAgIGxldCB5ID0gc2hpcC5jb29yZHNbaV1bMV07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoY29vcmRzLCBzcXVhcmUpIHtcbiAgICBsZXQgc2hpcCA9IGJvYXJkW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXTsgLy8geCBhbmQgeSBtdXN0IGJlIHN3YXBwZWQgZm9yIGdhbWUgYm9hcmRcblxuICAgIC8vIGlmIG5vdCBhIGxlZ2FsIG1vdmUsIHJldHJ5XG4gICAgY29uc29sZS5sb2coYGNvb3JkcyA9ICR7Y29vcmRzfWApO1xuICAgIGlmIChtYXRjaE1vdmUocG90ZW50aWFsTW92ZXMsIGNvb3JkcykgPT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmV0cnkgYnJvXCIpO1xuICAgICAgY29uc29sZS5sb2cocG90ZW50aWFsTW92ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2hpcCA9PSBcIiBcIikge1xuICAgICAgICBtaXNzZWRDb29yZHMucHVzaChjb29yZHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1pc3NcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgc3dhcHBlZENvb3JkcyA9IFtdO1xuICAgICAgICBzd2FwcGVkQ29vcmRzLnB1c2goY29vcmRzWzFdKTtcbiAgICAgICAgc3dhcHBlZENvb3Jkcy5wdXNoKGNvb3Jkc1swXSk7XG4gICAgICAgIGlmIChtYXRjaE1vdmUoc2hpcC5jb29yZHMsIHN3YXBwZWRDb29yZHMpKSB7XG4gICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICBkaXNwbGF5SGl0KHNxdWFyZSk7XG4gICAgICAgICAgc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgc2hpcFN1bmsoc2hpcCk7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxsU3VuaygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xuICAgICAgICAgIHN3YXBwZWRDb29yZHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1hdGNoTW92ZShwb3RlbnRpYWxNb3ZlcywgY29vcmRzKSkge1xuICAgICAgICByZW1vdmVBbGxJbnN0YW5jZXMocG90ZW50aWFsTW92ZXMsIGNvb3Jkcyk7IC8vIG5lZWQgdG8gY29kZSB0aGlzXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGFsbFNoaXBzU3VuayA9IFtdO1xuICAgIC8vIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgLy8gICBpZiAoc2hpcC5zdW5rID09IGZhbHNlKSB7XG4gICAgLy8gICAgIGFsbFNoaXBzU3Vuay5wdXNoKGZhbHNlKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGFsbFNoaXBzU3Vuay5wdXNoKHRydWUpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vIGlmIChhbGxTaGlwc1N1bmsuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cbiAgICBpZiAoc3Vua1NoaXBzLmxlbmd0aCA9PSA1KSB7XG4gICAgICBhbGVydChcIkRPTkUhXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMF07XG4gICAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBib2FyZC5sZW5ndGg7IGErKykge1xuICAgICAgICBsZXQgaW5kaXZpZHVhbFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcImluZGl2aWR1YWwtc3F1YXJlXCIpO1xuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoYSk7IC8vIHhcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKGkpOyAvLyB5XG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZGl2aWR1YWxTcXVhcmUpO1xuICAgICAgICBpZiAoYm9hcmRbaV1bYV0gIT0gXCIgXCIpIHtcbiAgICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdDb21wdXRlckJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMF07XG4gICAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBib2FyZC5sZW5ndGg7IGErKykge1xuICAgICAgICBsZXQgaW5kaXZpZHVhbFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcImluZGl2aWR1YWwtc3F1YXJlXCIpO1xuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoYSk7IC8vIHhcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKGkpOyAvLyB5XG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZGl2aWR1YWxTcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGFzc1RvQ29vcmRzID0gZnVuY3Rpb24gKGluZGl2aWR1YWxTcXVhcmUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0O1xuICAgIGxldCB4ID0gY2xhc3Nlc1sxXTtcbiAgICBsZXQgeSA9IFwib29wc1wiOyAvLyB0byBzdG9wIGVycm9yc1xuICAgIGxldCB0ZW1wID0gcGFyc2VJbnQoY2xhc3Nlc1syXSk7XG4gICAgaWYgKHBhcnNlSW50KGNsYXNzZXNbMl0pID49IDApIHtcbiAgICAgIHkgPSBjbGFzc2VzWzJdO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gY2xhc3Nlc1sxXTtcbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGhvcml6b250YWwsXG4gICAgdmVydGljYWwsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBtaXNzZWRDb29yZHMsXG4gICAgY3VycmVudFNoaXBzLFxuICAgIGFsbFN1bmssXG4gICAgZ2V0UG90ZW50aWFsTW92ZXMsXG4gICAgcG90ZW50aWFsTW92ZXMsXG4gICAgbWF0Y2hNb3ZlLFxuICAgIHJlbW92ZUFsbEluc3RhbmNlcyxcbiAgICBkcmF3Qm9hcmQsXG4gICAgc2V0VXBDbGlja1RvSGl0LFxuICAgIGRyYXdDb21wdXRlckJvYXJkLFxuICAgIHN1bmtTaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVCb2FyZCB9O1xuXG4vLyBib2FyZC5mb3JFYWNoKChib2FyZCkgPT4ge1xuLy8gICBib2FyZC5mb3JFYWNoKChpbm5lclNxdWFyZSkgPT4ge1xuLy8gICAgIGxldCBpbmRpdmlkdWFsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJpbmRpdmlkdWFsLXNxdWFyZVwiKTtcbi8vICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRpdmlkdWFsU3F1YXJlKTtcbi8vICAgICBpZiAoaW5uZXJTcXVhcmVbMF0gIT0gXCIgXCIpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwieWVzXCIpO1xuLy8gICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfSk7XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYW1lID0gXCJcIjtcbiAgbGV0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgbGV0IHByZXZpb3VzTW92ZXMgPSBbXTtcbiAgbGV0IGF2YWlsYWJsZU1vdmVzID0gW107XG5cbiAgY29uc3QgZ2V0TGVnYWxNb3ZlcyA9IGZ1bmN0aW9uIChvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGxlZ2FsTW92ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9uZW50R2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEwOyBhKyspIHtcbiAgICAgICAgaWYgKG9wcG9uZW50R2FtZWJvYXJkLmJvYXJkW2ldW2FdID09IFwiIFwiKSB7XG4gICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKFtpLCBhXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNaXNzZWRDb29yZHNGb3JNYXRjaCA9IGZ1bmN0aW9uIChcbiAgICBjb29yZHMsXG4gICAgb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVxuICApIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBhdmFpbGFibGVNb3ZlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlbaV1bMV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRzWzBdID09IG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlbaV1bMF0pO1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRzWzFdID09IG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlbaV1bMV0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNvb3Jkc1swXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzBdICYmXG4gICAgICAgIGNvb3Jkc1sxXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzFdXG4gICAgICApIHtcbiAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXZhaWxhYmxlTW92ZXMucHVzaChbY29vcmRzWzBdLCBjb29yZHNbMV1dKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgYXZhaWxhYmxlIDogJHthdmFpbGFibGVNb3Zlc31gKTtcblxuICAgIGlmIChtYXRjaCA9PSB0cnVlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIklUIElTIEEgTUFUQ0hcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJJVCBJUyBOT1QgQSBNQVRDSFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gZnVuY3Rpb24gKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgbGV0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tSW50KG9wcG9uZW50R2FtZWJvYXJkLnBvdGVudGlhbE1vdmVzLmxlbmd0aCAtIDEpO1xuICAgIGxldCByYW5kb21Nb3ZlID0gb3Bwb25lbnRHYW1lYm9hcmQucG90ZW50aWFsTW92ZXNbcmFuZG9tSW5kZXhdO1xuICAgIHJldHVybiByYW5kb21Nb3ZlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICByYW5kb21BdHRhY2ssXG4gICAgZ2V0TGVnYWxNb3ZlcyxcbiAgICByYW5kb21BdHRhY2ssXG4gICAgY2hlY2tNaXNzZWRDb29yZHNGb3JNYXRjaCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG4vLyBjb25zdCBnYjEgPSBHYW1lQm9hcmQoKTtcbi8vIGNvbnN0IGdiMiA9IEdhbWVCb2FyZCgpO1xuXG4vLyAvLyBjb25zdCBnYW1lID0gR2FtZSgpO1xuLy8gLy8gY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG4vLyAvLyBjb25zdCBzaGlwID0gU2hpcCgpO1xuLy8gLy8gc2hpcC5jb29yZHMucHVzaChbMCwgMV0pO1xuLy8gLy8gZ2IuZ2V0UG90ZW50aWFsTW92ZXMoKTtcbi8vIC8vIGxldCBtb3ZlcyA9IGdiLnBvdGVudGlhbE1vdmVzO1xuLy8gLy8gY29uc29sZS5sb2coZ2IucG90ZW50aWFsTW92ZXMubGVuZ3RoKTtcbi8vIC8vIGdiLnJlY2VpdmVBdHRhY2soc2hpcCwgWzAsIDNdKTtcbi8vIC8vIGNvbnNvbGUubG9nKGdiLnBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4vLyBnYjEuZHJhd0JvYXJkKCk7XG4vLyBnYjIuZHJhd0JvYXJkKCk7XG5jb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5zZXRVcEdhbWUoKTtcbmdhbWUucDFHYW1lYm9hcmQuZHJhd0JvYXJkKCk7XG5nYW1lLnAyR2FtZWJvYXJkLmRyYXdDb21wdXRlckJvYXJkKCk7XG5nYW1lLnAxR2FtZWJvYXJkLnNldFVwQ2xpY2tUb0hpdCgpO1xuZ2FtZS5wMkdhbWVib2FyZC5zZXRVcENsaWNrVG9IaXQoKTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBHYW1lID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyT25lID0gXCJcIjtcbiAgbGV0IHBsYXllclR3byA9IFwiXCI7XG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICBsZXQgcDFHYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IHAyR2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIHAxR2FtZWJvYXJkLmdldFBvdGVudGlhbE1vdmVzKCk7XG4gIHAyR2FtZWJvYXJkLmdldFBvdGVudGlhbE1vdmVzKCk7XG5cbiAgY29uc3Qgc3dhcFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJPbmUpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFVwR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgICAvLyBwMUdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IHAxc2hpcDIgPSBTaGlwKDIpO1xuICAgIHAxc2hpcDIuY29vcmRzLnB1c2goWzAsIDBdKTtcbiAgICBwMXNoaXAyLmNvb3Jkcy5wdXNoKFswLCAxXSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMF1bMF0gPSBwMXNoaXAyO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzBdWzFdID0gcDFzaGlwMjtcbiAgICBjb25zdCBwMXNoaXAzYSA9IFNoaXAoMyk7XG4gICAgLy8gY29uc29sZS5sb2coYGFiYyR7cDFzaGlwM2EubGVuZ3RofWApO1xuXG4gICAgcDFzaGlwM2EuY29vcmRzLnB1c2goWzEsIDBdKTtcbiAgICBwMXNoaXAzYS5jb29yZHMucHVzaChbMSwgMV0pO1xuICAgIHAxc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAyXSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMV1bMF0gPSBwMXNoaXAzYTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsxXVsxXSA9IHAxc2hpcDNhO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDFzaGlwM2E7XG4gICAgY29uc3QgcDFzaGlwM2IgPSBTaGlwKDMpO1xuICAgIHAxc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAwXSk7XG4gICAgcDFzaGlwM2IuY29vcmRzLnB1c2goWzIsIDFdKTtcbiAgICBwMXNoaXAzYi5jb29yZHMucHVzaChbMiwgMl0pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzJdWzBdID0gcDFzaGlwM2I7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMl1bMV0gPSBwMXNoaXAzYjtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsyXVsyXSA9IHAxc2hpcDNiO1xuICAgIGNvbnN0IHAxc2hpcDQgPSBTaGlwKDQpO1xuICAgIHAxc2hpcDQuY29vcmRzLnB1c2goWzMsIDBdKTtcbiAgICBwMXNoaXA0LmNvb3Jkcy5wdXNoKFszLCAxXSk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgMl0pO1xuICAgIHAxc2hpcDQuY29vcmRzLnB1c2goWzMsIDNdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFszXVswXSA9IHAxc2hpcDQ7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbM11bMV0gPSBwMXNoaXA0O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzJdID0gcDFzaGlwNDtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFszXVszXSA9IHAxc2hpcDQ7XG4gICAgY29uc3QgcDFzaGlwNSA9IFNoaXAoNSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgMF0pO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDFdKTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAyXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgM10pO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDRdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVswXSA9IHAxc2hpcDU7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bMV0gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzJdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVszXSA9IHAxc2hpcDU7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bNF0gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAxc2hpcDIpO1xuICAgIHAxR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAxc2hpcDNhKTtcbiAgICBwMUdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMXNoaXAzYik7XG4gICAgcDFHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDFzaGlwNCk7XG4gICAgcDFHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDFzaGlwNSk7XG5cbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIoKTtcbiAgICAvLyBwMkdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IHAyc2hpcDIgPSBTaGlwKDIpO1xuICAgIHAyc2hpcDIuY29vcmRzLnB1c2goWzAsIDBdKTtcbiAgICBwMnNoaXAyLmNvb3Jkcy5wdXNoKFswLCAxXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMF1bMF0gPSBwMnNoaXAyO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzBdWzFdID0gcDJzaGlwMjtcbiAgICBjb25zdCBwMnNoaXAzYSA9IFNoaXAoMyk7XG4gICAgcDJzaGlwM2EuY29vcmRzLnB1c2goWzEsIDBdKTtcbiAgICBwMnNoaXAzYS5jb29yZHMucHVzaChbMSwgMV0pO1xuICAgIHAyc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAyXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMV1bMF0gPSBwMnNoaXAzYTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsxXVsxXSA9IHAyc2hpcDNhO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDJzaGlwM2E7XG4gICAgY29uc3QgcDJzaGlwM2IgPSBTaGlwKDMpO1xuICAgIHAyc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAwXSk7XG4gICAgcDJzaGlwM2IuY29vcmRzLnB1c2goWzIsIDFdKTtcbiAgICBwMnNoaXAzYi5jb29yZHMucHVzaChbMiwgMl0pO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzJdWzBdID0gcDJzaGlwM2I7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMl1bMV0gPSBwMnNoaXAzYjtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsyXVsyXSA9IHAyc2hpcDNiO1xuICAgIGNvbnN0IHAyc2hpcDQgPSBTaGlwKDQpO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDBdKTtcbiAgICBwMnNoaXA0LmNvb3Jkcy5wdXNoKFszLCAxXSk7XG4gICAgcDJzaGlwNC5jb29yZHMucHVzaChbMywgMl0pO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDNdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVswXSA9IHAyc2hpcDQ7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbM11bMV0gPSBwMnNoaXA0O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzNdWzJdID0gcDJzaGlwNDtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVszXSA9IHAyc2hpcDQ7XG4gICAgY29uc3QgcDJzaGlwNSA9IFNoaXAoNSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgMF0pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDFdKTtcbiAgICBwMnNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAyXSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgM10pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDRdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVswXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bMV0gPSBwMnNoaXA1O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzRdWzJdID0gcDJzaGlwNTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVszXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bNF0gPSBwMnNoaXA1O1xuXG4gICAgcDJHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDJzaGlwMik7XG4gICAgcDJHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDJzaGlwM2EpO1xuICAgIHAyR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAyc2hpcDNiKTtcbiAgICBwMkdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMnNoaXA0KTtcbiAgICBwMkdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMnNoaXA1KTtcbiAgfTtcblxuICByZXR1cm4geyBzd2FwUGxheWVyLCBzZXRVcEdhbWUsIHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCB9O1xufTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJsZW5ndGgiLCJudW1iZXJPZkhpdHMiLCJzdW5rIiwic2hpcExlbmd0aCIsImlzU3VuayIsImhpdCIsImNvb3JkcyIsIkdhbWVCb2FyZCIsInN1bmtTaGlwcyIsIm1pc3NlZENvb3JkcyIsInBvdGVudGlhbE1vdmVzIiwiYm9hcmQiLCJtYXRjaE1vdmUiLCJhcnJheVRvRmluZE1hdGNoIiwibWF0Y2giLCJmb3JFYWNoIiwibW92ZSIsInJlbW92ZUFsbEluc3RhbmNlcyIsImFyciIsIml0ZW0iLCJpIiwic3BsaWNlIiwicmVjZWl2ZUF0dGFjayIsInNxdWFyZSIsInNoaXAiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInN3YXBwZWRDb29yZHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5SGl0Iiwic2hpcFN1bmsiLCJhbGxTdW5rIiwiYWxlcnQiLCJjbGFzc1RvQ29vcmRzIiwiaW5kaXZpZHVhbFNxdWFyZSIsImNsYXNzZXMiLCJ4IiwieSIsInBhcnNlSW50IiwiaG9yaXpvbnRhbCIsInN0YXJ0Um93Q29vcmRzIiwic3RhcnRDb2x1bW5Db29yZHMiLCJjdXJyZW50Q29vcmQiLCJ2ZXJ0aWNhbCIsImN1cnJlbnRTaGlwcyIsImdldFBvdGVudGlhbE1vdmVzIiwiYSIsImRyYXdCb2FyZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJvYXJkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0VXBDbGlja1RvSGl0Iiwic3F1YXJlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3Q29tcHV0ZXJCb2FyZCIsIlBsYXllciIsImxlZ2FsTW92ZXMiLCJhdmFpbGFibGVNb3ZlcyIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50R2FtZWJvYXJkIiwicmFuZG9tSW5kZXgiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYW1lIiwiZ2V0TGVnYWxNb3ZlcyIsImNoZWNrTWlzc2VkQ29vcmRzRm9yTWF0Y2giLCJvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5IiwiZ2FtZSIsInBsYXllck9uZSIsInBsYXllclR3byIsImN1cnJlbnRQbGF5ZXIiLCJwMUdhbWVib2FyZCIsInAyR2FtZWJvYXJkIiwic3dhcFBsYXllciIsInNldFVwR2FtZSIsInAxc2hpcDIiLCJwMXNoaXAzYSIsInAxc2hpcDNiIiwicDFzaGlwNCIsInAxc2hpcDUiLCJwMnNoaXAyIiwicDJzaGlwM2EiLCJwMnNoaXAzYiIsInAyc2hpcDQiLCJwMnNoaXA1IiwiR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=