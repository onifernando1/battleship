(()=>{"use strict";const o=function(o){let s=!1;return{shipLength:o,numberOfHits:0,isSunk:function(o,t){return o==t?(s=!0,s):(s=!1,s)},hit:function(){this.numberOfHits+=1},coords:[]}},s=function(){let o=[];const s=[];let t=[],r=[[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]]];const e=function(o,s){let t=!1;return o.forEach((o=>{o[0]==s[0]&&o[1]==s[1]&&(console.log("true"),t=!0)})),1==t};function n(o,s){for(let t=o.length;t--;)o[t][0]==s[0]&&o[t][1]==s[1]&&o.splice(t,1)}const d=function(o){let d=r[o[1]][o[0]];if(console.log(`ship ${d}`)," "==d)s.push(o),console.log("miss"),console.log(`ship ${d}`);else{let s=[];s.push(o[1]),s.push(o[0]),e(d.coords,s)&&(d.hit(),console.log("hit"),s=[])}e(t,o)&&n(t,o)},c=function(o){let s=o.classList,t=s[1],r="oops";return s.length>=3&&"ship"!=s[2]?r=s[2]:(3==s.length&&"ship"==s[2]||2==s.length)&&(r=s[1]),[t,r]};return{board:r,horizontal:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[s,r+t];o.coords.push(e)}},vertical:function(o,s,t){for(let r=0;r<o.shipLength;r++){let e=[r+s,t];o.coords.push(e)}},receiveAttack:d,missedCoords:s,currentShips:o,allSunk:function(){let s=[];return o.forEach((o=>{0==o.sunk?s.push(!1):s.push(!0)})),!s.includes(!1)},getPotentialMoves:function(){for(let o=0;o<10;o++)for(let s=0;s<10;s++)t.push([s,o])},potentialMoves:t,matchMove:e,removeAllInstances:n,drawBoard:function(){console.log("Hi");const o=document.getElementsByClassName("container")[0];console.log(o);let s=document.createElement("div");s.classList.add("board-container"),o.appendChild(s);for(let o=0;o<r.length;o++)for(let t=0;t<r.length;t++){let e=document.createElement("div");e.classList.add("individual-square"),e.classList.add(t),e.classList.add(o),console.log("in"),s.appendChild(e)," "!=r[o][t]&&e.classList.add("ship")}},setUpClickToHit:function(){let o=document.getElementsByClassName("individual-square");for(let s=0;s<o.length;s++)o[s].addEventListener("click",(()=>{let t=c(o[s]),e=r[t[1]][t[0]];console.log(t),console.log(e),d(c(o[s]))}))}}},t=function(){let o=[],s=[];const t=function(o){let s=(t=o.potentialMoves.length-1,Math.floor(Math.random()*t));var t;return o.potentialMoves[s]};return{name:"",randomAttack:t,getLegalMoves:function(s){o=[];for(let t=0;t<s.board.length;t++)for(let r=0;r<10;r++)" "==s.board[t][r]&&o.push([t,r])},randomAttack:t,checkMissedCoordsForMatch:function(o,t){let r=!1;s=[];for(let e=0;e<t.length;e++)o[0]==t[e][0]&&o[1]==t[e][1]?r=!0:s.push([o[0],o[1]]);return 1==r}}},r=function(){let r="",e="",n=r,d=s(),c=s();return{swapPlayer:function(){n=n==r?e:r},setUpGame:function(){r=t();const s=o(2);s.coords.push([0,0]),s.coords.push([0,1]),d.board[0][0]=s,d.board[0][1]=s;const n=o(3);n.coords.push([1,0]),n.coords.push([1,1]),n.coords.push([1,2]),d.board[1][0]=s,d.board[1][1]=s,d.board[1][2]=s;const a=o(3);a.coords.push([2,0]),a.coords.push([2,1]),a.coords.push([2,2]),d.board[2][0]=a,d.board[2][1]=a,d.board[2][2]=a;const l=o(4);l.coords.push([3,0]),l.coords.push([3,1]),l.coords.push([3,2]),l.coords.push([3,3]),d.board[3][0]=l,d.board[3][1]=l,d.board[3][2]=l,d.board[3][3]=l;const u=o(5);u.coords.push([4,0]),u.coords.push([4,1]),u.coords.push([4,2]),u.coords.push([4,3]),u.coords.push([4,4]),d.board[4][0]=u,d.board[4][1]=u,d.board[4][2]=u,d.board[4][3]=u,d.board[4][4]=u,e=t();const h=o(2);h.coords.push([0,0]),h.coords.push([0,1]),c.board[0][0]=h,c.board[0][1]=h;const i=o(3);i.coords.push([1,0]),i.coords.push([1,1]),i.coords.push([1,2]),c.board[1][0]=i,c.board[1][1]=i,c.board[1][2]=i;const p=o(3);p.coords.push([2,0]),p.coords.push([2,1]),p.coords.push([2,2]),c.board[2][0]=p,c.board[2][1]=p,c.board[2][2]=p;const b=o(4);b.coords.push([3,0]),b.coords.push([3,1]),b.coords.push([3,2]),b.coords.push([3,3]),c.board[3][0]=b,c.board[3][1]=b,c.board[3][2]=b,c.board[3][3]=b;const f=o(5);f.coords.push([4,0]),f.coords.push([4,1]),f.coords.push([4,2]),f.coords.push([4,3]),f.coords.push([4,4]),c.board[4][0]=f,c.board[4][1]=f,c.board[4][2]=f,c.board[4][3]=f,c.board[4][4]=f},p1Gameboard:d,p2Gameboard:c}}();r.setUpGame(),r.p1Gameboard.drawBoard(),r.p2Gameboard.drawBoard(),r.p1Gameboard.setUpClickToHit(),r.p1Gameboard.setUpClickToHit()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxZQUFZL0IsWUFDakIyQixFQUFLSyxZQUFZaEMsWUFDakIyQixFQUFLSSxZQUFZdkIsa0JBQ2pCbUIsRUFBS0ksWUFBWXZCLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG4gIGxldCBudW1iZXJPZkhpdHMgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgY29vcmRzID0gW107XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubnVtYmVyT2ZIaXRzICs9IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKGxlbmd0aCwgbnVtYmVyT2ZIaXRzKSB7XG4gICAgaWYgKGxlbmd0aCA9PSBudW1iZXJPZkhpdHMpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzaGlwTGVuZ3RoLCBudW1iZXJPZkhpdHMsIGlzU3VuaywgaGl0LCBjb29yZHMgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vY2hlY2sgZm9yIGxlZ2FsIG1vdmVzXG5cbmNvbnN0IEdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHNoaXBQbGFjZW1lbnRNb2RlID0gXCJob3Jpem9udGFsXCI7XG4gIGxldCBjdXJyZW50U2hpcHMgPSBbXTtcbiAgbGV0IHN1bmtTaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWRDb29yZHMgPSBbXTtcbiAgbGV0IHBvdGVudGlhbE1vdmVzID0gW107XG5cbiAgbGV0IGJvYXJkID0gW1xuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgXTtcblxuICBjb25zdCBnZXRQb3RlbnRpYWxNb3ZlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGErKykge1xuICAgICAgICBwb3RlbnRpYWxNb3Zlcy5wdXNoKFthLCBpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFVwQ2xpY2tUb0hpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbmRpdmlkdWFsLXNxdWFyZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrVG9BdHRhY2soKSk7XG4gICAgICBzcXVhcmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gY2xhc3NUb0Nvb3JkcyhzcXVhcmVzW2ldKTtcbiAgICAgICAgbGV0IHRlbXBzaGlwID0gYm9hcmRbdGVtcFsxXV1bdGVtcFswXV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wc2hpcCk7XG4gICAgICAgIHJlY2VpdmVBdHRhY2soY2xhc3NUb0Nvb3JkcyhzcXVhcmVzW2ldKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudENvb3JkID0gW3N0YXJ0Um93Q29vcmRzLCBpICsgc3RhcnRDb2x1bW5Db29yZHNdO1xuICAgICAgc2hpcC5jb29yZHMucHVzaChjdXJyZW50Q29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2ZXJ0aWNhbCA9IGZ1bmN0aW9uIChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudENvb3JkID0gW2kgKyBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHNdO1xuICAgICAgc2hpcC5jb29yZHMucHVzaChjdXJyZW50Q29vcmQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAoc2hpcCkge1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBsZXQgb3V0ZXIgPSBjb29yZFswXTtcbiAgICAgIGxldCBpbm5lciA9IGNvb3JkWzFdO1xuICAgICAgYm9hcmRbb3V0ZXJdW2lubmVyXSA9IHNoaXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0U2hpcFBvc2l0aW9uID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGlmIChzaGlwUGxhY2VtZW50TW9kZSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaG9yaXpvbnRhbChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpO1xuICAgIH0gZWxzZSBpZiAoc2hpcFBsYWNlbWVudE1vZGUgPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICB2ZXJ0aWNhbChzaGlwLCBzdGFydFJvd0Nvb3Jkcywgc3RhcnRDb2x1bW5Db29yZHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja05lc3RlZEFycmF5ID0gZnVuY3Rpb24gKGFycmF5LCBjb29yZHMpIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0uaW5jbHVkZXMoY29vcmRzWzBdKSAmJiBhcnJheVtpXS5pbmNsdWRlcyhjb29yZHNbMV0pKSB7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIGNvbnN0IG1hdGNoTW92ZSA9IGZ1bmN0aW9uIChhcnJheVRvRmluZE1hdGNoLCBjb29yZHMpIHtcbiAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICBhcnJheVRvRmluZE1hdGNoLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGlmIChtb3ZlWzBdID09IGNvb3Jkc1swXSAmJiBtb3ZlWzFdID09IGNvb3Jkc1sxXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXRjaCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVBbGxJbnN0YW5jZXMoYXJyLCBpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGg7IGktLTsgKSB7XG4gICAgICBpZiAoYXJyW2ldWzBdID09IGl0ZW1bMF0gJiYgYXJyW2ldWzFdID09IGl0ZW1bMV0pIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xpY2tUb0F0dGFjayA9IGZ1bmN0aW9uIChjb29yZHMsIG9wcG9uZW50R2FtZUJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50R2FtZUJvYXJkLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9PSBcIiBcIikge1xuICAgICAgY29uc29sZS5sb2coXCJCbGFua1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICBsZXQgc2hpcCA9IGJvYXJkW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXTsgLy8geCBhbmQgeSBtdXN0IGJlIHN3YXBwZWQgZm9yIGdhbWUgYm9hcmRcbiAgICBjb25zb2xlLmxvZyhgc2hpcCAke3NoaXB9YCk7XG5cbiAgICBpZiAoc2hpcCA9PSBcIiBcIikge1xuICAgICAgbWlzc2VkQ29vcmRzLnB1c2goY29vcmRzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibWlzc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGBzaGlwICR7c2hpcH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN3YXBwZWRDb29yZHMgPSBbXTtcbiAgICAgIHN3YXBwZWRDb29yZHMucHVzaChjb29yZHNbMV0pO1xuICAgICAgc3dhcHBlZENvb3Jkcy5wdXNoKGNvb3Jkc1swXSk7XG4gICAgICBpZiAobWF0Y2hNb3ZlKHNoaXAuY29vcmRzLCBzd2FwcGVkQ29vcmRzKSkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpdFwiKTtcbiAgICAgICAgc3dhcHBlZENvb3JkcyA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF0Y2hNb3ZlKHBvdGVudGlhbE1vdmVzLCBjb29yZHMpKSB7XG4gICAgICByZW1vdmVBbGxJbnN0YW5jZXMocG90ZW50aWFsTW92ZXMsIGNvb3Jkcyk7IC8vIG5lZWQgdG8gY29kZSB0aGlzXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFsbFNoaXBzU3VuayA9IFtdO1xuICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09IGZhbHNlKSB7XG4gICAgICAgIGFsbFNoaXBzU3Vuay5wdXNoKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbFNoaXBzU3Vuay5wdXNoKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFsbFNoaXBzU3Vuay5pbmNsdWRlcyhmYWxzZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhpXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMF07XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcbiAgICBsZXQgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGJvYXJkLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIGxldCBpbmRpdmlkdWFsU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4gICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChhKTsgLy8geFxuICAgICAgICBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoaSk7IC8vIHlcbiAgICAgICAgY29uc29sZS5sb2coXCJpblwiKTtcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFNxdWFyZSk7XG4gICAgICAgIGlmIChib2FyZFtpXVthXSAhPSBcIiBcIikge1xuICAgICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xhc3NUb0Nvb3JkcyA9IGZ1bmN0aW9uIChpbmRpdmlkdWFsU3F1YXJlKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBpbmRpdmlkdWFsU3F1YXJlLmNsYXNzTGlzdDtcbiAgICBsZXQgeCA9IGNsYXNzZXNbMV07XG4gICAgbGV0IHkgPSBcIm9vcHNcIjsgLy8gdG8gc3RvcCBlcnJvcnNcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPj0gMyAmJiBjbGFzc2VzWzJdICE9IFwic2hpcFwiKSB7XG4gICAgICB5ID0gY2xhc3Nlc1syXTtcbiAgICB9IGVsc2UgaWYgKGNsYXNzZXMubGVuZ3RoID09IDMgJiYgY2xhc3Nlc1syXSA9PSBcInNoaXBcIikge1xuICAgICAgeSA9IGNsYXNzZXNbMV07XG4gICAgfSBlbHNlIGlmIChjbGFzc2VzLmxlbmd0aCA9PSAyKSB7XG4gICAgICB5ID0gY2xhc3Nlc1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgaG9yaXpvbnRhbCxcbiAgICB2ZXJ0aWNhbCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIG1pc3NlZENvb3JkcyxcbiAgICBjdXJyZW50U2hpcHMsXG4gICAgYWxsU3VuayxcbiAgICBnZXRQb3RlbnRpYWxNb3ZlcyxcbiAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICBtYXRjaE1vdmUsXG4gICAgcmVtb3ZlQWxsSW5zdGFuY2VzLFxuICAgIGRyYXdCb2FyZCxcbiAgICBzZXRVcENsaWNrVG9IaXQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lQm9hcmQgfTtcblxuLy8gYm9hcmQuZm9yRWFjaCgoYm9hcmQpID0+IHtcbi8vICAgYm9hcmQuZm9yRWFjaCgoaW5uZXJTcXVhcmUpID0+IHtcbi8vICAgICBsZXQgaW5kaXZpZHVhbFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgaW5kaXZpZHVhbFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW5kaXZpZHVhbC1zcXVhcmVcIik7XG4vLyAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kaXZpZHVhbFNxdWFyZSk7XG4vLyAgICAgaWYgKGlubmVyU3F1YXJlWzBdICE9IFwiIFwiKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbi8vICAgICAgIGluZGl2aWR1YWxTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH0pO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbmFtZSA9IFwiXCI7XG4gIGxldCBsZWdhbE1vdmVzID0gW107XG4gIGxldCBwcmV2aW91c01vdmVzID0gW107XG4gIGxldCBhdmFpbGFibGVNb3ZlcyA9IFtdO1xuXG4gIGNvbnN0IGdldExlZ2FsTW92ZXMgPSBmdW5jdGlvbiAob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBsZWdhbE1vdmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHBvbmVudEdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSsrKSB7XG4gICAgICAgIGlmIChvcHBvbmVudEdhbWVib2FyZC5ib2FyZFtpXVthXSA9PSBcIiBcIikge1xuICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChbaSwgYV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrTWlzc2VkQ29vcmRzRm9yTWF0Y2ggPSBmdW5jdGlvbiAoXG4gICAgY29vcmRzLFxuICAgIG9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXlcbiAgKSB7XG4gICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgYXZhaWxhYmxlTW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gY29uc29sZS5sb2cob3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVswXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzFdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkc1swXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkc1sxXSA9PSBvcHBvbmVudEdhbWVib2FyZE1pc3NlZENvb3Jkc0FycmF5W2ldWzFdKTtcblxuICAgICAgaWYgKFxuICAgICAgICBjb29yZHNbMF0gPT0gb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVswXSAmJlxuICAgICAgICBjb29yZHNbMV0gPT0gb3Bwb25lbnRHYW1lYm9hcmRNaXNzZWRDb29yZHNBcnJheVtpXVsxXVxuICAgICAgKSB7XG4gICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF2YWlsYWJsZU1vdmVzLnB1c2goW2Nvb3Jkc1swXSwgY29vcmRzWzFdXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coYGF2YWlsYWJsZSA6ICR7YXZhaWxhYmxlTW92ZXN9YCk7XG5cbiAgICBpZiAobWF0Y2ggPT0gdHJ1ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJJVCBJUyBBIE1BVENIXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSVQgSVMgTk9UIEEgTUFUQ0hcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IGZ1bmN0aW9uIChvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGxldCByYW5kb21JbmRleCA9IGdldFJhbmRvbUludChvcHBvbmVudEdhbWVib2FyZC5wb3RlbnRpYWxNb3Zlcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgcmFuZG9tTW92ZSA9IG9wcG9uZW50R2FtZWJvYXJkLnBvdGVudGlhbE1vdmVzW3JhbmRvbUluZGV4XTtcbiAgICByZXR1cm4gcmFuZG9tTW92ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIGdldExlZ2FsTW92ZXMsXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIGNoZWNrTWlzc2VkQ29vcmRzRm9yTWF0Y2gsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuLy8gY29uc3QgZ2IxID0gR2FtZUJvYXJkKCk7XG4vLyBjb25zdCBnYjIgPSBHYW1lQm9hcmQoKTtcblxuLy8gLy8gY29uc3QgZ2FtZSA9IEdhbWUoKTtcbi8vIC8vIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuLy8gLy8gY29uc3Qgc2hpcCA9IFNoaXAoKTtcbi8vIC8vIHNoaXAuY29vcmRzLnB1c2goWzAsIDFdKTtcbi8vIC8vIGdiLmdldFBvdGVudGlhbE1vdmVzKCk7XG4vLyAvLyBsZXQgbW92ZXMgPSBnYi5wb3RlbnRpYWxNb3Zlcztcbi8vIC8vIGNvbnNvbGUubG9nKGdiLnBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4vLyAvLyBnYi5yZWNlaXZlQXR0YWNrKHNoaXAsIFswLCAzXSk7XG4vLyAvLyBjb25zb2xlLmxvZyhnYi5wb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuLy8gZ2IxLmRyYXdCb2FyZCgpO1xuLy8gZ2IyLmRyYXdCb2FyZCgpO1xuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc2V0VXBHYW1lKCk7XG5nYW1lLnAxR2FtZWJvYXJkLmRyYXdCb2FyZCgpO1xuZ2FtZS5wMkdhbWVib2FyZC5kcmF3Qm9hcmQoKTtcbmdhbWUucDFHYW1lYm9hcmQuc2V0VXBDbGlja1RvSGl0KCk7XG5nYW1lLnAxR2FtZWJvYXJkLnNldFVwQ2xpY2tUb0hpdCgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXJPbmUgPSBcIlwiO1xuICBsZXQgcGxheWVyVHdvID0gXCJcIjtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gIGxldCBwMUdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICBsZXQgcDJHYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICBjb25zdCBzd2FwUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09IHBsYXllck9uZSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllck9uZSA9IFBsYXllcigpO1xuICAgIC8vIHAxR2FtZWJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgY29uc3QgcDFzaGlwMiA9IFNoaXAoMik7XG4gICAgcDFzaGlwMi5jb29yZHMucHVzaChbMCwgMF0pO1xuICAgIHAxc2hpcDIuY29vcmRzLnB1c2goWzAsIDFdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFswXVswXSA9IHAxc2hpcDI7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMF1bMV0gPSBwMXNoaXAyO1xuICAgIGNvbnN0IHAxc2hpcDNhID0gU2hpcCgzKTtcbiAgICBwMXNoaXAzYS5jb29yZHMucHVzaChbMSwgMF0pO1xuICAgIHAxc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAxXSk7XG4gICAgcDFzaGlwM2EuY29vcmRzLnB1c2goWzEsIDJdKTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsxXVswXSA9IHAxc2hpcDI7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMV1bMV0gPSBwMXNoaXAyO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDFzaGlwMjtcbiAgICBjb25zdCBwMXNoaXAzYiA9IFNoaXAoMyk7XG4gICAgcDFzaGlwM2IuY29vcmRzLnB1c2goWzIsIDBdKTtcbiAgICBwMXNoaXAzYi5jb29yZHMucHVzaChbMiwgMV0pO1xuICAgIHAxc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAyXSk7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbMl1bMF0gPSBwMXNoaXAzYjtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFsyXVsxXSA9IHAxc2hpcDNiO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzJdWzJdID0gcDFzaGlwM2I7XG4gICAgY29uc3QgcDFzaGlwNCA9IFNoaXAoNCk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgMF0pO1xuICAgIHAxc2hpcDQuY29vcmRzLnB1c2goWzMsIDFdKTtcbiAgICBwMXNoaXA0LmNvb3Jkcy5wdXNoKFszLCAyXSk7XG4gICAgcDFzaGlwNC5jb29yZHMucHVzaChbMywgM10pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzBdID0gcDFzaGlwNDtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFszXVsxXSA9IHAxc2hpcDQ7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbM11bMl0gPSBwMXNoaXA0O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzNdWzNdID0gcDFzaGlwNDtcbiAgICBjb25zdCBwMXNoaXA1ID0gU2hpcCg1KTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAwXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgMV0pO1xuICAgIHAxc2hpcDUuY29vcmRzLnB1c2goWzQsIDJdKTtcbiAgICBwMXNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAzXSk7XG4gICAgcDFzaGlwNS5jb29yZHMucHVzaChbNCwgNF0pO1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzBdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVsxXSA9IHAxc2hpcDU7XG4gICAgcDFHYW1lYm9hcmQuYm9hcmRbNF1bMl0gPSBwMXNoaXA1O1xuICAgIHAxR2FtZWJvYXJkLmJvYXJkWzRdWzNdID0gcDFzaGlwNTtcbiAgICBwMUdhbWVib2FyZC5ib2FyZFs0XVs0XSA9IHAxc2hpcDU7XG5cbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIoKTtcbiAgICAvLyBwMkdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IHAyc2hpcDIgPSBTaGlwKDIpO1xuICAgIHAyc2hpcDIuY29vcmRzLnB1c2goWzAsIDBdKTtcbiAgICBwMnNoaXAyLmNvb3Jkcy5wdXNoKFswLCAxXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMF1bMF0gPSBwMnNoaXAyO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzBdWzFdID0gcDJzaGlwMjtcbiAgICBjb25zdCBwMnNoaXAzYSA9IFNoaXAoMyk7XG4gICAgcDJzaGlwM2EuY29vcmRzLnB1c2goWzEsIDBdKTtcbiAgICBwMnNoaXAzYS5jb29yZHMucHVzaChbMSwgMV0pO1xuICAgIHAyc2hpcDNhLmNvb3Jkcy5wdXNoKFsxLCAyXSk7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMV1bMF0gPSBwMnNoaXAzYTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsxXVsxXSA9IHAyc2hpcDNhO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzFdWzJdID0gcDJzaGlwM2E7XG4gICAgY29uc3QgcDJzaGlwM2IgPSBTaGlwKDMpO1xuICAgIHAyc2hpcDNiLmNvb3Jkcy5wdXNoKFsyLCAwXSk7XG4gICAgcDJzaGlwM2IuY29vcmRzLnB1c2goWzIsIDFdKTtcbiAgICBwMnNoaXAzYi5jb29yZHMucHVzaChbMiwgMl0pO1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzJdWzBdID0gcDJzaGlwM2I7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbMl1bMV0gPSBwMnNoaXAzYjtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFsyXVsyXSA9IHAyc2hpcDNiO1xuICAgIGNvbnN0IHAyc2hpcDQgPSBTaGlwKDQpO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDBdKTtcbiAgICBwMnNoaXA0LmNvb3Jkcy5wdXNoKFszLCAxXSk7XG4gICAgcDJzaGlwNC5jb29yZHMucHVzaChbMywgMl0pO1xuICAgIHAyc2hpcDQuY29vcmRzLnB1c2goWzMsIDNdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVswXSA9IHAyc2hpcDQ7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbM11bMV0gPSBwMnNoaXA0O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzNdWzJdID0gcDJzaGlwNDtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFszXVszXSA9IHAyc2hpcDQ7XG4gICAgY29uc3QgcDJzaGlwNSA9IFNoaXAoNSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgMF0pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDFdKTtcbiAgICBwMnNoaXA1LmNvb3Jkcy5wdXNoKFs0LCAyXSk7XG4gICAgcDJzaGlwNS5jb29yZHMucHVzaChbNCwgM10pO1xuICAgIHAyc2hpcDUuY29vcmRzLnB1c2goWzQsIDRdKTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVswXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bMV0gPSBwMnNoaXA1O1xuICAgIHAyR2FtZWJvYXJkLmJvYXJkWzRdWzJdID0gcDJzaGlwNTtcbiAgICBwMkdhbWVib2FyZC5ib2FyZFs0XVszXSA9IHAyc2hpcDU7XG4gICAgcDJHYW1lYm9hcmQuYm9hcmRbNF1bNF0gPSBwMnNoaXA1O1xuICB9O1xuXG4gIHJldHVybiB7IHN3YXBQbGF5ZXIsIHNldFVwR2FtZSwgcDFHYW1lYm9hcmQsIHAyR2FtZWJvYXJkIH07XG59O1xuXG5leHBvcnQgeyBHYW1lIH07XG4iXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsInN1bmsiLCJzaGlwTGVuZ3RoIiwibnVtYmVyT2ZIaXRzIiwiaXNTdW5rIiwiaGl0IiwidGhpcyIsImNvb3JkcyIsIkdhbWVCb2FyZCIsImN1cnJlbnRTaGlwcyIsIm1pc3NlZENvb3JkcyIsInBvdGVudGlhbE1vdmVzIiwiYm9hcmQiLCJtYXRjaE1vdmUiLCJhcnJheVRvRmluZE1hdGNoIiwibWF0Y2giLCJmb3JFYWNoIiwibW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGxJbnN0YW5jZXMiLCJhcnIiLCJpdGVtIiwiaSIsInNwbGljZSIsInJlY2VpdmVBdHRhY2siLCJzaGlwIiwicHVzaCIsInN3YXBwZWRDb29yZHMiLCJjbGFzc1RvQ29vcmRzIiwiaW5kaXZpZHVhbFNxdWFyZSIsImNsYXNzZXMiLCJjbGFzc0xpc3QiLCJ4IiwieSIsImhvcml6b250YWwiLCJzdGFydFJvd0Nvb3JkcyIsInN0YXJ0Q29sdW1uQ29vcmRzIiwiY3VycmVudENvb3JkIiwidmVydGljYWwiLCJhbGxTdW5rIiwiYWxsU2hpcHNTdW5rIiwiaW5jbHVkZXMiLCJnZXRQb3RlbnRpYWxNb3ZlcyIsImEiLCJkcmF3Qm9hcmQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJib2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldFVwQ2xpY2tUb0hpdCIsInNxdWFyZXMiLCJhZGRFdmVudExpc3RlbmVyIiwidGVtcCIsInRlbXBzaGlwIiwiUGxheWVyIiwibGVnYWxNb3ZlcyIsImF2YWlsYWJsZU1vdmVzIiwicmFuZG9tQXR0YWNrIiwib3Bwb25lbnRHYW1lYm9hcmQiLCJyYW5kb21JbmRleCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5hbWUiLCJnZXRMZWdhbE1vdmVzIiwiY2hlY2tNaXNzZWRDb29yZHNGb3JNYXRjaCIsIm9wcG9uZW50R2FtZWJvYXJkTWlzc2VkQ29vcmRzQXJyYXkiLCJnYW1lIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiY3VycmVudFBsYXllciIsInAxR2FtZWJvYXJkIiwicDJHYW1lYm9hcmQiLCJzd2FwUGxheWVyIiwic2V0VXBHYW1lIiwicDFzaGlwMiIsInAxc2hpcDNhIiwicDFzaGlwM2IiLCJwMXNoaXA0IiwicDFzaGlwNSIsInAyc2hpcDIiLCJwMnNoaXAzYSIsInAyc2hpcDNiIiwicDJzaGlwNCIsInAyc2hpcDUiLCJHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==