(()=>{"use strict";const o=function(o){let s=!1;return{shipLength:o,numberOfHits:0,isSunk:function(o,t){return o==t?(s=!0,s):(s=!1,s)},hit:function(){this.numberOfHits+=1},coords:[]}},s=function(){let o=[];const s=[];let t=[],r=[[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]]];const e=function(o,s){let t=!1;return o.forEach((o=>{o[0]==s[0]&&o[1]==s[1]&&(console.log("true"),t=!0)})),1==t};function n(o,s){for(let t=o.length;t--;)o[t][0]==s[0]&&o[t][1]==s[1]&&o.splice(t,1)}const c=function(o,c){let d=r[o[1]][o[0]];if(console.log(`ship ${d}`)," "==d)s.push(o),console.log("miss"),console.log(`ship ${d}`);else{let s=[];s.push(o[1]),s.push(o[0]),e(d.coords,s)&&(d.hit(),function(o){o.classList.add("hit")}(c),console.log("hit"),s=[])}e(t,o)&&n(t,o)},d=function(o){let s=o.classList;console.log(`classes ${s}`);let t=s[1],r="oops";return parseInt(s[2]),parseInt(s[2])>=0?(r=s[2],console.log("if")):(r=s[1],console.log("else")),[t,r]};return{board:r,horizontal:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[s,r+t];o.coords.push(e)}},vertical:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[r+s,t];o.coords.push(e)}},receiveAttack:c,missedCoords:s,currentShips:o,allSunk:function(){let s=[];return o.forEach((o=>{0==o.sunk?s.push(!1):s.push(!0)})),!s.includes(!1)},getPotentialMoves:function(){for(let o=0;o<10;o++)for(let s=0;s<10;s++)t.push([s,o])},potentialMoves:t,matchMove:e,removeAllInstances:n,drawBoard:function(){console.log("Hi");const o=document.getElementsByClassName("container")[0];console.log(o);let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let e=document.createElement("div");e.classList.add("individual-square"),e.classList.add(t),e.classList.add(o),console.log("in"),s.appendChild(e)," "!=r[o][t]&&e.classList.add("ship")}},setUpClickToHit:function(){let o=document.getElementsByClassName("individual-square");for(let s=0;s<o.length;s++)o[s].addEventListener("click",(()=>{let t=d(o[s]),e=r[t[1]][t[0]];console.log(t),console.log(e),c(d(o[s]),o[s])}))}}},t=function(){let o=[],s=[];const t=function(o){let s=(t=o.potentialMoves.length-1,Math.floor(Math.random()*t));var t;return o.potentialMoves[s]};return{name:"",randomAttack:t,getLegalMoves:function(s){o=[];for(let t=0;t<s.board.length;t++)for(let r=0;r<10;r++)" "==s.board[t][r]&&o.push([t,r])},randomAttack:t,checkMissedCoordsForMatch:function(o,t){let r=!1;s=[];for(let e=0;e<t.length;e++)o[0]==t[e][0]&&o[1]==t[e][1]?r=!0:s.push([o[0],o[1]]);return 1==r}}},r=function(){let r="",e="",n=r,c=s(),d=s();return{swapPlayer:function(){n=n==r?e:r},setUpGame:function(){r=t();const s=o(2);s.coords.push([0,0]),s.coords.push([0,1]),c.board[0][0]=s,c.board[0][1]=s;const n=o(3);n.coords.push([1,0]),n.coords.push([1,1]),n.coords.push([1,2]),c.board[1][0]=s,c.board[1][1]=s,c.board[1][2]=s;const a=o(3);a.coords.push([2,0]),a.coords.push([2,1]),a.coords.push([2,2]),c.board[2][0]=a,c.board[2][1]=a,c.board[2][2]=a;const l=o(4);l.coords.push([3,0]),l.coords.push([3,1]),l.coords.push([3,2]),l.coords.push([3,3]),c.board[3][0]=l,c.board[3][1]=l,c.board[3][2]=l,c.board[3][3]=l;const u=o(5);u.coords.push([4,0]),u.coords.push([4,1]),u.coords.push([4,2]),u.coords.push([4,3]),u.coords.push([4,4]),c.board[4][0]=u,c.board[4][1]=u,c.board[4][2]=u,c.board[4][3]=u,c.board[4][4]=u,e=t();const i=o(2);i.coords.push([0,0]),i.coords.push([0,1]),d.board[0][0]=i,d.board[0][1]=i;const h=o(3);h.coords.push([1,0]),h.coords.push([1,1]),h.coords.push([1,2]),d.board[1][0]=h,d.board[1][1]=h,d.board[1][2]=h;const p=o(3);p.coords.push([2,0]),p.coords.push([2,1]),p.coords.push([2,2]),d.board[2][0]=p,d.board[2][1]=p,d.board[2][2]=p;const b=o(4);b.coords.push([3,0]),b.coords.push([3,1]),b.coords.push([3,2]),b.coords.push([3,3]),d.board[3][0]=b,d.board[3][1]=b,d.board[3][2]=b,d.board[3][3]=b;const f=o(5);f.coords.push([4,0]),f.coords.push([4,1]),f.coords.push([4,2]),f.coords.push([4,3]),f.coords.push([4,4]),d.board[4][0]=f,d.board[4][1]=f,d.board[4][2]=f,d.board[4][3]=f,d.board[4][4]=f},p1Gameboard:c,p2Gameboard:d}}();r.setUpGame(),r.p1Gameboard.drawBoard(),r.p2Gameboard.drawBoard(),r.p1Gameboard.setUpClickToHit(),r.p1Gameboard.setUpClickToHit()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRyxHQUFLZ0YsRUFDMUJaLEVBQVlwRSxNQUFNLEdBQUcsR0FBS2dGLENBQzVCLEVBRWdDYixjQUFhQyxjQUMvQyxDRHZGYWEsR0FDYmxCLEVBQUtPLFlBQ0xQLEVBQUtJLFlBQVk5QixZQUNqQjBCLEVBQUtLLFlBQVkvQixZQUNqQjBCLEVBQUtJLFlBQVl2QixrQkFDakJtQixFQUFLSSxZQUFZdkIsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IG51bWJlck9mSGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBjb29yZHMgPSBbXTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5udW1iZXJPZkhpdHMgKz0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAobGVuZ3RoLCBudW1iZXJPZkhpdHMpIHtcbiAgICBpZiAobGVuZ3RoID09IG51bWJlck9mSGl0cykge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9IGVsc2Uge1xuICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNoaXBMZW5ndGgsIG51bWJlck9mSGl0cywgaXNTdW5rLCBoaXQsIGNvb3JkcyB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy9jaGVjayBmb3IgbGVnYWwgbW92ZXNcblxuY29uc3QgR2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBsZXQgc2hpcFBsYWNlbWVudE1vZGUgPSBcImhvcml6b250YWxcIjtcbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xuICBsZXQgc3Vua1NoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZENvb3JkcyA9IFtdO1xuICBsZXQgcG90ZW50aWFsTW92ZXMgPSBbXTtcblxuICBsZXQgYm9hcmQgPSBbXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICBdO1xuXG4gIGNvbnN0IGdldFBvdGVudGlhbE1vdmVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSsrKSB7XG4gICAgICAgIHBvdGVudGlhbE1vdmVzLnB1c2goW2EsIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBDbGlja1RvSGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzcXVhcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImluZGl2aWR1YWwtc3F1YXJlXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gc3F1YXJlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tUb0F0dGFjaygpKTtcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSBjbGFzc1RvQ29vcmRzKHNxdWFyZXNbaV0pO1xuICAgICAgICBsZXQgdGVtcHNoaXAgPSBib2FyZFt0ZW1wWzFdXVt0ZW1wWzBdXTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBzaGlwKTtcbiAgICAgICAgcmVjZWl2ZUF0dGFjayhjbGFzc1RvQ29vcmRzKHNxdWFyZXNbaV0pLCBzcXVhcmVzW2ldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBob3Jpem9udGFsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbc3RhcnRSb3dDb29yZHMsIGkgKyBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbaSArIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwKSB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGxldCBvdXRlciA9IGNvb3JkWzBdO1xuICAgICAgbGV0IGlubmVyID0gY29vcmRbMV07XG4gICAgICBib2FyZFtvdXRlcl1baW5uZXJdID0gc2hpcDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRTaGlwUG9zaXRpb24gPSBmdW5jdGlvbiAoc2hpcCwgc3RhcnRSb3dDb29yZHMsIHN0YXJ0Q29sdW1uQ29vcmRzKSB7XG4gICAgaWYgKHNoaXBQbGFjZW1lbnRNb2RlID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBob3Jpem9udGFsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfSBlbHNlIGlmIChzaGlwUGxhY2VtZW50TW9kZSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHZlcnRpY2FsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrTmVzdGVkQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIGNvb3Jkcykge1xuICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXS5pbmNsdWRlcyhjb29yZHNbMF0pICYmIGFycmF5W2ldLmluY2x1ZGVzKGNvb3Jkc1sxXSkpIHtcbiAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG5cbiAgY29uc3QgbWF0Y2hNb3ZlID0gZnVuY3Rpb24gKGFycmF5VG9GaW5kTWF0Y2gsIGNvb3Jkcykge1xuICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgIGFycmF5VG9GaW5kTWF0Y2guZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgaWYgKG1vdmVbMF0gPT0gY29vcmRzWzBdICYmIG1vdmVbMV0gPT0gY29vcmRzWzFdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEluc3RhbmNlcyhhcnIsIGl0ZW0pIHtcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgIGlmIChhcnJbaV1bMF0gPT0gaXRlbVswXSAmJiBhcnJbaV1bMV0gPT0gaXRlbVsxXSkgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGlja1RvQXR0YWNrID0gZnVuY3Rpb24gKGNvb3Jkcywgb3Bwb25lbnRHYW1lQm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRHYW1lQm9hcmQuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09IFwiIFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkJsYW5rXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5SGl0ID0gZnVuY3Rpb24gKHNxdWFyZSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAoY29vcmRzLCBzcXVhcmUpIHtcbiAgICBsZXQgc2hpcCA9IGJvYXJkW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXTsgLy8geCBhbmQgeSBtdXN0IGJlIHN3YXBwZWQgZm9yIGdhbWUgYm9hcmRcbiAgICBjb25zb2xlLmxvZyhgc2hpcCAke3NoaXB9YCk7XG5cbiAgICBpZiAoc2hpcCA9PSBcIiBcIikge1xuICAgICAgbWlzc2VkQ29vcmRzLnB1c2goY29vcmRzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibWlzc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGBzaGlwICR7c2hpcH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN3YXBwZWRDb29yZHMgPSBbXTtcbiAgICAgIHN3YXBwZWRDb29yZHMucHVzaChjb29yZHNbMV0pO1xuICAgICAgc3dhcHBlZENvb3Jkcy5wdXNoKGNvb3Jkc1swXSk7XG4gICAgICBpZiAobWF0Y2hNb3ZlKHNoaXAuY29vcmRzLCBzd2FwcGVkQ29vcmRzKSkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBkaXNwbGF5SGl0KHNxdWFyZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xuICAgICAgICBzd2FwcGVkQ29vcmRzID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXRjaE1vdmUocG90ZW50aWFsTW92ZXMsIGNvb3JkcykpIHtcbiAgICAgIHJlbW92ZUFsbEluc3RhbmNlcyhwb3RlbnRpYWxNb3ZlcywgY29vcmRzKTsgLy8gbmVlZCB0byBjb2RlIHRoaXNcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gW107XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnN1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgYWxsU2hpcHNTdW5rLnB1c2goZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsU2hpcHNTdW5rLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsU2hpcHNTdW5rLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd0JvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGlcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXTtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYm9hcmQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgbGV0IGluZGl2aWR1YWxTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJpbmRpdmlkdWFsLXNxdWFyZVwiKTtcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKGEpOyAvLyB4XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChpKTsgLy8geVxuICAgICAgICBjb25zb2xlLmxvZyhcImluXCIpO1xuICAgICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRpdmlkdWFsU3F1YXJlKTtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2FdICE9IFwiIFwiKSB7XG4gICAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGFzc1RvQ29vcmRzID0gZnVuY3Rpb24gKGluZGl2aWR1YWxTcXVhcmUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0O1xuICAgIGNvbnNvbGUubG9nKGBjbGFzc2VzICR7Y2xhc3Nlc31gKTtcbiAgICBsZXQgeCA9IGNsYXNzZXNbMV07XG4gICAgbGV0IHkgPSBcIm9vcHNcIjsgLy8gdG8gc3RvcCBlcnJvcnNcbiAgICBsZXQgdGVtcCA9IHBhcnNlSW50KGNsYXNzZXNbMl0pO1xuICAgIGlmIChwYXJzZUludChjbGFzc2VzWzJdKSA+PSAwKSB7XG4gICAgICB5ID0gY2xhc3Nlc1syXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaWZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBjbGFzc2VzWzFdO1xuICAgICAgY29uc29sZS5sb2coXCJlbHNlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgaG9yaXpvbnRhbCxcbiAgICB2ZXJ0aWNhbCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZENvb3JkcyxcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgYWxsU3VuayxcbiAgICBnZXRQb3RlbnRpYWxNb3ZlcyxcbiAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICBtYXRjaE1vdmUsXG4gICAgcmVtb3ZlQWxsSW5zdGFuY2VzLFxuICAgIGRyYXdCb2FyZCxcbiAgICBzZXRVcENsaWNrVG9IaXQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lQm9hcmQgfTtcblxuLy8gYm9hcmQuZm9yRWFjaCgoYm9hcmQpID0+IHtcbi8vICAgYm9hcmQuZm9yRWFjaCgoaW5uZXJTcXVhcmUpID0+IHtcbi8vICAgICBsZXQgaW5kaXZpZHVhbFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4vLyAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFNxdWFyZSk7XG4vLyAgICAgaWYgKGlubmVyU3F1YXJlWzBdICE9IFwiIFwiKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbi8vICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH0pO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbmFtZSA9IFwiXCI7XG4gIGxldCBsZWdhbE1vdmVzID0gW107XG4gIGxldCBwcmV2aW91c01vdmVzID0gW107XG4gIGxldCBhdmFpbGFibGVNb3ZlcyA9IFtdO1xuXG4gIGNvbnN0IGdldExlZ2FsTW92ZXMgPSBmdW5jdGlvbiAob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBsZWdhbE1vdmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHBvbmVudEdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSsrKSB7XG4gICAgICAgIGlmIChvcHBvbmVudEdhbWVib2FyZC5ib2FyZFtpXVthXSA9PSBcIiBcIikge1xuICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChbaSwgYV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrTWlzc2VkQ29vcmRzRm9yTWF0Y2ggPSBmdW5jdGlvbiAoXG4gICAgY29vcmRzLFxuICAgIG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlcbiAgKSB7XG4gICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgYXZhaWxhYmxlTW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gY29uc29sZS5sb2cob3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVswXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzFdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkc1swXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkc1sxXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzFdKTtcblxuICAgICAgaWYgKFxuICAgICAgICBjb29yZHNbMF0gPT0gb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVswXSAmJlxuICAgICAgICBjb29yZHNbMV0gPT0gb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVsxXVxuICAgICAgKSB7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF2YWlsYWJsZU1vdmVzLnB1c2goW2Nvb3Jkc1swXSwgY29vcmRzWzFdXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coYGF2YWlsYWJsZSA6ICR7YXZhaWxhYmxlTW92ZXN9YCk7XG5cbiAgICBpZiAobWF0Y2ggPT0gdHJ1ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJJVCBJUyBBIE1BVENIXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSVQgSVMgTk9UIEEgTUFUQ0hcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IGZ1bmN0aW9uIChvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGxldCByYW5kb21JbmRleCA9IGdldFJhbmRvbUludChvcHBvbmVudEdhbWVib2FyZC5wb3RlbnRpYWxNb3Zlcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgcmFuZG9tTW92ZSA9IG9wcG9uZW50R2FtZWJvYXJkLnBvdGVudGlhbE1vdmVzW3JhbmRvbUluZGV4XTtcbiAgICByZXR1cm4gcmFuZG9tTW92ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIGdldExlZ2FsTW92ZXMsXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIGNoZWNrTWlzc2VkQ29vcmRzRm9yTWF0Y2gsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuLy8gY29uc3QgZ2IxID0gR2FtZUJvYXJkKCk7XG4vLyBjb25zdCBnYjIgPSBHYW1lQm9hcmQoKTtcblxuLy8gLy8gY29uc3QgZ2FtZSA9IEdhbWUoKTtcbi8vIC8vIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuLy8gLy8gY29uc3Qgc2hpcCA9IFNoaXAoKTtcbi8vIC8vIHNoaXAuY29vcmRzLnB1c2goWzAsIDFdKTtcbi8vIC8vIGdiLmdldFBvdGVudGlhbE1vdmVzKCk7XG4vLyAvLyBsZXQgbW92ZXMgPSBnYi5wb3RlbnRpYWxNb3Zlcztcbi8vIC8vIGNvbnNvbGUubG9nKGdiLnBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4vLyAvLyBnYi5yZWNlaXZlQXR0YWNrKHNoaXAsIFswLCAzXSk7XG4vLyAvLyBjb25zb2xlLmxvZyhnYi5wb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuLy8gZ2IxLmRyYXdCb2FyZCgpO1xuLy8gZ2IyLmRyYXdCb2FyZCgpO1xuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc2V0VXBHYW1lKCk7XG5nYW1lLnAxR2FtZWJvYXJkLmRyYXdCb2FyZCgpO1xuZ2FtZS5wMkdhbWVib2FyZC5kcmF3Qm9hcmQoKTtcbmdhbWUucDFHYW1lYm9hcmQuc2V0VXBDbGlja1RvSGl0KCk7XG5nYW1lLnAxR2FtZWJvYXJkLnNldFVwQ2xpY2tUb0hpdCgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXJPbmUgPSBcIlwiO1xuICBsZXQgcGxheWVyVHdvID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gIGxldCBwMUdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICBsZXQgcDJHYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICBjb25zdCBzd2FwUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09IHBsYXllck9uZSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllck9uZSA9IFBsYXllcigpO1xuICAgIC8vIHAxR2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgY29uc3QgcDFzaGlwMiA9IFNoaXAoMik7XG4gICAgcDFzaGlwMi5jb29yZHMucHVzaChbMCwgMF0pO1xuICAgIHAxc2hpcDIuY29vcmRzLnB1c2goWzAsIDFdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFswXVswXSA9IHAxc2hpcDI7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMF1bMV0gPSBwMXNoaXAyO1xuICAgIGNvbnN0IHAxc2hpcDNhID0gU2hpcCgzKTtcbiAgICBwMXNoaXAzYS5jb29yZHMucHVzaChbMSwgMF0pO1xuICAgIHAxc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAxXSk7XG4gICAgcDFzaGlwM2EuY29vcmRzLnB1c2goWzEsIDJdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsxXVswXSA9IHAxc2hpcDI7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMV1bMV0gPSBwMXNoaXAyO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDFzaGlwMjtcbiAgICBjb25zdCBwMXNoaXAzYiA9IFNoaXAoMyk7XG4gICAgcDFzaGlwM2IuY29vcmRzLnB1c2goWzIsIDBdKTtcbiAgICBwMXNoaXAzYi5jb29yZHMucHVzaChbMiwgMV0pO1xuICAgIHAxc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAyXSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMl1bMF0gPSBwMXNoaXAzYjtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsyXVsxXSA9IHAxc2hpcDNiO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzJdWzJdID0gcDFzaGlwM2I7XG4gICAgY29uc3QgcDFzaGlwNCA9IFNoaXAoNCk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgMF0pO1xuICAgIHAxc2hpcDQuY29vcmRzLnB1c2goWzMsIDFdKTtcbiAgICBwMXNoaXA0LmNvb3Jkcy5wdXNoKFszLCAyXSk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgM10pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzBdID0gcDFzaGlwNDtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFszXVsxXSA9IHAxc2hpcDQ7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbM11bMl0gPSBwMXNoaXA0O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzNdID0gcDFzaGlwNDtcbiAgICBjb25zdCBwMXNoaXA1ID0gU2hpcCg1KTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAwXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgMV0pO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDJdKTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAzXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgNF0pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzBdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVsxXSA9IHAxc2hpcDU7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bMl0gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzNdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVs0XSA9IHAxc2hpcDU7XG5cbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIoKTtcbiAgICAvLyBwMkdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IHAyc2hpcDIgPSBTaGlwKDIpO1xuICAgIHAyc2hpcDIuY29vcmRzLnB1c2goWzAsIDBdKTtcbiAgICBwMnNoaXAyLmNvb3Jkcy5wdXNoKFswLCAxXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMF1bMF0gPSBwMnNoaXAyO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzBdWzFdID0gcDJzaGlwMjtcbiAgICBjb25zdCBwMnNoaXAzYSA9IFNoaXAoMyk7XG4gICAgcDJzaGlwM2EuY29vcmRzLnB1c2goWzEsIDBdKTtcbiAgICBwMnNoaXAzYS5jb29yZHMucHVzaChbMSwgMV0pO1xuICAgIHAyc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAyXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMV1bMF0gPSBwMnNoaXAzYTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsxXVsxXSA9IHAyc2hpcDNhO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDJzaGlwM2E7XG4gICAgY29uc3QgcDJzaGlwM2IgPSBTaGlwKDMpO1xuICAgIHAyc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAwXSk7XG4gICAgcDJzaGlwM2IuY29vcmRzLnB1c2goWzIsIDFdKTtcbiAgICBwMnNoaXAzYi5jb29yZHMucHVzaChbMiwgMl0pO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzJdWzBdID0gcDJzaGlwM2I7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMl1bMV0gPSBwMnNoaXAzYjtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsyXVsyXSA9IHAyc2hpcDNiO1xuICAgIGNvbnN0IHAyc2hpcDQgPSBTaGlwKDQpO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDBdKTtcbiAgICBwMnNoaXA0LmNvb3Jkcy5wdXNoKFszLCAxXSk7XG4gICAgcDJzaGlwNC5jb29yZHMucHVzaChbMywgMl0pO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDNdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVswXSA9IHAyc2hpcDQ7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbM11bMV0gPSBwMnNoaXA0O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzNdWzJdID0gcDJzaGlwNDtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVszXSA9IHAyc2hpcDQ7XG4gICAgY29uc3QgcDJzaGlwNSA9IFNoaXAoNSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgMF0pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDFdKTtcbiAgICBwMnNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAyXSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgM10pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDRdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVswXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bMV0gPSBwMnNoaXA1O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzRdWzJdID0gcDJzaGlwNTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVszXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bNF0gPSBwMnNoaXA1O1xuICB9O1xuXG4gIHJldHVybiB7IHN3YXBQbGF5ZXIsIHNldFVwR2FtZSwgcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkIH07XG59O1xuXG5leHBvcnQgeyBHYW1lIH07XG4iXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsInN1bmsiLCJzaGlwTGVuZ3RoIiwibnVtYmVyT2ZIaXRzIiwiaXNTdW5rIiwiaGl0IiwidGhpcyIsImNvb3JkcyIsIkdhbWVCb2FyZCIsImN1cnJlbnRTaGlwcyIsIm1pc3NlZENvb3JkcyIsInBvdGVudGlhbE1vdmVzIiwiYm9hcmQiLCJtYXRjaE1vdmUiLCJhcnJheVRvRmluZE1hdGNoIiwibWF0Y2giLCJmb3JFYWNoIiwibW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGxJbnN0YW5jZXMiLCJhcnIiLCJpdGVtIiwiaSIsInNwbGljZSIsInJlY2VpdmVBdHRhY2siLCJzcXVhcmUiLCJzaGlwIiwicHVzaCIsInN3YXBwZWRDb29yZHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5SGl0IiwiY2xhc3NUb0Nvb3JkcyIsImluZGl2aWR1YWxTcXVhcmUiLCJjbGFzc2VzIiwieCIsInkiLCJwYXJzZUludCIsImhvcml6b250YWwiLCJzdGFydFJvd0Nvb3JkcyIsInN0YXJ0Q29sdW1uQ29vcmRzIiwiY3VycmVudENvb3JkIiwidmVydGljYWwiLCJhbGxTdW5rIiwiYWxsU2hpcHNTdW5rIiwiaW5jbHVkZXMiLCJnZXRQb3RlbnRpYWxNb3ZlcyIsImEiLCJkcmF3Qm9hcmQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJib2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFVwQ2xpY2tUb0hpdCIsInNxdWFyZXMiLCJhZGRFdmVudExpc3RlbmVyIiwidGVtcCIsInRlbXBzaGlwIiwiUGxheWVyIiwibGVnYWxNb3ZlcyIsImF2YWlsYWJsZU1vdmVzIiwicmFuZG9tQXR0YWNrIiwib3Bwb25lbnRHYW1lYm9hcmQiLCJyYW5kb21JbmRleCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJnZXRMZWdhbE1vdmVzIiwiY2hlY2tNaXNzZWRDb29yZHNGb3JNYXRjaCIsIm9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXkiLCJnYW1lIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiY3VycmVudFBsYXllciIsInAxR2FtZWJvYXJkIiwicDJHYW1lYm9hcmQiLCJzd2FwUGxheWVyIiwic2V0VXBHYW1lIiwicDFzaGlwMiIsInAxc2hpcDNhIiwicDFzaGlwM2IiLCJwMXNoaXA0IiwicDFzaGlwNSIsInAyc2hpcDIiLCJwMnNoaXAzYSIsInAyc2hpcDNiIiwicDJzaGlwNCIsInAyc2hpcDUiLCJHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==