(()=>{"use strict";const o=function(){let o=[];const t=[];return{board:[[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],[[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]]],horizontal:function(o,t,n){for(let e=0;e<o.shipLength;e++){let r=[t,e+n];o.coords.push(r)}},vertical:function(o,t,n){for(let e=0;e<o.shipLength;e++){let r=[e+t,n];o.coords.push(r)}},receiveAttack:function(o,n){!function(o,t){let n=!1;for(let e=0;e<o.length;e++)o[e].includes(t[0])&&o[e].includes(t[1])&&(n=!0);return n}(o.coords,n)?t.push(n):o.hit()},missedCoords:t,currentShips:o,allSunk:function(){let t=[];return o.forEach((o=>{0==o.sunk?t.push(!1):t.push(!0)})),!t.includes(!1)}}}(),t=function(){let o=[];function t(o){return Math.floor(Math.random()*o)}const n=function(o){let n=t(10),e=t(10);for(console.log(o.missedCoords);" "!=o.board[n][e]&&o.missedCoords.includes(0==[n,e]);)n=t(9),e=t(9);let r=[n,e];return console.log(r),r};return{name:"",randomAttack:n,getLegalMoves:function(t){o=[];for(let n=0;n<t.board.length;n++)for(let e=0;e<10;e++)" "==t.board[n][e]&&o.push([n,e])},randomAttack:n}}();o.missedCoords.push([0,1]),t.randomAttack(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRUEsTUNFTUEsRURGWSxXQUNoQixJQUNJQyxFQUFlLEdBRW5CLE1BQU1DLEVBQWUsR0FnRnJCLE1BQU8sQ0FDTEMsTUEvRVUsQ0FDVixDQUFDLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsTUFDakUsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLE1BQ2pFLENBQUMsQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxNQUNqRSxDQUFDLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsTUFDakUsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLE1BQ2pFLENBQUMsQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxNQUNqRSxDQUFDLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsTUFDakUsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLE1BQ2pFLENBQUMsQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxNQUNqRSxDQUFDLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLEtBQU0sQ0FBQyxLQUFNLENBQUMsT0FzRWpFQyxXQW5FaUIsU0FBVUMsRUFBTUMsRUFBZ0JDLEdBQ2pELElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJSCxFQUFLSSxXQUFZRCxJQUFLLENBQ3hDLElBQUlFLEVBQWUsQ0FBQ0osRUFBZ0JFLEVBQUlELEdBQ3hDRixFQUFLTSxPQUFPQyxLQUFLRixFQUNuQixDQUNGLEVBK0RFRyxTQTdEZSxTQUFVUixFQUFNQyxFQUFnQkMsR0FDL0MsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlILEVBQUtJLFdBQVlELElBQUssQ0FDeEMsSUFBSUUsRUFBZSxDQUFDRixFQUFJRixFQUFnQkMsR0FDeENGLEVBQUtNLE9BQU9DLEtBQUtGLEVBQ25CLENBQ0YsRUF5REVJLGNBN0JvQixTQUFVVCxFQUFNTSxJQVZiLFNBQVVJLEVBQU9KLEdBQ3hDLElBQUlLLEdBQVEsRUFDWixJQUFLLElBQUlSLEVBQUksRUFBR0EsRUFBSU8sRUFBTUUsT0FBUVQsSUFDNUJPLEVBQU1QLEdBQUdVLFNBQVNQLEVBQU8sS0FBT0ksRUFBTVAsR0FBR1UsU0FBU1AsRUFBTyxNQUMzREssR0FBUSxHQUdaLE9BQU9BLENBQ1QsQ0FHTUcsQ0FBaUJkLEVBQUtNLE9BQVFBLEdBR2hDVCxFQUFhVSxLQUFLRCxHQUZsQk4sRUFBS2UsS0FJVCxFQXdCRWxCLGVBQ0FELGVBQ0FvQixRQXhCYyxXQUNkLElBQUlDLEVBQWUsR0FTbkIsT0FSQXJCLEVBQWFzQixTQUFTbEIsSUFDSCxHQUFiQSxFQUFLbUIsS0FDUEYsRUFBYVYsTUFBSyxHQUVsQlUsRUFBYVYsTUFBSyxFQUNwQixLQUdFVSxFQUFhSixVQUFTLEVBSzVCLEVBV0YsQ0MzRldPLEdBQ0xDLEVDTFMsV0FFYixJQUFJQyxFQUFhLEdBY2pCLFNBQVNDLEVBQWFDLEdBQ3BCLE9BQU9DLEtBQUtDLE1BQU1ELEtBQUtFLFNBQVdILEVBQ3BDLENBRUEsTUFBTUksRUFBZSxTQUFVQyxHQUM3QixJQUFJQyxFQUFJUCxFQUFhLElBQ2pCUSxFQUFJUixFQUFhLElBRXJCLElBREFTLFFBQVFDLElBQUlKLEVBQWtCaEMsY0FFSyxLQUFqQ2dDLEVBQWtCL0IsTUFBTWdDLEdBQUdDLElBQzNCRixFQUFrQmhDLGFBQWFnQixTQUFtQixHQUFWLENBQUNpQixFQUFHQyxLQUU1Q0QsRUFBSVAsRUFBYSxHQUNqQlEsRUFBSVIsRUFBYSxHQUVuQixJQUFJVyxFQUFhLENBQUNKLEVBQUdDLEdBR3JCLE9BRkFDLFFBQVFDLElBQUlDLEdBRUxBLENBQ1QsRUFDQSxNQUFPLENBQUVDLEtBbkNJLEdBbUNFUCxlQUFjUSxjQS9CUCxTQUFVUCxHQUM5QlAsRUFBYSxHQUNiLElBQUssSUFBSW5CLEVBQUksRUFBR0EsRUFBSTBCLEVBQWtCL0IsTUFBTWMsT0FBUVQsSUFDbEQsSUFBSyxJQUFJa0MsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBQ2UsS0FBakNSLEVBQWtCL0IsTUFBTUssR0FBR2tDLElBQzdCZixFQUFXZixLQUFLLENBQUNKLEVBQUdrQyxHQUk1QixFQXNCNENULGVBQzlDLENEaENlVSxHQUNmM0MsRUFBR0UsYUFBYVUsS0FBSyxDQUFDLEVBQUcsSUFDekJjLEVBQU9PLGFBQWFqQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NoZWNrIGZvciBsZWdhbCBtb3Zlc1xuXG5jb25zdCBHYW1lQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBzaGlwUGxhY2VtZW50TW9kZSA9IFwiaG9yaXpvbnRhbFwiO1xuICBsZXQgY3VycmVudFNoaXBzID0gW107XG4gIGxldCBzdW5rU2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkQ29vcmRzID0gW107XG5cbiAgbGV0IGJvYXJkID0gW1xuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgICBbW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXSwgW1wiIFwiXV0sXG4gICAgW1tcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl0sIFtcIiBcIl1dLFxuICAgIFtbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdLCBbXCIgXCJdXSxcbiAgXTtcblxuICBjb25zdCBob3Jpem9udGFsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbc3RhcnRSb3dDb29yZHMsIGkgKyBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsID0gZnVuY3Rpb24gKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbaSArIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkc107XG4gICAgICBzaGlwLmNvb3Jkcy5wdXNoKGN1cnJlbnRDb29yZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwKSB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGxldCBvdXRlciA9IGNvb3JkWzBdO1xuICAgICAgbGV0IGlubmVyID0gY29vcmRbMV07XG4gICAgICBib2FyZFtvdXRlcl1baW5uZXJdID0gc2hpcDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRTaGlwUG9zaXRpb24gPSBmdW5jdGlvbiAoc2hpcCwgc3RhcnRSb3dDb29yZHMsIHN0YXJ0Q29sdW1uQ29vcmRzKSB7XG4gICAgaWYgKHNoaXBQbGFjZW1lbnRNb2RlID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBob3Jpem9udGFsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfSBlbHNlIGlmIChzaGlwUGxhY2VtZW50TW9kZSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHZlcnRpY2FsKHNoaXAsIHN0YXJ0Um93Q29vcmRzLCBzdGFydENvbHVtbkNvb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrTmVzdGVkQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIGNvb3Jkcykge1xuICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXS5pbmNsdWRlcyhjb29yZHNbMF0pICYmIGFycmF5W2ldLmluY2x1ZGVzKGNvb3Jkc1sxXSkpIHtcbiAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIChzaGlwLCBjb29yZHMpIHtcbiAgICBpZiAoY2hlY2tOZXN0ZWRBcnJheShzaGlwLmNvb3JkcywgY29vcmRzKSkge1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkQ29vcmRzLnB1c2goY29vcmRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gW107XG4gICAgY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnN1bmsgPT0gZmFsc2UpIHtcbiAgICAgICAgYWxsU2hpcHNTdW5rLnB1c2goZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsU2hpcHNTdW5rLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsU2hpcHNTdW5rLmluY2x1ZGVzKGZhbHNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBob3Jpem9udGFsLFxuICAgIHZlcnRpY2FsLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgbWlzc2VkQ29vcmRzLFxuICAgIGN1cnJlbnRTaGlwcyxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2IgPSBHYW1lQm9hcmQoKTtcbmNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuZ2IubWlzc2VkQ29vcmRzLnB1c2goWzAsIDFdKTtcbnBsYXllci5yYW5kb21BdHRhY2soZ2IpO1xuIiwiY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYW1lID0gXCJcIjtcbiAgbGV0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgbGV0IHByZXZpb3VzTW92ZXMgPSBbXTtcblxuICBjb25zdCBnZXRMZWdhbE1vdmVzID0gZnVuY3Rpb24gKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgbGVnYWxNb3ZlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3Bwb25lbnRHYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGErKykge1xuICAgICAgICBpZiAob3Bwb25lbnRHYW1lYm9hcmQuYm9hcmRbaV1bYV0gPT0gXCIgXCIpIHtcbiAgICAgICAgICBsZWdhbE1vdmVzLnB1c2goW2ksIGFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBjb25zdCByYW5kb21BdHRhY2sgPSBmdW5jdGlvbiAob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnNvbGUubG9nKG9wcG9uZW50R2FtZWJvYXJkLm1pc3NlZENvb3Jkcyk7XG4gICAgd2hpbGUgKFxuICAgICAgb3Bwb25lbnRHYW1lYm9hcmQuYm9hcmRbeF1beV0gIT0gXCIgXCIgJiZcbiAgICAgIG9wcG9uZW50R2FtZWJvYXJkLm1pc3NlZENvb3Jkcy5pbmNsdWRlcyhbeCwgeV0gPT0gZmFsc2UpXG4gICAgKSB7XG4gICAgICB4ID0gZ2V0UmFuZG9tSW50KDkpO1xuICAgICAgeSA9IGdldFJhbmRvbUludCg5KTtcbiAgICB9XG4gICAgbGV0IHJhbmRvbU1vdmUgPSBbeCwgeV07XG4gICAgY29uc29sZS5sb2cocmFuZG9tTW92ZSk7XG5cbiAgICByZXR1cm4gcmFuZG9tTW92ZTtcbiAgfTtcbiAgcmV0dXJuIHsgbmFtZSwgcmFuZG9tQXR0YWNrLCBnZXRMZWdhbE1vdmVzLCByYW5kb21BdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIl0sIm5hbWVzIjpbImdiIiwiY3VycmVudFNoaXBzIiwibWlzc2VkQ29vcmRzIiwiYm9hcmQiLCJob3Jpem9udGFsIiwic2hpcCIsInN0YXJ0Um93Q29vcmRzIiwic3RhcnRDb2x1bW5Db29yZHMiLCJpIiwic2hpcExlbmd0aCIsImN1cnJlbnRDb29yZCIsImNvb3JkcyIsInB1c2giLCJ2ZXJ0aWNhbCIsInJlY2VpdmVBdHRhY2siLCJhcnJheSIsIm1hdGNoIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJjaGVja05lc3RlZEFycmF5IiwiaGl0IiwiYWxsU3VuayIsImFsbFNoaXBzU3VuayIsImZvckVhY2giLCJzdW5rIiwiR2FtZUJvYXJkIiwicGxheWVyIiwibGVnYWxNb3ZlcyIsImdldFJhbmRvbUludCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50R2FtZWJvYXJkIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tTW92ZSIsIm5hbWUiLCJnZXRMZWdhbE1vdmVzIiwiYSIsIlBsYXllciJdLCJzb3VyY2VSb290IjoiIn0=