(()=>{"use strict";const o=function(o){let s=0,t=!1;return{shipLength:o,numberOfHits:s,isSunk:function(){return s>=o&&(t=!0,!0)},hit:function(){s+=1},coords:[],length:o,sunk:t}},s=function(){let o=[];const s=[];let t=[],r=[[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]]];const e=function(o,s){let t=!1;return o.forEach((o=>{o[0]==s[0]&&o[1]==s[1]&&(t=!0)})),1==t};function n(o,s){for(let t=o.length;t--;)o[t][0]==s[0]&&o[t][1]==s[1]&&o.splice(t,1)}const d=function(d,a){let u=r[d[1]][d[0]];if(console.log(`coords = ${d}`),0==e(t,d))console.log("Retry bro");else{if(" "==u)s.push(d),console.log("miss"),function(o){o.classList.add("miss")}(a);else{let s=[];s.push(d[1]),s.push(d[0]),e(u.coords,s)&&(u.hit(),function(o){o.classList.add("hit")}(a),u.isSunk(),u.isSunk()&&(function(o){for(let s=0;s<o.coords.length;s++)o.coords[s][0],o.coords[s][1]}(u),o.push(u)),c(),console.log("hit"),s=[])}e(t,d)&&n(t,d)}},c=function(){return 5==o.length&&(alert("DONE!"),!0)},a=function(o){let s=o.classList,t=s[1],r="oops";return parseInt(s[2]),r=parseInt(s[2])>=0?s[2]:s[1],[t,r]};return{board:r,horizontal:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[s,r+t];o.coords.push(e)}},vertical:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[r+s,t];o.coords.push(e)}},receiveAttack:d,missedCoords:s,currentShips:[],allSunk:c,getPotentialMoves:function(){for(let o=0;o<10;o++)for(let s=0;s<10;s++)t.push([s,o])},potentialMoves:t,matchMove:e,removeAllInstances:n,drawBoard:function(){const o=document.getElementsByClassName("container")[0];let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let e=document.createElement("div");e.classList.add("individual-square"),e.classList.add(t),e.classList.add(o),s.appendChild(e)," "!=r[o][t]&&e.classList.add("ship")}},setUpClickToHit:function(){let o=document.getElementsByClassName("individual-square");for(let s=0;s<o.length;s++)o[s].addEventListener("click",(()=>{d(a(o[s]),o[s])}))},drawComputerBoard:function(){const o=document.getElementsByClassName("container")[0];let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let r=document.createElement("div");r.classList.add("individual-square"),r.classList.add(t),r.classList.add(o),s.appendChild(r)}},sunkShips:o}},t=function(){let o=[];const s=function(o){let s=(t=o.potentialMoves.length-1,Math.floor(Math.random()*t));var t;return o.potentialMoves[s]};return{name:"",randomAttack:s,getLegalMoves:function(s){o=[];for(let t=0;t<s.board.length;t++)for(let r=0;r<10;r++)" "==s.board[t][r]&&o.push([t,r])},randomAttack:s,checkMissedCoordsForMatch:function(o,s){let t=!1;availableMoves=[];for(let r=0;r<s.length;r++)o[0]==s[r][0]&&o[1]==s[r][1]?t=!0:availableMoves.push([o[0],o[1]]);return 1==t}}};(function(){let r=t(),e=t(),n=r,d=s(),c=s();return d.getPotentialMoves(),c.getPotentialMoves(),{swapPlayer:function(){n=n==r?e:r},setUpGame:function(){!function(){const s=o(2);s.coords.push([0,0]),s.coords.push([0,1]),d.board[0][0]=s,d.board[0][1]=s;const t=o(3);t.coords.push([1,0]),t.coords.push([1,1]),t.coords.push([1,2]),d.board[1][0]=t,d.board[1][1]=t,d.board[1][2]=t;const r=o(3);r.coords.push([2,0]),r.coords.push([2,1]),r.coords.push([2,2]),d.board[2][0]=r,d.board[2][1]=r,d.board[2][2]=r;const e=o(4);e.coords.push([3,0]),e.coords.push([3,1]),e.coords.push([3,2]),e.coords.push([3,3]),d.board[3][0]=e,d.board[3][1]=e,d.board[3][2]=e,d.board[3][3]=e;const n=o(5);n.coords.push([4,0]),n.coords.push([4,1]),n.coords.push([4,2]),n.coords.push([4,3]),n.coords.push([4,4]),d.board[4][0]=n,d.board[4][1]=n,d.board[4][2]=n,d.board[4][3]=n,d.board[4][4]=n,d.currentShips.push(s),d.currentShips.push(t),d.currentShips.push(r),d.currentShips.push(e),d.currentShips.push(n)}(),function(){const s=o(2);s.coords.push([0,0]),s.coords.push([0,1]),c.board[0][0]=s,c.board[0][1]=s;const t=o(3);t.coords.push([1,0]),t.coords.push([1,1]),t.coords.push([1,2]),c.board[1][0]=t,c.board[1][1]=t,c.board[1][2]=t;const r=o(3);r.coords.push([2,0]),r.coords.push([2,1]),r.coords.push([2,2]),c.board[2][0]=r,c.board[2][1]=r,c.board[2][2]=r;const e=o(4);e.coords.push([3,0]),e.coords.push([3,1]),e.coords.push([3,2]),e.coords.push([3,3]),c.board[3][0]=e,c.board[3][1]=e,c.board[3][2]=e,c.board[3][3]=e;const n=o(5);n.coords.push([4,0]),n.coords.push([4,1]),n.coords.push([4,2]),n.coords.push([4,3]),n.coords.push([4,4]),c.board[4][0]=n,c.board[4][1]=n,c.board[4][2]=n,c.board[4][3]=n,c.board[4][4]=n,c.currentShips.push(s),c.currentShips.push(t),c.currentShips.push(r),c.currentShips.push(e),c.currentShips.push(n)}(),d.drawBoard(),c.drawComputerBoard(),d.setUpClickToHit(),c.setUpClickToHit()},p1Gameboard:d,p2Gameboard:c}})().setUpGame()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVFyRixPQUFPcUIsS0FBSyxDQUFDLEVBQUcsSUFDeEJvRCxFQUFZcEUsTUFBTSxHQUFHLEdBQUtnRixFQUMxQlosRUFBWXBFLE1BQU0sR0FBRyxHQUFLZ0YsRUFDMUJaLEVBQVlwRSxNQUFNLEdBQUcsR0FBS2dGLEVBQzFCWixFQUFZcEUsTUFBTSxHQUFHLEdBQUtnRixFQUMxQixNQUFNQyxFQUFVN0YsRUFBSyxHQUNyQjZGLEVBQVF0RixPQUFPcUIsS0FBSyxDQUFDLEVBQUcsSUFDeEJpRSxFQUFRdEYsT0FBT3FCLEtBQUssQ0FBQyxFQUFHLElBQ3hCaUUsRUFBUXRGLE9BQU9xQixLQUFLLENBQUMsRUFBRyxJQUN4QmlFLEVBQVF0RixPQUFPcUIsS0FBSyxDQUFDLEVBQUcsSUFDeEJpRSxFQUFRdEYsT0FBT3FCLEtBQUssQ0FBQyxFQUFHLElBQ3hCb0QsRUFBWXBFLE1BQU0sR0FBRyxHQUFLaUYsRUFDMUJiLEVBQVlwRSxNQUFNLEdBQUcsR0FBS2lGLEVBQzFCYixFQUFZcEUsTUFBTSxHQUFHLEdBQUtpRixFQUMxQmIsRUFBWXBFLE1BQU0sR0FBRyxHQUFLaUYsRUFDMUJiLEVBQVlwRSxNQUFNLEdBQUcsR0FBS2lGLEVBRTFCYixFQUFZaEMsYUFBYXBCLEtBQUs2RCxHQUM5QlQsRUFBWWhDLGFBQWFwQixLQUFLOEQsR0FDOUJWLEVBQVloQyxhQUFhcEIsS0FBSytELEdBQzlCWCxFQUFZaEMsYUFBYXBCLEtBQUtnRSxHQUM5QlosRUFBWWhDLGFBQWFwQixLQUFLaUUsRUFDaEMsQ0FJRUMsR0FDQWYsRUFBWTVCLFlBQ1o2QixFQUFZbkIsb0JBQ1prQixFQUFZckIsa0JBQ1pzQixFQUFZdEIsaUJBQ2QsRUFFZ0NxQixjQUFhQyxjQUMvQyxFQzlHYWUsR0FDUmIsVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgbnVtYmVyT2ZIaXRzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGNvb3JkcyA9IFtdO1xuXG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBudW1iZXJPZkhpdHMgKz0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG51bWJlck9mSGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hpcExlbmd0aCwgbnVtYmVyT2ZIaXRzLCBpc1N1bmssIGhpdCwgY29vcmRzLCBsZW5ndGgsIHN1bmsgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vY2hlY2sgZm9yIGxlZ2FsIG1vdmVzXG5cbmNvbnN0IEdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHNoaXBQbGFjZW1lbnRNb2RlID0gXCJob3Jpem9udGFsXCI7XG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IHN1bmtTaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWRDb29yZHMgPSBbXTtcbiAgbGV0IHBvdGVudGlhbE1vdmVzID0gW107XG5cbiAgbGV0IGJvYXJkID0gW1xuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgXTtcblxuICBjb25zdCBnZXRQb3RlbnRpYWxNb3ZlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGErKykge1xuICAgICAgICBwb3RlbnRpYWxNb3Zlcy5wdXNoKFthLCBpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFVwQ2xpY2tUb0hpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbmRpdmlkdWFsLXNxdWFyZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVjZWl2ZUF0dGFjayhjbGFzc1RvQ29vcmRzKHNxdWFyZXNbaV0pLCBzcXVhcmVzW2ldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBob3Jpem9udGFsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbc3RhcnRSb3dDb29yZHMsIGkgKyBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbaSArIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwKSB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGxldCBvdXRlciA9IGNvb3JkWzBdO1xuICAgICAgbGV0IGlubmVyID0gY29vcmRbMV07XG4gICAgICBib2FyZFtvdXRlcl1baW5uZXJdID0gc2hpcDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRTaGlwUG9zaXRpb24gPSBmdW5jdGlvbiAoc2hpcCwgc3RhcnRSb3dDb29yZHMsIHN0YXJ0Q29sdW1uQ29vcmRzKSB7XG4gICAgaWYgKHNoaXBQbGFjZW1lbnRNb2RlID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBob3Jpem9udGFsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfSBlbHNlIGlmIChzaGlwUGxhY2VtZW50TW9kZSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHZlcnRpY2FsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1hdGNoTW92ZSA9IGZ1bmN0aW9uIChhcnJheVRvRmluZE1hdGNoLCBjb29yZHMpIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBhcnJheVRvRmluZE1hdGNoLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGlmIChtb3ZlWzBdID09IGNvb3Jkc1swXSAmJiBtb3ZlWzFdID09IGNvb3Jkc1sxXSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVBbGxJbnN0YW5jZXMoYXJyLCBpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGg7IGktLTsgKSB7XG4gICAgICBpZiAoYXJyW2ldWzBdID09IGl0ZW1bMF0gJiYgYXJyW2ldWzFdID09IGl0ZW1bMV0pIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzcGxheUhpdCA9IGZ1bmN0aW9uIChzcXVhcmUpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5TWlzcyA9IGZ1bmN0aW9uIChzcXVhcmUpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gIH07XG5cbiAgY29uc3Qgc2hpcFN1bmsgPSBmdW5jdGlvbiAoc2hpcCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB4ID0gc2hpcC5jb29yZHNbaV1bMF07XG4gICAgICBsZXQgeSA9IHNoaXAuY29vcmRzW2ldWzFdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKGNvb3Jkcywgc3F1YXJlKSB7XG4gICAgbGV0IHNoaXAgPSBib2FyZFtjb29yZHNbMV1dW2Nvb3Jkc1swXV07IC8vIHggYW5kIHkgbXVzdCBiZSBzd2FwcGVkIGZvciBnYW1lIGJvYXJkXG5cbiAgICAvLyBpZiBub3QgYSBsZWdhbCBtb3ZlLCByZXRyeVxuICAgIGNvbnNvbGUubG9nKGBjb29yZHMgPSAke2Nvb3Jkc31gKTtcbiAgICBpZiAobWF0Y2hNb3ZlKHBvdGVudGlhbE1vdmVzLCBjb29yZHMpID09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJldHJ5IGJyb1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNoaXAgPT0gXCIgXCIpIHtcbiAgICAgICAgbWlzc2VkQ29vcmRzLnB1c2goY29vcmRzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaXNzXCIpO1xuICAgICAgICBkaXNwbGF5TWlzcyhzcXVhcmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHN3YXBwZWRDb29yZHMgPSBbXTtcbiAgICAgICAgc3dhcHBlZENvb3Jkcy5wdXNoKGNvb3Jkc1sxXSk7XG4gICAgICAgIHN3YXBwZWRDb29yZHMucHVzaChjb29yZHNbMF0pO1xuICAgICAgICBpZiAobWF0Y2hNb3ZlKHNoaXAuY29vcmRzLCBzd2FwcGVkQ29vcmRzKSkge1xuICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgZGlzcGxheUhpdChzcXVhcmUpO1xuICAgICAgICAgIHNoaXAuaXNTdW5rKCk7XG4gICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNoaXBTdW5rKHNoaXApO1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbFN1bmsoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhpdFwiKTtcbiAgICAgICAgICBzd2FwcGVkQ29vcmRzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaE1vdmUocG90ZW50aWFsTW92ZXMsIGNvb3JkcykpIHtcbiAgICAgICAgcmVtb3ZlQWxsSW5zdGFuY2VzKHBvdGVudGlhbE1vdmVzLCBjb29yZHMpOyAvLyBuZWVkIHRvIGNvZGUgdGhpc1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID09IDUpIHtcbiAgICAgIGFsZXJ0KFwiRE9ORSFcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmF3Qm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGJvYXJkLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIGxldCBpbmRpdmlkdWFsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChhKTsgLy8geFxuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoaSk7IC8vIHlcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFNxdWFyZSk7XG4gICAgICAgIGlmIChib2FyZFtpXVthXSAhPSBcIiBcIikge1xuICAgICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd0NvbXB1dGVyQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGJvYXJkLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIGxldCBpbmRpdmlkdWFsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChhKTsgLy8geFxuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoaSk7IC8vIHlcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsYXNzVG9Db29yZHMgPSBmdW5jdGlvbiAoaW5kaXZpZHVhbFNxdWFyZSkge1xuICAgIGxldCBjbGFzc2VzID0gaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3Q7XG4gICAgbGV0IHggPSBjbGFzc2VzWzFdO1xuICAgIGxldCB5ID0gXCJvb3BzXCI7IC8vIHRvIHN0b3AgZXJyb3JzXG4gICAgbGV0IHRlbXAgPSBwYXJzZUludChjbGFzc2VzWzJdKTtcbiAgICBpZiAocGFyc2VJbnQoY2xhc3Nlc1syXSkgPj0gMCkge1xuICAgICAgeSA9IGNsYXNzZXNbMl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBjbGFzc2VzWzFdO1xuICAgIH1cbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgaG9yaXpvbnRhbCxcbiAgICB2ZXJ0aWNhbCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZENvb3JkcyxcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgYWxsU3VuayxcbiAgICBnZXRQb3RlbnRpYWxNb3ZlcyxcbiAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICBtYXRjaE1vdmUsXG4gICAgcmVtb3ZlQWxsSW5zdGFuY2VzLFxuICAgIGRyYXdCb2FyZCxcbiAgICBzZXRVcENsaWNrVG9IaXQsXG4gICAgZHJhd0NvbXB1dGVyQm9hcmQsXG4gICAgc3Vua1NoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZUJvYXJkIH07XG5cbi8vIGNvbnN0IGNoZWNrTmVzdGVkQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIGNvb3Jkcykge1xuLy8gICBsZXQgbWF0Y2ggPSBmYWxzZTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuLy8gICAgIGlmIChhcnJheVtpXS5pbmNsdWRlcyhjb29yZHNbMF0pICYmIGFycmF5W2ldLmluY2x1ZGVzKGNvb3Jkc1sxXSkpIHtcbi8vICAgICAgIG1hdGNoID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIG1hdGNoO1xuLy8gfTtcbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5hbWUgPSBcIlwiO1xuICBsZXQgbGVnYWxNb3ZlcyA9IFtdO1xuICAvLyBsZXQgcHJldmlvdXNNb3ZlcyA9IFtdO1xuICAvLyBsZXQgYXZhaWxhYmxlTW92ZXMgPSBbXTtcblxuICBjb25zdCBnZXRMZWdhbE1vdmVzID0gZnVuY3Rpb24gKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgbGVnYWxNb3ZlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3Bwb25lbnRHYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGErKykge1xuICAgICAgICBpZiAob3Bwb25lbnRHYW1lYm9hcmQuYm9hcmRbaV1bYV0gPT0gXCIgXCIpIHtcbiAgICAgICAgICBsZWdhbE1vdmVzLnB1c2goW2ksIGFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja01pc3NlZENvb3Jkc0Zvck1hdGNoID0gZnVuY3Rpb24gKFxuICAgIGNvb3JkcyxcbiAgICBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5XG4gICkge1xuICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgIGF2YWlsYWJsZU1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgY29vcmRzWzBdID09IG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlbaV1bMF0gJiZcbiAgICAgICAgY29vcmRzWzFdID09IG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlbaV1bMV1cbiAgICAgICkge1xuICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdmFpbGFibGVNb3Zlcy5wdXNoKFtjb29yZHNbMF0sIGNvb3Jkc1sxXV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBjb25zdCByYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBnZXRSYW5kb21JbnQob3Bwb25lbnRHYW1lYm9hcmQucG90ZW50aWFsTW92ZXMubGVuZ3RoIC0gMSk7XG4gICAgbGV0IHJhbmRvbU1vdmUgPSBvcHBvbmVudEdhbWVib2FyZC5wb3RlbnRpYWxNb3Zlc1tyYW5kb21JbmRleF07XG4gICAgcmV0dXJuIHJhbmRvbU1vdmU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgICBnZXRMZWdhbE1vdmVzLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgICBjaGVja01pc3NlZENvb3Jkc0Zvck1hdGNoLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBsYXllck9uZSA9IFBsYXllcigpO1xuICBsZXQgcGxheWVyVHdvID0gUGxheWVyKCk7XG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICBsZXQgcDFHYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IHAyR2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIHAxR2FtZWJvYXJkLmdldFBvdGVudGlhbE1vdmVzKCk7XG4gIHAyR2FtZWJvYXJkLmdldFBvdGVudGlhbE1vdmVzKCk7XG5cbiAgY29uc3Qgc3dhcFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJPbmUpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFVwUGxheWVyT25lU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcDFHYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgICBjb25zdCBwMXNoaXAyID0gU2hpcCgyKTtcbiAgICBwMXNoaXAyLmNvb3Jkcy5wdXNoKFswLCAwXSk7XG4gICAgcDFzaGlwMi5jb29yZHMucHVzaChbMCwgMV0pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzBdWzBdID0gcDFzaGlwMjtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFswXVsxXSA9IHAxc2hpcDI7XG4gICAgY29uc3QgcDFzaGlwM2EgPSBTaGlwKDMpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBhYmMke3Axc2hpcDNhLmxlbmd0aH1gKTtcblxuICAgIHAxc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAwXSk7XG4gICAgcDFzaGlwM2EuY29vcmRzLnB1c2goWzEsIDFdKTtcbiAgICBwMXNoaXAzYS5jb29yZHMucHVzaChbMSwgMl0pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzFdWzBdID0gcDFzaGlwM2E7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMV1bMV0gPSBwMXNoaXAzYTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsxXVsyXSA9IHAxc2hpcDNhO1xuICAgIGNvbnN0IHAxc2hpcDNiID0gU2hpcCgzKTtcbiAgICBwMXNoaXAzYi5jb29yZHMucHVzaChbMiwgMF0pO1xuICAgIHAxc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAxXSk7XG4gICAgcDFzaGlwM2IuY29vcmRzLnB1c2goWzIsIDJdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsyXVswXSA9IHAxc2hpcDNiO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzJdWzFdID0gcDFzaGlwM2I7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMl1bMl0gPSBwMXNoaXAzYjtcbiAgICBjb25zdCBwMXNoaXA0ID0gU2hpcCg0KTtcbiAgICBwMXNoaXA0LmNvb3Jkcy5wdXNoKFszLCAwXSk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgMV0pO1xuICAgIHAxc2hpcDQuY29vcmRzLnB1c2goWzMsIDJdKTtcbiAgICBwMXNoaXA0LmNvb3Jkcy5wdXNoKFszLCAzXSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbM11bMF0gPSBwMXNoaXA0O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzFdID0gcDFzaGlwNDtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFszXVsyXSA9IHAxc2hpcDQ7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbM11bM10gPSBwMXNoaXA0O1xuICAgIGNvbnN0IHAxc2hpcDUgPSBTaGlwKDUpO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDBdKTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAxXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgMl0pO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDNdKTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCA0XSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bMF0gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzFdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVsyXSA9IHAxc2hpcDU7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bM10gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzRdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMXNoaXAyKTtcbiAgICBwMUdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMXNoaXAzYSk7XG4gICAgcDFHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDFzaGlwM2IpO1xuICAgIHAxR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAxc2hpcDQpO1xuICAgIHAxR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAxc2hpcDUpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwUGxheWVyVHdvU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcDJzaGlwMiA9IFNoaXAoMik7XG4gICAgcDJzaGlwMi5jb29yZHMucHVzaChbMCwgMF0pO1xuICAgIHAyc2hpcDIuY29vcmRzLnB1c2goWzAsIDFdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFswXVswXSA9IHAyc2hpcDI7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMF1bMV0gPSBwMnNoaXAyO1xuICAgIGNvbnN0IHAyc2hpcDNhID0gU2hpcCgzKTtcbiAgICBwMnNoaXAzYS5jb29yZHMucHVzaChbMSwgMF0pO1xuICAgIHAyc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAxXSk7XG4gICAgcDJzaGlwM2EuY29vcmRzLnB1c2goWzEsIDJdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsxXVswXSA9IHAyc2hpcDNhO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzFdWzFdID0gcDJzaGlwM2E7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMV1bMl0gPSBwMnNoaXAzYTtcbiAgICBjb25zdCBwMnNoaXAzYiA9IFNoaXAoMyk7XG4gICAgcDJzaGlwM2IuY29vcmRzLnB1c2goWzIsIDBdKTtcbiAgICBwMnNoaXAzYi5jb29yZHMucHVzaChbMiwgMV0pO1xuICAgIHAyc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAyXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMl1bMF0gPSBwMnNoaXAzYjtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsyXVsxXSA9IHAyc2hpcDNiO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzJdWzJdID0gcDJzaGlwM2I7XG4gICAgY29uc3QgcDJzaGlwNCA9IFNoaXAoNCk7XG4gICAgcDJzaGlwNC5jb29yZHMucHVzaChbMywgMF0pO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDFdKTtcbiAgICBwMnNoaXA0LmNvb3Jkcy5wdXNoKFszLCAyXSk7XG4gICAgcDJzaGlwNC5jb29yZHMucHVzaChbMywgM10pO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzNdWzBdID0gcDJzaGlwNDtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVsxXSA9IHAyc2hpcDQ7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbM11bMl0gPSBwMnNoaXA0O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzNdWzNdID0gcDJzaGlwNDtcbiAgICBjb25zdCBwMnNoaXA1ID0gU2hpcCg1KTtcbiAgICBwMnNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAwXSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgMV0pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDJdKTtcbiAgICBwMnNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAzXSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgNF0pO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzRdWzBdID0gcDJzaGlwNTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVsxXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bMl0gPSBwMnNoaXA1O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzRdWzNdID0gcDJzaGlwNTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVs0XSA9IHAyc2hpcDU7XG5cbiAgICBwMkdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMnNoaXAyKTtcbiAgICBwMkdhbWVib2FyZC5jdXJyZW50U2hpcHMucHVzaChwMnNoaXAzYSk7XG4gICAgcDJHYW1lYm9hcmQuY3VycmVudFNoaXBzLnB1c2gocDJzaGlwM2IpO1xuICAgIHAyR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAyc2hpcDQpO1xuICAgIHAyR2FtZWJvYXJkLmN1cnJlbnRTaGlwcy5wdXNoKHAyc2hpcDUpO1xuICB9O1xuXG4gIGNvbnN0IHNldFVwR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRVcFBsYXllck9uZVNoaXBzKCk7XG4gICAgc2V0VXBQbGF5ZXJUd29TaGlwcygpO1xuICAgIHAxR2FtZWJvYXJkLmRyYXdCb2FyZCgpO1xuICAgIHAyR2FtZWJvYXJkLmRyYXdDb21wdXRlckJvYXJkKCk7XG4gICAgcDFHYW1lYm9hcmQuc2V0VXBDbGlja1RvSGl0KCk7XG4gICAgcDJHYW1lYm9hcmQuc2V0VXBDbGlja1RvSGl0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3dhcFBsYXllciwgc2V0VXBHYW1lLCBwMUdhbWVib2FyZCwgcDJHYW1lYm9hcmQgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuLy8gY29uc3QgZ2IxID0gR2FtZUJvYXJkKCk7XG4vLyBjb25zdCBnYjIgPSBHYW1lQm9hcmQoKTtcblxuLy8gLy8gY29uc3QgZ2FtZSA9IEdhbWUoKTtcbi8vIC8vIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuLy8gLy8gY29uc3Qgc2hpcCA9IFNoaXAoKTtcbi8vIC8vIHNoaXAuY29vcmRzLnB1c2goWzAsIDFdKTtcbi8vIC8vIGdiLmdldFBvdGVudGlhbE1vdmVzKCk7XG4vLyAvLyBsZXQgbW92ZXMgPSBnYi5wb3RlbnRpYWxNb3Zlcztcbi8vIC8vIGNvbnNvbGUubG9nKGdiLnBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4vLyAvLyBnYi5yZWNlaXZlQXR0YWNrKHNoaXAsIFswLCAzXSk7XG4vLyAvLyBjb25zb2xlLmxvZyhnYi5wb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuLy8gZ2IxLmRyYXdCb2FyZCgpO1xuLy8gZ2IyLmRyYXdCb2FyZCgpO1xuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc2V0VXBHYW1lKCk7XG4vLyBnYW1lLnAxR2FtZWJvYXJkLmRyYXdCb2FyZCgpO1xuLy8gZ2FtZS5wMkdhbWVib2FyZC5kcmF3Q29tcHV0ZXJCb2FyZCgpO1xuLy8gZ2FtZS5wMUdhbWVib2FyZC5zZXRVcENsaWNrVG9IaXQoKTtcbi8vIGdhbWUucDJHYW1lYm9hcmQuc2V0VXBDbGlja1RvSGl0KCk7XG4iXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsIm51bWJlck9mSGl0cyIsInN1bmsiLCJzaGlwTGVuZ3RoIiwiaXNTdW5rIiwiaGl0IiwiY29vcmRzIiwiR2FtZUJvYXJkIiwic3Vua1NoaXBzIiwibWlzc2VkQ29vcmRzIiwicG90ZW50aWFsTW92ZXMiLCJib2FyZCIsIm1hdGNoTW92ZSIsImFycmF5VG9GaW5kTWF0Y2giLCJtYXRjaCIsImZvckVhY2giLCJtb3ZlIiwicmVtb3ZlQWxsSW5zdGFuY2VzIiwiYXJyIiwiaXRlbSIsImkiLCJzcGxpY2UiLCJyZWNlaXZlQXR0YWNrIiwic3F1YXJlIiwic2hpcCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheU1pc3MiLCJzd2FwcGVkQ29vcmRzIiwiZGlzcGxheUhpdCIsInNoaXBTdW5rIiwiYWxsU3VuayIsImFsZXJ0IiwiY2xhc3NUb0Nvb3JkcyIsImluZGl2aWR1YWxTcXVhcmUiLCJjbGFzc2VzIiwieCIsInkiLCJwYXJzZUludCIsImhvcml6b250YWwiLCJzdGFydFJvd0Nvb3JkcyIsInN0YXJ0Q29sdW1uQ29vcmRzIiwiY3VycmVudENvb3JkIiwidmVydGljYWwiLCJjdXJyZW50U2hpcHMiLCJnZXRQb3RlbnRpYWxNb3ZlcyIsImEiLCJkcmF3Qm9hcmQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJib2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFVwQ2xpY2tUb0hpdCIsInNxdWFyZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0NvbXB1dGVyQm9hcmQiLCJQbGF5ZXIiLCJsZWdhbE1vdmVzIiwicmFuZG9tQXR0YWNrIiwib3Bwb25lbnRHYW1lYm9hcmQiLCJyYW5kb21JbmRleCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJnZXRMZWdhbE1vdmVzIiwiY2hlY2tNaXNzZWRDb29yZHNGb3JNYXRjaCIsIm9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXkiLCJhdmFpbGFibGVNb3ZlcyIsInBsYXllck9uZSIsInBsYXllclR3byIsImN1cnJlbnRQbGF5ZXIiLCJwMUdhbWVib2FyZCIsInAyR2FtZWJvYXJkIiwic3dhcFBsYXllciIsInNldFVwR2FtZSIsInAxc2hpcDIiLCJwMXNoaXAzYSIsInAxc2hpcDNiIiwicDFzaGlwNCIsInAxc2hpcDUiLCJzZXRVcFBsYXllck9uZVNoaXBzIiwicDJzaGlwMiIsInAyc2hpcDNhIiwicDJzaGlwM2IiLCJwMnNoaXA0IiwicDJzaGlwNSIsInNldFVwUGxheWVyVHdvU2hpcHMiLCJHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==